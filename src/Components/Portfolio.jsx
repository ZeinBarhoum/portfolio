/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/manipulator.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Reinforcement Learning For Quadrotors",
    description:
      " The Quadrotor Reinforcement Learning project focuses on teaching a quadrotor how to fly in a simulated environment using reinforcement learning algorithms using PyTorch for implementing the reinforcement learning algorithms, and PyBullet for creating the simulated environemnt.",
    url: "https://github.com/ZeinBarhoum/RL-quadrotor",
  },
  {
    title: "Chess Manipulator",
    description:
      "Chess Manipulator is a simulation of a FRANKA EMIKA Panda robotic arm programmed to play chess. The project utilizes Gazebo simulation and ROS2 for implementation. The robotic arm is capable of making chess moves and interacting with the chessboard in a simulated environment.",
    url: "https://github.com/ZeinBarhoum/chess_manipulator",
  },
  {
    title: "Underwater Glider",
    description:
      "The Underwater Glider is an autonomous underwater vehicle that operates without external propellers or thrusters. This project involved the design, modeling, simulation, manufacturing, testing, and control of the underwater glider.",
    url: "https://github.com/ZeinBarhoum/Underwater-Glider",
  },
  {
    title: "Quadrotor Trajectory Planning and Control",
    description: "Comming Soon...",
    url: "https://github.com/ZeinBarhoum",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
