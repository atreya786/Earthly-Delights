import React from "react";
import "./Body.css";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BsSend } from "react-icons/bs";

const Body = ({ name, image, caption }) => {
  return (
    <>
      <div>
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{caption}
            </p>
            <div className="icons">
              <AiFillHeart />
              <BiComment />
              <BsSend />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
