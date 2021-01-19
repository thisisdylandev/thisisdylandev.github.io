const REPOSITORY = 'its-dgreen.github.io';
const FIRST_NAME = 'Dylan';
const LAST_NAME = 'Green';
const GITHUB_USERNAME = 'its-dgreen';
const TWITTER_USERNAME = 'its_dgreen';
const LINKEDIN_USERNAME = 'ctrlaltdylan';
const ADDRESS = 'Rocket City';
const EMAIL = 'dylan@ctrlaltdylan.com';
const FOOTER_URL = 'https://www.ctrlaltdylan.com';

const BIO = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.`;

const EXPERIENCE_LIST = [
  {
    title: 'Cloud Developer',
    company: 'Sangoma',
    description: `
    At Sangoma, I am responsible for Cloud Infrastructure using Ansible, Docker, and AWS, as well as maintaining various web services and applications that use Ruby On Rails, node.js, and React

    Helped reduce risk and increase availability of cloud applications and services by assisting operations in moving infrastructure to a new data center via automation.    `,
    period: 'March 2020 - present',
  },
  {
    title: 'Software Engineer',
    company: 'E4 Technology',
    description: `
    Working on teams of various sizes, I contributed to multiple projects for government agencies, focusing on creating prototypes to test out new and exciting technology and understand the trade-offs associated with them. \

    
    My front-end contributions include working in React and Vue.js to create interfaces for data analysis and alerts.
    
    My back-end and systems work include maintaining a Java server on Linux, and working in .NET Core to create APIs. I also worked in the cloud, aggregating data from various sources for data analysis in Azure.    `,
    period: 'July 2019 - March 2020',
  },
  {
    title: 'Software Analyst',
    company: 'Rural Sourcing',
    description: `
    I led the UI efforts for a hybrid web/mobile application using React and Cordova. I was responsible for creating the UI based off the design team’s wireframes, UI testing, and co-ordinating all the various code reviews and meetings for the internal development team.
    
    One of the teams I worked on was responsible for building and deploying hybrid web/mobile MVPs in AWS using Angular, Xamarin, .NET Core, Entity Framework, MySQL, and serverless framework. My contributions to this team included maintaining an automated UI testing suite in Katalon, working in TeamCity and Octopus Deploy to manage the builds and deployments of our projects, and work with both Project Management and Product Management to define requirements, plan sprints, and create a product roadmap.
    `,
    period: 'November 2017 - June 2019',
  },
];

const EDUCATION_LIST = [
  {
    institution: 'University of Alabama - Huntsville',
    qualification: 'MS in Cybersecurity Management',
    description: `
      My time at UAH has been spent studying the in’s and out’s of cybersecurity and managing teams of cyber professionals. I have been able to strengthen my skills as an engineer, as well as learn what it takes to write policies, educate others on cybersecurity, and what kind of skills a leader in technology needs to have to succeed.
      In this program, I have taken courses on cybersecurity engineering, resource planning, data science and analytics, and management.
    `,
    period: '2021',
  },
  {
    institution: 'University of South Alabama',
    qualification: 'BS in Information Systems',
    description: `
      While enrolled at USA, I discovered my passion for creating software to solve problems. I took classes such as Python programming and Client/Server Programming With .NET, and learned the basics of how to create web applications. This program also led me down the path of business, taking courses in management, finance, and economics.
      I also spent some time in Phi Kappa Sigma Fraternity, where I served as VP of Education, creating plans for members to succeed in higher education, as well as the Graphic Design Chair, where I was responsible for various t-shirt and sign designs.
    `,
    period: '2017',
  },
];

const CURRENT_SKILLS = [
  'JavaScript / Node.js',
  'React',
  'Ruby / Rails',
  'Docker',
  'Ansible',
  'AWS',
  'Gatsby',
  'Styled Components',
  'Netlify',
  'Git/Github',
];

const PREVIOUS_SKILLS = [
  '.NET Core',
  'Angular',
  'TeamCity',
  'Sass',
  'Cordova',
  'Xamarin',
  'Python',
];

const PORTFOLIO = {
  introParagraphs: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.`,
  ],
  items: [
    {
      name: 'First portfolio item',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
    {
      name: 'Second portoflio item name',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
  ],
};

module.exports = {
  siteTitle: `${FIRST_NAME} ${LAST_NAME} Resume`, // <title>
  manifestName: `${FIRST_NAME} ${LAST_NAME} Resume`,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/favicon.ico',
  pathPrefix: `/${REPOSITORY}`, // This path is subpath of your hosting https://domain/portfolio
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  // bio
  bio: BIO,
  // experience
  experienceList: EXPERIENCE_LIST,
  // education
  educationList: EDUCATION_LIST,
  // languages & tools
  currentSkills: CURRENT_SKILLS,
  // skills
  previousSkills: PREVIOUS_SKILLS,
  // portfolio
  portfolio: PORTFOLIO,
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: `https://github.com/${GITHUB_USERNAME}`,
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: `https://twitter.com/${TWITTER_USERNAME}`,
    },
  ],
  email: EMAIL,
  address: ADDRESS,
  footerUrl: FOOTER_URL,
};
