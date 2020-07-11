import React from "react";
import image from "./index.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        "https://github.com//ankanbal",
        "https://bitbucket.org/ankanb49/",
        "https://about.me/ankanb49",
        "https://www.linkedin.com/in/ankan-bal-929a80141/",
      ],
      items: ["Projects", "Anime", "Experience", "Games", "Drawings"],
    };
    this.styles = {
      padding: 25,
      backgroundColor: "black",
      color: "black",
      fontSize: 25,
    };
    this.link = this.link.bind(this);
  }
  link(i) {
    return "/" + i;
  }
  render() {
    return (
      <div className="container-fluid">
        <div>
          <div>
            <h1>My portfolio blog</h1>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={image} alt="profile-pic" />
              <br />
              {this.state.items.map((i) => (
                <div>
                  <Router>
                    <Link to={this.link(i)}>
                      <button className="btn btn-success">{i}</button>
                    </Link>
                  </Router>
                  <br />
                  <br />
                </div>
              ))}
            </div>
            <div className="col-md-3">
              <h2>Introduction</h2>
              I am interested in game design, AR/VR (particularly AR), Full
              stack development, AI/ML, IoT(love playing with the modules) and
              data processing. IoT assembling is something that I do even for
              fun too like playing with all kinds of different modules to create
              something different everytime be it on Arduino or Raspi3. But my
              passion runs for game design and development and solving problems
              through programming but mostly I do it on python. I intend to
              start my own research in that field too.
              <br />
              <h2>Relevant Links</h2>
              <ul>
                <li>
                  <a href={this.state.links[0]}>GitHub</a>
                </li>
                <li>
                  <a href={this.state.links[1]}>BitBucket</a>
                </li>
                <li>
                  <a href={this.state.links[2]}>About me</a>
                </li>
                <li>
                  <a href={this.state.links[3]}>Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
