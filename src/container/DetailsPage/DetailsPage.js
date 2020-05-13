import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "../../components/Image/Image";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import ToolsList from "../../components/ToolsList/ToolsList";
import Button from "../../components/Button/Button";
import { faLink, faHome } from "@fortawesome/free-solid-svg-icons";
import imgCard from "../../assets/images/movie.jpg";
import imgCard1 from "../../assets/images/cake.jpg";
import imgCard2 from "../../assets/images/caffee.jpg";
import imgCard3 from "../../assets/images/money.jpg";
import imgCard4 from "../../assets/images/room.jpg";
import imgCard5 from "../../assets/images/programming.jpg";
import "./DetailsPage.scss";
/*This object have a details of any projct */
const cardContent = [
  {
    id: 1,
    image: imgCard,
    name: "Movie App",
    time: "2020",
    tools: [
      { id: 1, tool: "React js" },
      { id: 2, tool: "React Bootstrap" },
      { id: 3, tool: "SASS" },
      { id: 4, tool: "GIT" }
    ],
    overview: `
    This movie app that has many features, users can feel free to search
    for any movie and visite movie details page which know anything
    about the movie (name, actorsm rate, genres, recommended movies)
    and option to visit actor page then you have all movie that actor make
    and actor informations`,
    github: `https://github.com/mahmoudadelmohamed/movie-container-react`,
    website: `https://movies-container.netlify.app/`
  },
  {
    id: 2,
    image: imgCard1,
    name: "dessert app",
    time: "2019",
    tools: [
      { id: 1, tool: "HTML" },
      { id: 2, tool: "CSS" },
      { id: 3, tool: "vanilla javascript" },
      { id: 4, tool: "bootstrap" }
    ],
    overview: `This simulation project which sells desserts gives the client make his
      own cart and more features like search in a specific element, add
      elements in the cart, remove an element from the cart and clear the
      cart​.`,
    github: `https://github.com/mahmoudadelmohamed/Front-end/tree/master/Medium%20Projects/dessert`,
    website: `https://dessert.netlify.app/`
  },
  {
    id: 3,
    image: imgCard2,
    name: "Coffee App",
    time: "2019",
    tools: [
      { id: 1, tool: "HTML" },
      { id: 2, tool: "CSS" },
      { id: 3, tool: "vanilla javascript" },
      { id: 4, tool: "bootstrap" }
    ],
    overview: `This simulation project gives clients the right to hang out with
elements that coffee shops offer.`,
    github: `https://github.com/mahmoudadelmohamed/Front-end/tree/master/Medium%20Projects/Coffee%20Shop`,
    website: `https://alpha-coffee.netlify.app/`
  },
  {
    id: 4,
    image: imgCard3,
    name: "budget App",
    time: "2019",
    tools: [
      { id: 1, tool: "HTML" },
      { id: 2, tool: "CSS" },
      { id: 3, tool: "vanilla javascript" },
      { id: 4, tool: "bootstrap" }
    ],
    overview: `This simulation project gives clients the right to hang out with
elements that coffee shops offer.`,
    github: `https://github.com/mahmoudadelmohamed/Front-end/tree/master/Medium%20Projects/Budget%20Project`,
    website: `https://vanilla-js-budget.netlify.app/`
  },
  {
    id: 5,
    image: imgCard4,
    name: "Hotel App",
    time: "2019",
    tools: [
      { id: 1, tool: "React js" },
      { id: 2, tool: "React Bootstrap" },
      { id: 3, tool: "SASS" },
      { id: 4, tool: "GIT" }
    ],
    overview: `This project show many features in the hotel like how rooms look like and user have an option to filter
  roomes based on { price, size, pets, breakfast, ete .. }
  .`,
    github: `https://github.com/mahmoudadelmohamed/react-hotel-app`,
    website: `https://infallible-tereshkova-3e73a5.netlify.app/`
  },
  {
    id: 6,
    image: imgCard5,
    name: "bootstrap website",
    time: "2019",
    tools: [
      { id: 1, tool: "React js" },
      { id: 2, tool: "React Bootstrap" },
      { id: 3, tool: "SASS" },
      { id: 4, tool: "GIT" }
    ],
    overview: `This is the first bootstrap website that i work This practice in cource and website simulate my favoriat
  band i like and this more sections in this websit like last alpumes and my favoriat songs and so on
  .`,
    github: `https://github.com/mahmoudadelmohamed/Front-end/tree/master/Small%20Projects/Bootstrap%20Website`,
    website: `https://relaxed-lumiere-bcf387.netlify.app/`
  }
];
class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }
  render() {
    /*this function to filter and get image based on her id*/
    const specific_image = cardContent.filter(items => {
      return items.id == this.state.id;
    });
    const {
      name,
      image,
      time,
      tools,
      overview,
      github,
      website
    } = specific_image[0];
    return (
      <>
        <Container fluid className="mt-5 container_height">
          <Row className="d-flex align-items-center">
            <Col lg={5} sm={12}>
              <Image src={image} />
            </Col>
            <Col lg={5} sm={12}>
              <Title
                title={name}
                sub_title={`since ${time}`}
                className="h1-2-light title_uppercase"
              />
              <ToolsList
                list={tools}
                title="Tools and Technologies"
                className="mb-xs-40"
              />
              <Paragraph
                title="overview"
                text={overview}
                className="mb-xs-40"
              />
              <div className="d-flex justify-content-between align-items-start mt-5 mb-3">
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    order="1"
                    icon={faLink}
                    content="Website"
                    them="outline-pages"
                    iconMarginLeft="l"
                  />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    order="1"
                    icon={faLink}
                    content="Github"
                    them="outline-pages"
                    iconMarginLeft="l"
                  />
                </a>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    icon={faHome}
                    content="Back"
                    them="outline-pages"
                    iconMarginRight="r"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default DetailsPage;
