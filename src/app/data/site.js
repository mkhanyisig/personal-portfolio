export const CALENDLY_URL = 'https://calendly.com/mkhanyisi-g/30min';
export const GITHUB_URL = 'https://github.com/mkhanyisig';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mkhanyisifabo/';

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// `icon` keys map to Heroicons in Competencies.jsx.
// `wide: true` spans the full grid row (keeps a 5-card grid balanced).
export const competencies = [
  {
    icon: 'stack',
    title: 'Full Stack Engineering',
    body: 'Building modern web applications, APIs and backend services, from user-facing experiences through to the infrastructure underneath.',
  },
  {
    icon: 'chart',
    title: 'Machine Learning & Analytics',
    body: 'Working across data exploration, feature engineering, predictive modeling and evaluation, and integrating models into practical applications.',
  },
  {
    icon: 'integration',
    title: 'Enterprise Integrations & Cloud Automation',
    body: 'Designing, building and maintaining integrations that connect cloud applications, institutional systems and external platforms, with hands-on work across Oracle Integration Cloud, Oracle Fusion Cloud (HCM and Finance) and OCI. Automating data workflows, troubleshooting complex integration issues and making business-critical processes more reliable.',
    wide: true,
  },
  {
    icon: 'data',
    title: 'Data Systems & Automation',
    body: 'Building data processing workflows, integrations and ETL pipelines, and systems that automate operations across platforms.',
  },
  {
    icon: 'flag',
    title: 'Engineering & Delivery',
    body: 'Owning technical solutions, weighing tradeoffs, collaborating across teams, and taking complex projects from early exploration to production.',
  },
];

export const technologies = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'PHP'],
  },
  {
    group: 'Frontend & Product',
    items: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    group: 'Backend & APIs',
    items: ['Node.js', 'Laravel', 'REST', 'GraphQL'],
  },
  {
    group: 'Data & Machine Learning',
    items: ['PyTorch', 'Pandas', 'scikit-learn', 'SQL', 'Predictive modeling'],
  },
  {
    group: 'Cloud & Infrastructure',
    items: ['AWS', 'OCI', 'Docker', 'Terraform', 'PostgreSQL', 'DynamoDB'],
  },
  {
    group: 'Enterprise Integration & Automation',
    items: [
      'Oracle Integration Cloud',
      'Oracle Fusion Cloud (HCM, Finance)',
      'REST APIs',
      'SFTP',
      'Data transformation',
      'ETL workflows',
      'Workflow automation',
    ],
  },
];
