/**
 * updateRFAdapterImages.cjs
 *
 * For every product with subcategoryId: "RF Adapters" in products2.js,
 * replaces its image path with the correct extracted image based on the
 * product's `name` field.
 *
 * Usage:
 *   node updateRFAdapterImages.cjs
 *
 * Reads  : src/data/products2.js
 * Writes : src/data/products2.js  (overwrites in place)
 */

const fs   = require("fs");
const path = require("path");

// ─── Path to your products file ───────────────────────────────────────────────
const FILE = path.join(__dirname, "src", "data", "products2.js");

// ─── Base image directory ─────────────────────────────────────────────────────
const BASE = "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters";

// ─── Name → image filename map ────────────────────────────────────────────────
// Keys must exactly match the `name` field in products2.js
const NAME_TO_IMAGE = {
  // ── Same-series / In-series ──────────────────────────────────────────────
  "SMA Female to SMA Female Adapter":
    "SMA Female to SMA Female (F-F).jpeg",
  "SMA Male to SMA Male Adapter":
    "SMA Female to SMA Female (F-F).jpeg",           // closest match — update if you have a separate file
  "N Male to N Male Adapter":
    "N Male to N Male (M-M).png",
  "N Female to N Female Adapter":
    "N Female to N Female (F-F) adaptor.jpeg",
  "BNC Male to BNC Male Adapter":
    "BNC Male to BNC Male (M-M) adaptor.png",
  "BNC Female to BNC Female Adapter":
    "BNC Female to BNC Female (F-F) adaptor.jpeg",
  "SMA In-Series Adapter":
    "SMA to SMA (In-Series)(Male-Male, Female-Female, Male-Female options available).jpeg",
  "N-Type In-Series Adapter":
    "N-Type to N-Type (In-Series)(Male-Male, Female-Female, Male-Female options available).jpeg",
  "BNC In-Series Adapter":
    "BNC to BNC (In-Series)(Male-Male, Female-Female, Male-Female options available).jpeg",
  "TNC / SMB / SMC / MCX / MMCX Adapter":
    "TNC - SMB - SMC - MCX - MMCX.jpeg",

  // ── Between-series ───────────────────────────────────────────────────────
  "RF Adapter (Between-Series / Same-Series)":
    "SMA Female to SMA Female (F-F).jpeg",           // generic fallback
  "SMA to N-Type Adapter":
    "SMA to N-Type.png",
  "SMA to TNC Adapter":
    "SMA to TNC.jpeg",
  "SMA to SMB / SMC Adapter":
    "SMA to SMB - SMC.jpeg",
  "SMA to MCX / MMCX Adapter":
    "SMA to MCX - MMCX.jpeg",
  "N-Type to BNC Adapter":
    "N-Type to BNC.jpeg",
  "N-Type to TNC Adapter":
    "N-Type to TNC.jpeg",
  "BNC to TNC Adapter":
    "BNC to TNC.jpeg",
  "BNC to SMB / MCX Adapter":
    "BNC to SMB - MCX.png",
  "TNC to SMB / SMC Adapter":
    "TNC to SMB - SMC.jpeg",

  // ── Precision ────────────────────────────────────────────────────────────
  "Precision SMA to SMA Adapter":
    "Precision SMA to SMA.jpeg",
  "3.5 mm to SMA Adapter":
    "3.5 mm to SMA.png",
  "2.92 mm to SMA Adapter":
    "2.92 mm to SMA.jpeg",
  "2.4 mm to 2.92 mm Adapter":
    "2.4 mm to 2.92 mm.jpeg",

  // ── Right-angle ──────────────────────────────────────────────────────────
  "Right-Angle RF Adapter":
    "SMA Right Angle Male to Female.jpeg",           // generic right-angle
  "SMA Right Angle Male to Female Adapter":
    "SMA Right Angle Male to Female.jpeg",
  "N-Type Right Angle Male to Female Adapter":
    "N-Type Right Angle Male to Female.jpeg",
  "BNC Right Angle Male to Female Adapter":
    "BNC Right Angle Male to Female.jpeg",
  "TNC Right Angle Male to Female Adapter":
    "TNC Right Angle Male to Female.png",

  // ── Tee adapters ─────────────────────────────────────────────────────────
  "SMA Tee Adapter":
    "SMA Tee.png",
  "BNC Tee Adapter":
    "BNC Tee.png",
  "N-Type Tee Adapter":
    "N-Type Tee.jpeg",

  // ── Bulkhead adapters ────────────────────────────────────────────────────
  "Bulkhead Mount Adapter":
    "SMA Bulkhead.png",                              // generic bulkhead
  "SMA Bulkhead Adapter":
    "SMA Bulkhead.png",
  "N-Type Bulkhead Adapter":
    "N-Type Bulkhead.jpeg",
  "BNC Bulkhead Adapter":
    "BNC Bulkhead.jpeg",
};

// ─── Main ─────────────────────────────────────────────────────────────────────
if (!fs.existsSync(FILE)) {
  console.error("❌  File not found: " + FILE);
  process.exit(1);
}

let src = fs.readFileSync(FILE, "utf8");
let updated = 0;
let skipped = 0;

// Split into individual product blocks so we can operate block by block.
// We process each product object that contains subcategoryId: "RF Adapters".
//
// Strategy: use a regex to find each object block that has subcategoryId: "RF Adapters",
// then within that block replace the image field.

src = src.replace(
  /(\{[^{}]*?subcategoryId:\s*"RF Adapters"[^{}]*?\})/gs,
  (block) => {
    // Extract the name field from this block
    const nameMatch = block.match(/name:\s*"([^"]+)"/);
    if (!nameMatch) {
      skipped++;
      return block;
    }
    const name = nameMatch[1];
    const imageFile = NAME_TO_IMAGE[name];

    if (!imageFile) {
      console.warn("  ⚠️  No image mapping for: " + JSON.stringify(name));
      skipped++;
      return block;
    }

    const newImagePath = BASE + "/" + imageFile;
    const newBlock = block.replace(
      /image:\s*"[^"]*"/,
      'image: "' + newImagePath + '"'
    );

    if (newBlock !== block) {
      console.log("  ✅  " + name);
      console.log("       → " + newImagePath);
      updated++;
    }

    return newBlock;
  }
);

fs.writeFileSync(FILE, src, "utf8");

console.log("\n─────────────────────────────────────────");
console.log("✅  Updated : " + updated + " product(s)");
if (skipped > 0) {
  console.log("⚠️   Skipped : " + skipped + " (no mapping found — check name spelling)");
}
console.log("📄  Saved   : " + FILE);
console.log("─────────────────────────────────────────\n");
