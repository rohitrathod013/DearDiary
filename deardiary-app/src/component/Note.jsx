import React from "react";
import PropTypes from "prop-types";

function Note(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  const myfunction = () => {
    console.log("CLICKED");
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        style={{ backgroundColor: "#ccd5ae" }}
        onClick={handleClick}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5678/5678542.png"
          height="25px"
          width="25px"
          alt="Delete"
          onClick={myfunction}
        />
      </button>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;