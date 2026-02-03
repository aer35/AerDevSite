import {faAngellist, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const constants = {
    me: {
        fname: "Aaron",
        lname: "Mechanic",
    },
    education: {
        schoolName: "CUNY Queens college",
        degree: "B.S. Computer Science",
        gradYear: "2021",
    },
    socialLinks: {
        github: {
            key: "github",
            link: "https://github.com/aer35",
            icon: faGithub,
        },
        linkedin: {
            key: "linkedin",
            link: "https://www.linkedin.com/in/aaronmechanic/",
            icon: faLinkedin,
        },
        wellfound: {
            key: "wellfound",
            link: "https://wellfound.com/u/aaron-mechanic",
            icon: faAngellist,
        },
    },
    resume: {
        downloadLink: "https://github.com/aer35/AerDevSite/releases/latest",
        viewLink: "https://registry.jsonresume.org/aer35",
        click: "Click here to download a PDF of my full resume",
        title: "Resume",
        subtitle: "Click here to view my resume",

    },
    currentJob: {
        positionTitle: "",
        companyName: "",
    },
    pastJobs: [{
        companyName: "Spring Health",
        positions: [{
            key: "Software Developer 2",
            start: "June 2022",
            end: "December 2023",
            notes: "Previous positions: Software Development Intern, Software Developer 1"
        }]
    }],
    //projects[0] should always be the project you want displayed
    projects: [{
        name: "Jak Bot",
        description: "A simple, low resource, self hostable discord bot for grabbing the top posts from your favorite Subreddit.",
        link: "https://github.com/aer35/jak-bot",
        imageSRC: "https://socialify.git.ci/aer35/jak-bot/image?font=Inter&language=1&name=1&owner=1&pattern=Brick+Wall&stargazers=1&theme=Auto",
    }],
}


export default constants;