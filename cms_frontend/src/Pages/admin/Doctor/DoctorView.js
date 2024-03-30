import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function DoctorView({ doctor }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={doctor.image} />
        <Card.Body>
          <Card.Title>{doctor.name}</Card.Title>
          <Card.Text>{doctor.title}</Card.Text>
          <Card.Text>{doctor.stars}</Card.Text>
          <Link to="/admin/doctor">
            <Button variant="secondary">
              <FaArrowLeft /> Back to List
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DoctorView;
