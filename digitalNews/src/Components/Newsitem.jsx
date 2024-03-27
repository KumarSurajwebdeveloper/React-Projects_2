import React from "react";
import image from "../assets/news.jpg";

const Newsitem = ({ title, description, src, url }) => {
  return (
    <>
      <div
        className="card bg-dark text-light mb-3 d-inline-block d-inline-block my-3 mx-3 mb-3 py-2 px-2 "
        style={{ maxWidth: "345px" }}
      >
        <img
          src={src ? src : image}
          style={{ height: "200px", width: "325px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 50)
              : "Oops.....news has been removed...."}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read More..
          </a>
        </div>
      </div>
    </>
  );
};

export default Newsitem;
