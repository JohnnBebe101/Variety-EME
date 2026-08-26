export interface ISOEntry {
  id: string;
  standard: string;
  title: string;
  description: string;
  status: string;
}

export const ISO_DATA: ISOEntry[] = [
  { id: "9001", standard: "ISO 9001:2015", title: "Quality Management Systems", description: "Meeting statutory and stakeholder requirements.", status: "certified" },
  { id: "45001", standard: "ISO 45001:2018", title: "Occupational Health & Safety Management", description: "Zero-accident operating culture.", status: "certified" },
  { id: "27001", standard: "ISO 27001:2022", title: "Information Security Management", description: "Protecting client and operational data.", status: "certified" },
  { id: "ecovadis", standard: "EcoVadis", title: "Sustainable Supply Chain", description: "The Global Standard for Resilient, Sustainable Supply Chains.", status: "rated" }
];
