import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./home.css";



class Home extends Component {

  componentDidMount(){
    var elem = document.getElementById('homePage');
  elem.style.color = 'red'
  }

  render() {
    return (
      <div id="home" class="s2 t2">
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
                <span class="caps">W</span>elcome to the{" "}
                <span class="caps">s</span>tar <span class="caps">w</span>ars{" "}
                <span class="caps">D</span>atabase! For All of your intrests in
                the universe beyond stars, we have created a{" "}
                <span class="caps">D</span>atabase made available for anyone to
                search their favorite <span class="caps">E</span>pisodes along
                with <span class="caps">C</span>harecters within them. The{" "}
                <span class="caps">G</span>alaxy is unlimited. &nbsp;&nbsp;{" "}
              </p>
              <p>
                <span class="caps">M</span>ay the force be with you!
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
