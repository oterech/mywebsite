// Projects
// Flip Card for each Project, picture front, description back, links to project/git hub

import React, { Component, useState } from "react";
import images from "../images"
import stack from "../assets/stack.png"

export default function Projects() {
  return (
    <div>
    <h1 className="mt-5 pt-5 display-1 projects">Projects</h1>
    <div className="p-5 d-flex mx-auto justify-content-center flex-wrap">
      {images.map(({ id, src, title, description }) => {
        const cardInfo = (descriptions.filter(item => {
        return  item.id === id
        }))
        const data = cardInfo[0]
        return <div className="flip-card mx-1 my-1">
          <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={src} title={title} description={description} id={id} key={id}  />
            </div>
            <div className="flip-card-back border border-1">
              <a href={data.link} className="title fs-4">{data.title}</a>
              <p className="mt-1 dates">{data.dates}</p>
              <p className="mx-1">{data.description}</p>
            </div>
          </div>
        </div>
      })}
    </div>
    </div>
  );
}

const descriptions = [
  {id: 1, title: 'Commune', description: 'A mobile app built with a cross functional product team throughout an eight week program. Commune aims to help users find better connections offline.', dates: 'August-November 2021', link: 'https://www.joincolab.io/projects/commune'},
  {id: 2, title: 'Voronoi Studio', description: 'A visual essay built with D3.js, Voronoi Studio displayed voronoi diagams filled with images from the MET API, and highlighted discrepencies in the art collection.', dates: 'July 2021', link: 'http://voronoi-studio.herokuapp.com'},
  {id: 3, title: 'Lolapalooza', description: 'Lolapalooza is a runner style game, built during a three day coding sprint with Phaser.js', dates: 'June 2021', link: 'http://lolas-game.herokuapp.com'},
  {id: 4, title: 'Good Morels', description: 'Good Morels is an e-commerce site where shoppers can browse and purchase a selection of artisanal mushrooms.', dates: 'June 2021', link: 'http://good-morels.herokuapp.com/home'},
]