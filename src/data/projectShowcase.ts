// src/data/projectShowcase.ts

export interface ProjectShowcaseItem {
  id: string;
  category: 'Telecom' | 'Power' | 'ICT';
  name: string;
  impact: string;
  metric: string;
  client: string;
}

export const projectShowcase: ProjectShowcaseItem[] = [
  {
    id: 'ethio-telecom-tower',
    category: 'Telecom',
    name: 'Ethio Telecom Tower Rollout',
    impact: 'Nationwide tower deployment · commissioning complete',
    metric: '500+ towers commissioned',
    client: 'Ethio Telecom / Nokia',
  },
  {
    id: 'optical-transmission',
    category: 'Telecom',
    name: 'Optical Transmission Network',
    impact: '66 stations · 3 routes · on-time delivery',
    metric: '66 stations across 3 routes',
    client: 'Huawei / AAICTDA',
  },
  {
    id: 'rural-electrification',
    category: 'Power',
    name: 'Rural Electrification',
    impact: '67 towns energised across 3 EEPCO projects',
    metric: '67 towns · 3 projects',
    client: 'EEPCO',
  },
  {
    id: 'mofed-data-centers',
    category: 'ICT',
    name: 'MoFED Regional Data Centers',
    impact: 'Regional data center design, build & handover',
    metric: '4 regional centers delivered',
    client: 'Ministry of Finance',
  },
  {
    id: 'entoto-tvet',
    category: 'ICT',
    name: 'Entoto TVET Campus ICT',
    impact: '500+ nodes · 30m² data center · full commission',
    metric: '500+ network nodes',
    client: 'Huawei / AAICTDA',
  },
  {
    id: '400kv-towers',
    category: 'Power',
    name: '400KV Transmission Towers',
    impact: 'High-voltage transmission · KEC International',
    metric: '400KV infrastructure',
    client: 'KEC International',
  },
]