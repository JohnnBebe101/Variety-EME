export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  path: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    title: 'Variety EME Completes 400kV Transmission Line for Ethiopian Electric Power',
    excerpt: 'Successfully delivered the 285km Welaita-Sodo 400kV double-circuit transmission line project, strengthening Ethiopia\'s national grid connectivity and enabling renewable energy integration.',
    image: '/assets/images/news/transmission-line.webp',
    category: 'Power & Energy',
    date: '2026-07-15',
    readTime: '5 min read',
    path: '/news/400kv-transmission-line-complete'
  },
  {
    id: 2,
    title: 'Nokia and Variety EME Partner on 5G Rural Connectivity Initiative',
    excerpt: 'Strategic collaboration to deploy 5G fixed wireless access across 200+ rural sites in Ethiopia, bridging the digital divide for underserved communities.',
    image: '/assets/images/news/nokia-partnership.webp',
    category: 'Telecommunications',
    date: '2026-07-03',
    readTime: '4 min read',
    path: '/news/nokia-5g-rural-connectivity'
  },
  {
    id: 3,
    title: 'New Data Center Certification Program Launched at Variety EME Academy',
    excerpt: 'Industry-first certified data center operations curriculum developed with Uptime Institute, addressing critical skills gap in East Africa\'s growing digital infrastructure sector.',
    image: '/assets/images/news/academy-certification.webp',
    category: 'Training',
    date: '2026-06-22',
    readTime: '6 min read',
    path: '/news/academy-data-center-certification'
  }
];
