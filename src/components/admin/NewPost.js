import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Api from "../../api/Timeline";

const NewPost = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    if (loading) return;
    setLoading(true);
    console.log(values.password);

    Api.insertPost(
      {
        title: values.title,
        text: values.text,
        cityname: values.cityName,
        imageURL: values.imageURL,
        newsURL: values.newsURL,
        date: new Date(values.date).toISOString(),
      },
      values.password
    )
      .then((res) => {})
      .catch((err) => alert(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="admin-section">
      <p className="admin-section-title">Add Timeline Post</p>
      <form className="admin-section-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="password"
          placeholder="Password"
          ref={register({
            required: true,
          })}
        />
        <input
          name="title"
          placeholder="Title"
          ref={register({
            required: true,
          })}
        />
        <input name="text" placeholder="Text" ref={register()} />
        <input
          name="cityName"
          placeholder="City"
          ref={register({
            required: true,
          })}
        />
        <input name="imageURL" placeholder="Image URL" ref={register} />
        <input
          name="newsURL"
          placeholder="News URL"
          ref={register({
            required: true,
          })}
        />
        <input
          name="date"
          type="date"
          placeholder="date"
          ref={register({
            required: true,
          })}
        />
        {errors && Object.keys(errors).length > 0 && (
          <p>Error, fill in the form properly</p>
        )}
        <button type="submit">Create</button>
        {loading && <p>Loading...</p>}
      </form>
    </div>
  );
};

export default NewPost;
