/**
 * Product Data Schema & Store
 *
 * HIERARCHY OVERVIEW
 * ─────────────────────────────────────────────────────────────────
 * Most categories follow a 2-level structure:
 *   category  →  subcategory  →  products
 *
 * Two categories use a 3-level structure:
 *   category  →  subcategory  →  subSubcategory  →  products
 *
 *   • "RF & Microwave Components and Solutions"
 *       └─ "RF, Microwave & Electronic Components (Thin Film)"
 *       └─ "Antenna Solutions"
 *
 * The `subSubcategories` array carries the extra level.
 * A subcategory with children in `subSubcategories` should NOT
 * have products assigned directly – products live one level deeper.
 *
 * Key fields
 * ─────────────────────────────────────────────────────────────────
 * categories        categoryId, value
 * subcategories     subcategoryId, value, categoryId, image
 * subSubcategories  subSubcategoryId, value, subcategoryId, categoryId, image
 * products          id, productId, name, description, image,
 *                   categoryId, subcategoryId, subSubcategoryId (optional)
 */

// ─────────────────────────────────────────────────────────────────
// 1. TOP-LEVEL CATEGORIES
// ─────────────────────────────────────────────────────────────────
export const categories = [
  { categoryId: "RF & Microwave Components and Solutions", value: "RF & Microwave Components and Solutions" },
  { categoryId: "Test & Measurement",                      value: "Test & Measurement" },
  { categoryId: "Electronics Sensors",                     value: "Electronics Sensors" },
  { categoryId: "Special Materials",                       value: "Special Materials" },
  { categoryId: "RCP & HIL",                               value: "RCP & HIL" },
];

// ─────────────────────────────────────────────────────────────────
// 2. SUBCATEGORIES  (parent = category)
// ─────────────────────────────────────────────────────────────────
export const subcategories = [

  // ── RF & Microwave Components and Solutions ──────────────────
  {
    subcategoryId: "RF Connectors & Adapters",
    value:         "RF Connectors & Adapters",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/SMA Connectors.png",
  },
  {
    subcategoryId: "RF Adapters",
    value:         "RF Adapters",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/RF Adapters.png",
  },
  {
    subcategoryId: "RF Cable & Interconnect Solutions",
    value:         "RF Cable & Interconnect Solutions",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/RF Cable & Interconnect Solutions.webp",
  },
  {
    subcategoryId: "RF Signal Conditioning Components",
    value:         "RF Signal Conditioning Components",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/RF Signal Conditioning Components.webp",
  },
  {
    subcategoryId: "RF Power Management Solutions",
    value:         "RF Power Management Solutions",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/RF Signal Conditioning Components.webp",
  },
  {
    subcategoryId: "RF Amplifiers",
    value:         "RF Amplifiers",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/Gain Block Amplifier.webp",
  },
  {
    subcategoryId: "RF Frequency Control Components",
    value:         "RF Frequency Control Components",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/Phase Shifters.png",
  },
  {
    subcategoryId: "RF Passive Microwave Components",
    value:         "RF Passive Microwave Components",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/Directional Couplers.png",
  },
  {
    subcategoryId: "Waveguide & High-Frequency Components",
    value:         "Waveguide & High-Frequency Components",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/Waveguide Adapters.png",
  },
  {
    subcategoryId: "RF Switching & Signal Routing",
    value:         "RF Switching & Signal Routing",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/RF Switches.png",
  },
  {
    // ── 3-LEVEL: children live in subSubcategories ──
    subcategoryId: "RF, Microwave & Electronic Components (Thin Film)",
    value:         "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/MIC Thin Film Circuits.png",
    hasSubSubcategories: true,
  },
  {
    // ── 3-LEVEL: children live in subSubcategories ──
    subcategoryId: "Antenna Solutions",
    value:         "Antenna Solutions",
    categoryId:    "RF & Microwave Components and Solutions",
    image:         "/images/products/Antenna Solutions.png",
    hasSubSubcategories: true,
  },

  // ── Test & Measurement ───────────────────────────────────────
  {
    subcategoryId: "EMC / EMI Test Chambers",
    value:         "EMC / EMI Test Chambers",
    categoryId:    "Test & Measurement",
    image:         "/images/products/Anechoic Chambers.png",
  },
  {
    subcategoryId: "RF Shielded Enclosures & Boxes",
    value:         "RF Shielded Enclosures & Boxes",
    categoryId:    "Test & Measurement",
    image:         "/images/products/Enclosures, Boxes & Cases SHIELDED BOX.png",
  },
  {
    subcategoryId: "RF Scanner Systems",
    value:         "RF Scanner Systems",
    categoryId:    "Test & Measurement",
    image:         "/images/products/RF Scanner Systems.png",
  },
  {
    subcategoryId: "EMC Scanning Systems",
    value:         "EMC Scanning Systems",
    categoryId:    "Test & Measurement",
    image:         "/images/products/EMScanner Systems.png",
  },
  {
    subcategoryId: "Microwave Absorbers",
    value:         "Microwave Absorbers",
    categoryId:    "Test & Measurement",
    image:         "/images/products/Pyramidal Absorbers.png",
  },

  // ── Electronics Sensors ──────────────────────────────────────
  {
    subcategoryId: "Pressure Sensors",
    value:         "Pressure Sensors",
    categoryId:    "Electronics Sensors",
    image:         "/images/products/Pressure Sensors.png",
  },
  {
    subcategoryId: "Load Cells",
    value:         "Load Cells",
    categoryId:    "Electronics Sensors",
    image:         "/images/products/Load Cells.png",
  },
  {
    subcategoryId: "Temperature Sensors",
    value:         "Temperature Sensors",
    categoryId:    "Electronics Sensors",
    image:         "/images/products/Temperature Sensors.webp",
  },
  {
    subcategoryId: "RTD Sensors",
    value:         "RTD Sensors",
    categoryId:    "Electronics Sensors",
    image:         "/images/products/RTD Sensors.png",
  },
  {
    subcategoryId: "Accelerometers",
    value:         "Accelerometers",
    categoryId:    "Electronics Sensors",
    image:         "/images/products/IEPE Accelerometers.png",
  },
  {
    subcategoryId: "Position Sensors",
    value:         "Position Sensors",
    categoryId:    "Electronics Sensors",
    image:         "/images/products/Position Sensors.png",
  },
  {
    subcategoryId: "Additional Sensors",
    value:         "Additional Sensors",
    categoryId:    "Electronics Sensors",
    image:         "/images/products/Additional Sensors.png",
  },

  // ── Special Materials ────────────────────────────────────────
  {
    subcategoryId: "Materials",
    value:         "Materials",
    categoryId:    "Special Materials",
    image:         "/images/products/Carbon Fiber.png",
  },

  // ── RCP & HIL ────────────────────────────────────────────────
  {
    subcategoryId: "Systems",
    value:         "Systems",
    categoryId:    "RCP & HIL",
    image:         "/images/products/RCP Systems.png",
  },
];

