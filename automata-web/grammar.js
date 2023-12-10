import Stack from "./stack.js";

export function initializeGrammar() {
  // objects with the following properties:
  // - values: array of strings
  // - isTerminal: boolean
  // - isRegex: boolean
  // - productions: array of arrays of objects

  const L = {
    // regex
    values: [/^[a-zA-Z]+$/],
    isTerminal: true,
    isRegex: true,
    productions: [],
    name: "L",

    tostring: function () {
      return this.name;
    },
  };

  const NU = {
    // regex
    values: [/^[0-9]+$/],
    isTerminal: true,
    isRegex: true,
    productions: [],
    name: "NU",

    tostring: function () {
      return this.name;
    },
  };

  const B = {
    values: ["true", "false"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "B",

    tostring: function () {
      return this.name;
    },
  };

  const IG = {
    values: ["="],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "IG",

    tostring: function () {
      return this.name;
    },
  };

  const DLR = {
    values: ["$"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "DLR",

    tostring: function () {
      return this.name;
    },
  };

  const CD = {
    values: ['"'],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "CD",

    tostring: function () {
      return this.name;
    },
  };

  const PM = {
    values: [";"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PM",

    tostring: function () {
      return this.name;
    },
  };

  const DP = {
    values: [":"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "DP",

    tostring: function () {
      return this.name;
    },
  };

  const MS = {
    values: ["+"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "MS",

    tostring: function () {
      return this.name;
    },
  };

  const MSD = {
    values: ["++"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "MSD",

    tostring: function () {
      return this.name;
    },
  };

  const CM = {
    values: [","],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "CM",

    tostring: function () {
      return this.name;
    },
  };

  const PT = {
    values: ["."],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PT",

    tostring: function () {
      return this.name;
    },
  };

  const BA = {
    values: ["{"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "BA",

    tostring: function () {
      return this.name;
    },
  };

  const BC = {
    values: ["}"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "BC",

    tostring: function () {
      return this.name;
    },
  };

  const PA = {
    values: ["("],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PA",

    tostring: function () {
      return this.name;
    },
  };

  const PC = {
    values: [")"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PC",

    tostring: function () {
      return this.name;
    },
  };

  const VT = {
    values: ["int", "string", "bool"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "VT",

    tostring: function () {
      return this.name;
    },
  };

  const BOL = {
    values: ["true", "false"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "BOL",

    tostring: function () {
      return this.name;
    },
  };

  const OC = {
    values: ["==", "!=", "<=", ">=", ">", "<"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "OC",

    tostring: function () {
      return this.name;
    },
  };

  const OPC = {
    values: ["&&", "||"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "OPC",

    tostring: function () {
      return this.name;
    },
  };

  const PF = {
    values: ["func"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PF",

    tostring: function () {
      return this.name;
    },
  };

  const PR = {
    values: ["retornar"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PR",

    tostring: function () {
      return this.name;
    },
  };

  const PRP = {
    values: ["repeat"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PRP",

    tostring: function () {
      return this.name;
    },
  };

  const PE = {
    values: ["echo"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PE",

    tostring: function () {
      return this.name;
    },
  };

  const PI = {
    values: ["if"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PI",

    tostring: function () {
      return this.name;
    },
  };

  const PMN = {
    values: ["main"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "PMN",

    tostring: function () {
      return this.name;
    },
  };

  // no terminales

  const UML = {};
  UML.name = "UML";
  UML.values = [];
  UML.isTerminal = false;
  UML.isRegex = false;
  UML.productions = [[L, UML], [L]];

  const UMN = {};
  UMN.name = "UMN";
  UMN.values = [];
  UMN.isTerminal = false;
  UMN.isRegex = false;
  UMN.productions = [[NU, UMN], [NU]];

  const VLN = {};
  VLN.name = "VLN";
  VLN.values = [];
  VLN.isTerminal = false;
  VLN.isRegex = false;
  VLN.productions = [[L, VLN], [NU, VLN], [L], [NU]];

  const VV2 = {};
  VV2.name = "VV2";
  VV2.values = [];
  VV2.isTerminal = false;
  VV2.isRegex = false;
  VV2.productions = [[VLN, CD]];

  const VV1 = {};
  VV1.name = "VV1";
  VV1.values = [];
  VV1.isTerminal = false;
  VV1.isRegex = false;
  VV1.productions = [[PT, UMN]];

  const VV = {};
  VV.name = "VV";
  VV.values = [];
  VV.isTerminal = false;
  VV.isRegex = false;
  VV.productions = [[UMN], [UMN, VV1], [B], [CD, CD], [CD, VV2]];

  const NDVD = {};
  NDVD.name = "NDVD";
  NDVD.values = [];
  NDVD.isTerminal = false;
  NDVD.isRegex = false;
  NDVD.productions = [[UML, VLN], [UML]];

  const NDV1 = {};
  NDV1.name = "NDV1";
  NDV1.values = [];
  NDV1.isTerminal = false;
  NDV1.isRegex = false;
  NDV1.productions = [[L, VLN], [L]];

  const NDV = {};
  NDV.name = "NDV";
  NDV.values = [];
  NDV.isTerminal = false;
  NDV.isRegex = false;
  NDV.productions = [[DLR, NDV1]];

  // •	PDV → VT PDV1
  // •	PDV1 → NDV PDV2 | NDV
  // •	PDV2 → CM PDV

  const PDV = {};

  const PDV2 = {};
  PDV2.name = "PDV2";
  PDV2.values = [];
  PDV2.isTerminal = false;
  PDV2.isRegex = false;
  PDV2.productions = [[CM, PDV]];

  const PDV1 = {};
  PDV1.name = "PDV1";
  PDV1.values = [];
  PDV1.isTerminal = false;
  PDV1.isRegex = false;
  PDV1.productions = [[NDV, PDV2], [NDV]];

  PDV.name = "PDV";
  PDV.values = [];
  PDV.isTerminal = false;
  PDV.isRegex = false;
  PDV.productions = [[VT, PDV1]];



  const PDC = {};

  const PDC3 = {};
  PDC3.name = "PDC3";
  PDC3.values = [];
  PDC3.isTerminal = false;
  PDC3.isRegex = false;
  PDC3.productions = [[OPC, PDC]];

  const PDC2 = {};
  PDC2.name = "PDC2";
  PDC2.values = [];
  PDC2.isTerminal = false;
  PDC2.isRegex = false;
  PDC2.productions = [[VV, PDC3], [NDV, PDC3], [VV], [PDC]];

  const PDC1 = {};
  PDC1.name = "PDC1";
  PDC1.values = [];
  PDC1.isTerminal = false;
  PDC1.isRegex = false;
  PDC1.productions = [[OC, PDC2]];

  PDC.name = "PDC";
  PDC.values = [];
  PDC.isTerminal = false;
  PDC.isRegex = false;
  PDC.productions = [
    [VV, PDC1],
    [NDV, PDC1],
  ];

  const RTV = {};

  const RTV1 = {};
  RTV1.name = "RTV1";
  RTV1.values = [];
  RTV1.isTerminal = false;
  RTV1.isRegex = false;
  RTV1.productions = [[NDV, PM]];

  RTV.name = "RTV";
  RTV.values = [];
  RTV.isTerminal = false;
  RTV.isRegex = false;
  RTV.productions = [[PR, RTV1]];

  const CPB = {};

  const CPB9 = {};
  CPB9.name = "CPB9";
  CPB9.values = [];
  CPB9.isTerminal = false;
  CPB9.isRegex = false;
  CPB9.productions = [[NDV, MSD]];

  const CPB8 = {};
  CPB8.name = "CPB8";
  CPB8.values = [];
  CPB8.isTerminal = false;
  CPB8.isRegex = false;
  CPB8.productions = [[PM, CPB9]];

  const CPB7 = {};
  CPB7.name = "CPB7";
  CPB7.values = [];
  CPB7.isTerminal = false;
  CPB7.isRegex = false;
  CPB7.productions = [[UMN, CPB8]];

  const CPB6 = {};
  CPB6.name = "CPB6";
  CPB6.values = [];
  CPB6.isTerminal = false;
  CPB6.isRegex = false;
  CPB6.productions = [[OC, CPB7]];

  const CPB5 = {};
  CPB5.name = "CPB5";
  CPB5.values = [];
  CPB5.isTerminal = false;
  CPB5.isRegex = false;
  CPB5.productions = [[NDV, CPB6]];

  const CPB4 = {};
  CPB4.name = "CPB4";
  CPB4.values = [];
  CPB4.isTerminal = false;
  CPB4.isRegex = false;
  CPB4.productions = [[PM, CPB5]];

  const CPB3 = {};
  CPB3.name = "CPB3";
  CPB3.values = [];
  CPB3.isTerminal = false;
  CPB3.isRegex = false;
  CPB3.productions = [[UMN, CPB4]];

  const CPB2 = {};
  CPB2.name = "CPB2";
  CPB2.values = [];
  CPB2.isTerminal = false;
  CPB2.isRegex = false;
  CPB2.productions = [[IG, CPB3]];

  const CPB1 = {};
  CPB1.name = "CPB1";
  CPB1.values = [];
  CPB1.isTerminal = false;
  CPB1.isRegex = false;
  CPB1.productions = [[NDV, CPB2]];

  CPB.name = "CPB";
  CPB.values = [];
  CPB.isTerminal = false;
  CPB.isRegex = false;
  CPB.productions = [[VT, CPB1]];

  // declaracion de variables
  //   •	DVS → VT DVS1
  // •	DVS1 → NDV DVS2
  // •	DVS2 → IG DVS3
  // •	DVS3 → VV PM

  const DVS3 = {};
  DVS3.name = "DVS3";
  DVS3.values = [];
  DVS3.isTerminal = false;
  DVS3.isRegex = false;
  DVS3.productions = [[VV, PM]];

  const DVS2 = {};
  DVS2.name = "DVS2";
  DVS2.values = [];
  DVS2.isTerminal = false;
  DVS2.isRegex = false;
  DVS2.productions = [[IG, DVS3]];

  const DVS1 = {};
  DVS1.name = "DVS1";
  DVS1.values = [];
  DVS1.isTerminal = false;
  DVS1.isRegex = false;
  DVS1.productions = [[NDV, DVS2]];

  const DVS = {};
  DVS.name = "DVS";
  DVS.values = [];
  DVS.isTerminal = false;
  DVS.isRegex = false;
  DVS.productions = [[VT, DVS1]];

  //   •	DFS → PF DFS1
  // •	DFS1 → NDVD DFS2
  // •	DFS2 → PA DFS3
  // •	DFS3 → PDV DFS4
  // •	DFS4 → PC DFS5
  // •	DFS5 → DP DFS6
  // •	DFS6 → VT DFS7
  // •	DFS7 → BA DFS8
  // •	DFS8 → RTV BC

  const DFS8 = {};
  DFS8.name = "DFS8";
  DFS8.values = [];
  DFS8.isTerminal = false;
  DFS8.isRegex = false;
  DFS8.productions = [[RTV, BC]];

  const DFS7 = {};
  DFS7.name = "DFS7";
  DFS7.values = [];
  DFS7.isTerminal = false;
  DFS7.isRegex = false;
  DFS7.productions = [[BA, DFS8]];

  const DFS6 = {};
  DFS6.name = "DFS6";
  DFS6.values = [];
  DFS6.isTerminal = false;
  DFS6.isRegex = false;
  DFS6.productions = [[VT, DFS7]];

  const DFS5 = {};
  DFS5.name = "DFS5";
  DFS5.values = [];
  DFS5.isTerminal = false;
  DFS5.isRegex = false;
  DFS5.productions = [[DP, DFS6]];

  const DFS4 = {};
  DFS4.name = "DFS4";
  DFS4.values = [];
  DFS4.isTerminal = false;
  DFS4.isRegex = false;
  DFS4.productions = [[PC, DFS5]];

  const DFS3 = {};
  DFS3.name = "DFS3";
  DFS3.values = [];
  DFS3.isTerminal = false;
  DFS3.isRegex = false;
  DFS3.productions = [[PDV, DFS4]];

  const DFS2 = {};
  DFS2.name = "DFS2";
  DFS2.values = [];
  DFS2.isTerminal = false;
  DFS2.isRegex = false;
  DFS2.productions = [[PA, DFS3]];

  const DFS1 = {};
  DFS1.name = "DFS1";
  DFS1.values = [];
  DFS1.isTerminal = false;
  DFS1.isRegex = false;
  DFS1.productions = [[NDVD, DFS2]];

  const DFS = {};
  DFS.name = "DFS";
  DFS.values = [];
  DFS.isTerminal = false;
  DFS.isRegex = false;
  DFS.productions = [[PF, DFS1]];

  // •	ECH → PE ECH1
  // •	ECH1 → PA ECH2
  // •	ECH2 → NDV ECH3
  // •	ECH3 → PC PM

  const ECH3 = {};
  ECH3.name = "ECH3";
  ECH3.values = [];
  ECH3.isTerminal = false;
  ECH3.isRegex = false;
  ECH3.productions = [[PC, PM]];

  const ECH2 = {};
  ECH2.name = "ECH2";
  ECH2.values = [];
  ECH2.isTerminal = false;
  ECH2.isRegex = false;
  ECH2.productions = [[NDV, ECH3], [VV, ECH3]];

  const ECH1 = {};
  ECH1.name = "ECH1";
  ECH1.values = [];
  ECH1.isTerminal = false;
  ECH1.isRegex = false;
  ECH1.productions = [[PA, ECH2]];

  const ECH = {};
  ECH.name = "ECH";
  ECH.values = [];
  ECH.isTerminal = false;
  ECH.isRegex = false;
  ECH.productions = [[PE, ECH1]];

  // •	CLS → PRP CLS1
  // •	CLS1 → PA CLS2
  // •	CLS2 → CPB CLS3
  // •	CLS3 → PC CLS4
  // •	CLS4 → BA CLS5
  // •	CLS5 → ECH BC

  const CLS5 = {};
  CLS5.name = "CLS5";
  CLS5.values = [];
  CLS5.isTerminal = false;
  CLS5.isRegex = false;
  CLS5.productions = [[ECH, BC]];

  const CLS4 = {};
  CLS4.name = "CLS4";
  CLS4.values = [];
  CLS4.isTerminal = false;
  CLS4.isRegex = false;
  CLS4.productions = [[BA, CLS5]];

  const CLS3 = {};
  CLS3.name = "CLS3";
  CLS3.values = [];
  CLS3.isTerminal = false;
  CLS3.isRegex = false;
  CLS3.productions = [[PC, CLS4]];

  const CLS2 = {};
  CLS2.name = "CLS2";
  CLS2.values = [];
  CLS2.isTerminal = false;
  CLS2.isRegex = false;
  CLS2.productions = [[CPB, CLS3]];

  const CLS1 = {};
  CLS1.name = "CLS1";
  CLS1.values = [];
  CLS1.isTerminal = false;
  CLS1.isRegex = false;
  CLS1.productions = [[PA, CLS2]];

  const CLS = {};
  CLS.name = "CLS";
  CLS.values = [];
  CLS.isTerminal = false;
  CLS.isRegex = false;
  CLS.productions = [[PRP, CLS1]];

  // •	CDL → PI CDL1
  // •	CDL1 → PA CDL2
  // •	CDL2 → PDC CDL3
  // •	CDL3 → PC CDL4
  // •	CDL4 → BA CDL5
  // •	CDL5 → ECH BC

  const CDL5 = {};
  CDL5.name = "CDL5";
  CDL5.values = [];
  CDL5.isTerminal = false;
  CDL5.isRegex = false;
  CDL5.productions = [[ECH, BC]];

  const CDL4 = {};
  CDL4.name = "CDL4";
  CDL4.values = [];
  CDL4.isTerminal = false;
  CDL4.isRegex = false;
  CDL4.productions = [[BA, CDL5]];

  const CDL3 = {};
  CDL3.name = "CDL3";
  CDL3.values = [];
  CDL3.isTerminal = false;
  CDL3.isRegex = false;
  CDL3.productions = [[PC, CDL4]];

  const CDL2 = {};
  CDL2.name = "CDL2";
  CDL2.values = [];
  CDL2.isTerminal = false;
  CDL2.isRegex = false;
  CDL2.productions = [[PDC, CDL3]];

  const CDL1 = {};
  CDL1.name = "CDL1";
  CDL1.values = [];
  CDL1.isTerminal = false;
  CDL1.isRegex = false;
  CDL1.productions = [[PA, CDL2]];

  const CDL = {};
  CDL.name = "CDL";
  CDL.values = [];
  CDL.isTerminal = false;
  CDL.isRegex = false;
  CDL.productions = [[PI, CDL1]];

  //   •	DFM → PF DFM1
  // •	DFM1 → PMN DFM2
  // •	DFM2 → PA DFM3
  // •	DFM3 → PC DFM4
  // •	DFM4 → BA DFM5
  // •	DFM5 → ECH BC

  const DFM5 = {};
  DFM5.name = "DFM5";
  DFM5.values = [];
  DFM5.isTerminal = false;
  DFM5.isRegex = false;
  DFM5.productions = [[ECH, BC]];

  const DFM4 = {};
  DFM4.name = "DFM4";
  DFM4.values = [];
  DFM4.isTerminal = false;
  DFM4.isRegex = false;
  DFM4.productions = [[BA, DFM5]];

  const DFM3 = {};
  DFM3.name = "DFM3";
  DFM3.values = [];
  DFM3.isTerminal = false;
  DFM3.isRegex = false;
  DFM3.productions = [[PC, DFM4]];

  const DFM2 = {};
  DFM2.name = "DFM2";
  DFM2.values = [];
  DFM2.isTerminal = false;
  DFM2.isRegex = false;
  DFM2.productions = [[PA, DFM3]];

  const DFM1 = {};
  DFM1.name = "DFM1";
  DFM1.values = [];
  DFM1.isTerminal = false;
  DFM1.isRegex = false;
  DFM1.productions = [[PMN, DFM2]];

  const DFM = {};
  DFM.name = "DFM";
  DFM.values = [];
  DFM.isTerminal = false;
  DFM.isRegex = false;
  DFM.productions = [[PF, DFM1]];

  const $ = {
    values: ["$"],
    isTerminal: true,
    isRegex: false,
    productions: [],
    name: "$",
  };

  const G = {
    values: [],
    isTerminal: false,
    isRegex: false,
    productions: [[DVS], [DFS], [CLS], [ECH], [CDL], [DFM]],
    name: "G",
  };

  const stack = new Stack();
  stack.push($);
  stack.push(G);

  return stack;
}
