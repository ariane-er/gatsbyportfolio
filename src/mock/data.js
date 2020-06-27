import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Ariane | Developer & Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Ariane's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Ariane,',
  subtitle: "the developer you're looking for.",
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic-inv.jpeg',
  paragraphOne:
    "Hello! I'm a bilingual web developer and software engineer looking for opportunities to further my path into tech.  I enjoy building apps and products that make a difference in people’s lives while delivering a great user experience, all the while making use of my outstanding empathy and communication skills to understand the end users’ issues, needs and feedback.",
  paragraphTwo:
    'In my personal and educational projects, I have used React, Node.js, Python 3, C++, Java, Java for Android, among others. I also use Git for version control on a regular basis, and I work in a Linux environment. Needless to say, I am easily adaptable and eager to explore new technologies in order to expand my knowledge and meet the users’ needs.',
  paragraphThree:
    'I am a second-year Computer Science student at the University of Hertfordshire, and I have completed courses on React and web development. I have been trained in empathy-led design thinking at Google and Stanford, in California. I currently work as an English teacher full-time, am comfortable giving instructions and speaking in public, and I have coached and trained teachers-to-be.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'smartbrain.png',
    title: 'Smart Brain',
    info: 'A fully functional face recognition app.',
    info2:
      'Front-end: React \nBack-end: Node.js & Express \nDatabase: PostgreSQL \n' +
      'Data from login and sign up are stored safely in database using Bcrypt. By using the Clarifai API, ' +
      'you can feed the app the URL of a picture with faces, and have them be recognised and marked on screen. ' +
      'Try it out! No email confirmation needed :)',
    url: 'https://smart-brain-ari.herokuapp.com//',
    repo: 'https://github.com/ariane-er/smartbrains', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info: 'A simple page built when I got started with React & Redux.',
    info2:
      'Takes robot data from an API and displays cards. It includes a searchbox that filters the robots as you type in it. ' +
      'Uses Redux to constantly update the card list as you type your search.',
    url: 'https://ariane-er.github.io/robofriends/',
    repo: 'https://github.com/ariane-er/robofriends-raw', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'hexkey.png',
    title: 'HexKey',
    info: 'A utility Android app that encodes and decodes hexadecimal keys.',
    info2: 'Used to copy car key data, using Java for Android.',
    // url: 'https://ariane-er.github.io/robofriends/', //if no live version, button doesn't show up.
    repo: 'https://github.com/ariane-er/hexkey', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    'I am currently employed as a full-stack developer, but I am always open to discuss new opportunities, contribute to your projects and learn new things.',
  btn: "Let's chat",
  email: 'ariane.ernandorena@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ariane-ernandorena-64475979/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/ariane-er',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
