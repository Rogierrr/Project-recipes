import React from "react";
import "./App.css";
import Fetch from "./components/Fetch";
import LikeCounter from './components/LikeCounter'
import AddComment from './components/AddComment'

export default class App extends React.Component {
  render() {
    return (
      <div>
        
        <header id="header" className="section-header scroll"></header>

        <div className="section-header-spacer"></div>

        <div className="content">
          <div className="title-badge">
            <div className="title-badge-title">
              <a href="/courses.html">Pasta app</a>
            </div>
          </div>
          <main>
          <Fetch  />
          </main>
          

          <div className="section section-what-usp">
            <div className="component-section-header">
              <h2>
                <div className="description">We know you all love pasta!!</div>
                <img
                  className="image"
                  src="https://thumbs.dreamstime.com/b/photo-overweight-man-enjoying-plate-spaghetti-focus-face-crazy-man-eating-plate-spaghetti-114526038.jpg"
                  alt= 'crazy guy eating pasta'
                />
              </h2>
            </div>

            <div className="component-usp-row">
            <div className="item team">
                <div className="component-title title">Pasta Pesto</div>
                <img
                  className="image"
                  src="https://cupfulofkale.com/wp-content/uploads/2019/05/Roasted-Courgette-Pesto-Pasta-720x540.jpeg"
                  alt="pasta pesto"
                />
                <AddComment />
                <LikeCounter />
              </div>
              <div className="item team">
                <div className="component-title title">Linguine with garlic butter prawns</div>
                <img
                  className="image"
                  src="https://img.taste.com.au/oOvDMASb/w720-h480-cfill-q80/taste/2016/11/linguine-with-prawns-chilli-garlic-rocket-95151-1.jpeg"
                  alt="more pasta"
                />
                <AddComment />
                <LikeCounter />
              </div>
              
              <div className="item team">
                <div className="component-title title">White truffle pasta</div>
                <img
                  className="image"
                  src="https://blog.liebherr.com/appliances/my/wp-content/uploads/sites/8/2019/05/Truffle_Pasta-721x400.jpg"
                  alt="more pasta"
                />
                <AddComment />
                <LikeCounter />
              </div>
              <div className="item team">
                <div className="component-title title">Pasta carbonara</div>
                <img
                  className="image"
                  src="https://assets.bonappetit.com/photos/5a6f48f94f860a026c60fd71/16:9/w_1200,c_limit/pasta-carbonara.jpg"
                  alt="another pasta"
                />
                <AddComment />
                <LikeCounter />
              </div>
              <div className="item team">
                <div className="component-title title">Spaghetti Bolognese</div>
                <img
                  className="image"
                  src="http://assets.kraftfoods.com/recipe_images/opendeploy/201689_640x428.jpg"
                  alt="pasta"
                />
                <AddComment />
                <LikeCounter />
              </div>
            </div>
          </div>

          <div className="section-line">
            <div className="line "></div>
          </div>


</div>
      </div>
    );
  }
}
