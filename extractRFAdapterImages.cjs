/**
 * extractRFAdapterImages.js
 *
 * Extracts images from section "1.2 RF Adapters" of products.docx
 * and saves them to:
 *   public/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/
 *
 * Each image is named after its "Connector Type" value (or product heading as fallback).
 *
 * Usage:
 *   node extractRFAdapterImages.js [path/to/products.docx]
 *
 * Default docx path: ./products.docx
 *
 * Dependencies (install once):
 *   npm install adm-zip @xmldom/xmldom
 */

const AdmZip          = require("adm-zip");
const fs              = require("fs");
const path            = require("path");
const { DOMParser }   = require("@xmldom/xmldom");

// ─── Config ──────────────────────────────────────────────────────────────────

const DOCX_PATH = process.argv[2] || path.join(__dirname, "products.docx");

const OUTPUT_DIR = path.join(
  __dirname,
  "public",
  "images",
  "product",
  "RF & Microwave Components and Solutions",
  "RF Connectors & Adapters"
);

// ─── XML Namespaces ───────────────────────────────────────────────────────────

const NS_W = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";
const NS_A = "http://schemas.openxmlformats.org/drawingml/2006/main";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Collect all text from <w:t> descendants of a node */
function getText(node) {
  return Array.from(node.getElementsByTagNameNS(NS_W, "t"))
    .map((t) => t.textContent || "")
    .join("")
    .trim();
}

/** Return all r:embed values from <a:blip> elements inside node */
function getBlipIds(node) {
  return Array.from(node.getElementsByTagNameNS(NS_A, "blip"))
    .map((b) => b.getAttribute("r:embed"))
    .filter(Boolean);
}

/** Make a string safe to use as a filename */
function sanitise(name) {
  return name
    .replace(/\uf0b7/g, "")         // remove Word bullet char
    .replace(/[–—]/g, "-")          // em/en dash → hyphen
    .replace(/[\\/:*?"<>|]/g, "-")  // other illegal chars → dash
    .replace(/\s+/g, " ")           // collapse whitespace
    .trim()
    .replace(/^-+|-+$/g, "");       // trim edge dashes
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(DOCX_PATH)) {
    console.error("❌  File not found: " + DOCX_PATH);
    process.exit(1);
  }

  // 1. Open the docx (it is a ZIP archive)
  const zip = new AdmZip(DOCX_PATH);

  // 2. Parse relationships: rId → media path (e.g. "media/image1.jpeg")
  const relsXml = zip.readAsText("word/_rels/document.xml.rels");
  const relsDoc = new DOMParser().parseFromString(relsXml, "text/xml");
  const relMap  = {};
  Array.from(relsDoc.getElementsByTagName("Relationship")).forEach((rel) => {
    relMap[rel.getAttribute("Id")] = rel.getAttribute("Target");
  });

  // 3. Parse document.xml and get all direct children of <w:body>
  const docXml   = zip.readAsText("word/document.xml");
  const docDom   = new DOMParser().parseFromString(docXml, "text/xml");
  const body     = docDom.getElementsByTagNameNS(NS_W, "body")[0];
  const children = Array.from(body.childNodes).filter((n) => n.nodeType === 1);

  // 4. Build a flat list of { idx, text, images:[mediaPath] }
  const flat = children.map((child, idx) => {
    const text   = getText(child);
    const images = getBlipIds(child)
      .map((rId) => relMap[rId])
      .filter(Boolean);
    return { idx, text, images };
  });

  // 5. Find the RF Adapters section boundaries
  let sectionStart = flat.findIndex((e) => e.text.includes("RF Adapters Products:"));
  if (sectionStart === -1) {
    console.error('❌  Could not find "RF Adapters Products:" heading in document.');
    process.exit(1);
  }

  // The next section starts with "Bare Die Microwave Circuits" (first chip product)
  let sectionEnd = flat.length;
  for (let i = sectionStart + 1; i < flat.length; i++) {
    if (
      flat[i].text.includes("Bare Die Microwave Circuits") ||
      flat[i].text.includes("Microwave Passive Components") ||
      flat[i].text.includes("1.3 ")
    ) {
      sectionEnd = i;
      break;
    }
  }

  const section = flat.slice(sectionStart, sectionEnd);
  console.log(
    "\n📄  RF Adapters section: paragraphs " +
    sectionStart + "–" + (sectionEnd - 1) +
    " (" + section.length + " total)\n"
  );

  // 6. For each image paragraph, resolve product name + connector type
  const products = [];

  for (let si = 0; si < section.length; si++) {
    const entry = section[si];
    if (!entry.images.length) continue;

    // Product name: nearest preceding line that contains "ITEM |"
    let productName = "Unknown";
    for (let j = si - 1; j >= 0; j--) {
      if (section[j].text.includes("ITEM |")) {
        productName = section[j].text.split("ITEM")[0].trim();
        break;
      }
    }

    // Connector type: first "Connector Type:" line within the next 25 paragraphs
    let connectorType = null;
    for (let j = si + 1; j < Math.min(section.length, si + 25); j++) {
      if (section[j].text.includes("Connector Type:")) {
        connectorType = section[j].text
          .replace("Connector Type:", "")
          .replace(/\uf0b7/g, "")
          .replace(/[–—]/g, "-")
          .trim();
        break;
      }
    }

    // Use connector type as filename if available; otherwise fall back to product name
    const baseName = sanitise(connectorType || productName);

    products.push({ productName, connectorType, baseName, mediaFiles: entry.images });
  }

  if (!products.length) {
    console.error("❌  No images found in the RF Adapters section.");
    process.exit(1);
  }

  // 7. Create output directory (recursive)
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log("📂  Saving to: " + OUTPUT_DIR + "\n");

  // 8. Handle duplicate base names by appending a counter
  const nameCount = {};
  products.forEach((p) => { nameCount[p.baseName] = (nameCount[p.baseName] || 0) + 1; });
  const nameUsed = {};

  // 9. Extract and write each image file
  let savedCount = 0;

  for (const p of products) {
    for (const mediaPath of p.mediaFiles) {
      // mediaPath is like "media/image1.jpeg" → zip entry is "word/media/image1.jpeg"
      const ext      = path.extname(mediaPath);
      const zipEntry = "word/" + mediaPath;

      let filename;
      if (nameCount[p.baseName] > 1) {
        nameUsed[p.baseName] = (nameUsed[p.baseName] || 0) + 1;
        filename = p.baseName + " (" + nameUsed[p.baseName] + ")" + ext;
      } else {
        filename = p.baseName + ext;
      }

      const destPath = path.join(OUTPUT_DIR, filename);

      try {
        const buffer = zip.readFile(zipEntry);
        if (!buffer) throw new Error("readFile returned null — entry may not exist");
        fs.writeFileSync(destPath, buffer);
        console.log("  ✅  " + filename);
        if (p.connectorType) console.log("       Connector Type : " + p.connectorType);
        console.log("       Source         : " + mediaPath + "\n");
        savedCount++;
      } catch (err) {
        console.error("  ❌  " + filename + ": " + err.message);
      }
    }
  }

  console.log("\n🎉  Done — " + savedCount + " image(s) saved to:\n    " + OUTPUT_DIR + "\n");
}

main();