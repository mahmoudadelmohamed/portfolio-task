import React from 'react';
import "./Paragraph.scss";

const Paragraph = ({text, title, className}) => {
  return (
    <div className={className}>
      <h2 className="title_uppercase mb-2 title_mt">{ title }</h2>
      <p className="paragraph mt-3">{text}</p>
     </div>
  );
}
export default Paragraph;
