import React from 'react';
import Title from '../Title/Title';
import Card from '../Card/Card';
import imgCard from '../../assets/images/movie.jpg';
import imgCard1 from '../../assets/images/cake.jpg';
import imgCard2 from '../../assets/images/caffee.jpg';
import imgCard3 from '../../assets/images/money.jpg';
import imgCard4 from '../../assets/images/room.jpg';
import imgCard5 from '../../assets/images/programming.jpg';
import "./Projects.scss";

const cardContent = [
  {
    id: 1,
    image: imgCard,
    name: 'Movie App'
  },
  {
    id: 2,
    image: imgCard1,
    name: 'dessert app'
  },
  {
    id: 3,
    image: imgCard2,
    name: 'Coffee App'
  },
  {
    id: 4,
    image: imgCard3,
    name: 'budget App'
  },
  {
    id: 5,
    image: imgCard4,
    name: 'Hotel App'
  },
  {
    id: 6,
    image: imgCard5,
    name: 'bootstrap website'

  },
]
const cardItems = cardContent.map(item => {
  return <Card image={item.image} key={item.id} id={item.id}/>

})

const Projects = () => {
  return (
    <div className="projects-section py-4" id="projects">
      <div className="container">
       <div className="row">
          <div className="col-10 mx-auto col-sm-6 text-center">
              <Title title="my projects" className="title_uppercase h1-2-light mb-3"/>
          </div>
        </div>
        <div className="row">
          { cardItems }
         </div>
      </div>
    </div>
  );
}
export default Projects;
