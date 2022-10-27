import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { UserInput } from './Components/Input_form';
import YourWeather from './Components/weather';
import NotFound from './Components/not_found';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">

      


        <BrowserRouter>

      

          <Routes>

              <Route exact path="/Home" element={<UserInput />}/>
              <Route  path="/location" element={<YourWeather />}/>
              <Route exact path="/" element={<UserInput />}/>
              <Route path="*" element={<NotFound/>}/>
              
              
          </Routes>  
            
        
        </BrowserRouter>
      
    
        
      </header>
    </div>
  );
}

export default App;
