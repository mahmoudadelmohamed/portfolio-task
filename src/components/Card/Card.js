import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


import Button from '../Button/Button';
import "./Card.scss";

const Card = ({ image, id }) => {
  return (
      <div className="col-lg-4 col-md-6 col-sm-6 mt-4">
        <div className="card single-item">
          <div className="img-container">
            <img src={image} className="card-img-top image_card" alt="card-img" />
            <Link to={`/details/${id}`} className="card-item-icon" style={{textDecoration: 'none'}}>
            <Button
              content="Visit Website"
              them="outline-primary"
              icon={faArrowRight}
              iconMarginRight="l"
              order='1'
              />
            </Link>
          </div>
        </div>
      </div>
  );
}
export default Card;
