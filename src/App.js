import React from "react";
import "./App.css";


export default class App extends React.Component {
  render() {
    return (
      <div>
        <header id="header" className="section-header scroll">
        </header>

        <div className="section-header-spacer"></div>

        <div className="content">
        <div className="title-badge">
                <div className="title-badge-title" >
                <a href="/courses.html">Pasta app
                </a></div>
              </div>
          
        <div className="section section-what-usp">
           <div className="component-section-header">
              <h2>
              <div className="description">
                    We know you all love pasta!!
              </div>
              <img className="image" src="https://thumbs.dreamstime.com/b/photo-overweight-man-enjoying-plate-spaghetti-focus-face-crazy-man-eating-plate-spaghetti-114526038.jpg" />          
              </h2>

            </div>

            <div className="component-usp-row">
              <div className="item team">
              <div className="component-title title">
                  Caponata pasta
              </div>
                <img className="image" src="https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg" />
               
              </div>
              <div className="item team">
              <div className="component-title title">
                  Pasta carbonara
                  </div>
                <img className="image" src="https://www.simplyrecipes.com/wp-content/uploads/2012/02/pasta-carbonara-vertical-a-1200.jpg" />
                
              </div>
              <div className="item team">
              <div className="component-title title">
                  Spaghetti Bolognese
                </div>
                <img className="image" src="http://assets.kraftfoods.com/recipe_images/opendeploy/201689_640x428.jpg" />
                
              </div>
            </div>
            

          </div>

          <div className="section-line">
            <div className="line "></div>
          </div>

          <div className="section section-courses-usp">
            <div className="component-section-header">

              <div className="title-badge">
                <div className="title-badge-title">Courses</div>
              </div>

              <h2>
                <div className="component-title ">
                  Our Courses
                </div>
              </h2>

              <div className="description">
                We have created courses to help you learn, with easy to follow steps and some sparks of fun!
              </div>

            </div>

            <div className="component-usp-row">
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/expand-horizon.svg" />
                <div className="component-title title">
                  Learn new skills and expand your horizon
                </div>
              </div>
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/developers.svg" />
                <div className="component-title title">
                  Follow courses created by experienced developers
                </div>
              </div>
              <div className="item team">
                <img className="image" style={{ width: "200px" }} src="https://learntocodetogether.nl/assets/step-by-step.svg" />
                <div className="component-title title">
                  Fun, hands on and easy to follow
                </div>
              </div>
            </div>

          </div>

          <div className="section-line">
            <div className="line "></div>
          </div>

          <div className="section section-why-usp">
            <div className="component-section-header">

              <div className="title-badge">
                <div className="title-badge-title">Why?</div>
              </div>

              <h2>
                <div className="component-title ">
                  Why do we do this
                </div>
              </h2>

              <div className="description">
                It’s really simple actually. We just love to combine our passion for code with our love for teaching. 
                Coding is so much fun when doing it together.
              </div>

            </div>

            <div className="component-usp-row">
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/technology.svg" />
                <div className="component-title title">
                  Technology
                </div>
                <div className="description">
                  We love to experiment and create awesome stuff from the comfort of our couch.
                </div>
              </div>
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/community.svg" />
                <div className="component-title title">
                  People
                </div>
                <div className="description">
                  It’s always fun to do things together, the excitement and the collaborations.
                </div>
              </div>
              <div className="item team">
                <img className="image" src="https://learntocodetogether.nl/assets/personal-speed.svg" />
                <div className="component-title title">
                  Teaching
                </div>
                <div className="description">
                  We like to learn and to teach others the stuff we know.
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="section-line">
          <div className="line "></div>
        </div>

        <div className="section-footer">
          <img className="logo" src="https://learntocodetogether.nl/assets/logo.svg" />
          <div className="title">Created by</div>
          <div className="subtitle">Rein Op &#x27;t land &amp; Danny van der Jagt</div>
          <div className="team-container">
            <img className="team" src="https://learntocodetogether.nl/assets/danny&rein.svg" />
          </div>
        </div>

      </div>
    );
  }
}
