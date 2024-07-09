export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a React Native Application',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-3',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName:
      'justify-center md:max-w-full max-w-60 mx-auto md:mx-0 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Dolls for All',
    des: 'Welcome to Dolls for All, your go-to online shop for exquisite hand-made dolls that are crafted with passion and care.',
    img: '/p1.png',
    iconLists: [
      '/re.svg',
      '/redux.svg',
      '/js.svg',
      '/scss.svg',
      '/node.svg',
      '/mongo.svg',
    ],
    link: 'https://dolls-shop.vercel.app/',
  },
  {
    id: 2,
    title: 'Prompts for All',
    des: 'Prompts for All is an open-source AI prompting tool for modern world to discover, create and share creative prompts',
    img: '/p2.png',
    iconLists: ['/next.svg', '/tail.svg', '/js.svg'],
    link: 'https://prompts-for-all.vercel.app/en/',
  },
  {
    id: 3,
    title: 'ne13x',
    des: 'A realtime social network developed with Next.js',
    img: '/p3.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/c.svg'],
    link: 'https://ne13x.vercel.app/',
  },
];

export const testimonials = [
  {
    quote:
      "Aleksey's work on our project was nothing short of exceptional. From the very beginning, his expertise and professionalism shone through. His dedication to producing high-quality results and his enthusiasm for every detail of the development process were truly impressive. Thanks to Aleksey, our website has been transformed, and our brand has never looked better. If you're looking for a partner who can take your online presence to new heights, Aleksey is the one you need.",
    name: 'Nadiya Tyrkusova',
    title: 'Professor of Computer Science at Sumy State University',
  },
  {
    quote:
      "I had the pleasure of working with Aleksey, and it was a fantastic experience. His promptness, reliability, and commitment to excellence set him apart. Aleksey's passion for his work is evident in every aspect of the development process. Our website and brand have significantly improved thanks to his efforts. I highly recommend Aleksey to anyone looking to enhance their digital footprint and elevate their brand image.",
    name: 'John Doe',
    title: 'MI Agency',
  },
  {
    quote:
      "Collaborating with Aleksey was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Aleksey's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Aleksey is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Sumy State University',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Next.js Developer Freelance',
    desc: 'Developed a web-based platform using Next.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'HTML Layout Developer',
    desc: 'Created different landing pages using native HTML layout, CSS and JavaScript',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Trainee Frontend Developer',
    desc: 'Took a part in development of different web applications using React and Next.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    link: 'https://github.com/Ackermannn7',
    img: '/git.svg',
  },
  {
    id: 2,
    link: 'https://t.me/alekseyrudyk',
    img: '/telegram.svg',
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/alekseyrudyk/',
    img: '/link.svg',
  },
];
