import React from "react";

const Title = ({ title, className, underline, sub_title }) => {
  return (
    <>
      {underline ? (
        <>
          <h1 className={className}>{title}</h1>

          <div className="section-title-underline"></div>
        </>
      ) : (
        <>
          <h1 className={className}>{title}</h1>
          <h2 className="h2-light title_uppercase">{sub_title}</h2>
        </>
      )}
    </>
  );
};
export default Title;
