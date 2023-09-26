//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiLinkedin,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import codechef from './assets/img/brands/codechef.png'
import gfg from './assets/img/brands/gfg.png'


// projects images
import Project1 from './assets/img/projects/Distroyed.png';
import Project2 from './assets/img/projects/Hover(1).png';
import Project3 from './assets/img/projects/Hover.png';
import Project4 from './assets/img/projects/Rotation.png';
import Project5 from './assets/img/projects/Travel.png';
import Project6 from './assets/img/projects/music.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
// import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/Akhil.png';
import TestiImage2 from './assets/img/testimonials/IMG_20221020_192116.jpg';
import TestiImage3 from './assets/img/testimonials/IMG_20230428_181957.jpg';
import TestiImage4 from './assets/img/testimonials/bhatt.jpeg';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  
  {
    icon: <FiGithub />,
    href: 'https://github.com/ErAman3018/ErAman3018',
  },
  {
    icon:<FiLinkedin/>,
    href:'https://www.linkedin.com/in/aman-kumar-076008211'
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/aman_kumar218/',
  },
  
];

// companies
export const brands = [
  
  {
    img: codechef,
    href: 'https://www.codechef.com/users/akuc2746',
  },
  {
    img: gfg,
    href: 'https://auth.geeksforgeeks.org/user/akuc32i9x9',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project5,
    name: 'travel',
    category: 'web development',
  },
  {
    id: '2',
    image: Project6,
    name: 'Music landing page',
    category: 'web development',
  },
  {
    id: '3',
    image: Project1,
    name: 'particle distroyed after some time',
    category: 'design',
  },
  {
    id: '4',
    image: Project2,
    name: 'Hover effect',
    category: 'design',
  },
  {
    id: '5',
    image: Project3,
    name: 'Rotaion on hover',
    category: 'design',
  },
  {
    id: '6',
    image: Project4,
    name: 'rotation',
    category: 'design',
  },
  
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Design',
  },
  {
    name: 'web development',
  },
  
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  // {
  //   image: SkillImg8,
  // },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'My dedication to delivering visually stunning and intuitively navigable websites is geared towards providing a memorable user experience and leaving a lasting impression on your audience.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
    ' Beginning with a comprehensive understanding of your objectives and target audience, I employ a range of technologies such as HTML5, CSS3, JavaScript, and various frameworks to build robust and interactive user interfaces.',
  },
  
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'I conduct thorough keyword research to identify high-impact terms relevant to your industry, ensuring that your content is positioned to reach the right audience.',
  }
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Akhil',
    authorDetails:''
    
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Rehan',
    authorDetails:''
    
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Abhishek jha',
    authorDetails:''
    
  },
  {
    authorImg: TestiImage4,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Abhishek Bhatt',
    authorDetails:''
    
  },

];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at akuc325698@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Yamuna nagar , Haryana',
    description: 'Serving clients worldwide',
  },
];
