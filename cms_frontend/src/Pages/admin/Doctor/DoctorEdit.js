import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import profiles from "./Profiles";

function DoctorEdit() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  const [image, setImage] = useState(null);
  const [id, setId] = useState("");

  let navigate = useNavigate();

  var index = profiles
    .map(function (e) {
      return e.id;
    })
    .indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedProfile = { ...profiles[index] };
    updatedProfile.name = name;
    updatedProfile.title = title;
    updatedProfile.stars = star;
    if (image) {
      updatedProfile.image = image.name;
    }

    profiles[index] = updatedProfile;

    navigate("/admin/doctor");
  };

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setTitle(localStorage.getItem("title"));
    setStar(localStorage.getItem("stars"));
    setId(localStorage.getItem("id"));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formStars">
          <Form.Label>Stars</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Rating"
            required
            value={star}
            onChange={(e) => setStar(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Update
        </Button>
      </Form>
    </div>
  );
}

export default DoctorEdit;
