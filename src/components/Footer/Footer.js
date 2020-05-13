import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';
const footerContent = [
  {
    id: 1,
    link: `https://www.facebook.com`,
    className: `footer-icon-social`,
    icon: <FaFacebook />
  },
  {
    id: 2,
    link: `https://github.com/mahmoudadelmohamed`,
    className: `footer-icon-social`,
    icon: <FaGithub />
  },
  {
    id: 3,
    link: `https://Google.com`,
    className: `footer-icon-social`,
    icon: <FaGoogle />
  },
  {
    id: 4,
    link: `https://www.linkedin.com/in/mahmoud-adel-27386715a/`,
    className: `footer-icon-social`,
    icon: <FaLinkedin />
  },
]
const icons = footerContent.map(item => {
  return <a href={item.link} target="_blank" rel="noopener noreferrer" className={item.className} key={item.id}>
    { item.icon }
  </a>;
})

const Footer = () => {
  return (
    <footer>
   <div className="container-fluid" id="content">
     <div className="row">
       <div className="col-md-6 footer-title py-5">
         <h1 className="text-center h1-2-light title_uppercase social_network">contact</h1>
         <div className="footer-icons my-3 d-flex justify-content-center align-items-center flex-wrap">
           { icons }
         </div>
       </div>
       <div className="col-md-6 footer-contact text-center ">
         <h2 className="mb-4 h1-2-light title_uppercase text-center">Hire me</h2>
         <form>
     <div className="form-group">
        <input type="text" className="form-control" placeholder="Enter Name"/>
     </div>
      <div className="form-group">
         <input type="email" className="form-control" placeholder="Enter Email"/>
      </div>
      <div className="form-group">
         <textarea className="form-control" rows="3" placeholder="Enter Message"></textarea>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button type="submit" className="btn btn-outline-pages text-center mb-3 w-100">Submit</button>
      </div>
    </form>
       </div>
     </div>
   </div>
 </footer>
  );
}
export default Footer;
