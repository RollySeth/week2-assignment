import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bloglist from './Bloglist';
import MissedBloglist from './MissedBlogList';


function App() {
  return (
    <div className="App">
      <table>
         <tr className="Appheading"> <br></br><b>For you </b> 
            <hr/> </tr> 
         
         <tr> <Bloglist /> </tr>
         <tr><br></br><b> In case you missed it </b>  <hr/> </tr>
         <tr><MissedBloglist /> </tr>
      </table>
    </div>
  
    
  );
}

export default App;