// ─────────────────────────────────────────────────────────────────
// 3. SUB-SUBCATEGORIES  (parent = subcategory, used for 3-level only)
// ─────────────────────────────────────────────────────────────────
export const subSubcategories = [

  // ── RF, Microwave & Electronic Components (Thin Film) ────────
  {
    subSubcategoryId: "Microwave Thin Film Circuits",
    value:            "Microwave Thin Film Circuits",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/MIC Thin Film Circuits.png",
  },
  {
    subSubcategoryId: "Inductors",
    value:            "Inductors",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Silicon Chip Inductors.png",
  },
  {
    subSubcategoryId: "Capacitors (Thin Film)",
    value:            "Capacitors (Thin Film)",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Ceramic RF Capacitors.png",
  },
  {
    subSubcategoryId: "Resistors (Thin Film)",
    value:            "Resistors (Thin Film)",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Quartz Resistors.png",
  },
  {
    subSubcategoryId: "Power Resistors",
    value:            "Power Resistors",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/AlN Power Resistors.png",
  },
  {
    subSubcategoryId: "Microstrip Components",
    value:            "Microstrip Components",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Microstrip Submounts.png",
  },
  {
    subSubcategoryId: "Microwave Diodes",
    value:            "Microwave Diodes",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Microwave Diodes.png",
  },
  {
    subSubcategoryId: "RF Power Transistors",
    value:            "RF Power Transistors",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/RF Power Transistors.png",
  },
  {
    subSubcategoryId: "Voltage Regulators (Thin Film)",
    value:            "Voltage Regulators (Thin Film)",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Voltage Regulators.png",
  },
  {
    subSubcategoryId: "LDO Regulators",
    value:            "LDO Regulators",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/LDO Regulators.png",
  },
  {
    subSubcategoryId: "Analog ICs",
    value:            "Analog ICs",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Analog ICs.png",
  },

  // ── Antenna Solutions ────────────────────────────────────────
  {
    subSubcategoryId: "Omni-Directional Antennas",
    value:            "Omni-Directional Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Whip Antennas.png",
  },
  {
    subSubcategoryId: "Directional Antennas",
    value:            "Directional Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Yagi-Uda Antennas.png",
  },
  {
    subSubcategoryId: "Patch Antennas",
    value:            "Patch Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Microstrip Patch Antennas.png",
  },
  {
    subSubcategoryId: "Horn Antennas",
    value:            "Horn Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Antennas WR-102 Waveguide Standard Gain Horn Antenna Operating from 7 GHz to 11 GHz with a Nominal 10 dB Gain SMA Female Input.png",
  },
  {
    subSubcategoryId: "Parabolic Antennas",
    value:            "Parabolic Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Parabolic Dish Antennas.png",
  },
  {
    subSubcategoryId: "Millimeter Wave Antennas",
    value:            "Millimeter Wave Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/60 GHz Antennas.png",
  },
  {
    subSubcategoryId: "RF Test & Measurement Antennas",
    value:            "RF Test & Measurement Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Biconical Antennas.png",
  },
  {
    subSubcategoryId: "Wireless Communication Antennas",
    value:            "Wireless Communication Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Antennas TG.13.5111 5G Sub 1GHz Cellular  BLE (617-960 MHz) Terminal Mount Antenna with Fixed SMA(M) Plug Connector.png",
  },
  {
    subSubcategoryId: "GPS & GNSS Antennas",
    value:            "GPS & GNSS Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/GPS Antennas.png",
  },
  {
    subSubcategoryId: "Special Purpose Antennas",
    value:            "Special Purpose Antennas",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Helical Antennas.png",
  },
  {
    subSubcategoryId: "Antenna Arrays",
    value:            "Antenna Arrays",
    subcategoryId:    "Antenna Solutions",
    categoryId:       "RF & Microwave Components and Solutions",
    image:            "/images/products/Phased Array Antennas.png",
  },
];

