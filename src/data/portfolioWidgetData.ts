// src/data/portfolioWidgetData.ts
// 6 projects — widget cycles independently at 4s

export interface WidgetProject {
  id: number;
  title: string;
  category: string;
  description: string;
  client: string;
  image: string;
}

export const widgetProjects: WidgetProject[] = [
  {
    id: 1,
    title: "Optical Transmission Network",
    category: "Telecom",
    description: "66 stations across 3 routes",
    client: "Huawei / AAICTDA",
    image: "/assets/images/portfolio/placeholder.png",
  },
  {
    id: 2,
    title: "Ethio Telecom Tower Rollout",
    category: "Telecom",
    description: "Nationwide deployment & commissioning",
    client: "Ethio Telecom / Nokia",
    image: "/assets/images/portfolio/placeholder.png",
  },
  {
    id: 3,
    title: "400KV Transmission Towers",
    category: "Power",
    description: "High-voltage tower foundations & erection",
    client: "KEC International",
    image: "/assets/images/portfolio/placeholder.png",
  },
  {
    id: 4,
    title: "MoFED Regional Data Centers",
    category: "ICT",
    description: "Regional data center design and build",
    client: "Ministry of Finance",
    image: "/assets/images/portfolio/placeholder.png",
  },
  {
    id: 5,
    title: "Entoto TVET Campus ICT",
    category: "ICT",
    description: "500+ nodes, 30m² data center, 12 buildings",
    client: "Huawei / AAICTDA",
    image: "/assets/images/portfolio/placeholder.png",
  },
  {
    id: 6,
    title: "EEPCO Rural Electrification",
    category: "Power",
    description: "67 towns across 3 EEPCO projects",
    client: "EEPCO",
    image: "/assets/images/portfolio/placeholder.png",
  },
];