import React from 'react';
import {fetchvideos} from './modules/fetchVideos'
import './App.css';
import axios from 'axios'

const App = () => {
  let series

  fetchVideos().then((data) => {
    series = data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    
  })
  let listSeries
    listSeries= series.map(show => {
    <div>
      <img
        src={show.content.images.landscape.url}
        alt={show.content.title}
        />
    </div>
  })
 
}
  
return (
    <>
    <div className="header"/>
    <img src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg" id="image" />
      <div>
        {listSeries}
      </div>
      <div className="footer">
    </div>
    </>
  );
  


export default App;
