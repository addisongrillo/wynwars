import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./home.css";



class Home extends Component {

  componentDidMount(){
    let elem = document.getElementById('homePage');
    let body = document.body
    elem.style.color = 'red'
    body.style.overflow = 'hidden'
  }
  componentWillUnmount(){
    let body = document.body
    body.style.overflowY = 'scroll'
  }

  render() {
    return (
      <div id="home" className="s2 t2">
        <Navbar />

        <div className="fade" />

        {
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <p />
                <h1>About Us</h1>
              </div>

              <p id="about">
                <span className="caps">W</span>elcome to the{" "}
                <span className="caps">s</span>tar <span className="caps">w</span>ars{" "}
                <span className="caps">D</span>atabase! For All of your intrests in
                the universe beyond stars, we have created a{" "}
                <span className="caps">D</span>atabase made available for anyone to
                search their favorite <span className="caps">E</span>pisodes along
                with <span className="caps">C</span>harecters within them. The{" "}
                <span className="caps">G</span>alaxy is unlimited. &nbsp;&nbsp;{" "}
              </p>
              <p>
                <span className="caps">M</span>ay the force be with you!
              </p>
            </div>
          </section>
        }

        <div id="fLogo" className="starwars-demo">
          <img
            src="//cssanimation.rocks/demo/starwars/images/star.svg"
            alt="Star"
            className="star"
          />
          <img
            src="//cssanimation.rocks/demo/starwars/images/wars.svg"
            alt="Wars"
            className="wars"
          />
          <h2 className="byline" id="byline">
            {" "}
            The Database
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
