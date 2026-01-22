import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutSairam extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about sairam" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="sairam's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="sairam's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="sairam's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="sairam's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutSairam;

export const displayAboutSairam = () => {
    return <AboutSairam />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/sairam-avatar.png" alt="Sai Ram S A" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Sai Ram S A</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Big Data Analytics Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Graduate Student</span> currently pursuing M.Eng in Big Data Analytics at <u className=' cursor-pointer '> <a href="https://www.manipal.edu" target={"_blank"}>Manipal School of Information Sciences, MAHE</a> </u>. I have experience as a Flutter Developer Intern at Drighna Technology. ( Reach out to me <a className='text-underline' href='mailto:sairamsa23@gmail.com'><u>@sairamsa23@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building"> I enjoy building data pipelines, ML systems, and applications that solve real-world problems.</li>
                <li className=" mt-3 list-time"> When I am not coding, I like to explore new technologies, work on side projects, and learn about distributed systems.</li>
                <li className=" mt-3 list-star"> I have strong interests in Big Data Analytics, Machine Learning, LLMs, and Data Engineering!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Manipal School of Information Sciences, MAHE
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">June 2025 - June 2027</div>
                    <div className=" text-sm md:text-base">M. Eng in Big Data Analytics</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 9.32/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Dayananda Sagar Academy of Technology and Management
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">June 2020 - June 2024</div>
                    <div className=" text-sm md:text-base">B.E. in Information Science & Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 8.39/10</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of data engineering tools & ML frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Big Data Engineering, Apache Spark, Kafka & Machine Learning!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="sairam python" />
                        <img className="m-1" src="https://img.shields.io/badge/R-276DC3?style=flat&logo=r&logoColor=white" alt="sairam R" />
                        <img className="m-1" src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="sairam mysql" />
                        <img className="m-1" src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black" alt="sairam linux" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="sairam git" className="m-1" />
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=ffffff" alt="sairam docker" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Apache_Spark-E25A1C?style=flat&logo=apachespark&logoColor=white" alt="sairam spark" />
                        <img className=" m-1" src="https://img.shields.io/badge/Apache_Kafka-231F20?style=flat&logo=apachekafka&logoColor=white" alt="sairam kafka" />
                        <img className="m-1" src="https://img.shields.io/badge/Airflow-017CEE?style=flat&logo=apacheairflow&logoColor=white" alt="sairam airflow" />
                        <img className="m-1" src="https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white" alt="sairam pandas" />
                        <img src="https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white" alt="sairam numpy" className="m-1" />
                        <img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=flat&logo=huggingface&logoColor=black" alt="sairam huggingface" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Hadoop-66CCFF?style=flat&logo=apachehadoop&logoColor=black" alt="sairam hadoop" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> ML Skills:</span> <img className=" inline ml-1" src="https://img.shields.io/badge/FAISS-0467DF?style=plastic&logoColor=white" alt="sairam faiss" /> <img className=" inline ml-1" src="https://img.shields.io/badge/LLMs-412991?style=plastic&logoColor=white" alt="sairam llms" /> <img className=" inline ml-1" src="https://img.shields.io/badge/PowerBI-F2C811?style=plastic&logo=powerbi&logoColor=black" alt="sairam powerbi" />
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Aviation Analytics Pipeline",
            date: "2024",
            link: "https://github.com/sairam030/Aviation_Analytics",
            description: [
                "Architected and deployed a Lambda Architecture pipeline to process both real-time and historical aviation data.",
                "Built a Speed Layer using Apache Kafka to ingest live flight data from OpenSky Network API every 10 seconds.",
                "Developed a Batch Layer with Apache Spark to process historical flight data (2019-2022) for trajectory analysis.",
                "Containerized the entire stack using Docker Compose with 10+ services (Airflow, Spark, Kafka, Zookeeper, MinIO, PostgreSQL, Metabase)."
            ],
            domains: ["python", "apache-spark", "kafka", "airflow", "postgresql", "docker"]
        },
        {
            name: "Campus Recruitment Agentic RAG System",
            date: "2024",
            link: "https://github.com/sairam030/Placements_Agentic_RAG",
            description: [
                "Designed and deployed a multi-agent RAG system with LLM-powered planning, execution, critique, and synthesis.",
                "Built an end-to-end ETL pipeline processing 47+ companies' placement documents using OCR and LLM-based extraction (Qwen-32B).",
                "Implemented dual indexing architecture: pandas-based facts index and FAISS vector store with Sentence-BERT embeddings.",
                "Engineered an LLM agent orchestrator (Qwen-7B) with query planning, tool routing, and response synthesis."
            ],
            domains: ["python", "llm", "faiss", "streamlit", "vllm"]
        },
        {
            name: "Healthcare Management System",
            date: "Feb 2024 - Apr 2024",
            link: "https://github.com/sairam030",
            description: [
                "Engineered a healthcare application using Flutter for hospital operations and patient data management.",
                "Integrated and optimized RESTful APIs for OPD, IPD, radiology, and appointment scheduling.",
                "Implemented a smooth UI/UX to improve application responsiveness."
            ],
            domains: ["flutter", "dart", "rest-api"]
        }
    ];

    const tag_colors = {
        "python": "green-200",
        "apache-spark": "orange-400",
        "kafka": "gray-300",
        "airflow": "blue-400",
        "postgresql": "blue-500",
        "docker": "blue-300",
        "llm": "purple-500",
        "faiss": "blue-600",
        "streamlit": "red-400",
        "vllm": "purple-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "rest-api": "green-400"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=sairam030&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase() + "-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Sairam-Resume.pdf" title="sairam resume" frameBorder="0"></iframe>
    )
}
