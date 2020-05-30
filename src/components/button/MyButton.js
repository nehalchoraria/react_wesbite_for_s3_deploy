import React from 'react';
import './style.css'
export default function MyButton(props) {
    
  return (
    <>
    <div class="btn">{props.children}</div>
    </>
  );
}

