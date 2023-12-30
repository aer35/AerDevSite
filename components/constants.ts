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
            link: "https://github.com/aer35",
            icon: faGithub,
            key: "github",
        },
        linkedin: {
            link: "https://www.linkedin.com/in/aaronmechanic/",
            icon: faLinkedin,
            key: "linkedin",
        },
        wellfound: {
            link: "https://wellfound.com/u/aaron-mechanic",
            icon: faAngellist,
            key: "wellfound",
        },
    },
    currentJob: {
        positionTitle: "",
        companyName: "",
    },
    pastJobs: [{
        companyName: "Spring Health",
        positions: [{
            key: "Software Developer 2",
            start: "June 2023",
            end: "December 2023"
        }, {
            key: "Software Developer 1",
            start: "September 2022",
            end: "June 2023"
        }, {
            key: "Software Development Intern",
            start: "June 2022",
            end: "Sept 2023"
        }]
    }]
}


export default constants;