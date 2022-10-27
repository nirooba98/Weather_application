import React from "react";
import NowTemp from "./updateTemp";
import './styleComponent.css';
import { useSearchParams } from "react-router-dom";



class YourWeather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      location: {}
    };
  }
    

  componentDidMount () {

    let UrlSearchParam = this.props.params[0];
    let address = UrlSearchParam.get("address")
    this.getlatlong(address);

  }


  getlatlong(address) {

    fetch("http://api.positionstack.com/v1/forward?access_key=7349nk68l830756a&query="+address)
    .then((response) => response.json())
    .then((result) => {
      const newLocation = result.data
      const loaded = true;
      const newState = Object.assign({}, this.state, {
        isLoaded: loaded,
        location: newLocation,
      });
      this.setState(newState);
    }); 
    
  }

  
    render() {

      const {isLoaded, location } = this.state;


      if (!isLoaded) {
          return <div>Loading...</div>;
        } 
      else {
          return (

              <div>
                
                <div className="card">

                  <div className="card-body">
                      Latitude: {location[0].latitude},
                      Longitude: {location[0].longitude}
                  </div>

                </div>

                          
                        
                            


                          
                          
                <NowTemp lat={location[0].latitude}
                        long={location[0].longitude}/>
                        
              </div>
          );
          }

    }
}

  

export default (props) => (
    <YourWeather
        {...props}
        params={useSearchParams()}
    />
);

   