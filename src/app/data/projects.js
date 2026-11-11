// `featured: true` shows in the main list; the rest sit under "A few more".
// `image: null` shows a small placeholder (source image isn't in the repo).
// The first link is also the link on the title and thumbnail.

export const projects = [
  {
    title: 'World Event Recognition',
    line: 'Revisited the ChaLearn 2015 Looking at People challenge, testing whether newer pretrained models could beat the original benchmarks.',
    tags: ['Python', 'PyTorch', 'Computer vision'],
    image: null,
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
    line: 'A two-sided housing platform connecting Brandeis students with verified landlords and landlord reviews.',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Heroku'],
    image: '/images/brandeisApartmentSearch.png',
    featured: true,
    links: [
      { label: 'Demo', href: 'https://blooming-waters-59803.herokuapp.com/' },
      {
        label: 'Files',
        href: 'https://drive.google.com/drive/folders/18_WBurlnf1uv1L9oIhv2ox87tU8g3PFK?usp=drive_link',
      },
    ],
  },
  {
    title: 'Covid-19 Map, Swaziland',
    line: 'A regional map of Covid-19 cases built from Ministry of Health and WHO reports, using a custom GeoJSON.',
    tags: ['JavaScript', 'D3.js', 'GeoJSON'],
    image: '/images/covidGeoMap.png',
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/covidGeoMapEswatini/tree/master',
      },
    ],
  },
  {
    title: 'Data Visualization GUI',
    line: 'A desktop tool for exploring datasets in 3D, with PCA, regression and clustering built in.',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    image: '/images/datavizGUI.png',
    featured: true,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/Visualizing-the-impact-of-HIV-AIDS-in-Southern-Africa',
      },
    ],
  },
  {
    title: 'Mineral Resource Maps',
    line: 'Proof-of-concept maps of public USGS mineral resource data.',
    tags: ['JavaScript', 'Google Maps API'],
    image: '/images/prospectorGeoMaps.png',
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/prospector_geomaps',
      },
    ],
  },
  {
    title: 'Database GUI',
    line: 'A Java desktop app for CRUD operations on a PostgreSQL database.',
    tags: ['Java', 'PostgreSQL', 'JDBC'],
    image: '/images/DBMS_GUI.png',
    links: [{ label: 'Code', href: 'https://github.com/mkhanyisig/DBMS_GUI' }],
  },
  {
    title: 'LinkedIn Scraper',
    line: 'A Selenium crawler that collects company profile data for analysis.',
    tags: ['Python', 'Selenium'],
    image: '/images/linkedinScraping.png',
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/LinkedinSraper_PRospector',
      },
    ],
  },
  {
    title: 'Gym Buddy',
    line: 'A mobile app for tracking workouts and logging health data.',
    tags: ['React Native', 'Expo'],
    image: '/images/gymBuddy.png',
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
    line: 'An endless-flyer game, built for a game design class.',
    tags: ['Python', 'Pygame'],
    image: null,
    links: [
      { label: 'Code', href: 'https://github.com/mkhanyisig/Falcon-' },
      {
        label: 'Write-up',
        href: 'https://www.linkedin.com/pulse/falcon-vision-brought-life-gerald-nvule/',
      },
    ],
  },
  {
    title: 'The old portfolio',
    line: "The previous version of this site '24 version. Handcrafted with love, minimal AI usage ",
    tags: ['Next.js', 'Tailwind CSS'],
    image: '/images/portfolio.png',
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/personal-portfolio',
      },
    ],
  },
];
