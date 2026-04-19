/**
 * Product Data Schema & Store
 * This file contains the primary product data, category definitions, 
 * and subcategory mappings for the application.
 */

// Master list of top-level categories
export const categories = [
  { categoryId: "Sri & Co Manufacture Product", value: "Sri & Co Manufacture Product" },
  { categoryId: "RF & Microwave Components and Solutions", value: "RF & Microwave Components and Solutions" },
  { categoryId: "Test & Measurement Solutions", value: "Test & Measurement Solutions" },
  { categoryId: "RF, Microwave & Electronic Components Thin Film Circuits", value: "RF, Microwave & Electronic Components Thin Film Circuits" },

  /*
    { categoryId: "Electronics", value: "Electronics" },
    { categoryId: "Rapid Control Prototyping", value: "Rapid Control Prototyping" },
    { categoryId: "RF Shield Boxes", value: "RF Shield Boxes" },
    { categoryId: "Robotics & Automation", value: "Robotics & Automation" },
    { categoryId: "Antennas", value: "Antennas" },
    { categoryId: "Cables & Harnessing", value: "Cables & Harnessing" },
    { categoryId: "Resistors & Capacitors", value: "Resistors & Capacitors" },
  */
];

// Subcategories mapped to their parent categoryId
export const subcategories = [
  // RF & Microwave Components and Solutions
  { subcategoryId: "RF Connectors & Adapters", value: "RF Connectors & Adapters", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/Gain Block Amplifier.webp" },
  { subcategoryId: "RF Cable & Interconnect Solutions", value: "RF Cable & Interconnect Solutions", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Cable & Interconnect Solutions.webp" },
  { subcategoryId: "RF Signal Conditioning Components", value: "RF Signal Conditioning Components", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Signal Conditioning Components.webp" },
  { subcategoryId: "RF Power Management Solutions", value: "RF Power Management Solutions", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Signal Conditioning Components.webp" },
  { subcategoryId: "RF Passive Components", value: "RF Passive Components", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Passive Components.webp" },
  { subcategoryId: "RF Amplifiers", value: "RF Amplifiers", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Amplifiers.webp" },
  { subcategoryId: "RF Frequency Control Components", value: "RF Frequency Control Components", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Frequency Control Components.webp" },
  { subcategoryId: "Waveguide and High-Frequency Components", value: "Waveguide and High-Frequency Components", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/Waveguide and High-Frequency Components.webp" },
  { subcategoryId: "RF Switching & Signal Routing", value: "RF Switching & Signal Routing", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Switching & Signal Routing.webp" },

  //  Test & Measurement Solutions
  { subcategoryId: "EMC / EMI Test Chambers", value: "EMC / EMI Test Chambers", categoryId: "Test & Measurement Solutions", image: "/images/products/EMC / EMI Test Chambers.webp" },
  { subcategoryId: "RF Shielded Enclosures & Shield Boxes", value: "RF Shielded Enclosures & Shield Boxes", categoryId: "Test & Measurement Solutions", image: "/images/products/EMC / EMI Test Chambers.webp" },
  { subcategoryId: "RF Scanner Systems", value: "RF Scanner Systems", categoryId: "Test & Measurement Solutions", image: "/images/products/EMC / EMI Test Chambers.webp" },
  { subcategoryId: "Desktop EMC Test Chambers", value: "Desktop EMC Test Chambers", categoryId: "Test & Measurement Solutions", image: "/images/products/EMC / EMI Test Chambers.webp" },
  { subcategoryId: "Microwave Absorber Materials", value: "Microwave Absorber Materials", categoryId: "Test & Measurement Solutions", image: "/images/products/EMC / EMI Test Chambers.webp" },

  //RF, Microwave & Electronic Components Thin Film Circuits
  { subcategoryId: "MIC Microwave Thin Film Circuits", value: "MIC Microwave Thin Film Circuits", categoryId: "RF, Microwave & Electronic Components Thin Film Circuits", image: "/images/products/EMC / EMI Test Chambers.webp" },
  { subcategoryId: "Inductors", value: "Inductors", categoryId: "RF, Microwave & Electronic Components Thin Film Circuits", image: "/images/products/EMC / EMI Test Chambers.webp" },
  { subcategoryId: "Capacitors", value: "Capacitors", categoryId: "RF, Microwave & Electronic Components Thin Film Circuits", image: "/images/products/EMC / EMI Test Chambers.webp" },
  /*
  // Electronics
  { subcategoryId: "Accessories & Tools", value: "Accessories & Tools", categoryId: "Electronics", image: "/images/products/Soldering Tools.webp" },
  { subcategoryId: "Basic Electronic Components", value: "Basic Electronic Components", categoryId: "Electronics", image: "/images/products/Capacitors.jpg" },
  { subcategoryId: "Development Boards & Microcontrollers", value: "Development Boards & Microcontrollers", categoryId: "Electronics", image: "/images/products/Arduino Boards.webp" },
  { subcategoryId: "Displays & input Devices", value: "Displays & input Devices", categoryId: "Electronics", image: "/images/products/LCD Displays.gif" },
  { subcategoryId: "Sensors", value: "Sensors", categoryId: "Electronics", image: "/images/products/Gas Sensors.jpg" },
  { subcategoryId: "Wireless and Communication Modules", value: "Wireless and Communication Modules", categoryId: "Electronics", image: "/images/products/WiFi Modules.webp" },

  // Rapid Control Prototyping
  { subcategoryId: "Communication Protocols & Networking", value: "Communication Protocols & Networking", categoryId: "Rapid Control Prototyping", image: "/images/products/Industrial Shields.webp" },
  { subcategoryId: "Embedded Processors & Microcontrollers", value: "Embedded Processors & Microcontrollers", categoryId: "Rapid Control Prototyping", image: "/images/products/5.01.30_SPL.webp" },
  { subcategoryId: "Industrial Automation & Control Logic", value: "Industrial Automation & Control Logic", categoryId: "Rapid Control Prototyping", image: "/images/products/CP1E_series_SPL.webp" },
  { subcategoryId: "Motor Control & Power Electronics", value: "Motor Control & Power Electronics", categoryId: "Rapid Control Prototyping", image: "/images/products/BDS-series_SPL.webp" },
  { subcategoryId: "Real-Time Control Systems & Hardware", value: "Real-Time Control Systems & Hardware", categoryId: "Rapid Control Prototyping", image: "/images/products/3048_SPL.webp" },
  { subcategoryId: "Testing & Validation Frameworks", value: "Testing & Validation Frameworks", categoryId: "Rapid Control Prototyping", image: "/images/products/LIQ-DUO-CA_SPL.webp" },

  // RF Shield Boxes
  { subcategoryId: "Miniature Cases", value: "Miniature Cases", categoryId: "RF Shield Boxes", image: "/images/products/Miniature Cases – Industrial Diecast, Unpainted 4.92 x 4.92 x 2.95.png" },
  { subcategoryId: "Enclosures Boxes & Cases", value: "Enclosures Boxes & Cases", categoryId: "RF Shield Boxes", image: "/images/products/Enclosures, Boxes & Cases SHIELDED BOX.png" },
  { subcategoryId: "Heavy Duty Power Connectors", value: "Heavy Duty Power Connectors", categoryId: "RF Shield Boxes", image: "/images/products/Heavy Duty Power Connectors Front mounting male metal receptacle with O-ring seal and ring nut mount (hex nut available upon request). Complete EMI shielding in the fully mated and locked po.png" },

  // Robotics & Automation
  { subcategoryId: "Educational Robotic Kits", value: "Educational Robotic Kits", categoryId: "Robotics & Automation", image: "/images/products/Educational Robotic Kits BALA2Fire is a Self Balancing Robot consisting of M5Stack Fire and two wheels..png" },
  { subcategoryId: "Robots", value: "Robots", categoryId: "Robotics & Automation", image: "/images/products/Robots Rebel Education Kit.png" },

  // Antennas
  { subcategoryId: "Waveguide Antennas", value: "Waveguide Antennas", categoryId: "Antennas", image: "/images/products/Antennas WR-102 Waveguide Standard Gain Horn Antenna Operating from 7 GHz to 11 GHz with a Nominal 10 dB Gain SMA Female Input.png" },
  { subcategoryId: "Compact Whip Antennas", value: "Compact Whip Antennas", categoryId: "Antennas", image: "/images/products/Antennas 2.4 GHz Compact Whip External Black RP-SMA Connector.png" },
  { subcategoryId: "Cell Screw Mount Antennas", value: "Cell Screw Mount Antennas", categoryId: "Antennas", image: "/images/products/Antennas Compact Cell Screw Mt Ext Outdoor 1m RG-174 Cable SMA.png" },
  { subcategoryId: "5G Cellular Antennas", value: "5G Cellular Antennas", categoryId: "Antennas", image: "/images/products/Antennas TG.13.5111 5G Sub 1GHz Cellular  BLE (617-960 MHz) Terminal Mount Antenna with Fixed SMA(M) Plug Connector.png" },

  // Cables & Harnessing
  { subcategoryId: "Fibre Optic Cable Assemblies", value: "Fibre Optic Cable Assemblies", categoryId: "Cables & Harnessing", image: "/images/products/Fibre Optic Cable Assemblies MTP24-F to 24xLC simplex harness, length 2m.png" },
  { subcategoryId: "Specialised Cables", value: "Specialised Cables", categoryId: "Cables & Harnessing", image: "/images/products/Specialised Cables 3-PIN CABLE HARNESS.png" },
  { subcategoryId: "Test Accessories", value: "Test Accessories", categoryId: "Cables & Harnessing", image: "/images/products/Test Accessories - Other Wire Harness - 2x4 Header for Logic 8, Logic Pro 8, Logic Pro 16.png" },

  // Resistors & Capacitors
  { subcategoryId: "Current Sense Resistors", value: "Current Sense Resistors", categoryId: "Resistors & Capacitors", image: "/images/products/Current Sense Resistors - SMD.png" },
  { subcategoryId: "Wirewound Resistors", value: "Wirewound Resistors", categoryId: "Resistors & Capacitors", image: "/images/products/Wirewound Resistors - Chassis Mount 20watt.png" },
  { subcategoryId: "Resistor Networks & Arrays", value: "Resistor Networks & Arrays", categoryId: "Resistors & Capacitors", image: "/images/products/Resistor Networks & Arrays 120ohm 8Pin Bussed.png" },
  { subcategoryId: "Trimmer Resistors", value: "Trimmer Resistors", categoryId: "Resistors & Capacitors", image: "/images/products/Trimmer Resistors.png" },
  { subcategoryId: "Ceramic Composition Resistors", value: "Ceramic Composition Resistors", categoryId: "Resistors & Capacitors", image: "/images/products/Ceramic Composition Resistors HPCR 0819 A.png" },
  { subcategoryId: "MELF Resistors", value: "MELF Resistors", categoryId: "Resistors & Capacitors", image: "/images/products/MELF Resistors.png" },
*/
];


export const products = [
  // ================= Sri & Co Manufacture Product =================
  // RF Connectors & Adapters
  {
    id: 1,
    productId: "SMA-1001",
    name: "Standard SMA Male Connector",
    description: "High-frequency SubMiniature version A (SMA) coaxial RF connector with a threaded interface. Designed for reliable performance from DC to 18 GHz. Commonly used in telecommunications, Wi-Fi antennas, and radio frequency systems",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/SMA Connectors.png",
    categoryId: "Sri & Co Manufacture Product",
  },
  {
    id: 2,
    productId: "N-TYPE-M-11G",
    name: "N-Type Male Connector",
    description: "Durable, weatherproof, medium-size RF connector featuring a threaded coupling mechanism. Excellent for low-frequency, high-power applications up to 11 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/N-Type Connectors.png",
    categoryId: "Sri & Co Manufacture Product",
  },
  {
    id: 3,
    productId: "BNC-M-4G",
    name: "BNC Male Connector",
    description: "Quick connect/disconnect RF connector featuring a secure bayonet mount. Widely used in video, radio, and laboratory test equipment operating up to 4 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/BNC Connectors.png",
    categoryId: "Sri & Co Manufacture Product"
  },
  {
    id: 4,
    productId: "TNC-M-11G",
    name: "TNC Male Connector",
    description: "A threaded version of the BNC connector offering superior stability and reliable performance in high-vibration environments. Operates effectively up to 11 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/TNC Connectors.png",
    categoryId: "Sri & Co Manufacture Product",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 5,
    productId: "SMP-F-40G",
    name: "SMP / SMPM Female Connector",
    description: "Subminiature push-on connector designed for high-density, board-to-board applications. SMP operates up to 40 GHz, while the smaller SMPM extends up to 65 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/SMP  SMPM Connectors.png",
    categoryId: "Sri & Co Manufacture Product",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 6,
    productId: "MMCX-M-6G",
    name: "MMCX / MCX Male Connector",
    description: "Micro-miniature coaxial connectors featuring a snap-on coupling design. Ideal for space-constrained applications like GPS and Wi-Fi hardware up to 6 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/MMCX  MCX Connectors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 7,
    productId: "K-TYPE-292-40G",
    name: "2.92 mm (K-Type) Precision Connector",
    description: "High-frequency precision connector operational up to 40 GHz. Features a thick outer wall for durability and is mechanically intermateable with SMA and 3.5mm connectors.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/2.92 mm (K-Type) Precision.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 8,
    productId: "24MM-M-50G",
    name: "2.4 mm Male Connector",
    description: "Rugged precision connector engineered for use up to 50 GHz. Mechanically incompatible with SMA to prevent accidental damage; widely used in aerospace and test labs",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/2.4 mm Connectors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 9,
    productId: "ADPT-BS-SMA-N",
    name: "RF Adapter (Between-Series / Same-Series)",
    description: "Precision RF adapter used for seamlessly transitioning between different connector series (e.g., SMA to N-Type) or changing genders within the same series",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/RF Adapters (Same-Series -.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 10,
    productId: "ADPT-RA-SMA-M-F",
    name: "Right-Angle RF Adapter",
    description: "90-degree RF adapter used to cleanly route cables in tight enclosures without bending the coaxial cable beyond its minimum bend radius, preserving signal integrity.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/Right-Angle RF Adapters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },

  //RF Cable & Interconnect Solutions
  {
    id: 11,
    productId: "CBL-ASSY-STD-1M",
    name: "Standard RF Cable Assembly",
    description: "Pre-assembled coaxial cable with factory-terminated RF connectors. Rigorously tested for insertion loss and VSWR to ensure plug-and-play reliability out of the box",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/RF Cable Assemblies.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 12,
    productId: "CBL-LL-LMR400",
    name: "Low-Loss RF Cable",
    description: "High-performance coaxial cable engineered with specialized shielding and dielectric materials to significantly minimize signal attenuation over long cable runs",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Low-Loss RF Cables.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 13,
    productId: "CBL-FLEX-RG316",
    name: "Flexible RF Cable",
    description: "Highly pliable coaxial cable designed for dynamic applications or complex internal routing through tight chassis where frequent or sharp bending is required",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Flexible RF Cables.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 14,
    productId: "semi-rigid-rf-cables",
    name: "Semi-Rigid RF Cables",
    description: "High-quality RF cable solutions designed for low-loss signal transmission and high-frequency performance in demanding environments.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Semi-Rigid RF Cables.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 15,
    productId: "phase-stable-rf-cables",
    name: "Phase-Stable RF Cables",
    description: "High-quality RF cable solutions designed for low-loss signal transmission and high-frequency performance in demanding environments.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Phase-Stable RF Cables.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 16,
    productId: "rf-coaxial-bulk-cables",
    name: "RF Coaxial Bulk Cables (RG58, RG174, RG316, RG400)",
    description: "High-quality RF cable solutions designed for low-loss signal transmission and high-frequency performance in demanding environments.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/RF Coaxial Bulk Cables (RG58, RG174, RG316, RG400).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  // 3. RF Signal Conditioning Components
  {
    id: 17,
    productId: "rf-attenuators-fixed",
    name: "RF Attenuators Fixed",
    description: "Passive components that reduce the power level of an RF signal by a precise, unchangeable amount (e.g., 3dB, 10dB) while maintaining characteristic impedance to protect sensitive receivers and improve matching.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Attenuators Fixed,.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 18,
    productId: "rf-attenuators-variable",
    name: "RF Attenuators Variable",
    description: "Components that allow for manual, continuous, or stepped adjustment of signal attenuation levels, highly useful for laboratory testing, calibration, and dynamic range optimization.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Attenuators  Variable.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 19,
    productId: "rf-attenuators-programmable",
    name: "RF Attenuators Programmable",
    description: "Digitally controlled solid-state or relay-based attenuators that enable automated, high-speed adjustment of RF signal strength via software, essential for automated test equipment (ATE) setups.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Attenuators Programmable.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 20,
    productId: "rf-equalizers",
    name: "RF Equalizers",
    description: "Devices designed to compensate for frequency-dependent amplitude distortion (such as high-frequency rolloff in long cable runs) by applying an inverse frequency response to ensure a flat signal profile.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Equalizers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 21,
    productId: "rf-limiters",
    name: "RF Limiters",
    description: "Crucial protective components that allow low-level signals to pass with minimal loss while heavily attenuating high-power RF spikes to prevent damage to sensitive downstream components like low-noise amplifiers (LNAs).",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Limiters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 22,
    productId: "rf-terminations-loads",
    name: "RF Terminations / RF Loads",
    description: "Precision resistive components used to safely absorb and dissipate RF energy at the end of an open transmission line or unused port, preventing signal reflection and standing waves.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Terminations , RF Loads.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 23,
    productId: "dc-blocks",
    name: "DC Blocks",
    description: "Coaxial components that utilize internal series capacitors to block unwanted direct current (DC) and low-frequency audio signals while allowing high-frequency RF signals to pass with minimal insertion loss.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/DC Blocks.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 24,
    productId: "bias-tees",
    name: "Bias Tees",
    description: "Three-port network components used to inject DC power into an RF transmission line, allowing you to power remote active components (like mast-mounted amplifiers or antennas) without disrupting the main RF signal path.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/Bias Tees.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  // 4. RF Power Management Solutions
  {
    id: 25,
    productId: "power-dividers-multi-way",
    name: "Power Dividers Multi-Way Power Dividers (2-Way / 4-Way / 8-Way)",
    description: "Passive Wilkinson or resistive devices that evenly split a single input RF signal into multiple output paths, providing high port-to-port isolation and excellent phase and amplitude balance.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/Power Dividers  Multi-Way Power Dividers (2-Way , 4-Way , 8-Way).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },
  {
    id: 26,
    productId: "power-combiners",
    name: "Power Combiners",
    description: "Networks designed to efficiently merge multiple RF input signals into a single output path, commonly utilized in high-power solid-state amplifier architectures or complex antenna combining systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/Power Combiners.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },
  {
    id: 27,
    productId: "rf-power-sensors",
    name: "RF Power Sensors",
    description: "Highly accurate measurement instruments featuring diode or thermocouple detectors that convert RF power into a measurable DC voltage or digital signal, critical for monitoring and calibrating transmitter output.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/RF Power Sensors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },
  {
    id: 28,
    productId: "high-power-rf-loads-terminations",
    name: "High-Power RF Loads and Terminations",
    description: "Ruggedized terminations equipped with extensive heat sinks (and sometimes forced-air cooling) designed to safely absorb and dissipate large amounts of RF energy—often hundreds or thousands of watts—during transmitter testing.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/High-Power RF Loads and Terminations.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },

  //RF Passive Components
  {
    id: 29,
    productId: "rf-diplexer",
    name: "RF Diplexer",
    description: "A passive device that multiplexes two distinct frequency bands onto a single common port. Allows a single antenna to transmit and receive simultaneously, or routes signals to separate receivers without interference.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Components/Diplexer.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Components",
  },
  {
    id: 30,
    productId: "rf-triplexer",
    name: "RF Triplexer",
    description: "A sophisticated passive multiplexer that combines or separates three distinct frequency bands to or from a single common port. Essential for multi-band base stations and complex communication hubs.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Components/Triplexer.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Components",
  },
  {
    id: 31,
    productId: "band-pass-filters",
    name: "Band Pass Filters",
    description: "Critical signal conditioning components that allow a specific range of frequencies to pass through unattenuated while heavily rejecting (attenuating) all frequencies outside that designated band.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Components/Band Pass Filters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Components",
  },
  {
    id: 32,
    productId: "rf-waveguide",
    name: "RF Waveguide",
    description: "Hollow metallic pipes (rectangular or circular) used to direct high-frequency electromagnetic waves. Operates with exceptionally low loss and high power-handling capability, primarily used in radar and microwave transmitter systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Components/Waveguide.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Components",
  },
  //RF Amplifiers
  {
    id: 33,
    productId: "low-noise-amplifiers-lna",
    name: "Low Noise Amplifiers (LNA)",
    description: "Crucial first-stage receiver components designed to amplify very weak RF signals captured by an antenna while adding the absolute minimum amount of thermal noise to the signal path.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Low Noise Amplifiers (LNA).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 34,
    productId: "power-amplifiers-pa",
    name: "Power Amplifiers (PA)",
    description: "High-output devices engineered to boost low-level RF signals to the high power levels required for transmission through an antenna, maximizing range and maintaining signal integrity.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Power Amplifiers (PA).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 35,
    productId: "broadband-amplifiers",
    name: "Broadband Amplifiers",
    description: "Versatile amplifiers that deliver consistent, flat signal amplification across a wide spectrum of frequencies, ideal for multi-band testing arrays and wideband communication systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Broadband Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 36,
    productId: "variable-gain-amplifiers",
    name: "Variable Gain Amplifiers",
    description: "Amplifiers featuring dynamically adjustable gain levels controlled by a voltage or digital interface. Essential for maintaining consistent output in automatic gain control (AGC) loops.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Variable Gain Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 37,
    productId: "microwave-amplifiers",
    name: "Microwave Amplifiers",
    description: "Specialized active components specifically tuned and designed to boost signals in the microwave frequency bands (typically 1 GHz to 30 GHz and beyond).",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Microwave Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 38,
    productId: "gan-power-amplifiers",
    name: "GaN Power Amplifiers (Gallium Nitride)",
    description: "Cutting-edge amplifiers utilizing Gallium Nitride semiconductor technology to deliver exceptionally high output power, superior efficiency, and excellent thermal conductivity in a compact footprint.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/GaN Power Amplifiers (Gallium Nitride Amplifiers).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 39,
    productId: "high-power-rf-amplifiers",
    name: "High-Power RF Amplifiers",
    description: "Heavy-duty amplification systems designed to safely output hundreds or thousands of watts. Often equipped with advanced cooling mechanisms for radar, jamming, and broadcast applications.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/High-Power RF Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 40,
    productId: "wideband-microwave-amplifiers",
    name: "Wideband Microwave Amplifiers",
    description: "High-frequency amplifiers offering broadband performance that extends deep into the microwave spectrum, highly suitable for electronic warfare (EW) and advanced test instrumentation.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Wideband Microwave Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  //RF Frequency Control Components
  {
    id: 41,
    productId: "rf-phase-shifters",
    name: "Phase Shifters",
    description: "Precision devices that alter the transmission phase angle of an RF signal while keeping its amplitude constant. Critical for electronic beam steering in phased array radar and smart antenna systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Frequency Control Components/Phase Shifters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Frequency Control Components",
  },
  //RF Passive Microwave Components
  {
    id: 42,
    productId: "directional-couplers",
    name: "Directional Couplers",
    description: "Four-port passive devices that safely sample a small, precise amount of forward or reverse RF power for measurement and monitoring purposes without disrupting the main signal transmission line.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Directional Couplers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 43,
    productId: "hybrid-couplers",
    name: "Hybrid Couplers (90° / 180° Hybrids)",
    description: "Specialized couplers that evenly split an input signal into two distinct outputs with a precise phase difference (90 or 180 degrees). Heavily utilized in balanced amplifiers and phase comparators.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Hybrid Couplers (90° , 180° Hybrids).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 44,
    productId: "impedance-matching-pads",
    name: "Impedance Matching Pads",
    description: "Passive resistive networks designed to smoothly transition between different characteristic line impedances (e.g., from 50-ohm to 75-ohm) while minimizing signal reflections and standing waves.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Impedance Matching Pads.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 45,
    productId: "rf-transformers",
    name: "RF Transformers",
    description: "Magnetic components used for impedance matching, DC ground isolation, and voltage step-up/step-down in RF circuits, ensuring maximum power transfer between mismatched amplifier stages.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/RF Transformers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 46,
    productId: "rf-baluns",
    name: "Baluns (Balanced-to-Unbalanced Transformers)",
    description: "Specialized transformers that properly interface unbalanced transmission lines (like coaxial cables) with balanced loads (like dipole antennas), preventing unwanted common-mode RF currents.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/aluns (Balanced-to-Unbalanced Transformers).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 47,
    productId: "low-pass-filters-lpf",
    name: "Low-Pass Filters (LPF)",
    description: "Filters designed to allow signals below a specified cutoff frequency to pass through with minimal loss, while heavily rejecting (attenuating) higher-frequency noise, spurs, and harmonics.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Low-Pass Filters (LPF).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 48,
    productId: "high-pass-filters-hpf",
    name: "High-Pass Filters (HPF)",
    description: "Filters that block low-frequency signals and unwanted DC currents while allowing high-frequency RF signals above a designated cutoff point to pass through efficiently.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/High-Pass Filters (HPF).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 49,
    productId: "band-pass-filters-bpf",
    name: "Band-Pass Filters (BPF)",
    description: "Precision filter networks that permit only a specific range of frequencies to pass, while heavily attenuating signals both above and below the desired operating frequency band.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Band-Pass Filters (BPF).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 50,
    productId: "band-stop-filters",
    name: "Band-Stop Filters",
    description: "Highly selective filters (often called notch filters) designed to strictly reject or 'notch out' a specific narrow frequency band—such as an interfering carrier signal—while allowing all other frequencies to pass.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Band-Stop Filters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  //Waveguide and High-Frequency Components
  {
    id: 51,
    productId: "waveguide-adapters",
    name: "Waveguide Adapters",
    description: "Precision transitional components that allow high-frequency RF energy to move smoothly and efficiently between a hollow rectangular waveguide structure and a standard coaxial cable interface.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Adapters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  {
    id: 52,
    productId: "waveguide-bends",
    name: "Waveguide Bends",
    description: "Precision-machined, curved waveguide sections (available in E-plane or H-plane sweeps) used to alter the direction of a waveguide run without causing significant signal reflection or insertion loss.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Bends.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  {
    id: 53,
    productId: "waveguide-couplers",
    name: "Waveguide Couplers",
    description: "Flanged waveguide sections featuring secondary sampling ports. Designed to accurately sample high-power microwave energy traveling through the primary waveguide path for diagnostic monitoring.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Couplers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  {
    id: 54,
    productId: "waveguide-filters",
    name: "Waveguide Filters",
    description: "High-Q, exceptionally low-loss filtering structures built directly into waveguide cavities. Capable of handling massive power levels found in radar systems and satellite communication downlinks.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Filters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  {
    id: 55,
    productId: "waveguide-loads",
    name: "Waveguide Loads",
    description: "High-power microwave absorbing elements designed to terminate a waveguide transmission line with perfectly matched impedance, safely converting unused microwave energy into heat to prevent reflections.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Loads.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  //RF Switching & Signal Routing
  {
    id: 56,
    productId: "rf-switches-multi-throw",
    name: "RF Switches (SPDT, SP4T, SP6T)",
    description: "Multi-port components used to actively route RF signals between different paths (e.g., Single Pole Double Throw). Crucial for switching between multiple antennas or different transceiver channels.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching & Signal Routing/RF Switches (SPDT, SP4T, SP6T).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Switching & Signal Routing",
  },
  {
    id: 57,
    productId: "solid-state-rf-switches",
    name: "Solid-State RF Switches",
    description: "High-speed, highly reliable signal switches utilizing PIN diodes or FET technology. They offer microsecond switching speeds and extremely long operational lifespans with no physical moving parts.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching & Signal Routing/Solid-State RF Switches.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Switching & Signal Routing",
  },
  {
    id: 58,
    productId: "electromechanical-rf-switches",
    name: "Electromechanical RF Switches",
    description: "Relay-based coaxial switches featuring physical moving metallic contacts. They provide superior port-to-port isolation, excellent power handling, and extremely low insertion loss compared to solid-state alternatives.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching & Signal Routing/Electromechanical RF Switches.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Switching & Signal Routing",
  },



  // EMC / EMI Test Chambers
  {
    id: 59,
    productId: "anechoic-chambers",
    name: "Anechoic Chambers",
    description: "Relay-based coaxial switches featuring physical moving metallic contacts. They provide superior port-to-port isolation, excellent power handling, and extremely low insertion loss compared to solid-state alternatives.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Anechoic Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 60,
    productId: "semi-anechoic-chambers",
    name: "Semi-Anechoic Chambers",
    description: "The industry standard for radiated emissions and immunity testing. Features a highly reflective metallic ground plane with RF absorbers on the walls and ceiling, compliant with global FCC and CISPR standards.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Semi-Anechoic Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 61,
    productId: "reverberation-chambers",
    name: "Reverberation Chambers",
    description: "Specialized, highly reflective testing environments that utilize motorized metallic tuners to stir the electromagnetic field, creating a statistically uniform RF environment for high field-strength immunity testing.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Reverberation Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 62,
    productId: "shielded-emc-chambers",
    name: "Shielded EMC Chambers",
    description: "Solid metallic enclosures acting as Faraday cages. They prevent external ambient RF interference from entering the test environment and stop internal high-power test signals from leaking out.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Shielded EMC Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 63,
    productId: "thermal-chambers",
    name: "Thermal Chambers",
    description: "Precision temperature-controlled enclosures designed to subject electronic devices, PCBs, and batteries to extreme heat and cold stress while simultaneously monitoring performance.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Thermal chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 64,
    productId: "environmental-chambers",
    name: "Environmental Chambers",
    description: "Advanced climatic testing systems that strictly control temperature, humidity, and sometimes vibration. Essential for comprehensive environmental stress screening (ESS) and product lifecycle validation.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Environmental chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 65,
    productId: "multi-meter-emc-test-chambers",
    name: "1/3/5/10 Meter EMC Test Chambers",
    description: "Standardized semi-anechoic chambers sized specifically to accommodate test measurement distances of 1, 3, 5, or 10 meters between the antenna and the equipment under test (EUT), as dictated by international compliance standards.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/1,3,5,10  Meter EMC Test Chamber.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },

  //RF Shielded Enclosures & Shield Boxes
  {
    id: 66,
    productId: "rf-shield-boxes-wireless-testing",
    name: "RF Shield Boxes for Wireless Device Testing",
    description: "Compact, highly isolated enclosures tailored for testing smartphones, Wi-Fi routers, and IoT devices. They block out local cellular and Wi-Fi networks to ensure accurate, interference-free protocol testing.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/RF Shield Boxes for Wireless Device Testing.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  {
    id: 67,
    productId: "shielded-test-enclosures",
    name: "Shielded Test Enclosures",
    description: "Medium-sized isolated cabinets built to house sensitive electronics, medical equipment, or receiver boards to block ambient electromagnetic noise during sensitive calibration and diagnostic processes.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/Shielded Test Enclosures.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  {
    id: 68,
    productId: "rack-mounted-shielded-cabinets",
    name: "Rack Mounted Shielded Cabinets",
    description: "Standard 19-inch equipment racks fully enclosed in RF-blocking material. Allows for the secure, isolated integration of amplifiers, signal generators, and automated test equipment (ATE) within a noisy lab environment.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/Rack Mounted Shielded Cabinets.jpg",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  {
    id: 69,
    productId: "rf-isolation-test-boxes",
    name: "RF Isolation Test Boxes",
    description: "Benchtop testing boxes featuring highly filtered I/O panels (USB, Ethernet, DC power). These allow data and power to pass into the box while maintaining a strictly isolated internal RF environment.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/RF Isolation Test Boxes.jpg",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  {
    id: 70,
    productId: "production-line-shielded-chambers",
    name: "Production Line Shielded Test Chambers",
    description: "Rugged, pneumatically operated shielding boxes integrated directly into manufacturing conveyor lines. Designed for fast, high-volume automated quality assurance (QA) testing of wireless products.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/Production Line Shielded Test Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  //RF Scanner Systems
  {
    id: 71,
    productId: "rf-scanner-systems",
    name: "RF Scanner Systems",
    description: "Automated near-field robotic scanning systems that map electromagnetic emissions directly across the surface of a PCB or device. Visually identifies EMI hotspots and design flaws to aid in rapid debugging.",
    image: "/images/product/Test & Measurement Solutions/RF Scanner Systems/RF Scanner Systems.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Scanner Systems",
  },
  //Desktop EMC Test Chambers
  {
    id: 72,
    productId: "desktop-emc-test-chambers",
    name: "Desktop EMC Test Chambers",
    description: "Miniaturized, space-saving shielding solutions designed to sit directly on an engineer's workbench. Provides a convenient, isolated space for early-stage EMI pre-compliance testing and troubleshooting.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching & Signal Routing/Electromechanical RF Switches.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "Desktop EMC Test Chambers",
  },
  //Microwave Absorber Materials
  {
    id: 73,
    productId: "polyurethane-microwave-absorbers",
    name: "Polyurethane Based Microwave Absorbers",
    description: "Carbon-loaded polyurethane foam, typically shaped into pyramids or wedges. Designed to highly absorb and dissipate high-frequency electromagnetic energy, significantly reducing signal reflections inside test chambers.",
    image: "/images/product/Test & Measurement Solutions/Microwave Absorber Materials/Polyurethane Based Microwave Absorbers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "Microwave Absorber Materials",
  },





  //MIC – Microwave Thin Film Circuits
  {
    id: 74,
    productId: "mic-microwave-thin-film-circuits",
    name: "MIC – Microwave Thin Film Circuits",
    description: "Precision thin-film circuitry deposited on high-quality ceramic or quartz substrates. Offers ultra-precise resistor and conductor patterns designed for high-frequency microwave applications requiring extremely low loss and strict dimensional tolerances.",
    image: "/images/product/RF, Microwave & Electronic Components Thin Film Circuits/MIC – Microwave Thin Film Circuits/MIC – Microwave Thin Film Circuits.jpg",
    categoryId: "RF, Microwave & Electronic Components Thin Film Circuits",
    subcategoryId: "MIC Microwave Thin Film Circuits",
  },
  {
    id: 75,
    productId: "rf-microwave-integrated-circuits",
    name: "RF & Microwave Integrated Circuits",
    description: "Miniaturized active and passive RF components integrated onto a single semiconductor or dielectric substrate. Delivers highly reliable amplification, mixing, and signal processing in a compact footprint for advanced radar and telecommunications.",
    image: "/images/product/RF, Microwave & Electronic Components Thin Film Circuits/MIC – Microwave Thin Film Circuits/RF & Microwave Integrated Circuits.jpg",
    categoryId: "RF, Microwave & Electronic Components Thin Film Circuits",
    subcategoryId: "MIC Microwave Thin Film Circuits",
  },
  //Inductors
  {
    id: 76,
    productId: "microwave-inductors",
    name: "Microwave Inductors",
    description: "High-Q, wire-wound or thin-film chip inductors engineered specifically to maintain high self-resonant frequencies (SRF). Provides exceptionally stable inductance values crucial for demanding RF impedance matching and choke applications.",
    image: "/images/product/RF, Microwave & Electronic Components Thin Film Circuits/Inductors/Microwave Inductors.jpg",
    categoryId: "RF, Microwave & Electronic Components Thin Film Circuits",
    subcategoryId: "Inductors",
  },
  //Capacitors
  {
    id: 77,
    productId: "quartz-capacitors",
    name: "Quartz Capacitors",
    description: "Ultra-stable capacitors utilizing precision quartz dielectrics. Renowned for their exceptionally low loss tangent and minimal capacitance shift over extreme temperature variations, making them perfect for sensitive timing and filtering circuits.",
    image: "/images/product/RF, Microwave & Electronic Components Thin Film Circuits/Capacitors/Quartz Capacitors.png",
    categoryId: "RF, Microwave & Electronic Components Thin Film Circuits",
    subcategoryId: "Capacitors",
  },

  // ================= RF & Microwave Components and Solutions =================
  // RF Connectors & Adapters
  {
    id: 1,
    productId: "SMA-1001",
    name: "Standard SMA Male Connector",
    description: "High-frequency SubMiniature version A (SMA) coaxial RF connector with a threaded interface. Designed for reliable performance from DC to 18 GHz. Commonly used in telecommunications, Wi-Fi antennas, and radio frequency systems",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/SMA Connectors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 2,
    productId: "N-TYPE-M-11G",
    name: "N-Type Male Connector",
    description: "Durable, weatherproof, medium-size RF connector featuring a threaded coupling mechanism. Excellent for low-frequency, high-power applications up to 11 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/N-Type Connectors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 3,
    productId: "BNC-M-4G",
    name: "BNC Male Connector",
    description: "Quick connect/disconnect RF connector featuring a secure bayonet mount. Widely used in video, radio, and laboratory test equipment operating up to 4 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/BNC Connectors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 4,
    productId: "TNC-M-11G",
    name: "TNC Male Connector",
    description: "A threaded version of the BNC connector offering superior stability and reliable performance in high-vibration environments. Operates effectively up to 11 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/TNC Connectors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 5,
    productId: "SMP-F-40G",
    name: "SMP / SMPM Female Connector",
    description: "Subminiature push-on connector designed for high-density, board-to-board applications. SMP operates up to 40 GHz, while the smaller SMPM extends up to 65 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/SMP  SMPM Connectors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 6,
    productId: "MMCX-M-6G",
    name: "MMCX / MCX Male Connector",
    description: "Micro-miniature coaxial connectors featuring a snap-on coupling design. Ideal for space-constrained applications like GPS and Wi-Fi hardware up to 6 GHz",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/MMCX  MCX Connectors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 7,
    productId: "K-TYPE-292-40G",
    name: "2.92 mm (K-Type) Precision Connector",
    description: "High-frequency precision connector operational up to 40 GHz. Features a thick outer wall for durability and is mechanically intermateable with SMA and 3.5mm connectors.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/2.92 mm (K-Type) Precision.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 8,
    productId: "24MM-M-50G",
    name: "2.4 mm Male Connector",
    description: "Rugged precision connector engineered for use up to 50 GHz. Mechanically incompatible with SMA to prevent accidental damage; widely used in aerospace and test labs",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/2.4 mm Connectors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 9,
    productId: "ADPT-BS-SMA-N",
    name: "RF Adapter (Between-Series / Same-Series)",
    description: "Precision RF adapter used for seamlessly transitioning between different connector series (e.g., SMA to N-Type) or changing genders within the same series",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/RF Adapters (Same-Series -.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },
  {
    id: 10,
    productId: "ADPT-RA-SMA-M-F",
    name: "Right-Angle RF Adapter",
    description: "90-degree RF adapter used to cleanly route cables in tight enclosures without bending the coaxial cable beyond its minimum bend radius, preserving signal integrity.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Connectors & Adapters/Right-Angle RF Adapters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Connectors & Adapters",
  },

  //RF Cable & Interconnect Solutions
  {
    id: 11,
    productId: "CBL-ASSY-STD-1M",
    name: "Standard RF Cable Assembly",
    description: "Pre-assembled coaxial cable with factory-terminated RF connectors. Rigorously tested for insertion loss and VSWR to ensure plug-and-play reliability out of the box",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/RF Cable Assemblies.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 12,
    productId: "CBL-LL-LMR400",
    name: "Low-Loss RF Cable",
    description: "High-performance coaxial cable engineered with specialized shielding and dielectric materials to significantly minimize signal attenuation over long cable runs",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Low-Loss RF Cables.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 13,
    productId: "CBL-FLEX-RG316",
    name: "Flexible RF Cable",
    description: "Highly pliable coaxial cable designed for dynamic applications or complex internal routing through tight chassis where frequent or sharp bending is required",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Flexible RF Cables.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 14,
    productId: "semi-rigid-rf-cables",
    name: "Semi-Rigid RF Cables",
    description: "High-quality RF cable solutions designed for low-loss signal transmission and high-frequency performance in demanding environments.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Semi-Rigid RF Cables.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 15,
    productId: "phase-stable-rf-cables",
    name: "Phase-Stable RF Cables",
    description: "High-quality RF cable solutions designed for low-loss signal transmission and high-frequency performance in demanding environments.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/Phase-Stable RF Cables.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  {
    id: 16,
    productId: "rf-coaxial-bulk-cables",
    name: "RF Coaxial Bulk Cables (RG58, RG174, RG316, RG400)",
    description: "High-quality RF cable solutions designed for low-loss signal transmission and high-frequency performance in demanding environments.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Cable & Interconnect Solutions/RF Coaxial Bulk Cables (RG58, RG174, RG316, RG400).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Cable & Interconnect Solutions",
  },
  // 3. RF Signal Conditioning Components
  {
    id: 17,
    productId: "rf-attenuators-fixed",
    name: "RF Attenuators Fixed",
    description: "Passive components that reduce the power level of an RF signal by a precise, unchangeable amount (e.g., 3dB, 10dB) while maintaining characteristic impedance to protect sensitive receivers and improve matching.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Attenuators Fixed,.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 18,
    productId: "rf-attenuators-variable",
    name: "RF Attenuators Variable",
    description: "Components that allow for manual, continuous, or stepped adjustment of signal attenuation levels, highly useful for laboratory testing, calibration, and dynamic range optimization.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Attenuators  Variable.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 19,
    productId: "rf-attenuators-programmable",
    name: "RF Attenuators Programmable",
    description: "Digitally controlled solid-state or relay-based attenuators that enable automated, high-speed adjustment of RF signal strength via software, essential for automated test equipment (ATE) setups.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Attenuators Programmable.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 20,
    productId: "rf-equalizers",
    name: "RF Equalizers",
    description: "Devices designed to compensate for frequency-dependent amplitude distortion (such as high-frequency rolloff in long cable runs) by applying an inverse frequency response to ensure a flat signal profile.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Equalizers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 21,
    productId: "rf-limiters",
    name: "RF Limiters",
    description: "Crucial protective components that allow low-level signals to pass with minimal loss while heavily attenuating high-power RF spikes to prevent damage to sensitive downstream components like low-noise amplifiers (LNAs).",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Limiters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 22,
    productId: "rf-terminations-loads",
    name: "RF Terminations / RF Loads",
    description: "Precision resistive components used to safely absorb and dissipate RF energy at the end of an open transmission line or unused port, preventing signal reflection and standing waves.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/RF Terminations , RF Loads.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 23,
    productId: "dc-blocks",
    name: "DC Blocks",
    description: "Coaxial components that utilize internal series capacitors to block unwanted direct current (DC) and low-frequency audio signals while allowing high-frequency RF signals to pass with minimal insertion loss.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/DC Blocks.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  {
    id: 24,
    productId: "bias-tees",
    name: "Bias Tees",
    description: "Three-port network components used to inject DC power into an RF transmission line, allowing you to power remote active components (like mast-mounted amplifiers or antennas) without disrupting the main RF signal path.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Signal Conditioning Components/Bias Tees.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Signal Conditioning Components",
  },
  // 4. RF Power Management Solutions
  {
    id: 25,
    productId: "power-dividers-multi-way",
    name: "Power Dividers Multi-Way Power Dividers (2-Way / 4-Way / 8-Way)",
    description: "Passive Wilkinson or resistive devices that evenly split a single input RF signal into multiple output paths, providing high port-to-port isolation and excellent phase and amplitude balance.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/Power Dividers  Multi-Way Power Dividers (2-Way , 4-Way , 8-Way).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },
  {
    id: 26,
    productId: "power-combiners",
    name: "Power Combiners",
    description: "Networks designed to efficiently merge multiple RF input signals into a single output path, commonly utilized in high-power solid-state amplifier architectures or complex antenna combining systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/Power Combiners.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },
  {
    id: 27,
    productId: "rf-power-sensors",
    name: "RF Power Sensors",
    description: "Highly accurate measurement instruments featuring diode or thermocouple detectors that convert RF power into a measurable DC voltage or digital signal, critical for monitoring and calibrating transmitter output.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/RF Power Sensors.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },
  {
    id: 28,
    productId: "high-power-rf-loads-terminations",
    name: "High-Power RF Loads and Terminations",
    description: "Ruggedized terminations equipped with extensive heat sinks (and sometimes forced-air cooling) designed to safely absorb and dissipate large amounts of RF energy—often hundreds or thousands of watts—during transmitter testing.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Power Management Solutions/High-Power RF Loads and Terminations.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Power Management Solutions",
  },

  //RF Passive Components
  {
    id: 29,
    productId: "rf-diplexer",
    name: "RF Diplexer",
    description: "A passive device that multiplexes two distinct frequency bands onto a single common port. Allows a single antenna to transmit and receive simultaneously, or routes signals to separate receivers without interference.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Components/Diplexer.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Components",
  },
  {
    id: 30,
    productId: "rf-triplexer",
    name: "RF Triplexer",
    description: "A sophisticated passive multiplexer that combines or separates three distinct frequency bands to or from a single common port. Essential for multi-band base stations and complex communication hubs.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Components/Triplexer.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Components",
  },
  {
    id: 31,
    productId: "band-pass-filters",
    name: "Band Pass Filters",
    description: "Critical signal conditioning components that allow a specific range of frequencies to pass through unattenuated while heavily rejecting (attenuating) all frequencies outside that designated band.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Components/Band Pass Filters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Components",
  },
  {
    id: 32,
    productId: "rf-waveguide",
    name: "RF Waveguide",
    description: "Hollow metallic pipes (rectangular or circular) used to direct high-frequency electromagnetic waves. Operates with exceptionally low loss and high power-handling capability, primarily used in radar and microwave transmitter systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Components/Waveguide.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Components",
  },
  //RF Amplifiers
  {
    id: 33,
    productId: "low-noise-amplifiers-lna",
    name: "Low Noise Amplifiers (LNA)",
    description: "Crucial first-stage receiver components designed to amplify very weak RF signals captured by an antenna while adding the absolute minimum amount of thermal noise to the signal path.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Low Noise Amplifiers (LNA).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 34,
    productId: "power-amplifiers-pa",
    name: "Power Amplifiers (PA)",
    description: "High-output devices engineered to boost low-level RF signals to the high power levels required for transmission through an antenna, maximizing range and maintaining signal integrity.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Power Amplifiers (PA).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 35,
    productId: "broadband-amplifiers",
    name: "Broadband Amplifiers",
    description: "Versatile amplifiers that deliver consistent, flat signal amplification across a wide spectrum of frequencies, ideal for multi-band testing arrays and wideband communication systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Broadband Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 36,
    productId: "variable-gain-amplifiers",
    name: "Variable Gain Amplifiers",
    description: "Amplifiers featuring dynamically adjustable gain levels controlled by a voltage or digital interface. Essential for maintaining consistent output in automatic gain control (AGC) loops.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Variable Gain Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 37,
    productId: "microwave-amplifiers",
    name: "Microwave Amplifiers",
    description: "Specialized active components specifically tuned and designed to boost signals in the microwave frequency bands (typically 1 GHz to 30 GHz and beyond).",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Microwave Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 38,
    productId: "gan-power-amplifiers",
    name: "GaN Power Amplifiers (Gallium Nitride)",
    description: "Cutting-edge amplifiers utilizing Gallium Nitride semiconductor technology to deliver exceptionally high output power, superior efficiency, and excellent thermal conductivity in a compact footprint.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/GaN Power Amplifiers (Gallium Nitride Amplifiers).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 39,
    productId: "high-power-rf-amplifiers",
    name: "High-Power RF Amplifiers",
    description: "Heavy-duty amplification systems designed to safely output hundreds or thousands of watts. Often equipped with advanced cooling mechanisms for radar, jamming, and broadcast applications.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/High-Power RF Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  {
    id: 40,
    productId: "wideband-microwave-amplifiers",
    name: "Wideband Microwave Amplifiers",
    description: "High-frequency amplifiers offering broadband performance that extends deep into the microwave spectrum, highly suitable for electronic warfare (EW) and advanced test instrumentation.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Amplifiers/Wideband Microwave Amplifiers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Amplifiers",
  },
  //RF Frequency Control Components
  {
    id: 41,
    productId: "rf-phase-shifters",
    name: "Phase Shifters",
    description: "Precision devices that alter the transmission phase angle of an RF signal while keeping its amplitude constant. Critical for electronic beam steering in phased array radar and smart antenna systems.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Frequency Control Components/Phase Shifters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Frequency Control Components",
  },
  //RF Passive Microwave Components
  {
    id: 42,
    productId: "directional-couplers",
    name: "Directional Couplers",
    description: "Four-port passive devices that safely sample a small, precise amount of forward or reverse RF power for measurement and monitoring purposes without disrupting the main signal transmission line.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Directional Couplers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 43,
    productId: "hybrid-couplers",
    name: "Hybrid Couplers (90° / 180° Hybrids)",
    description: "Specialized couplers that evenly split an input signal into two distinct outputs with a precise phase difference (90 or 180 degrees). Heavily utilized in balanced amplifiers and phase comparators.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Hybrid Couplers (90° , 180° Hybrids).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 44,
    productId: "impedance-matching-pads",
    name: "Impedance Matching Pads",
    description: "Passive resistive networks designed to smoothly transition between different characteristic line impedances (e.g., from 50-ohm to 75-ohm) while minimizing signal reflections and standing waves.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Impedance Matching Pads.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 45,
    productId: "rf-transformers",
    name: "RF Transformers",
    description: "Magnetic components used for impedance matching, DC ground isolation, and voltage step-up/step-down in RF circuits, ensuring maximum power transfer between mismatched amplifier stages.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/RF Transformers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 46,
    productId: "rf-baluns",
    name: "Baluns (Balanced-to-Unbalanced Transformers)",
    description: "Specialized transformers that properly interface unbalanced transmission lines (like coaxial cables) with balanced loads (like dipole antennas), preventing unwanted common-mode RF currents.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/aluns (Balanced-to-Unbalanced Transformers).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 47,
    productId: "low-pass-filters-lpf",
    name: "Low-Pass Filters (LPF)",
    description: "Filters designed to allow signals below a specified cutoff frequency to pass through with minimal loss, while heavily rejecting (attenuating) higher-frequency noise, spurs, and harmonics.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Low-Pass Filters (LPF).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 48,
    productId: "high-pass-filters-hpf",
    name: "High-Pass Filters (HPF)",
    description: "Filters that block low-frequency signals and unwanted DC currents while allowing high-frequency RF signals above a designated cutoff point to pass through efficiently.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/High-Pass Filters (HPF).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 49,
    productId: "band-pass-filters-bpf",
    name: "Band-Pass Filters (BPF)",
    description: "Precision filter networks that permit only a specific range of frequencies to pass, while heavily attenuating signals both above and below the desired operating frequency band.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Band-Pass Filters (BPF).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  {
    id: 50,
    productId: "band-stop-filters",
    name: "Band-Stop Filters",
    description: "Highly selective filters (often called notch filters) designed to strictly reject or 'notch out' a specific narrow frequency band—such as an interfering carrier signal—while allowing all other frequencies to pass.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Passive Microwave Components/Band-Stop Filters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Passive Microwave Components",
  },
  //Waveguide and High-Frequency Components
  {
    id: 51,
    productId: "waveguide-adapters",
    name: "Waveguide Adapters",
    description: "Precision transitional components that allow high-frequency RF energy to move smoothly and efficiently between a hollow rectangular waveguide structure and a standard coaxial cable interface.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Adapters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  {
    id: 52,
    productId: "waveguide-bends",
    name: "Waveguide Bends",
    description: "Precision-machined, curved waveguide sections (available in E-plane or H-plane sweeps) used to alter the direction of a waveguide run without causing significant signal reflection or insertion loss.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Bends.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  {
    id: 53,
    productId: "waveguide-couplers",
    name: "Waveguide Couplers",
    description: "Flanged waveguide sections featuring secondary sampling ports. Designed to accurately sample high-power microwave energy traveling through the primary waveguide path for diagnostic monitoring.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Couplers.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  {
    id: 54,
    productId: "waveguide-filters",
    name: "Waveguide Filters",
    description: "High-Q, exceptionally low-loss filtering structures built directly into waveguide cavities. Capable of handling massive power levels found in radar systems and satellite communication downlinks.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Filters.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  {
    id: 55,
    productId: "waveguide-loads",
    name: "Waveguide Loads",
    description: "High-power microwave absorbing elements designed to terminate a waveguide transmission line with perfectly matched impedance, safely converting unused microwave energy into heat to prevent reflections.",
    image: "/images/product/RF & Microwave Components and Solutions/Waveguide and High-Frequency Components/Waveguide Loads.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "Waveguide and High-Frequency Components",
  },
  //RF Switching & Signal Routing
  {
    id: 56,
    productId: "rf-switches-multi-throw",
    name: "RF Switches (SPDT, SP4T, SP6T)",
    description: "Multi-port components used to actively route RF signals between different paths (e.g., Single Pole Double Throw). Crucial for switching between multiple antennas or different transceiver channels.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching & Signal Routing/RF Switches (SPDT, SP4T, SP6T).png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Switching & Signal Routing",
  },
  {
    id: 57,
    productId: "solid-state-rf-switches",
    name: "Solid-State RF Switches",
    description: "High-speed, highly reliable signal switches utilizing PIN diodes or FET technology. They offer microsecond switching speeds and extremely long operational lifespans with no physical moving parts.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching & Signal Routing/Solid-State RF Switches.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Switching & Signal Routing",
  },
  {
    id: 58,
    productId: "electromechanical-rf-switches",
    name: "Electromechanical RF Switches",
    description: "Relay-based coaxial switches featuring physical moving metallic contacts. They provide superior port-to-port isolation, excellent power handling, and extremely low insertion loss compared to solid-state alternatives.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching & Signal Routing/Electromechanical RF Switches.png",
    categoryId: "RF & Microwave Components and Solutions",
    subcategoryId: "RF Switching & Signal Routing",
  },



  // ================= Test & Measurement Solutions =================



  // EMC / EMI Test Chambers
  {
    id: 59,
    productId: "anechoic-chambers",
    name: "Anechoic Chambers",
    description: "Relay-based coaxial switches featuring physical moving metallic contacts. They provide superior port-to-port isolation, excellent power handling, and extremely low insertion loss compared to solid-state alternatives.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Anechoic Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 60,
    productId: "semi-anechoic-chambers",
    name: "Semi-Anechoic Chambers",
    description: "The industry standard for radiated emissions and immunity testing. Features a highly reflective metallic ground plane with RF absorbers on the walls and ceiling, compliant with global FCC and CISPR standards.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Semi-Anechoic Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 61,
    productId: "reverberation-chambers",
    name: "Reverberation Chambers",
    description: "Specialized, highly reflective testing environments that utilize motorized metallic tuners to stir the electromagnetic field, creating a statistically uniform RF environment for high field-strength immunity testing.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Reverberation Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 62,
    productId: "shielded-emc-chambers",
    name: "Shielded EMC Chambers",
    description: "Solid metallic enclosures acting as Faraday cages. They prevent external ambient RF interference from entering the test environment and stop internal high-power test signals from leaking out.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Shielded EMC Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 63,
    productId: "thermal-chambers",
    name: "Thermal Chambers",
    description: "Precision temperature-controlled enclosures designed to subject electronic devices, PCBs, and batteries to extreme heat and cold stress while simultaneously monitoring performance.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Thermal chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 64,
    productId: "environmental-chambers",
    name: "Environmental Chambers",
    description: "Advanced climatic testing systems that strictly control temperature, humidity, and sometimes vibration. Essential for comprehensive environmental stress screening (ESS) and product lifecycle validation.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/Environmental chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },
  {
    id: 65,
    productId: "multi-meter-emc-test-chambers",
    name: "1/3/5/10 Meter EMC Test Chambers",
    description: "Standardized semi-anechoic chambers sized specifically to accommodate test measurement distances of 1, 3, 5, or 10 meters between the antenna and the equipment under test (EUT), as dictated by international compliance standards.",
    image: "/images/product/Test & Measurement Solutions/EMC  EMI Test Chambers/1,3,5,10  Meter EMC Test Chamber.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "EMC / EMI Test Chambers",
  },

  //RF Shielded Enclosures & Shield Boxes
  {
    id: 66,
    productId: "rf-shield-boxes-wireless-testing",
    name: "RF Shield Boxes for Wireless Device Testing",
    description: "Compact, highly isolated enclosures tailored for testing smartphones, Wi-Fi routers, and IoT devices. They block out local cellular and Wi-Fi networks to ensure accurate, interference-free protocol testing.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/RF Shield Boxes for Wireless Device Testing.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  {
    id: 67,
    productId: "shielded-test-enclosures",
    name: "Shielded Test Enclosures",
    description: "Medium-sized isolated cabinets built to house sensitive electronics, medical equipment, or receiver boards to block ambient electromagnetic noise during sensitive calibration and diagnostic processes.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/Shielded Test Enclosures.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  {
    id: 68,
    productId: "rack-mounted-shielded-cabinets",
    name: "Rack Mounted Shielded Cabinets",
    description: "Standard 19-inch equipment racks fully enclosed in RF-blocking material. Allows for the secure, isolated integration of amplifiers, signal generators, and automated test equipment (ATE) within a noisy lab environment.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/Rack Mounted Shielded Cabinets.jpg",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  {
    id: 69,
    productId: "rf-isolation-test-boxes",
    name: "RF Isolation Test Boxes",
    description: "Benchtop testing boxes featuring highly filtered I/O panels (USB, Ethernet, DC power). These allow data and power to pass into the box while maintaining a strictly isolated internal RF environment.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/RF Isolation Test Boxes.jpg",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  {
    id: 70,
    productId: "production-line-shielded-chambers",
    name: "Production Line Shielded Test Chambers",
    description: "Rugged, pneumatically operated shielding boxes integrated directly into manufacturing conveyor lines. Designed for fast, high-volume automated quality assurance (QA) testing of wireless products.",
    image: "/images/product/Test & Measurement Solutions/RF Shielded Enclosures & Shield Boxes/Production Line Shielded Test Chambers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Shielded Enclosures & Shield Boxes",
  },
  //RF Scanner Systems
  {
    id: 71,
    productId: "rf-scanner-systems",
    name: "RF Scanner Systems",
    description: "Automated near-field robotic scanning systems that map electromagnetic emissions directly across the surface of a PCB or device. Visually identifies EMI hotspots and design flaws to aid in rapid debugging.",
    image: "/images/product/Test & Measurement Solutions/RF Scanner Systems/RF Scanner Systems.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "RF Scanner Systems",
  },
  //Desktop EMC Test Chambers
  {
    id: 72,
    productId: "desktop-emc-test-chambers",
    name: "Desktop EMC Test Chambers",
    description: "Miniaturized, space-saving shielding solutions designed to sit directly on an engineer's workbench. Provides a convenient, isolated space for early-stage EMI pre-compliance testing and troubleshooting.",
    image: "/images/product/RF & Microwave Components and Solutions/RF Switching & Signal Routing/Electromechanical RF Switches.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "Desktop EMC Test Chambers",
  },
  //Microwave Absorber Materials
  {
    id: 73,
    productId: "polyurethane-microwave-absorbers",
    name: "Polyurethane Based Microwave Absorbers",
    description: "Carbon-loaded polyurethane foam, typically shaped into pyramids or wedges. Designed to highly absorb and dissipate high-frequency electromagnetic energy, significantly reducing signal reflections inside test chambers.",
    image: "/images/product/Test & Measurement Solutions/Microwave Absorber Materials/Polyurethane Based Microwave Absorbers.png",
    categoryId: "Test & Measurement Solutions",
    subcategoryId: "Microwave Absorber Materials",
  },



  // ================= RF, Microwave & Electronic Components Thin Film Circuits =================



  //MIC – Microwave Thin Film Circuits
  {
    id: 74,
    productId: "mic-microwave-thin-film-circuits",
    name: "MIC – Microwave Thin Film Circuits",
    description: "Precision thin-film circuitry deposited on high-quality ceramic or quartz substrates. Offers ultra-precise resistor and conductor patterns designed for high-frequency microwave applications requiring extremely low loss and strict dimensional tolerances.",
    image: "/images/product/RF, Microwave & Electronic Components Thin Film Circuits/MIC – Microwave Thin Film Circuits/MIC – Microwave Thin Film Circuits.jpg",
    categoryId: "RF, Microwave & Electronic Components Thin Film Circuits",
    subcategoryId: "MIC Microwave Thin Film Circuits",
  },
  {
    id: 75,
    productId: "rf-microwave-integrated-circuits",
    name: "RF & Microwave Integrated Circuits",
    description: "Miniaturized active and passive RF components integrated onto a single semiconductor or dielectric substrate. Delivers highly reliable amplification, mixing, and signal processing in a compact footprint for advanced radar and telecommunications.",
    image: "/images/product/RF, Microwave & Electronic Components Thin Film Circuits/MIC – Microwave Thin Film Circuits/RF & Microwave Integrated Circuits.jpg",
    categoryId: "RF, Microwave & Electronic Components Thin Film Circuits",
    subcategoryId: "MIC Microwave Thin Film Circuits",
  },
  //Inductors
  {
    id: 76,
    productId: "microwave-inductors",
    name: "Microwave Inductors",
    description: "High-Q, wire-wound or thin-film chip inductors engineered specifically to maintain high self-resonant frequencies (SRF). Provides exceptionally stable inductance values crucial for demanding RF impedance matching and choke applications.",
    image: "/images/product/RF, Microwave & Electronic Components Thin Film Circuits/Inductors/Microwave Inductors.jpg",
    categoryId: "RF, Microwave & Electronic Components Thin Film Circuits",
    subcategoryId: "Inductors",
  },
  //Capacitors
  {
    id: 77,
    productId: "quartz-capacitors",
    name: "Quartz Capacitors",
    description: "Ultra-stable capacitors utilizing precision quartz dielectrics. Renowned for their exceptionally low loss tangent and minimal capacitance shift over extreme temperature variations, making them perfect for sensitive timing and filtering circuits.",
    image: "/images/product/RF, Microwave & Electronic Components Thin Film Circuits/Capacitors/Quartz Capacitors.png",
    categoryId: "RF, Microwave & Electronic Components Thin Film Circuits",
    subcategoryId: "Capacitors",
  },
  /*
  {
    id: 11,
    name: "Step Attenuators",
    image: "/images/products/Step Attenuators.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Attenuators  AND  Equalizers"
  },
  // Coaxial Adapters
  {
    id: 12,
    name: "BNC Male to BNC Female",
    image: "/images/products/BNC Male to BNC Female.webp",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Coaxial Adapters"
  },
  {
    id: 13,
    name: "MCX Male to MCX Female",
    image: "/images/products/MCX Male to MCX Female.png",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Coaxial Adapters"
  },
  {
    id: 14,
    name: "N-Type Male to N-Type Female",
    image: "/images/products/N-Type Male to N-Type Female.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Coaxial Adapters"
  },
  {
    id: 15,
    name: "QMA Male to QMA Female",
    image: "/images/products/QMA Male to QMA Female.webp",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Coaxial Adapters"
  },
  {
    id: 16,
    name: "SMB Male to SMB Female",
    image: "/images/products/SMB Male to SMB Female.webp",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Coaxial Adapters"
  },
  {
    id: 17,
    name: "SMA Male to SMA Female",
    image: "/images/products/SMA Male to SMA Female.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Coaxial Adapters"
  },
  {
    id: 18,
    name: "TNC Male to TNC Female",
    image: "/images/products/TNC Male to TNC Female.webp",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Coaxial Adapters"
  },
  // Couplers
  {
    id: 19,
    name: "Directional Couplers 1",
    image: "/images/products/Directional Couplers 1.png",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Couplers"
  },
  {
    id: 20,
    name: "Hybrid Couplers",
    image: "/images/products/Hybrid Couplers.webp",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Couplers"
  },
  //  Filters
  {
    id: 21,
    name: "Bandpass Filters",
    image: "/images/products/Bandpass Filters.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Filters"
  },
  {
    id: 22,
    name: "Diplexers",
    image: "/images/products/Diplexers.png",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Filters"
  },
  {
    id: 23,
    name: "Highpass Filters",
    image: "/images/products/Highpass Filters.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Filters"
  },
  // Switches
  {
    id: 24,
    name: "High Isolation Switches",
    image: "/images/products/High Isolation Switches.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Switches"
  },
  {
    id: 25,
    name: "High Isolation USB Switches",
    image: "/images/products/High Isolation USB Switches.png",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Switches"
  },
  {
    id: 26,
    name: "High Rel Switches",
    image: "/images/products/High Rel Switches.png",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Switches"
  },
  {
    id: 27,
    name: "Manual Switches",
    image: "/images/products/Manual Switches.webp",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Switches"
  },
  {
    id: 28,
    name: "PIN Diode Switches",
    image: "/images/products/PIN Diode Switches.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "RF & Microwave Components",
    subcategoryId: "Switches"
  },
  // ================= Electronics =================
  // Accessories & Tools
  {
    id: 29,
    name: "Custom Hubs (d-link)",
    image: "/images/products/Custom Hubs (d-link).jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Accessories & Tools"
  },
  {
    id: 30,
    name: "Data Cables",
    image: "/images/products/Data Cables.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Accessories & Tools"
  },
  {
    id: 31,
    name: "Soldering Tools",
    image: "/images/products/Soldering Tools.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Accessories & Tools"
  },
  //  Basic Electronic Components
  {
    id: 32,
    name: "Batteries",
    image: "/images/products/Batteries.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  {
    id: 33,
    name: "Capacitors",
    image: "/images/products/Capacitors.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  {
    id: 34,
    name: "Connectors",
    image: "/images/products/Connectors.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  {
    id: 35,
    name: "Diodes",
    image: "/images/products/Diodes.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  {
    id: 36,
    name: "ICs (Integrated Circuits)",
    image: "/images/products/ICs (Integrated Circuits).jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  {
    id: 37,
    name: "LEDs",
    image: "/images/products/LEDs.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  {
    id: 38,
    name: "Relays",
    image: "/images/products/Relays.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  {
    id: 39,
    name: "Resistors",
    image: "/images/products/Resistors.png",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  {
    id: 40,
    name: "Transistors",
    image: "/images/products/Transistors.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  {
    id: 41,
    name: "Voltage Regulators",
    image: "/images/products/Voltage Regulators.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Basic Electronic Components"
  },
  // Development Boards & Microcontrollers
  {
    id: 42,
    name: "Arduino Boards",
    image: "/images/products/Arduino Boards.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Development Boards & Microcontrollers"
  },
  {
    id: 43,
    name: "Development Boards",
    image: "/images/products/Development Boards.jpeg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Development Boards & Microcontrollers"
  },
  {
    id: 44,
    name: "ESP 32",
    image: "/images/products/ESP 32.png",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Development Boards & Microcontrollers"
  },
  {
    id: 45,
    name: "Microcontrollers",
    image: "/images/products/Microcontrollers.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Development Boards & Microcontrollers"
  },
  {
    id: 46,
    name: "Raspberry Pi",
    image: "/images/products/Raspberry Pi.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Development Boards & Microcontrollers"
  },
  // Displays & input Devices
  {
    id: 47,
    name: "Keypads",
    image: "/images/products/Keypads.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Displays & input Devices"
  },
  {
    id: 48,
    name: "LCD Displays",
    image: "/images/products/LCD Displays.gif",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Displays & input Devices"
  },
  // Sensors
  {
    id: 49,
    name: "Gas Sensors",
    image: "/images/products/Gas Sensors.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Sensors"
  },
  {
    id: 50,
    name: "Motion Sensors",
    image: "/images/products/Motion Sensors.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Sensors"
  },
  {
    id: 51,
    name: "Temperature Sensors",
    image: "/images/products/Temperature Sensors.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Sensors"
  },
  //  Wireless and Communication Modules
  {
    id: 52,
    name: "Bluetooth Modules",
    image: "/images/products/Bluetooth Modules.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Wireless and Communication Modules"
  },
  {
    id: 53,
    name: "GSM Modules",
    image: "/images/products/GSM Modules.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Wireless and Communication Modules"
  },
  {
    id: 54,
    name: "Other Wireless Modules",
    image: "/images/products/Other Wireless Modules.jpg",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Wireless and Communication Modules"
  },
  {
    id: 55,
    name: "RFID Modules",
    image: "/images/products/RFID Modules.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Wireless and Communication Modules"
  },
  {
    id: 56,
    name: "WiFi Modules",
    image: "/images/products/WiFi Modules.webp",
    bgColor: "bg-indigo-200",
    categoryId: "Electronics",
    subcategoryId: "Wireless and Communication Modules"
  },
 
  // ================= Rapid Control Prototyping =================
  // Embedded Processors & Microcontrollers
  {
    id: 57,
    name: "8-Slot Behemoth: cRIO-9036",
    image: "/images/products/Controller, CompactRIO, cRIO-9036, Intel Atom E3825, 1.33GHz, 2Cores, 1GB RAM, 4GB HD, 8Slots, Linux.png",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Embedded Processors & Microcontrollers"
  },
  {
    id: 58,
    name: "4-Slot Compact Version: cRIO-9064",
    image: "/images/products/Controller, CompactRIO, cRIO-9064, Xilinx Zynq-7000, 667 MHz, 2 Cores, 512 MB RAM, 4 Slots, Linux.png",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Embedded Processors & Microcontrollers"
  },
  {
    id: 59,
    name: "NI sbRIO-9607 (OEM Kit)",
    image: "/images/products/Controller, CompactRIO, sbRIO-9607, Xilinx Zynq-7000, 667 MHz, 2 Cores, 512 MB RAM, OEM Kit.png",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Embedded Processors & Microcontrollers"
  },
  {
    id: 60,
    name: "NI sbRIO-9608",
    image: "/images/products/Controller, CompactRIO, sbRIO-9608, Intel Atom E3805, 1.33 GHz, 2 Cores, 1 GB RAM, 4 GB HD, Linux.png",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Embedded Processors & Microcontrollers"
  },
  {
    id: 61,
    name: "TLE9954EQA40XUMA1_DSL",
    image: "/images/products/TLE9954EQA40XUMA1_DSL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Embedded Processors & Microcontrollers"
  },
 
  // Industrial Automation & Control Logic
  {
    id: 62,
    name: "CP1E_series_SPL",
    image: "/images/products/CP1E_series_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Industrial Automation & Control Logic"
  },
  {
    id: 63,
    name: "Industrial Shields",
    image: "/images/products/Industrial Shields.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Industrial Automation & Control Logic"
  },
 
  // Motor Control & Power Electronics
  {
    id: 65,
    name: "CN032-ACSERVOT2LPOCZ_SPL",
    image: "/images/products/CN032-ACSERVOT2LPOCZ_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Motor Control & Power Electronics"
  },
  {
    id: 66,
    name: "MTD-01_SPL",
    image: "/images/products/MTD-01_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Motor Control & Power Electronics"
  },
  {
    id: 67,
    name: "QFN_40_t",
    image: "/images/products/QFN_40_t.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Motor Control & Power Electronics"
  },
  {
    id: 68,
    name: "to-263",
    image: "/images/products/to-263.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Motor Control & Power Electronics"
  },
 
  // Real-Time Control Systems & Hardware
  {
    id: 69,
    name: "3048_SPL",
    image: "/images/products/3048_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Real-Time Control Systems & Hardware"
  },
  {
    id: 70,
    name: "ITP_TI_TSSOP-24_PW_t",
    image: "/images/products/ITP_TI_TSSOP-24_PW_t.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Real-Time Control Systems & Hardware"
  },
  {
    id: 71,
    name: "MIKROE-6559_SPL",
    image: "/images/products/MIKROE-6559_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Real-Time Control Systems & Hardware"
  },
  {
    id: 72,
    name: "TWR-56F8400_BD",
    image: "/images/products/TWR-56F8400_BD.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Real-Time Control Systems & Hardware"
  },
 
 
  // Testing & Validation Frameworks
  {
    id: 73,
    name: "LIQ-DUO-CA_SPL",
    image: "/images/products/LIQ-DUO-CA_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Testing & Validation Frameworks"
  },
  {
    id: 74,
    name: "LIQ-DUO-KIT-1475-CA_SPL",
    image: "/images/products/LIQ-DUO-KIT-1475-CA_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Testing & Validation Frameworks"
  },
  {
    id: 75,
    name: "LIQ-DUO-VFL-LFD-CA_SPL",
    image: "/images/products/LIQ-DUO-VFL-LFD-CA_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Testing & Validation Frameworks"
  },
  {
    id: 76,
    name: "TPM9672FW1523PCEBTOBO1_SPL",
    image: "/images/products/TPM9672FW1523PCEBTOBO1_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "Rapid Control Prototyping",
    subcategoryId: "Testing & Validation Frameworks"
  },
 
  // ====================  ROBOTICS & HUMANOIDS  =========================
  // Actuators & Motion Control Systems
  {
    id: 77,
    name: "HSOP_24_DSL",
    image: "/images/products/HSOP_24_DSL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Actuators & Motion Control Systems"
  },
  // AI & Machine Learning Integration
  {
    id: 78,
    name: "LSM6DSOXTR_SPL",
    image: "/images/products/LSM6DSOXTR_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "AI & Machine Learning Integration"
  },
  // Central Processing Units & Edge AI
  {
    id: 79,
    name: "DFR1172_SPL",
    image: "/images/products/DFR1172_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Central Processing Units & Edge AI"
  },
  {
    id: 80,
    name: "FPC-9107-L2U4-G2R1.1_SPL",
    image: "/images/products/FPC-9107-L2U4-G2R1.1_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Central Processing Units & Edge AI"
  },
  {
    id: 81,
    name: "FPC-9107-P6-G2R1.2_SPL",
    image: "/images/products/FPC-9107-P6-G2R1.2_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Central Processing Units & Edge AI"
  },
  {
    id: 82,
    name: "FPC-9108-L2U4-G3R1.1_SPL",
    image: "/images/products/FPC-9108-L2U4-G3R1.1_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Central Processing Units & Edge AI"
  },
  // Industrial Applications & Manufacturing
  {
    id: 83,
    name: "GS226_SPL",
    image: "/images/products/GS226_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Industrial Applications & Manufacturing"
  },
  {
    id: 84,
    name: "scth625_spl",
    image: "/images/products/scth625_spl.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Industrial Applications & Manufacturing"
  },
  {
    id: 85,
    name: "sctr203_spl",
    image: "/images/products/sctr203_spl.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Industrial Applications & Manufacturing"
  },
  {
    id: 86,
    name: "sctp323_spl",
    image: "/images/products/sctp323_spl.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Industrial Applications & Manufacturing"
  },
  // Mechanical Structure & Materials
  {
    id: 87,
    name: "32752_SPL",
    image: "/images/products/32752_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Mechanical Structure & Materials"
  },
  {
    id: 88,
    name: "LIAC4-22-C_SPL",
    image: "/images/products/LIAC4-22-C_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Mechanical Structure & Materials"
  },
  // Power Management & Battery Systems
  {
    id: 89,
    name: "ITP_TI_VQFN-24_RGE_t",
    image: "/images/products/ITP_TI_VQFN-24_RGE_t.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Power Management & Battery Systems"
  },
  {
    id: 90,
    name: "QFN_12_25_3_MP2665A_SPL",
    image: "/images/products/QFN_12_25_3_MP2665A_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Power Management & Battery Systems"
  },
  {
    id: 91,
    name: "QFN_16_t",
    image: "/images/products/QFN_16_t.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Power Management & Battery Systems"
  },
  {
    id: 92,
    name: "SOIC_8_NEW_SPL",
    image: "/images/products/SOIC_8_NEW_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Power Management & Battery Systems"
  },
  {
    id: 93,
    name: "WLCSP-8_SPL",
    image: "/images/products/WLCSP-8_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Power Management & Battery Systems"
  },
  //   Robotic Sensors & Perception Systems
  {
    id: 94,
    name: "MIKROE-6024_SPL",
    image: "/images/products/MIKROE-6024_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Robotic Sensors & Perception Systems"
  },
  {
    id: 95,
    name: "Oak-D-Lite-AF_SPL",
    image: "/images/products/Oak-D-Lite-AF_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Robotic Sensors & Perception Systems"
  },
  {
    id: 96,
    name: "Oak-D-Lite-FF_SPL",
    image: "/images/products/Oak-D-Lite-FF_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Robotic Sensors & Perception Systems"
  },
  {
    id: 97,
    name: "Oak-D-Pro-AF_FF_SPL",
    image: "/images/products/Oak-D-Pro-AF_FF_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Robotic Sensors & Perception Systems"
  },
  {
    id: 98,
    name: "Oak-D-Pro-PoE-AF_FF_SPL",
    image: "/images/products/Oak-D-Pro-PoE-AF_FF_SPL.webp",
    bgColor: "bg-gray-200",
    categoryId: "ROBOTICS & HUMANOIDS",
    subcategoryId: "Robotic Sensors & Perception Systems"
  },
 
  // ================= RF Shield Boxes =================
  {
    id: 99,
    name: "Miniature Cases – Industrial Diecast, Unpainted",
    image: "/images/products/Miniature Cases – Industrial Diecast, Unpainted 4.92 x 4.92 x 2.95.png",
    bgColor: "bg-blue-200",
    categoryId: "RF Shield Boxes",
    subcategoryId: "Miniature Cases"
  },
  {
    id: 102,
    name: "Miniature Cases – Industrial Diecast Alum wFlange 1.99x1.06x1.99Black",
    image: "/images/products/Miniature Cases – Industrial Diecast Alum wFlange 1.99x1.06x1.99Blac.png",
    bgColor: "bg-blue-200",
    categoryId: "RF Shield Boxes",
    subcategoryId: "Miniature Cases"
  },
  // Enclosures Boxes & Cases
  {
    id: 103,
    name: "Enclosures, Boxes & Cases SHIELDED BOX",
    image: "/images/products/Enclosures, Boxes & Cases SHIELDED BOX.png",
    bgColor: "bg-blue-200",
    categoryId: "RF Shield Boxes",
    subcategoryId: "Enclosures Boxes & Cases"
  },
  {
    id: 104,
    name: "Enclosures, Boxes & Cases SHIELDED BOX 1",
    image: "/images/products/Enclosures, Boxes & Cases SHIELDED BOX 1.png",
    bgColor: "bg-blue-200",
    categoryId: "RF Shield Boxes",
    subcategoryId: "Enclosures Boxes & Cases"
  },
  // Heavy Duty Power Connectors
  {
    id: 105,
    name: "Heavy Duty Power Connectors Front Mounting",
    image: "/images/products/Heavy Duty Power Connectors Front mounting male metal receptacle with O-ring seal and ring nut mount (hex nut available upon request). Complete EMI shielding in the fully mated and locked po.png",
    bgColor: "bg-blue-200",
    categoryId: "RF Shield Boxes",
    subcategoryId: "Heavy Duty Power Connectors"
  },
 
  // ================= Robotics & Automation =================
  // Educational Robotic Kits
  {
    id: 106,
    name: "BALA2Fire Educational Robotic Kit",
    image: "/images/products/Educational Robotic Kits BALA2Fire is a Self Balancing Robot consisting of M5Stack Fire and two wheels..png",
    bgColor: "bg-green-200",
    categoryId: "Robotics & Automation",
    subcategoryId: "Educational Robotic Kits"
  },
  {
    id: 107,
    name: "Devastator Tank Robot Kit",
    image: "/images/products/Educational Robotic Kits Devastator Tank Mobile Platform.png",
    bgColor: "bg-green-200",
    categoryId: "Robotics & Automation",
    subcategoryId: "Educational Robotic Kits"
  },
  {
    id: 108,
    name: "Yuewalker Tracked Robot",
    image: "/images/products/Educational Robotic Kits Yuewalker-Tracked Chassis (Black).png",
    bgColor: "bg-green-200",
    categoryId: "Robotics & Automation",
    subcategoryId: "Educational Robotic Kits"
  },
  {
    id: 109,
    name: "SITCore Experimenter Kit .NET C# for IoT and Robotics",
    image: "/images/products/Educational Robotic Kits SITCore Experimenter Kit for IoT and Robotics.png",
    bgColor: "bg-green-200",
    categoryId: "Robotics & Automation",
    subcategoryId: "Educational Robotic Kits"
  },
  // Robots
  {
    id: 110,
    name: "Rebel Education Kit Robot",
    image: "/images/products/Robots Rebel Education Kit.png",
    bgColor: "bg-green-200",
    categoryId: "Robotics & Automation",
    subcategoryId: "Robots"
  },
  {
    id: 111,
    name: "Robots ReBeL cobot 4 DoF - opensource",
    image: "/images/products/Robots ReBeL cobot 4 DoF - opensource.png",
    bgColor: "bg-green-200",
    categoryId: "Robotics & Automation",
    subcategoryId: "Robots"
  },
  {
    id: 112,
    name: "Robots 2 axis S Delta + Control",
    image: "/images/products/Robots 2 axis S Delta + Control.png",
    bgColor: "bg-green-200",
    categoryId: "Robotics & Automation",
    subcategoryId: "Robots"
  },
  {
    id: 113,
    name: "Robots 7th Axis IO Version 3m",
    image: "/images/products/Robots 7th Axis IO Version 3m.png",
    bgColor: "bg-green-200",
    categoryId: "Robotics & Automation",
    subcategoryId: "Robots"
  },
 
  // ================= Antennas =================
  // Waveguide Antennas
  {
    id: 114,
    name: "WR-102 Waveguide Standard Gain Antenna",
    image: "/images/products/Antennas WR-102 Waveguide Standard Gain Horn Antenna Operating from 7 GHz to 11 GHz with a Nominal 10 dB Gain SMA Female Input.png",
    bgColor: "bg-purple-200",
    categoryId: "Antennas",
    subcategoryId: "Waveguide Antennas"
  },
  {
    id: 115,
    name: "WR-90 Waveguide Standard Gain Antenna",
    image: "/images/products/Antennas WR-90 Waveguide Standard Gain Horn Antenna Operating from 8.2 GHz to 12.4 GHz with a Nominal 20 dB Gain SMA Female Input.png",
    bgColor: "bg-purple-200",
    categoryId: "Antennas",
    subcategoryId: "Waveguide Antennas"
  },
  {
    id: 116,
    name: "WR-28 Waveguide Standard Gain Antenna",
    image: "/images/products/Antennas WR-28 Waveguide Standard Gain Horn Antenna Operating from 26.5 GHz to 40 GHz with a Nominal 20 dB Gain 2.92mm Female Input.png",
    bgColor: "bg-purple-200",
    categoryId: "Antennas",
    subcategoryId: "Waveguide Antennas"
  },
  // Compact Whip Antennas
  {
    id: 117,
    name: "2.4 GHz Compact Whip External Antenna",
    image: "/images/products/Antennas 2.4 GHz Compact Whip External Black RP-SMA Connector.png",
    bgColor: "bg-purple-200",
    categoryId: "Antennas",
    subcategoryId: "Compact Whip Antennas"
  },
  // Cell Screw Mount Antennas
  {
    id: 118,
    name: "Compact Cell Screw Mount External Antenna",
    image: "/images/products/Antennas Compact Cell Screw Mt Ext Outdoor 1m RG-174 Cable SMA.png",
    bgColor: "bg-purple-200",
    categoryId: "Antennas",
    subcategoryId: "Cell Screw Mount Antennas"
  },
  // 5G Cellular Antennas
  {
    id: 119,
    name: "TG.13.5111 5G Sub 1GHz Cellular Antenna",
    image: "/images/products/Antennas TG.13.5111 5G Sub 1GHz Cellular  BLE (617-960 MHz) Terminal Mount Antenna with Fixed SMA(M) Plug Connector.png",
    bgColor: "bg-purple-200",
    categoryId: "Antennas",
    subcategoryId: "5G Cellular Antennas"
  },
 
  // ================= Cables & Harnessing =================
  // Fibre Optic Cable Assemblies
  {
    id: 120,
    name: "Fibre Optic Cable Assemblies MTP24-F",
    image: "/images/products/Fibre Optic Cable Assemblies MTP24-F to 24xLC simplex harness, length 2m.png",
    bgColor: "bg-yellow-200",
    categoryId: "Cables & Harnessing",
    subcategoryId: "Fibre Optic Cable Assemblies"
  },
  {
    id: 121,
    name: "Fibre Optic Cable Assemblies MTP24-F 2",
    image: "/images/products/Fibre Optic Cable Assemblies MTP24-F to 24xLC simplex harness, length 2m    2.png",
    bgColor: "bg-yellow-200",
    categoryId: "Cables & Harnessing",
    subcategoryId: "Fibre Optic Cable Assemblies"
  },
  // Specialised Cables
  {
    id: 122,
    name: "Specialised Cables 3-PIN Cable Harness",
    image: "/images/products/Specialised Cables 3-PIN CABLE HARNESS.png",
    bgColor: "bg-yellow-200",
    categoryId: "Cables & Harnessing",
    subcategoryId: "Specialised Cables"
  },
  // Test Accessories
  {
    id: 123,
    name: "Test Accessories - Other Wire Harness",
    image: "/images/products/Test Accessories - Other Wire Harness - 2x4 Header for Logic 8, Logic Pro 8, Logic Pro 16.png",
    bgColor: "bg-yellow-200",
    categoryId: "Cables & Harnessing",
    subcategoryId: "Test Accessories"
  },
 
  // ================= Resistors & Capacitors =================
  // Current Sense Resistors
  {
    id: 124,
    name: "Current Sense Resistors - SMD",
    image: "/images/products/Current Sense Resistors - SMD.png",
    bgColor: "bg-red-200",
    categoryId: "Resistors & Capacitors",
    subcategoryId: "Current Sense Resistors"
  },
  // Wirewound Resistors
  {
    id: 125,
    name: "Wirewound Resistors - Chassis Mount",
    image: "/images/products/Wirewound Resistors - Chassis Mount 20watt.png",
    bgColor: "bg-red-200",
    categoryId: "Resistors & Capacitors",
    subcategoryId: "Wirewound Resistors"
  },
  // Resistor Networks & Arrays
  {
    id: 126,
    name: "Resistor Networks & Arrays 120ohm 8Pin",
    image: "/images/products/Resistor Networks & Arrays 120ohm 8Pin Bussed.png",
    bgColor: "bg-red-200",
    categoryId: "Resistors & Capacitors",
    subcategoryId: "Resistor Networks & Arrays"
  },
  // Trimmer Resistors
  {
    id: 127,
    name: "Trimmer Resistors",
    image: "/images/products/Trimmer Resistors.png",
    bgColor: "bg-red-200",
    categoryId: "Resistors & Capacitors",
    subcategoryId: "Trimmer Resistors"
  },
  // Ceramic Composition Resistors
  {
    id: 128,
    name: "Ceramic Composition Resistors HPCR 08",
    image: "/images/products/Ceramic Composition Resistors HPCR 0819 A.png",
    bgColor: "bg-red-200",
    categoryId: "Resistors & Capacitors",
    subcategoryId: "Ceramic Composition Resistors"
  },
  // MELF Resistors
  {
    id: 129,
    name: "MELF Resistors",
    image: "/images/products/MELF Resistors.png",
    bgColor: "bg-red-200",
    categoryId: "Resistors & Capacitors",
    subcategoryId: "MELF Resistors"
  },
  */
];