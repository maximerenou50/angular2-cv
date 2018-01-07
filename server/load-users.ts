import {Users} from '../collections/users';

export function loadUsers() {
    if (Users.find().count() === 0) {

    var users = [
        {
            "firstname" : "Maxime",
            "lastname" : "Renou",
            "birth" : "1990,11,08",
            "job" : "Software engineer",
            "skills" : [
                {
                    "type" : "language",
                    "name" : "HTML",
                    "level" : 9
                },
                {
                    "type" : "language",
                    "name" : "CSS",
                    "level" : 9
                },
                {
                    "type" : "language",
                    "name" : "JavaScript",
                    "level" : 7
                },
                {
                    "type" : "language",
                    "name" : "TypeScript",
                    "level" : 6
                },
                {
                    "type" : "language",
                    "name" : "J2EE",
                    "level" : 7
                },
                {
                    "type" : "language",
                    "name" : "Java",
                    "level" : 8
                },
                {
                    "type" : "language",
                    "name" : "Swing",
                    "level" : 6
                },
                {
                    "type" : "language",
                    "name" : "PHP",
                    "level" : 7
                },
                {
                    "type" : "language",
                    "name" : "XML",
                    "level" : 9
                },
                {
                    "type" : "language",
                    "name" : "C",
                    "level" : 6
                },
                {
                    "type" : "language",
                    "name" : "Shell",
                    "level" : 7
                },
                {
                    "type" : "language",
                    "name" : "SQL",
                    "level" : 8
                },
                {
                    "type" : "language",
                    "name" : "PL/SQL",
                    "level" : 7
                },
                {
                    "type" : "language",
                    "name" : "NoSQL",
                    "level" : 6
                },
                {
                    "type" : "framwork",
                    "name" : "Angular",
                    "level" : 6
                },
                {
                    "type" : "framwork",
                    "name" : "Meteor",
                    "level" : 6
                },
                {
                    "type" : "framwork",
                    "name" : "Bootstrap",
                    "level" : 8
                },
                {
                    "type" : "framwork",
                    "name" : "JQuery",
                    "level" : 7
                },
                {
                    "type" : "framwork",
                    "name" : "Play",
                    "level" : 6
                },
                {
                    "type" : "framwork",
                    "name" : "Symfony2",
                    "level" : 6
                },
                {
                    "type" : "framwork",
                    "name" : "Android",
                    "level" : 4
                },
                {
                    "type" : "framwork",
                    "name" : "PhoneGap",
                    "level" : 5
                },
                {
                    "type" : "framwork",
                    "name" : "Titanium",
                    "level" : 5
                },
                {
                    "type" : "framwork",
                    "name" : "KPSA",
                    "level" : 9
                },
                {
                    "type" : "software",
                    "name" : "IntelliJ",
                    "level" : 8
                },
                {
                    "type" : "software",
                    "name" : "Eclipse",
                    "level" : 8
                },
                {
                    "type" : "software",
                    "name" : "SoapUI",
                    "level" : 8
                },
                {
                    "type" : "software",
                    "name" : "HPQC",
                    "level" : 7
                },
                {
                    "type" : "software",
                    "name" : "SQLDevelopper",
                    "level" : 7
                },
                {
                    "type" : "tool",
                    "name" : "SVN",
                    "level" : 9
                },
                {
                    "type" : "tool",
                    "name" : "Git",
                    "level" : 7
                },
                {
                    "type" : "tool",
                    "name" : "Jenkins",
                    "level" : 9
                },
                {
                    "type" : "tool",
                    "name" : "Ant",
                    "level" : 7
                },
                {
                    "type" : "tool",
                    "name" : "Maven",
                    "level" : 8
                },
                {
                    "type" : "tool",
                    "name" : "NPM",
                    "level" : 7
                },
                {
                    "type" : "tool",
                    "name" : "Phabricator",
                    "level" : 6
                },
                {
                    "type" : "methodology",
                    "name" : "Scrum",
                    "level" : 8
                },
                {
                    "type" : "methodology",
                    "name" : "eXtreme Programming",
                    "level" : 7
                },
                {
                    "type" : "methodology",
                    "name" : "UML",
                    "level" : 8
                },
                {
                    "type" : "os",
                    "name" : "Unix",
                    "level" : 8
                },
                {
                    "type" : "os",
                    "name" : "Windows",
                    "level" : 8
                },
                {
                    "type" : "os",
                    "name" : "OS X",
                    "level" : 7
                }
            ],
            "experiences" : {
                "professional" : [
                    {
                        "startDate" : "2014,09,01",
                        "endDate" : "2016,09,01",
                        "company" : "SopraSteria",
                        "customer" : "Orange",
                        "title" : "Software engineer in OPAL activation project",
                        "assignments" : [
                            "OPAL is the activation project of Orange (French first telephone operator). This project involves maintaining and developing all build center applications.",
                            "Development of new features on several applications.",
                            "Involvement in project industrialisation through continuous delivery.",
                            "Management of a technical tools allowing to test information system applications.",
                            "Realisation of costing.",
                            "Involvement in developing skills of new employees on the project."
                        ],
                        "skills" : [
                            "KPSA", "Java", "J2EE", "Shell", "SQL", "HPQC", "SQLDevelopper", "IntelliJ", "SoapUI", "Jenkins", "Maven", "Ant", "Phabricator", "SVN", "Scrum", "eXtreme Programming", "Windows", "Unix"
                        ]
                    },
                    {
                        "startDate" : "2013,09,01",
                        "endDate" : "2014,09,01",
                        "company" : "SopraSteria",
                        "customer" : "SFR",
                        "title" : "Sandwich course inside KPSA project",
                        "assignments" : [
                            "TMA KPSA is the activation project of SFR (French second telephone operator). This project consist of evolving and maintaining information system of this operator.",
                            "Working in an international context (with India). English was the working language.",
                            "Development of new features on management of technical requests.",
                            "Rewriting of network equipment simulators.",
                            "Improvement of a non-regression tool.",
                            "Industrialisation of the project with continuous integration.",
                            "Validation of developments using HP Quality Center."
                        ],
                        "skills" : [
                            "KPSA", "Java", "J2EE", "Shell", "SQL", "PL/SQL", "HPQC", "SQLDevelopper", "Eclipse", "Jenkins", "SVN", "Windows", "Unix"
                        ]
                    },
                    {
                        "startDate" : "2013,05,01",
                        "endDate" : "2013,08,01",
                        "company" : "Kelbillet",
                        "customer" : "Kelbillet",
                        "title" : "Trainee in charge of study and development of mobile applications",
                        "assignments" : [
                            "Cross-platform mobile application: The startup KelBillet was looking for a solution to build some cross-platform mobile applications.",
                            "Markey study of cross-platform solutions.",
                            "Realisation of a framework to generate KelBillet’s mobile applications thanks to Titanium framework.",
                            "Development of a PUSH server notification.",
                            "Deployment of applications on App Store and Play Store."
                        ],
                        "skills" : [
                            "HTML", "CSS", "JavaScript", "PHP", "Titanium", "PhoneGap", "Eclipse", "SVN", "OS X"
                        ]
                    },
                    {
                        "startDate" : "2012,04,01",
                        "endDate" : "2012,08,01",
                        "company" : "Océus",
                        "customer" : "French department",
                        "title" : "Trainee in charge of developing web applications",
                        "assignments" : [
                            "\"Aide départementale\" is a web application to help teenagers of a French department to get a financial help during a work placement to manage children.",
                            "Involvement in definition of customer needs.",
                            "Realisation of the web application \"Aide départementale\".",
                            "Validation of the web application.",
                            "Involvement in developing skills of new employees on the project.",
                            "Project managing and division of labor between project members."
                        ],
                        "skills" : [
                            "HTML", "CSS", "JavaScript", "PHP", "SQL", "JQuery", "Eclipse", "SVN", "Windows"
                        ]
                    },
                    {
                        "startDate" : "2011,03,01",
                        "endDate" : "2011,06,01",
                        "company" : "FDSEA",
                        "customer" : "FDSEA",
                        "title" : "Trainee in charge of study and development of an intranet",
                        "assignments" : [
                            "Intranet is a project between two societies of the chamber of agriculture at Saint-Lô (France) to share informations and resources.",
                            "Analysing of need with several stakeholders.",
                            "Design of functional specifications.",
                            "Realisation and validation of the intranet.",
                            "Installation and training actors to the tool."
                        ],
                        "skills" : [
                            "HTML", "CSS", "JavaScript", "PHP", "SQL", "JQuery", "Eclipse", "Unix"
                        ]
                    }
                ],
                "school" : [
                    {
                        "startYear" : "2014",
                        "title" : "Firefighters application",
                        "assignments" : [
                            "Agile project during a month of tactical management for firefighters.",
                            "Realisation of an Android application for tablet to allow firefighters to locate in real time incidents."
                        ],
                        "skills" : [
                            "Android", "Scrum"
                        ]
                    },
                    {
                        "startYear" : "2012",
                        "endYear" : "2013",
                        "title" : "Entrepreneurship project",
                        "assignments" : [
                            "On year entrepreneurship project to build a business plan around an innovative idea.",
                            "Realisation of an Android application and a web application."
                        ],
                        "skills" : [
                            "HTML", "CSS", "JavaScript", "PHP", "Android", "JQuery", "Play"
                        ]
                    },
                    {
                        "startYear" : "2011",
                        "endYear" : "2014",
                        "title" : "Java projects",
                        "assignments" : [
                            "Realisation of differents Java projects:",
                            "A Backgammon: a board game with a user interface.",
                            "A connect 4 with an artificial intelligence.",
                            "A text editor.",
                            "A phrasal network."
                        ],
                        "skills" : [
                            "Java", "Swing", "Eclipse"
                        ]
                    },
                    {
                        "startYear" : "2009",
                        "endYear" : "2011",
                        "title" : "E-commerce website",
                        "assignments" : [
                            "Realisation of an e-commerce for a young artist: Audrey Jeanne.",
                            "Study, design, implementation and deployment of the website."
                        ],
                        "link" : "http://www.audreyjeanne.fr",
                        "skills" : [
                            "HTML", "CSS", "JavaScript", "PHP", "SQL", "JQuery", "SQLDevelopper"
                        ]
                    }
                ],
                "personal" : [
                    {
                        "startYear" : "2016",
                        "title" : "This website",
                        "assignments" : [
                            "Realisation of an online CV with new web technologies.",
                            "See the About section for more informations.",
                        ],
                        "link" : "http://www.maximerenou50.com",
                        "skills" : [
                            "HTML", "CSS", "TypeScript", "NoSQL", "Angular", "Meteor", "Bootstrap", "Git"
                        ]
                    },
                    {
                        "startYear" : "2015",
                        "title" : "Personal web project",
                        "assignments" : [
                            "Two sides parts project: a web parser than collects some informations from website and a web application that use this informations.",
                            "Still in progress..",
                        ],
                        "skills" : [
                            "HTML", "CSS", "JavaScript", "Java", "SQL", "Play", "SVN"
                        ]
                    }   
                ]
            },
             "trainings" : [
                {
                    "year" : 2014,
                    "title" : "Master’s degree in information technology (block-release training), specialty in software engineering",
                    "place" : "University of Rennes 1, France"
                },
                {
                    "year" : 2012,
                    "title" : "Bachelor’s degree in information technology",
                    "place" : "University of Caen, France"
                },
                {
                    "year" : 2011,
                    "title" : "\"DUT informatique\", equivalent to BTEC Higher National Diploma, university technology degree in information technology",
                    "place" : "University Institute of Technology in Caen, France"
                },
                {
                    "year" : 2009,
                    "title" : "\"Baccalauréat STI génie électrotechnique\", equivalent to BTEC National Diploma in electronic engineering",
                    "place" : "Secondary school \"Alexis de Tocqueville\" in Cherbourg, France"
                }
            ],
            "languages" : [
                {
                    "name" : "English",
                    "level" : 7
                },
                {
                    "name" : "French",
                    "level" : 10
                },
                {
                    "name" : "Spanish",
                    "level" : 2
                }
            ]
        }
    ];

    for (var i = 0; i < users.length; i++) {
        Users.insert(users[i]);
    }
  }
};
