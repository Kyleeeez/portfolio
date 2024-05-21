export type Opt<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Skill = Record<
  string,
  {
    src: string;
    alt: string;
  }
>;

export const skills = {
  react: {
    src: '/images/react.svg',
    alt: 'React',
  },
  figma: {
    src: '/images/figma.svg',
    alt: 'Figma',
  },
  css: {
    src: '/images/css3.svg',
    alt: 'CSS3',
  },
  scss: {
    src: '/images/scss.svg',
    alt: 'SCSS',
  },
  js: {
    src: '/images/js.svg',
    alt: 'JS',
  },
  html: {
    src: '/images/html5.svg',
    alt: 'HTML5',
  },
  next: {
    src: '/images/next.svg',
    alt: 'NextJS',
  },
  angular: {
    src: '/images/angular.svg',
    alt: 'Angular',
  },
  mobx: {
    src: '/images/mobx.svg',
    alt: 'MobX',
  },
  ts: {
    src: '/images/ts.svg',
    alt: 'TypeScript',
  },
  gitlab: {
    src: '/images/gitlab.svg',
    alt: 'GitLab',
  },
  jquery: {
    src: '/images/jquery.svg',
    alt: 'jQuery',
  },
  styled: {
    src: '/images/styled.png',
    alt: 'styled',
  },
} satisfies Skill;

export interface experience {
  id: number;
  from: string;
  to: string;
  title: string;
  company: string;
  HQ?: string;
  location: string;
  companyUrl: string;
  description: string;
  skills: Array<Record<string, string>>;
}

export const careerExperiences: experience[] = [
  {
    id: 1,
    HQ: 'CH, Switzerland',
    location: 'Full remote',
    from: 'June 2022',
    to: 'Current',
    title: 'Senior Frontend Engineer',
    company: 'lastminute.com',
    companyUrl: 'https://lastminute.com',
    description:
      'Development and maintenance of the app in React, TypeScript, MobX, Styled Components\n' +
      'Unit tests with Jest, Enzyme, RTL \n' +
      'Active collaboration with UI/UX team \n' +
      'GitLab for version control and code reviews\n' +
      'Agile methodologies to plan and track tasks progress (Jira) ',
    skills: [skills.react, skills.ts, skills.mobx, skills.styled, skills.gitlab],
  },
  {
    id: 2,
    HQ: 'Rome, Italy',
    location: 'Remote/onsite',
    from: 'Jan. 2020',
    to: 'May 2022',
    title: 'Lead Frontend Engineer, UI Designer',
    company: 'Seedble',
    companyUrl: 'https://seedble.com',
    description:
      'Identification of requirements and UX design specifications for client applications development\n' +
      'App development in React, NextJS, Typescript, SCSS (Bootstrap)\n' +
      'UI/UX design and prototyping in Figma\n' +
      'Mobile app development in Capacitor + React\n' +
      'Agile workflow (GitHub + ClickUp) ',
    skills: [skills.react, skills.ts, skills.next, skills.scss, skills.figma],
  },
  {
    id: 3,
    HQ: 'Rome, Italy',
    location: 'Onsite',
    from: 'Dec. 2018',
    to: 'Dec. 2019',
    title: 'Angular developer, UI Designer',
    company: 'Tutored',
    companyUrl: 'https://tutored.me',
    description:
      'Company webapp development in Angular6, Typescript and SCSS\n' +
      'UI/UX design and prototyping in Figma + Zeplin\n' +
      'Task-based workflow, Git + Jira, with Agile methodology (biweekly sprints)',
    skills: [skills.angular, skills.ts, skills.figma],
  },
  {
    id: 4,
    HQ: 'Rome, Italy',
    location: 'Onsite',
    from: 'Dec. 2015',
    to: 'Dec. 2018',
    title: 'JavaScript developer, UI designer',
    company: 'Qmatic Italy',
    companyUrl: 'https://qmatic.com',
    description:
      'Apps development in JavaScript(+jQuery), CSS3, HTML5\n' +
      'UI design and prototyping in Figma, Adobe Illustrator\n' +
      'Member of the Global Professional Services, company’s distributed team of frontend engineers.',
    skills: [skills.js, skills.jquery, skills.css, skills.figma, skills.html],
  },
];

export const educationExperiences = [
  {
    from: 'Sep. 2013',
    to: 'Sep. 2014',
    title: 'Computer Science',
    company: 'La Sapienza - University of Rome, Italy',
    description: 'Acquired advanced programming and algorithm notions. Acquired deep notions of Python and Java.',
  },
  {
    from: 'Sep. 2008',
    to: 'Aug. 2013',
    title: 'Computer Expert Diploma',
    company: 'ITIS Enrico Fermi, Rome, Italy',
    description: 'Acquired basic level of programming languages HTML, CSS, PHP, MySql, JS, Java, C++.',
  },
];
