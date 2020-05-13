import React from 'react';
import './Image.scss';
const Image = ({ src }) => {

  return (
    <div className="image-wrapper">
        <img src={src} className="image" alt="images"/>
    </div>
  );
}
export default Image;
