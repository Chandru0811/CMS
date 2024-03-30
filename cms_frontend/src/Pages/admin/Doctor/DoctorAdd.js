import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import profiles from "./Profiles";

function DoctorAdd() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  const [image, setImage] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    profiles.push({
      id: uniqueId,
      name: name,
      title: title,
      stars: star,
      image: image ? image.name : "",
    });
    navigate("/admin/doctor");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
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
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            accept="image"
            onChange={handleImageChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default DoctorAdd;
