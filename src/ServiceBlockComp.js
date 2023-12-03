import React from "react";
import SERVICE_BLOCK_DATA from "./ServiceBlock";

const ServiceComponent = ({ imgURL, text }) => (
  <div className={`singleCard ${text}Card`}>
    <img src={imgURL} alt={`${text} services image`} />
    <p>{text}</p>
  </div>
);

const ServiceList = () =>
  SERVICE_BLOCK_DATA.map((service, index) => (
    <ServiceComponent key={index} {...service} />
  ));

export default ServiceList;
