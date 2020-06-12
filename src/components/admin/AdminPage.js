import React from "react";
import NewPost from './NewPost';

import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="admin-container">
      <p className="admin-title">Top-Secret Admin Page</p>
      <NewPost />
    </div>
  );
};

export default AdminPage;
