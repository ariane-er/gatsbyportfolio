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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
