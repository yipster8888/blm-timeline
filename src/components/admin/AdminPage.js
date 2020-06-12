import React from "react";
import { useForm } from "react-hook-form";

import "./AdminPage.css";

const AdminPage = () => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="admin-container">
      <p className="admin-title">Top-Secret Admin Page</p>
      <div className="admin-section">
        <p className="admin-section-title">Add Timeline Post</p>
        <form className="admin-section-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="password" placeholder="Password" ref={register} />
          <input name="title" placeholder="Title" ref={register} />
          <input name="text" placeholder="Text" ref={register} />
          <input name="city" placeholder="City" ref={register} />
          <input name="imageURL" placeholder="Image URL" ref={register} />
          <input name="newsURL" placeholder="News URL" ref={register} />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
