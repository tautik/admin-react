import React from "react";
import { Widget } from "../components/widget";

const Home = () => {
  return (
    <h1 className="text-3xl font-bold underline flex justify-around">
      <Widget type="user" />
      <Widget type="order" />
      <Widget type="earning" />
      <Widget type="balance" />
    </h1>
  );
};

export default Home;
