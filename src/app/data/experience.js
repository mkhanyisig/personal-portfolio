// The first role intentionally has no organization: it renders as the role
// title only, with no logo or company link.

export const roles = [
  {
    role: 'Full Stack Developer',
    period: 'Recent',
    line: 'Led enterprise integration and data migration initiatives, including a business-critical student case-management migration and modernization of legacy SQL workflows supporting approximately 3,000 students. Developed cloud integrations, internal automation, and QA tooling to improve data reliability, system maintainability, and institutional operations.',
  },
  {
    organization: 'Gamefam',
    role: 'Backend Engineer',
    logo: '/images/gamefamII.png',
    logoFit: 'contain', // tall mascot on white; cropping cuts it off
    period: '2024 – 2025',
    line: 'Built backend services and custom analytics for RoMonitor, a Roblox engagement analytics platform supporting game portfolio performance tracking. Led applied ML research using proprietary and custom datasets, developing DAU and MAU prediction models that improved estimation accuracy and were deployed to the platform for beta testing with paying customers.',
  },
  {
    organization: 'Electives',
    role: 'Full Stack Engineer',
    period: '2023 – 2024',
    logo: '/images/electives2.png',
    url: 'https://www.electives.io/',
    line: 'Built end-to-end product features for an early-stage corporate live-learning platform, working across frontend applications and fully serverless AWS microservices. Collaborated within a small engineering team to launch class memberships, a pivotal product offering that strengthened client engagement, while improving platform integrations, automated testing, and maintainability.',
  },
  {
    organization: 'HubSpot',
    role: 'Software Engineer Co-op',
    period: '2022',
    logo: '/images/hubspot.png',
    url: 'https://www.hubspot.com/',
    line: "Worked on HubSpot's CMS Developer Infrastructure team, developing Java backend APIs and internal CLI tooling for authentication, feature rollouts, and developer workflows.",
  },
];

export const earlier = [
  {
    organization: 'Prospector Portal',
    role: 'Software Engineer',
    period: '2020 – 2022',
    url: 'https://www.prospectorportal.com/',
    line: 'Data pipelines, scraping automation and geospatial maps for a mining analytics platform.',
  },
  {
    organization: 'Brandeis University',
    role: 'Graduate Research Assistant',
    period: '2021 – 2022',
    url: 'https://www.brandeis.edu/computer-science/',
    line: 'Research software and data analysis for NLP and global health projects.',
  },
  {
    organization: 'The Jackson Laboratory',
    role: 'Scientific Software Engineer Intern',
    period: '2019',
    url: 'https://www.jax.org/',
    line: 'D3.js visualizations of cancer genomics data for a clinical knowledge base.',
  },
];

export const education = [
  {
    organization: 'Brandeis University',
    degree: 'MS, Computer Science',
    year: '2023',
    logo: '/images/brandeis2.png',
  },
  {
    organization: 'Colby College',
    degree: 'BS, Computer Science & Physics (Astrophysics)',
    year: '2019',
    logo: '/images/colby2.png',
  },
];
