export const skills = {
    react: {
        src: "/images/react.svg",
        alt: "React"
    },
    figma: {
        src: "/images/figma.svg",
        alt: "Figma"
    },
    css: {
        src: "/images/css3.svg",
        alt: "CSS3"
    },
    js: {
        src: "/images/js.svg",
        alt: "JS"
    },
    html: {
        src: "/images/html5.svg",
        alt: "HTML5"
    },
    next: {
        src: "/images/next.svg",
        alt: "NextJS"
    },
    angular: {
        src: "/images/angular.svg",
        alt: "Angular"
    },
}

export type experience = {
    id: number,
    from: string,
    to: string,
    title: string,
    company: string,
    companyUrl: string,
    description: string,
    skills: typeof skills[],
}


export const careerExperiences: experience[] = [
    {
        id: 1,
        from: "June 2022",
        to: "Current",
        title: "Senior Frontend Developer",
        company: "lastminute.com",
        companyUrl: "https://lastminute.com",
        description: "Software development in React + MobX, TypeScript, GitLab.\n" +
            "Agile workflow with Jira",
        skills: [skills.react, skills.js]

    },
    {
        id: 2,
        from: "Jan. 2020",
        to: "May 2022",
        title: "React developer, UI Designer",
        company: "Seedble",
        companyUrl: "https://seedble.com",
        description: "Webapps development in React (NextJS), Angular7 (+ Ionic), HTML5 and SCSS (Bootstrap and Tailwind).\n" +
            "UI / UX design and prototyping in Figma.\n" +
            "Occasional backend development (NodeJS)\n" +
            "Task-based workflow (Asana/ClickUp + GitHub)",
        skills: [skills.react, skills.js, skills.figma, skills.css, skills.html, skills.next]

    },
    {
        id: 3,
        from: "Dec. 2018",
        to: "Dec. 2019",
        title: "Angular developer, UI Designer",
        company: "Tutored",
        companyUrl: "https://tutored.me",
        description: "Company webapp development in Angular2+, HTML5 and SCSS (Bootstrap). UI / UX design and prototyping in Sketch, Figma, Principle and Zeplin. Task-based workflow, Git + Jira, with Agile methodology.",
        skills: [skills.angular, skills.figma, skills.css, skills.js, skills.html]
    },
    {
        id: 4,
        from: "Dec. 2015",
        to: "Dec. 2018",
        title: "Frontend Developer, UI/UX Designer, Global Professional Services team Developer",
        company: "Qmatic Italy",
        companyUrl: "https://qmatic.com",
        description: "Webpages development in HTML5, CSS, JS(+jQuery).\n" +
            "UI/UX design in Adobe Illustrator and Figma (clients: TIM, Pandora,Fastweb) Global Professional Services Developer: Working with global team (15+) of front-end developers. Daily+weekly meetings.",
        skills: [skills.js, skills.css, skills.figma, skills.html]
    }
]

export const educationExperiences = [
    {
        from: "Sep. 2013",
        to: "Sep. 2014",
        title: "Computer Science",
        company: "La Sapienza - University of Rome, Italy",
        description: "Acquired advanced programming and algorithm notions. Acquired deep notions of Python and Java.",
    },
    {
        from: "Sep. 2008",
        to: "Aug. 2013",
        title: "Computer Expert Diploma",
        company: "ITIS Enrico Fermi, Rome, Italy",
        description: "Acquired basic level of programming languages HTML, CSS, PHP, MySql, JS, Java, C++.",
    },
]