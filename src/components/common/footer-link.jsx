import React from "react";

const FooterLink = ({ url, title, icon }) => {
  return (
    <React.Fragment>
      <a href={url} target="_blank" rel="noopener noreferrer" title={title}>
        <i className={`bi ${icon} fs-3 text-light`}></i>
      </a>
    </React.Fragment>
  );
};

export default FooterLink;
