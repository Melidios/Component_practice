import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project  from './Project.js';

class Projects extends Component {
  render(){

    return(
    <div id="portfolio">
      <p> These are some of my projects </p>
         {projects.allProjects.map((project, i) => {
        return (
          <Project title={project.title} key={i} description={project.description} imgName={project.imgName}  />
        )
      })}
    </div>
  )}
}

export default Projects
