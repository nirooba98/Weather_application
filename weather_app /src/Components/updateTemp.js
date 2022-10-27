import React from "react";

class NowTemp extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        weather:{},
        temp: {}
      };
  }



  getWeather(lat, long) {

    fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+long+"&current_weather=True")
        .then((response) => response.json())
        .then((result) => {
          const newWeather = result
          const loaded = true;
          const newTemp = newWeather.current_weather
          const nextState = Object.assign({}, this.state, {
            isLoaded: loaded,
            weather: newWeather,
            temp: newTemp
          });
          this.setState(nextState);
        });    
  }

  componentDidMount () {

      this.getWeather(this.props.lat, this.props.long);
    
  }


  render() {

      const {isLoaded, temp } = this.state;

      if (!isLoaded) {
          return <div>Loading...</div>;
        } 
        else {
          return (

              <div>
              
                  <div className="card">
                        <div className="card-body">

                            Temperature: {temp.temperature} 
                              
                        </div>
                  </div>
                          
                          
              </div>
          );
          }

  }
}

    
export default NowTemp;