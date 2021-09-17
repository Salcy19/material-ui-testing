import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Carousel } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import useStyles from './style';
import './App.css';

const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)


function GifButton (){
  const classes = useStyles();
  const [gifCarousel, setgifCarousel] = useState(null);

  function GifCarousel() {
  const fetchGifs = ({offset: Number}) =>
    giphy.search("dogs", {offset:3, limit: 10 });
  return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />;
  }

  const clickHandle = () => {
    if(gifCarousel === null){
      setgifCarousel(GifCarousel);
    }else{
      setgifCarousel(null);
    }
  }

  return (
    <div>
      {gifCarousel}
      <Button
        onClick={clickHandle}
        className={classes.button} 
        variant='contained' 
        color='primary'>
        Toggle Inspiration
      </Button>
    </div>
  )
}

export default GifButton;