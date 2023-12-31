import React from "react";

function Badge(props) {
  const faIcon = "fa-solid " + props.faIcon;
  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{props.text}</span>
        <span className="tag is-success">
          <i className={faIcon}></i>
        </span>
      </div>
    </div>
  );
}

export default Badge;
