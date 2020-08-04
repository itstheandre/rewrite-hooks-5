import React, { Component, useState, useEffect } from "react";
import ProjectList from "./ProjectList";
import AddProject from "./AddProject";
import axios from "axios";

function Projects2(props) {
  const [projects, setProjects] = useState([]);

  const getData = () => {
    axios
      .get("/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("MOUNT");
    getData();

    return () => {
      console.log("PEACE, IM OUT");
    };
  }, []);

  useEffect(() => {
    console.log("PROJECTS CHANGED");
  }, [projects]);

  console.log(projects);
  return (
    <div className="projects-container">
      <AddProject getData={getData} />
      <ProjectList projects={projects} />
    </div>
  );
}
export default Projects2;
// export default class Projects extends Component {
//   state = {
//     projects: [],
//   };

//   componentDidMount = () => {
//     this.getData();
//   };

//   getData = () => {
//     axios
//       .get("/api/projects")
//       .then((response) => {
//         this.setState({
//           projects: response.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     console.log(this.state.projects);
//     return (
//       <div className="projects-container">
//         <AddProject getData={this.getData} />
//         <ProjectList projects={this.state.projects} />
//       </div>
//     );
//   }
// }
