import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "TORQUE XTREME — A CAR REPAIR SERVICE",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265033/Personal%20Portfolio%202/torque-1_hqxafc.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/torque-2_fawp9c.png",
    description:
      "Users can register and login through email/password, google or github account. Users can make order for a specific car repair service as well as add/edit services. User authorization has been implemented using JWT on the server side",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "React.js",
      "Firebase",
      "Tailwind CSS",
    ],
    liveLink: "https://www.google.com",
    frontEndLink: "https://www.google.com",
    backEndLink: "https://www.google.com",
  },
  {
    id: 2,
    title: "REACT SHOPPING — AN ELECTRONICS STORE",
    img1: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/shopping-1_nx6sfr.jpg",
    img2: "https://res.cloudinary.com/dpkbthpcw/image/upload/v1675265034/Personal%20Portfolio%202/shopping-2_z3boxd.jpg",
    description:
      "Shopping cart functionality has been implemented using Redux Toolkit. All the product data has been served via JSON server and fetched using RTK Query. Cart items also saved into the local storage of the client’s browser",
    tools: [
      "React.js",
      "Redux.js",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
    ],
    liveLink: "https://www.google.com",
    frontEndLink: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"Projects"} />

      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
