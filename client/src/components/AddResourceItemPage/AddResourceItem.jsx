import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import "AddItem.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const AddResourceItem = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    link: "",
    resource: "",
    description: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.title.length < 5) {
      toast.error("Title must be at least 5 characters long", {
        position: "bottom-center",
      });
    } else if (validator.isURL(form.link) === false) {
      toast.error("Link must be valid URL", { position: "bottom-center" });
    } else if (form.resource.length < 3) {
      toast.error("Resource must be at least 3 characters", {
        position: "bottom-center",
      });
    } else if (form.description.length < 30) {
      toast.error("Description must be at least 30 characters", {
        position: "bottom-center",
      });
    } else {
      fetch(
        " https://media-content.ccbp.in/website/react-assignment/add_resource.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      toast.success("Added Successfully", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setForm({
        title: "",
        link: "",
        resource: "",
        description: "",
      });
    }
  };
  return (
    <div>
      <div className="main-div">
        <div className="left">
          <h2>Item Details</h2>
          <form onSubmit={handleSubmit}>
            <input
              value={form.title}
              onChange={handleChange}
              type="text"
              name="title"
              required
            />
            <input
              value={form.link}
              onChange={handleChange}
              type="text"
              name="link"
              required
            />
            <input
              value={form.resource}
              onChange={handleChange}
              type="text"
              name="resource"
              required
            />
            <textarea
              value={form.description}
              onChange={handleChange}
              name="description"
              cols="30"
              rows="3"
              required
            ></textarea>
            <button type="submit">Create</button>
          </form>
        </div>
        <div className="right">
          <img src="" alt="Image" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddResourceItem;
