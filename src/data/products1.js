/**
 * Product Data Schema & Store
 * This file contains the primary product data, category definitions, 
 * and subcategory mappings for the application.
 */

// Master list of top-level categories
export const categories = [
  { categoryId: "RF & Microwave Components and Solutions", value: "RF & Microwave Components and Solutions" },
  { categoryId: "Electronics", value: "Electronics" },
  { categoryId: "Rapid Control Prototyping", value: "Rapid Control Prototyping" },
  { categoryId: "RF Shield Boxes", value: "RF Shield Boxes" },
  { categoryId: "Robotics & Automation", value: "Robotics & Automation" },
  { categoryId: "Antennas", value: "Antennas" },
  { categoryId: "Cables & Harnessing", value: "Cables & Harnessing" },
  { categoryId: "Resistors & Capacitors", value: "Resistors & Capacitors" },
];

// Subcategories mapped to their parent categoryId
export const subcategories = [
  // RF & Microwave Components and Solutions
  { subcategoryId: "RF Connectors & Adapters", value: "RF Connectors & Adapters", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/Gain Block Amplifier.webp" },
  { subcategoryId: "RF Cable & Interconnect Solutions", value: "RF Cable & Interconnect Solutions", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Cable & Interconnect Solutions.webp" },
  { subcategoryId: "RF Signal Conditioning Components", value: "RF Signal Conditioning Components", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Signal Conditioning Components.webp" },
  { subcategoryId: "RF Power Management Solutions", value: "RF Power Management Solutions", categoryId: "RF & Microwave Components and Solutions", image: "/images/products/RF Signal Conditioning Components.webp" },

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
];


export const products = [
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