// ─────────────────────────────────────────────────────────────────
// 4. PRODUCTS
//
// 2-level products:  categoryId + subcategoryId
// 3-level products:  categoryId + subcategoryId + subSubcategoryId
// ─────────────────────────────────────────────────────────────────
export const products = [

  // ════════════════════════════════════════════════════════════
  // RF & MICROWAVE COMPONENTS AND SOLUTIONS
  // ════════════════════════════════════════════════════════════

  // ── RF Connectors & Adapters ─────────────────────────────────
  {
    id: 1,
    productId: "SMA-1001",
    name: "Standard SMA Male Connector",
    description: "High-frequency SMA coaxial RF connector with threaded interface. Reliable performance DC to 18 GHz. Used in telecoms, Wi-Fi antennas, and RF systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/SMA Connectors.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 2,
    productId: "N-TYPE-M-11G",
    name: "N-Type Male Connector",
    description: "Durable, weatherproof, medium-size RF connector with threaded coupling. High-power applications up to 11 GHz.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/N-Type Connectors.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 3,
    productId: "BNC-M-4G",
    name: "BNC Male Connector",
    description: "Quick connect/disconnect RF connector with bayonet mount. Used in video, radio, and lab test equipment up to 4 GHz.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/BNC Connectors.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 4,
    productId: "TNC-M-11G",
    name: "TNC Male Connector",
    description: "Threaded BNC variant with superior stability in high-vibration environments. Operates up to 11 GHz.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/TNC Connectors.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 5,
    productId: "SMP-F-40G",
    name: "SMP / SMPM Female Connector",
    description: "Subminiature push-on connector for high-density board-to-board applications. SMP to 40 GHz, SMPM to 65 GHz.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/SMP  SMPM Connectors.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 6,
    productId: "MMCX-M-6G",
    name: "MMCX / MCX Male Connector",
    description: "Micro-miniature snap-on coaxial connectors for GPS and Wi-Fi hardware up to 6 GHz.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/MMCX  MCX Connectors.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 7,
    productId: "K-TYPE-292-40G",
    name: "2.92 mm (K-Type) Precision Connector",
    description: "Precision connector up to 40 GHz. Intermatable with SMA and 3.5 mm connectors.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/2.92 mm (K-Type) Precision.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 8,
    productId: "24MM-M-50G",
    name: "2.4 mm Male Connector",
    description: "Rugged precision connector up to 50 GHz. Mechanically incompatible with SMA to prevent damage. Used in aerospace and test labs.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/2.4 mm Connectors.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 9,
    productId: "185MM-M-65G",
    name: "1.85 mm (V-Type) Connector",
    description: "Ultra-high-frequency precision connector operational up to 65 GHz. Used in mmWave test and measurement applications.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/1.85 mm Connectors.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },

  // ── RF Adapters ───────────────────────────────────────────────
  {
    id: 10,
    productId: "ADPT-BS-SMA-N",
    name: "RF Adapter (Between-Series / Same-Series)",
    description: "Precision RF adapter for transitioning between connector series (e.g. SMA to N-Type) or changing genders within the same series.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/RF Adapters (Same-Series -.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Adapters",
  },
  {
    id: 11,
    productId: "ADPT-RA-SMA-M-F",
    name: "Right-Angle RF Adapter",
    description: "90-degree adapter for routing cables in tight enclosures without exceeding minimum bend radius.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/Right-Angle RF Adapters.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Adapters",
  },
  {
    id: 12,
    productId: "ADPT-BH-SMA",
    name: "Bulkhead Mount Adapter",
    description: "Panel-mount RF adapter for through-wall or chassis feed-through installations with secure mechanical locking.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/Bulkhead Mount Adapters.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Adapters",
  },
  {
    id: 13,
    productId: "ADPT-TEE-SMA",
    name: "SMA Tee Adapter",
    description: "T-junction RF adapter that splits or combines RF signals into two branches from a single port.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/SMA Tee Adapters.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Adapters",
  },

  // ── RF Cable & Interconnect Solutions ─────────────────────────
  {
    id: 14,
    productId: "CBL-ASSY-STD-1M",
    name: "Standard RF Cable Assembly",
    description: "Pre-assembled coaxial cable with factory-terminated connectors. Tested for insertion loss and VSWR.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/RF Cable Assemblies.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 15,
    productId: "CBL-LL-LMR400",
    name: "Low-Loss RF Cable",
    description: "High-performance coaxial cable with specialized shielding to minimize signal attenuation over long runs.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Low-Loss RF Cables.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 16,
    productId: "CBL-FLEX-RG316",
    name: "Flexible RF Cable",
    description: "Highly pliable coaxial cable for dynamic applications or complex internal routing through tight chassis.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Flexible RF Cables.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 17,
    productId: "CBL-SR-085",
    name: "Semi-Rigid RF Cable",
    description: "Solid outer conductor coaxial cable offering excellent shielding and phase stability for precision setups.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Semi-Rigid RF Cables.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 18,
    productId: "CBL-PS-RG402",
    name: "Phase-Stable RF Cable",
    description: "Cable engineered for consistent electrical length across temperature and flexion, critical for phase-matched systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Phase-Stable RF Cables.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 19,
    productId: "CBL-BULK-RG58",
    name: "RF Coaxial Bulk Cables (RG58, RG174, RG316, RG400)",
    description: "Standard coaxial bulk cables for general-purpose RF wiring, available in multiple impedance and loss profiles.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/RF Coaxial Bulk Cables (RG58, RG174, RG316, RG400).png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },

  // ── RF Signal Conditioning Components ────────────────────────
  {
    id: 20,
    productId: "ATT-FX-10DB",
    name: "RF Attenuators Fixed",
    description: "Passive components reducing RF signal power by a precise fixed amount (e.g. 3 dB, 10 dB) while maintaining characteristic impedance.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Attenuators Fixed,.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 21,
    productId: "ATT-VAR-0-30DB",
    name: "RF Attenuators Variable",
    description: "Manually or continuously adjustable attenuators for lab testing, calibration, and dynamic range optimisation.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Attenuators  Variable.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 22,
    productId: "ATT-PRG-USB",
    name: "RF Attenuators Programmable",
    description: "Digitally controlled attenuators for automated test equipment (ATE) with software-driven signal strength adjustment.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Attenuators Programmable.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 23,
    productId: "EQ-RF-6G",
    name: "RF Equalizers",
    description: "Compensates for frequency-dependent amplitude distortion by applying an inverse frequency response for a flat signal profile.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Equalizers.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 24,
    productId: "LIM-RF-PIN",
    name: "RF Limiters",
    description: "Protective components allowing low-level signals through while attenuating high-power RF spikes to protect downstream LNAs.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Limiters.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 25,
    productId: "TERM-RF-50R",
    name: "RF Terminations / RF Loads",
    description: "Precision resistive components absorbing RF energy at open ports to prevent signal reflections and standing waves.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Terminations , RF Loads.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 26,
    productId: "DCB-SMA-MF",
    name: "DC Blocks",
    description: "Coaxial components using internal series capacitors to block DC while passing high-frequency RF signals.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/DC Blocks.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 27,
    productId: "BT-SMA-4G",
    name: "Bias Tees",
    description: "Three-port components injecting DC power into an RF line to power remote active components without disrupting the RF path.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/Bias Tees.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },

  // ── RF Power Management Solutions ─────────────────────────────
  {
    id: 28,
    productId: "PD-2WAY-SMA",
    name: "Power Dividers (2-Way / 4-Way / 8-Way)",
    description: "Passive Wilkinson or resistive devices splitting a single RF input into multiple equal output paths with high port isolation.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/Power Dividers  Multi-Way Power Dividers (2-Way , 4-Way , 8-Way).png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },
  {
    id: 29,
    productId: "PC-SMA-2IN",
    name: "Power Combiners",
    description: "Networks merging multiple RF inputs into a single output path for high-power amplifier or antenna combining systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/Power Combiners.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },
  {
    id: 30,
    productId: "PS-RF-USB",
    name: "RF Power Sensors",
    description: "Accurate diode or thermocouple-based sensors converting RF power to a measurable DC or digital signal for calibration.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/RF Power Sensors.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },
  {
    id: 31,
    productId: "HPL-RF-100W",
    name: "High-Power RF Loads and Terminations",
    description: "Ruggedised heat-sinked terminations safely dissipating hundreds or thousands of watts during transmitter testing.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/High-Power RF Loads and Terminations.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },

  // ── RF Amplifiers ─────────────────────────────────────────────
  {
    id: 32,
    productId: "AMP-LNA-01",
    name: "Low Noise Amplifier (LNA)",
    description: "Ultra-low noise figure amplifier for receive-path signal amplification without adding significant noise to weak signals.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/LNA.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 33,
    productId: "AMP-PA-01",
    name: "Power Amplifier (PA)",
    description: "High-output RF amplifier for transmit chains requiring significant power gain from milliwatts to several watts.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/PA.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 34,
    productId: "AMP-BB-01",
    name: "Broadband Amplifier",
    description: "Wideband gain amplifier covering multiple octaves of frequency range, suitable for general lab and system applications.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Broadband Amplifiers.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 35,
    productId: "AMP-GAN-01",
    name: "GaN Power Amplifier",
    description: "Gallium Nitride-based high-efficiency power amplifier delivering high output power at microwave frequencies.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/GaN Power Amplifiers.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },

  // ── RF Frequency Control Components ──────────────────────────
  {
    id: 36,
    productId: "PS-RF-6B-18G",
    name: "Phase Shifter",
    description: "Analogue or digital component providing precise control of RF signal phase delay, critical for phased array and beamforming systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Frequency Control/Phase Shifters.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Frequency Control Components",
  },

  // ── RF Passive Microwave Components ──────────────────────────
  {
    id: 37,
    productId: "DC-RF-20DB",
    name: "Directional Coupler",
    description: "Four-port passive device sampling a portion of signal power from the main line for monitoring or measurement purposes.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave/Directional Couplers.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 38,
    productId: "HC-90-SMA",
    name: "Hybrid Coupler (90° / 180°)",
    description: "Passive 3 dB coupler providing 90° or 180° phase-shifted outputs, used in balanced amplifiers and mixers.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave/Hybrid Couplers.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 39,
    productId: "FLT-BPF-2G4",
    name: "RF Band-Pass Filter",
    description: "Passes a desired frequency band while rejecting signals outside. Available as low-pass, high-pass, band-pass, and band-stop types.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave/Bandpass Filters.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 40,
    productId: "BAL-RF-50R",
    name: "Balun",
    description: "Transformer converting between balanced and unbalanced transmission lines, minimising common-mode interference.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave/Baluns.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },

  // ── Waveguide & High-Frequency Components ─────────────────────
  {
    id: 41,
    productId: "WG-ADPT-WR90",
    name: "Waveguide Adapter",
    description: "Transitions RF signals between waveguide and coaxial transmission lines or between different waveguide sizes.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide/Waveguide Adapters.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide & High-Frequency Components",
  },
  {
    id: 42,
    productId: "WG-BEND-WR90",
    name: "Waveguide Bend",
    description: "E-plane or H-plane waveguide bend for routing rectangular waveguide assemblies around obstacles.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide/Waveguide Bends.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide & High-Frequency Components",
  },
  {
    id: 43,
    productId: "WG-FLT-WR90",
    name: "Waveguide Filter",
    description: "Cavity or iris-based waveguide bandpass filter providing extremely low insertion loss and high out-of-band rejection.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide/Waveguide Filters.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide & High-Frequency Components",
  },

  // ── RF Switching & Signal Routing ─────────────────────────────
  {
    id: 44,
    productId: "SW-SPDT-SMA",
    name: "RF Switch SPDT",
    description: "Single-pole double-throw solid-state or electromechanical RF switch for signal routing between two paths.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching/RF Switches SPDT.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Switching & Signal Routing",
  },
  {
    id: 45,
    productId: "SW-SP6T-SMA",
    name: "RF Switch SP6T",
    description: "Six-port RF switch enabling routing of a single input to any one of six output ports with fast switching speed.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching/RF Switches SP6T.png",
    categoryId:    "RF & Microwave Components and Solutions",
    subcategoryId: "RF Switching & Signal Routing",
  },

  // ── RF, Microwave & Electronic Components (Thin Film) — 3-LEVEL
  // SubSubcategory: Microwave Thin Film Circuits
  {
    id: 46,
    productId: "TF-MIC-001",
    name: "MIC Thin Film Circuit",
    description: "Monolithic microwave integrated circuit substrate combining passive components on a single thin-film ceramic substrate.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/MIC Thin Film Circuits.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Microwave Thin Film Circuits",
  },
  {
    id: 47,
    productId: "TF-BDMC-001",
    name: "Bare Die Microwave Circuit",
    description: "Unpackaged microwave IC die for hybrid assembly into custom microwave modules requiring minimal parasitics.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Bare Die Microwave Circuits.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Microwave Thin Film Circuits",
  },
  // SubSubcategory: Inductors
  {
    id: 48,
    productId: "TF-IND-SI-001",
    name: "Silicon Chip Inductor",
    description: "High-Q silicon-based chip inductor for MMIC and thin-film RF circuit integration at microwave frequencies.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Silicon Chip Inductors.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Inductors",
  },
  {
    id: 49,
    productId: "TF-IND-HF-001",
    name: "High Frequency Chip Inductor",
    description: "Ceramic chip inductor optimised for stable inductance and high self-resonant frequency at GHz-range operation.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/High Frequency Chip Inductors.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Inductors",
  },
  // SubSubcategory: Capacitors (Thin Film)
  {
    id: 50,
    productId: "TF-CAP-SI-001",
    name: "Silicon Capacitor",
    description: "Deep-trench silicon capacitor offering ultra-high capacitance density for RF decoupling and energy storage in MMICs.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Silicon Capacitors.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Capacitors (Thin Film)",
  },
  {
    id: 51,
    productId: "TF-CAP-CER-RF",
    name: "Ceramic RF Capacitor",
    description: "High-Q ceramic capacitor for RF matching, tuning, and bypass applications at microwave frequencies.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Ceramic RF Capacitors.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Capacitors (Thin Film)",
  },
  // SubSubcategory: Resistors (Thin Film)
  {
    id: 52,
    productId: "TF-RES-QTZ-001",
    name: "Quartz Resistor",
    description: "Precision thin-film resistor on quartz substrate with exceptional temperature stability for microwave attenuators.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Quartz Resistors.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Resistors (Thin Film)",
  },
  {
    id: 53,
    productId: "TF-RES-AL2O3",
    name: "AL2O3 Chip Resistor",
    description: "Alumina substrate chip resistor for hybrid microwave circuits providing stable resistance at elevated temperatures.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/AL2O3 Chip Resistors.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Resistors (Thin Film)",
  },
  // SubSubcategory: Power Resistors
  {
    id: 54,
    productId: "TF-PWRRES-ALN",
    name: "AlN Power Resistor",
    description: "Aluminium nitride power resistor with excellent thermal conductivity for high-power RF load and termination assemblies.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/AlN Power Resistors.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Power Resistors",
  },
  {
    id: 55,
    productId: "TF-PWRRES-BEO",
    name: "BeO Chip / Wraparound Power Resistor",
    description: "Beryllium oxide power resistor combining very high thermal conductivity with stable RF resistance for high-power applications.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/BeO Power Resistors.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Power Resistors",
  },
  // SubSubcategory: Microstrip Components
  {
    id: 56,
    productId: "TF-MS-SUB-001",
    name: "Microstrip Submount",
    description: "Precision-machined submount for mounting and wire-bonding bare die microwave components in hybrid assemblies.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Microstrip Submounts.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Microstrip Components",
  },
  {
    id: 57,
    productId: "TF-HS-001",
    name: "Heat Sink (Microwave)",
    description: "Thermally conductive heat sink designed to dissipate power from high-frequency power devices in compact RF modules.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Heat Sinks.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Microstrip Components",
  },
  // SubSubcategory: Microwave Diodes
  {
    id: 58,
    productId: "TF-DIODE-SW",
    name: "RF Switching Diode",
    description: "PIN diode optimised for fast RF switching and attenuation in microwave switch and limiter circuits.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/RF Switching Diodes.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Microwave Diodes",
  },
  {
    id: 59,
    productId: "TF-DIODE-DET",
    name: "Detector Diode",
    description: "Schottky detector diode for RF envelope detection, power measurement, and zero-bias operation at microwave frequencies.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Detector Diodes.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Microwave Diodes",
  },
  // SubSubcategory: RF Power Transistors
  {
    id: 60,
    productId: "TF-TR-RF-001",
    name: "RF Power Transistor",
    description: "High-frequency bipolar or FET transistor designed for power amplification in RF and microwave transmitters.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/RF Power Transistors.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "RF Power Transistors",
  },
  // SubSubcategory: Voltage Regulators (Thin Film)
  {
    id: 61,
    productId: "TF-VR-LSM-001",
    name: "LSM Series Bare Die Regulator",
    description: "Unpackaged voltage regulator die for integration into RF modules requiring on-chip bias regulation with minimal footprint.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Voltage Regulators.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Voltage Regulators (Thin Film)",
  },
  // SubSubcategory: LDO Regulators
  {
    id: 62,
    productId: "TF-LDO-BD-001",
    name: "Bare Die LDO Regulator",
    description: "Low-dropout regulator bare die for hybrid microwave assemblies providing stable low-noise DC bias to active components.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/LDO Regulators.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "LDO Regulators",
  },
  // SubSubcategory: Analog ICs
  {
    id: 63,
    productId: "TF-AIC-KGD-001",
    name: "Known Good Die (KGD) Analog IC",
    description: "Fully tested bare analog IC die guaranteed to meet specifications, ready for direct flip-chip or wire-bond assembly.",
    image: "/images/product/RF & Microwave Components and Solutions/Thin Film/Analog ICs.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "RF, Microwave & Electronic Components (Thin Film)",
    subSubcategoryId: "Analog ICs",
  },

  // ── Antenna Solutions — 3-LEVEL ───────────────────────────────
  // SubSubcategory: Omni-Directional Antennas
  {
    id: 64,
    productId: "ANT-OMNI-WHIP",
    name: "Whip Antenna",
    description: "Quarter-wave monopole whip antenna providing 360° omni-directional coverage for general wireless applications.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Whip Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Omni-Directional Antennas",
  },
  {
    id: 65,
    productId: "ANT-OMNI-DIPL",
    name: "Dipole Antenna",
    description: "Half-wave dipole antenna offering a toroidal radiation pattern ideal for base-station and point-to-multipoint links.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Dipole Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Omni-Directional Antennas",
  },
  // SubSubcategory: Directional Antennas
  {
    id: 66,
    productId: "ANT-DIR-YAGI",
    name: "Yagi-Uda Antenna",
    description: "Multi-element directional antenna providing high gain in a single direction. Widely used in point-to-point links and TV reception.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Yagi-Uda Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Directional Antennas",
  },
  {
    id: 67,
    productId: "ANT-DIR-PANEL",
    name: "Panel Antenna",
    description: "Flat panel directional antenna with medium-to-high gain, used in cellular base stations and indoor wireless coverage.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Panel Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Directional Antennas",
  },
  // SubSubcategory: Patch Antennas
  {
    id: 68,
    productId: "ANT-PATCH-MS",
    name: "Microstrip Patch Antenna",
    description: "Low-profile printed patch antenna for integration into PCBs, RFID readers, GPS receivers, and IoT devices.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Microstrip Patch Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Patch Antennas",
  },
  {
    id: 69,
    productId: "ANT-PATCH-DB",
    name: "Dual Band Patch Antenna",
    description: "Dual-resonant patch antenna covering two discrete frequency bands (e.g. 2.4 GHz and 5.8 GHz) in a single compact element.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Dual Band Patch Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Patch Antennas",
  },
  // SubSubcategory: Horn Antennas
  {
    id: 70,
    productId: "ANT-HORN-WR102",
    name: "WR-102 Standard Gain Horn Antenna",
    description: "Waveguide horn antenna operating 7–11 GHz with nominal 10 dB gain and SMA female input for lab and EMC testing.",
    image: "/images/products/Antennas WR-102 Waveguide Standard Gain Horn Antenna Operating from 7 GHz to 11 GHz with a Nominal 10 dB Gain SMA Female Input.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Horn Antennas",
  },
  {
    id: 71,
    productId: "ANT-HORN-WR90",
    name: "WR-90 Standard Gain Horn Antenna",
    description: "Waveguide horn antenna operating 8.2–12.4 GHz with nominal 20 dB gain and SMA female input.",
    image: "/images/products/Antennas WR-90 Waveguide Standard Gain Horn Antenna Operating from 8.2 GHz to 12.4 GHz with a Nominal 20 dB Gain SMA Female Input.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Horn Antennas",
  },
  {
    id: 72,
    productId: "ANT-HORN-WR28",
    name: "WR-28 Standard Gain Horn Antenna",
    description: "Waveguide horn antenna operating 26.5–40 GHz with 20 dB gain and 2.92 mm female input.",
    image: "/images/products/Antennas WR-28 Waveguide Standard Gain Horn Antenna Operating from 26.5 GHz to 40 GHz with a Nominal 20 dB Gain 2.92mm Female Input.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Horn Antennas",
  },
  // SubSubcategory: Parabolic Antennas
  {
    id: 73,
    productId: "ANT-PAR-DISH",
    name: "Parabolic Dish Antenna",
    description: "High-gain parabolic reflector antenna for long-distance point-to-point microwave links and satellite communications.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Parabolic Dish Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Parabolic Antennas",
  },
  // SubSubcategory: Millimeter Wave Antennas
  {
    id: 74,
    productId: "ANT-MMW-60G",
    name: "60 GHz mmWave Antenna",
    description: "Compact millimeter wave antenna for 60 GHz WiGig, backhaul, and V-band short-range high-throughput links.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/60GHz Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Millimeter Wave Antennas",
  },
  {
    id: 75,
    productId: "ANT-MMW-77G",
    name: "77 GHz Radar Antenna",
    description: "Automotive radar antenna for 77 GHz FMCW radar systems used in ADAS, adaptive cruise control, and collision avoidance.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/77GHz Radar Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Millimeter Wave Antennas",
  },
  // SubSubcategory: RF Test & Measurement Antennas
  {
    id: 76,
    productId: "ANT-TM-BICON",
    name: "Biconical Antenna",
    description: "Broadband omni-directional antenna for EMC pre-compliance testing covering 30 MHz to 3 GHz in the typical range.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Biconical Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "RF Test & Measurement Antennas",
  },
  {
    id: 77,
    productId: "ANT-TM-LPDA",
    name: "Log Periodic Antenna",
    description: "Broadband directional antenna with constant gain across a wide frequency range, ideal for EMC site surveys.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Log Periodic Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "RF Test & Measurement Antennas",
  },
  // SubSubcategory: Wireless Communication Antennas
  {
    id: 78,
    productId: "ANT-WIFI-24",
    name: "2.4 GHz Compact Whip WiFi Antenna",
    description: "Compact external whip antenna for 2.4 GHz WiFi with RP-SMA connector, suitable for routers and IoT gateways.",
    image: "/images/products/Antennas 2.4 GHz Compact Whip External Black RP-SMA Connector.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Wireless Communication Antennas",
  },
  {
    id: 79,
    productId: "ANT-CELL-SCRW",
    name: "Compact Cell Screw Mount Antenna",
    description: "Outdoor screw-mount cellular antenna with 1 m RG-174 cable and SMA connector for LTE/4G modules.",
    image: "/images/products/Antennas Compact Cell Screw Mt Ext Outdoor 1m RG-174 Cable SMA.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Wireless Communication Antennas",
  },
  {
    id: 80,
    productId: "ANT-5G-TG135111",
    name: "TG.13.5111 5G Sub-1GHz Cellular Antenna",
    description: "5G Sub-1GHz cellular and BLE antenna (617–960 MHz) with terminal mount and fixed SMA male plug connector.",
    image: "/images/products/Antennas TG.13.5111 5G Sub 1GHz Cellular  BLE (617-960 MHz) Terminal Mount Antenna with Fixed SMA(M) Plug Connector.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Wireless Communication Antennas",
  },
  // SubSubcategory: GPS & GNSS Antennas
  {
    id: 81,
    productId: "ANT-GPS-PATCH",
    name: "Patch GPS Antenna",
    description: "Ceramic patch GPS antenna with low-noise active or passive design for embedded navigation in vehicles and handhelds.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Patch GPS Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "GPS & GNSS Antennas",
  },
  {
    id: 82,
    productId: "ANT-GNSS-ACTV",
    name: "Active GNSS Antenna",
    description: "Multi-constellation active GNSS antenna with integrated LNA providing high sensitivity for GPS, GLONASS, Galileo, and BeiDou.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Active GNSS Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "GPS & GNSS Antennas",
  },
  // SubSubcategory: Special Purpose Antennas
  {
    id: 83,
    productId: "ANT-RFID-UHF",
    name: "UHF RFID Antenna",
    description: "Circularly polarised UHF RFID antenna for 865–928 MHz reader systems in warehouse, retail, and access control.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/RFID Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Special Purpose Antennas",
  },
  {
    id: 84,
    productId: "ANT-HELICAL-01",
    name: "Helical Antenna",
    description: "Axial-mode helical antenna providing circular polarisation and high gain for satellite and deep-space communication links.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Helical Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Special Purpose Antennas",
  },
  // SubSubcategory: Antenna Arrays
  {
    id: 85,
    productId: "ANT-ARR-PHSD",
    name: "Phased Array Antenna",
    description: "Electronically steerable antenna array enabling beam-steering without mechanical movement for radar and 5G base stations.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Phased Array Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Antenna Arrays",
  },
  {
    id: 86,
    productId: "ANT-ARR-SMART",
    name: "Smart Antenna",
    description: "Adaptive antenna system combining multiple elements with signal processing to optimise gain, coverage, and interference rejection.",
    image: "/images/product/RF & Microwave Components and Solutions/Antennas/Smart Antennas.png",
    categoryId:       "RF & Microwave Components and Solutions",
    subcategoryId:    "Antenna Solutions",
    subSubcategoryId: "Antenna Arrays",
  },

  // ════════════════════════════════════════════════════════════
  // TEST & MEASUREMENT
  // ════════════════════════════════════════════════════════════

  // ── EMC / EMI Test Chambers ───────────────────────────────────
  {
    id: 87,
    productId: "EMC-AC-3M",
    name: "Anechoic Chamber (3 m)",
    description: "Fully anechoic shielded chamber with pyramidal absorbers for radiated emissions and immunity testing to 18 GHz.",
    image: "/images/product/Test & Measurement/EMC Chambers/Anechoic Chambers.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 88,
    productId: "EMC-SAC-10M",
    name: "Semi-Anechoic Chamber (10 m)",
    description: "Ground-plane semi-anechoic chamber for automotive EMC testing per CISPR 25 and CISPR 12 standards.",
    image: "/images/product/Test & Measurement/EMC Chambers/Semi-Anechoic Chambers.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 89,
    productId: "EMC-RC-001",
    name: "Reverberation Chamber",
    description: "Stirred, mode-rich shielded chamber for statistical EMC testing, antenna efficiency measurement, and OTA testing.",
    image: "/images/product/Test & Measurement/EMC Chambers/Reverberation Chambers.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "EMC / EMI Test Chambers",
  },

  // ── RF Shielded Enclosures & Boxes ────────────────────────────
  {
    id: 90,
    productId: "SHD-BOX-STD",
    name: "RF Shield Box",
    description: "Compact benchtop shielded enclosure for testing wireless devices with isolation typically exceeding 80 dB.",
    image: "/images/products/Enclosures, Boxes & Cases SHIELDED BOX.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "RF Shielded Enclosures & Boxes",
  },
  {
    id: 91,
    productId: "SHD-RACK-19IN",
    name: "Rack Mounted Shielded Cabinet",
    description: "19-inch rack-mount shielded cabinet for housing RF test equipment requiring EMI isolation in production environments.",
    image: "/images/product/Test & Measurement/Shielded/Rack Mounted Shielded Cabinets.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "RF Shielded Enclosures & Boxes",
  },

  // ── RF Scanner Systems ────────────────────────────────────────
  {
    id: 92,
    productId: "SCAN-RF-2D",
    name: "RF Scanner System",
    description: "Automated near-field scanning system for PCB and module EMC diagnostics, mapping electric and magnetic field distributions.",
    image: "/images/product/Test & Measurement/Scanners/RF Scanner Systems.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "RF Scanner Systems",
  },

  // ── EMC Scanning Systems ──────────────────────────────────────
  {
    id: 93,
    productId: "SCAN-EMP-001",
    name: "EMProbe System",
    description: "High-sensitivity near-field probe set with pre-amplifier for locating EMC problem areas on PCBs and enclosures.",
    image: "/images/product/Test & Measurement/Scanners/EMProbe Systems.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "EMC Scanning Systems",
  },
  {
    id: 94,
    productId: "SCAN-EMS-001",
    name: "EMScanner System",
    description: "Fully automated XYZ near-field scanner with software suite for EMC field mapping and hotspot identification.",
    image: "/images/product/Test & Measurement/Scanners/EMScanner Systems.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "EMC Scanning Systems",
  },

  // ── Microwave Absorbers ───────────────────────────────────────
  {
    id: 95,
    productId: "ABS-PYR-300MM",
    name: "Pyramidal Absorber",
    description: "Carbon-loaded polyurethane foam pyramidal absorber for anechoic chamber lining, effective from 1 GHz to 40 GHz.",
    image: "/images/product/Test & Measurement/Absorbers/Pyramidal Absorbers.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "Microwave Absorbers",
  },
  {
    id: 96,
    productId: "ABS-FER-TILE",
    name: "Ferrite Rubber Absorber",
    description: "Flexible ferrite-loaded rubber absorber sheet for low-frequency EMC absorber panels from 30 MHz to 1 GHz.",
    image: "/images/product/Test & Measurement/Absorbers/Ferrite Rubber Absorbers.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "Microwave Absorbers",
  },
  {
    id: 97,
    productId: "ABS-HC-VENT",
    name: "Honeycomb Ventilation Panel",
    description: "Waveguide-below-cutoff honeycomb panel providing airflow for thermal management while maintaining RF shielding integrity.",
    image: "/images/product/Test & Measurement/Absorbers/Honeycomb Ventilation Panels.png",
    categoryId:    "Test & Measurement",
    subcategoryId: "Microwave Absorbers",
  },

  // ════════════════════════════════════════════════════════════
  // ELECTRONICS SENSORS
  // ════════════════════════════════════════════════════════════

  // ── Pressure Sensors ──────────────────────────────────────────
  {
    id: 98,
    productId: "SEN-PRES-CP",
    name: "Pressure Sensor – CP Series",
    description: "Compact industrial pressure sensor (CP Series) for general-purpose process and OEM pressure measurement applications.",
    image: "/images/product/Electronics Sensors/Pressure Sensors/CP Series.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Pressure Sensors",
  },
  {
    id: 99,
    productId: "SEN-PRES-H",
    name: "Pressure Sensor – H Series",
    description: "High-accuracy H Series pressure sensor for demanding industrial and laboratory measurement requirements.",
    image: "/images/product/Electronics Sensors/Pressure Sensors/H Series.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Pressure Sensors",
  },
  {
    id: 100,
    productId: "SEN-PRES-P",
    name: "Pressure Sensor – P Series",
    description: "P Series pressure sensor with programmable output and wide pressure range for industrial automation.",
    image: "/images/product/Electronics Sensors/Pressure Sensors/P Series.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Pressure Sensors",
  },

  // ── Load Cells ────────────────────────────────────────────────
  {
    id: 101,
    productId: "SEN-LC-COMP",
    name: "Compression Load Cell",
    description: "Single-column or multi-column compression load cell for weighing and force measurement in industrial processes.",
    image: "/images/product/Electronics Sensors/Load Cells/Compression Load Cells.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Load Cells",
  },
  {
    id: 102,
    productId: "SEN-LC-TENS",
    name: "Tension Load Cell",
    description: "In-line tension load cell for crane, hoist, and cable tension monitoring in industrial lifting applications.",
    image: "/images/product/Electronics Sensors/Load Cells/Tension Load Cells.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Load Cells",
  },
  {
    id: 103,
    productId: "SEN-LC-MINI",
    name: "Miniature Load Cell",
    description: "Compact subminiature load cell for space-constrained force measurement in robotics, medical devices, and lab instruments.",
    image: "/images/product/Electronics Sensors/Load Cells/Miniature Load Cells.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Load Cells",
  },

  // ── Temperature Sensors ───────────────────────────────────────
  {
    id: 104,
    productId: "SEN-TEMP-TC",
    name: "Thermocouple Sensor",
    description: "Type K/J/T thermocouple sensor for wide temperature range measurement from cryogenic to high-temperature furnace applications.",
    image: "/images/products/Temperature Sensors.webp",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Temperature Sensors",
  },
  {
    id: 105,
    productId: "SEN-TEMP-SURF",
    name: "Surface Temperature Sensor",
    description: "Adhesive or clamp-on surface temperature probe for non-invasive monitoring of pipes, motors, and machinery.",
    image: "/images/product/Electronics Sensors/Temperature/Surface Temperature Sensors.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Temperature Sensors",
  },

  // ── RTD Sensors ───────────────────────────────────────────────
  {
    id: 106,
    productId: "SEN-RTD-PT100",
    name: "PT100 RTD Sensor",
    description: "Platinum resistance thermometer with 100 Ω nominal resistance at 0 °C for precise industrial temperature measurement.",
    image: "/images/product/Electronics Sensors/RTD/PT100 Sensors.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "RTD Sensors",
  },
  {
    id: 107,
    productId: "SEN-RTD-PT1000",
    name: "PT1000 RTD Sensor",
    description: "High-resistance 1000 Ω platinum RTD for long cable runs with reduced lead resistance error in 2-wire configurations.",
    image: "/images/product/Electronics Sensors/RTD/PT1000 Sensors.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "RTD Sensors",
  },

  // ── Accelerometers ────────────────────────────────────────────
  {
    id: 108,
    productId: "SEN-ACC-IEPE",
    name: "IEPE Accelerometer",
    description: "Integrated Electronics Piezo-Electric accelerometer with built-in signal conditioning for vibration and shock measurement.",
    image: "/images/product/Electronics Sensors/Accelerometers/IEPE Accelerometers.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Accelerometers",
  },

  // ── Position Sensors ──────────────────────────────────────────
  {
    id: 109,
    productId: "SEN-POS-LIN",
    name: "Linear Position Sensor",
    description: "Contactless or potentiometric linear position sensor for stroke measurement in hydraulic, pneumatic, and automation systems.",
    image: "/images/product/Electronics Sensors/Position/Linear Position Sensors.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Position Sensors",
  },
  {
    id: 110,
    productId: "SEN-POS-LVDT",
    name: "LVDT Sensor",
    description: "Linear Variable Differential Transformer providing friction-free, high-resolution displacement measurement for precision metrology.",
    image: "/images/product/Electronics Sensors/Position/LVDT Sensors.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Position Sensors",
  },
  {
    id: 111,
    productId: "SEN-POS-ROT",
    name: "Rotary Position Sensor",
    description: "Absolute or incremental rotary encoder for angular position, speed, and direction measurement in motor and servo systems.",
    image: "/images/product/Electronics Sensors/Position/Rotary Position Sensors.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Position Sensors",
  },

  // ── Additional Sensors ────────────────────────────────────────
  {
    id: 112,
    productId: "SEN-VIB-001",
    name: "Vibration Sensor",
    description: "Industrial vibration sensor for predictive maintenance monitoring of rotating machinery, bearings, and gearboxes.",
    image: "/images/product/Electronics Sensors/Additional/Vibration Sensors.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Additional Sensors",
  },
  {
    id: 113,
    productId: "SEN-TORQ-001",
    name: "Torque Sensor",
    description: "Rotary or reaction torque sensor for engine, motor, and driveline torque measurement in test and production.",
    image: "/images/product/Electronics Sensors/Additional/Torque Sensors.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Additional Sensors",
  },
  {
    id: 114,
    productId: "SEN-STRAIN-001",
    name: "Strain Gauge",
    description: "Foil strain gauge for surface strain measurement on structures, providing high accuracy with Wheatstone bridge configuration.",
    image: "/images/product/Electronics Sensors/Additional/Strain Gauges.png",
    categoryId:    "Electronics Sensors",
    subcategoryId: "Additional Sensors",
  },

  // ════════════════════════════════════════════════════════════
  // SPECIAL MATERIALS
  // ════════════════════════════════════════════════════════════
  {
    id: 115,
    productId: "MAT-CF-SHEET",
    name: "Carbon Fiber Sheet",
    description: "Lightweight, high-stiffness carbon fibre reinforced polymer sheet for structural aerospace, automotive, and UAV applications.",
    image: "/images/product/Special Materials/Carbon Fiber.png",
    categoryId:    "Special Materials",
    subcategoryId: "Materials",
  },
  {
    id: 116,
    productId: "MAT-SOLIMIDE",
    name: "Solimide Foam",
    description: "Open-cell polyimide foam offering excellent thermal insulation and flame resistance for aerospace and defence applications.",
    image: "/images/product/Special Materials/Solimide.png",
    categoryId:    "Special Materials",
    subcategoryId: "Materials",
  },
  {
    id: 117,
    productId: "MAT-THERMSLD",
    name: "Thermal Shielding Solution",
    description: "Composite thermal barrier material for protecting electronic assemblies from radiated heat in harsh environments.",
    image: "/images/product/Special Materials/Thermal Shielding Solutions.png",
    categoryId:    "Special Materials",
    subcategoryId: "Materials",
  },
  {
    id: 118,
    productId: "MAT-ROHACELL",
    name: "Rohacell Foam Core",
    description: "Rigid polymethacrylimide (PMI) structural foam core for sandwich composite panels in radome and aerospace structures.",
    image: "/images/product/Special Materials/Rohacell.png",
    categoryId:    "Special Materials",
    subcategoryId: "Materials",
  },

  // ════════════════════════════════════════════════════════════
  // RCP & HIL
  // ════════════════════════════════════════════════════════════
  {
    id: 119,
    productId: "RCP-SYS-001",
    name: "Rapid Control Prototyping System",
    description: "Real-time hardware platform for rapid development and validation of embedded control algorithms directly from MATLAB/Simulink models.",
    image: "/images/product/RCP & HIL/RCP Systems.png",
    categoryId:    "RCP & HIL",
    subcategoryId: "Systems",
  },
  {
    id: 120,
    productId: "HIL-SYS-001",
    name: "Hardware-in-the-Loop System",
    description: "Real-time HIL simulation platform for testing ECUs and controllers against high-fidelity plant models without physical hardware.",
    image: "/images/product/RCP & HIL/HIL Systems.png",
    categoryId:    "RCP & HIL",
    subcategoryId: "Systems",
  },
];