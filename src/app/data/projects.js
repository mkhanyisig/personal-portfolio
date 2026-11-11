// `featured: true` projects get a full card; the rest live in "More projects".
// `image: null` renders a typographic placeholder (source image isn't in the repo).
// The first entry in `links` is also the link on the thumbnail and title.

export const projects = [
  {
    title: 'World Event Recognition with Deep Learning',
    description:
      'Revisited the ChaLearn 2015 Looking at People challenge, testing whether newer pretrained models could beat the original benchmarks.',
    image: null,
    tags: ['Python', 'PyTorch', 'Computer vision'],
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/Deep-Learning-Events-Project',
      },
      {
        label: 'Report',
        href: 'https://github.com/mkhanyisig/Deep-Learning-Events-Project/blob/main/Mkhanyisi%20Gemdze%20COSI%20165B%20Final%20Report.pdf',
      },
    ],
  },
  {
    title: 'Brandeis Apartment Search',
    description:
      'Two-sided housing platform connecting Brandeis students with verified landlords and landlord reviews.',
    image: '/images/brandeisApartmentSearch.png',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Heroku'],
    featured: true,
    links: [
      { label: 'Demo', href: 'https://blooming-waters-59803.herokuapp.com/' },
      {
        label: 'Project files',
        href: 'https://drive.google.com/drive/folders/18_WBurlnf1uv1L9oIhv2ox87tU8g3PFK?usp=drive_link',
      },
    ],
  },
  {
    title: 'Data Analysis & Visualization GUI',
    description:
      'Desktop tool for exploring datasets in 3D, encoding up to six dimensions, with PCA, regression and clustering built in.',
    image: '/images/datavizGUI.png',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/Visualizing-the-impact-of-HIV-AIDS-in-Southern-Africa',
      },
    ],
  },
  {
    title: 'Covid-19 Geo-Visualization, Swaziland',
    description:
      'Map of Covid-19 cases built from Ministry of Health and WHO reports, using a custom GeoJSON and data loaders.',
    image: '/images/covidGeoMap.png',
    tags: ['JavaScript', 'D3.js', 'GeoJSON'],
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/covidGeoMapEswatini/tree/master',
      },
    ],
  },
  {
    title: 'Mineral Resource Geo-Visualization',
    description:
      'Proof-of-concept maps of public USGS mineral resource data, built with the Google Maps API.',
    image: '/images/prospectorGeoMaps.png',
    tags: ['JavaScript', 'Google Maps API'],
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/prospector_geomaps',
      },
    ],
  },
  {
    title: 'Personal Portfolio Website',
    description: 'This site, designed and built from scratch.',
    image: '/images/portfolio.png',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/personal-portfolio',
      },
    ],
  },
  {
    title: 'Database Management System GUI',
    description:
      'Java desktop app for CRUD operations on a US Forestry Registry PostgreSQL database.',
    image: '/images/DBMS_GUI.png',
    tags: ['Java', 'PostgreSQL', 'JDBC'],
    links: [{ label: 'Code', href: 'https://github.com/mkhanyisig/DBMS_GUI' }],
  },
  {
    title: 'LinkedIn Data Scraper',
    description:
      'Selenium crawler that collects data from predefined LinkedIn company profiles for internal analysis.',
    image: '/images/linkedinScraping.png',
    tags: ['Python', 'Selenium', 'BeautifulSoup'],
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/LinkedinSraper_PRospector',
      },
    ],
  },
  {
    title: 'Gym Buddy Workouts',
    description:
      'Mobile app for tracking workouts during a session and logging body health data.',
    image: '/images/gymBuddy.png',
    tags: ['React Native', 'Expo'],
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/gym_buddy_App?tab=readme-ov-file#gym-buddy-workouts---app',
      },
      {
        label: 'Demo',
        href: 'https://drive.google.com/drive/folders/1o3qHBni2Ecp0Pp5Sk2tYhLTwYsK611Td',
      },
    ],
  },
  {
    title: 'Falcon',
    description:
      "Endless-flyer game built for a game design course: navigate each level's terrain and obstacles to find the nest.",
    image: null,
    tags: ['Python', 'Pygame'],
    links: [
      { label: 'Code', href: 'https://github.com/mkhanyisig/Falcon-' },
      {
        label: 'Write-up',
        href: 'https://www.linkedin.com/pulse/falcon-vision-brought-life-gerald-nvule/',
      },
    ],
  },
];
