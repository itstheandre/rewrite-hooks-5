import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Alfonso } from "../context/Alfonsocontext";

export default function ProjectList(props) {
  const { banana, increment } = useContext(Alfonso);
  console.log("banana:", banana);
  console.log(props.projects);
  return (
    <div>
      <h2>
        Projects: <button onClick={increment}>CLICK HERE</button>{" "}
      </h2>
      {props.projects.map((project) => {
        return (
          <div key={project._id}>
            <h3>
              <Link to={`/projects/${project._id}`}>{project.title}</Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
