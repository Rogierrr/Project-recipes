import React, { Component } from "react";
import './Fetch.css'

class Fetch extends Component {
  
  state = {
    pasta: null
  }
  
  
  componentDidMount() {
    // fetch("https://api.openbrewerydb.org/breweries")
    fetch("https://api.openbrewerydb.org/breweries")
      .then(res => res.json())
      .then(json => {
        this.setState({pasta: json})
        console.log("json", json);
      }); 
  }
  
  render() {
    console.log("fetch render");
    
    if (this.state.pasta === null){
      return "loading..."
    } 
      return(
        <div>
          {this.state.pasta.map((pasta, index) => {
            return(
            <div className="feed" key={index}>
            <img>{pasta.img}</img>
            <h1>{pasta.name}</h1>
            <h2>{pasta.brewery_type}</h2>
            </div>
            )
          })} 


        </div>
      )
    }
    
  }


export default Fetch;



// if (this.state.loading === true) {
//   return <div>Loading... </div>;
// } else {
//   return (
//     <div>
//       {this.state.data.map(pasta => {
//         <div> 
//         <h1> {pasta.title} </h1>;
//         </div>
//       })
//     </div>
//   );
