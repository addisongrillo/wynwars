import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./Episodes.css";
import axios from "axios";
import ls from "./pics/ls.png";

class Episodes extends Component {
  state = { episode: [""] };

  getEpisode = e => {
    e.preventDefault();
    const episode = e.target.value;
    if (episode) {
      axios
        .get(`https://swapi.co/api/films/${episode}/`)
        .then(res => {
          console.log("res", res);
          this.setState({ episode: res.data });
          console.log(this.state.episode);
        })
        .catch(err => {
          console.log(err);
        });
      setTimeout(function() {
        let element = document.getElementById("epi");
        element.classList.remove("hidden");
      }, 500);
    } else {
      return;
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <div id="lsediv">
          <h1>Star Wars</h1>
          <img alt="lightsabers" id="lse" src={ls} />
          <h1>Episodes</h1>
        </div>
        <div id="middle">
          <select id="selector" placeholder="choose" onChange={this.getEpisode}>
            <option value="">---</option>
            <option value="1">A New Hope</option>
            <option value="2">Empire Strikes Back</option>
            <option value="3">Return of the Jedi</option>
            <option value="4">Phantom Menace</option>
            <option value="5">Attack of the Clones</option>
            <option value="6">Revenge of the Sith</option>
            <option value="7">The Force Awakens</option>
          </select>
          <div id="epi" className="episode hidden">
            <div id="poster">
              <img
                src={"./posters/" + this.state.episode.episode_id + ".jpg"}
                alt="poster"
              />
            </div>
            <div id="results">
              <p>Title: {this.state.episode.title}</p>
              <p>Episode ID: {this.state.episode.episode_id}</p>
              <p>Release Date: {this.state.episode.release_date}</p>
              <p>Directed By: {this.state.episode.director}</p>
              <p>Produced By: {this.state.episode.producer}</p>
              <p>Opening Crawl: {this.state.episode.opening_crawl}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Episodes;
