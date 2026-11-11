// `featured: true` shows in the main list; the rest sit under "A few more".
// `image: null` shows a small placeholder (source image isn't in the repo).
// The first link is also the link on the title.

export const projects = [
  {
    title: 'World Event Recognition',
    line: 'Testing whether newer deep learning models could beat a 2015 computer vision benchmark.',
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
    line: 'A housing marketplace for Brandeis students and local landlords.',
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
    line: 'Mapping Covid-19 cases by region with D3.',
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
    line: 'A desktop tool for exploring datasets in 3D.',
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
    line: 'Mapping public USGS mineral data with Google Maps.',
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
    line: 'A Java desktop app on top of a PostgreSQL database.',
    image: '/images/DBMS_GUI.png',
    links: [{ label: 'Code', href: 'https://github.com/mkhanyisig/DBMS_GUI' }],
  },
  {
    title: 'LinkedIn Scraper',
    line: 'A Selenium scraper for company profile data.',
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
    line: 'A React Native app for logging workouts.',
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
    line: 'The previous version of this site.',
    image: '/images/portfolio.png',
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mkhanyisig/personal-portfolio',
      },
    ],
  },
];
