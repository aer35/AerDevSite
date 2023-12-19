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
    currentJob: {
        positionTitle: "",
        companyName: "",
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
    }


}

export default constants;