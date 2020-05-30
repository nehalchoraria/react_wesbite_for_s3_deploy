import React, { useState, useEffect } from 'react';
import Loader from '../loader/Loader';
import './style.css'
import MyButton from '../button/MyButton';

export default function MyImage() {
  const [imageSrc, updateImageSrc] = useState('');
  const [isLoaderVisible, loaderVisiblilty] = useState(true);

  function getImage() {
    loaderVisiblilty(true);
    fetch('https://source.unsplash.com/random')
    .then(data => {
      updateImageSrc(data.url);
      loaderVisiblilty(false);
    } );
  }

  function buttonChildren() {
    return <div className="white" onClick={ e => getImage()}>Shuffle</div>
  }

  useEffect(() => {    
    getImage();
  },[] );
  
  return (
    
    isLoaderVisible ?  <Loader/> 
    : 
    <>
    <MyButton>{buttonChildren()}</MyButton>
    <img src={imageSrc} alt={imageSrc} /> 
    </>
  );
}