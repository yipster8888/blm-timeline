import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <>
    <p>Sorry, this page does not exist</p>
    <p>Go back <Link to="/">Home</Link></p>
  </>
);

export default PageNotFound;
