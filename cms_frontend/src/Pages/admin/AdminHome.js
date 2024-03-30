import React from "react";

function AdminHome() {
  return (
    <section className="container my-4 ">
      <div className="card mx-2 p-3">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Sub Heading
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Heading
            </label>
            <input type="text" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Content
            </label>
            <textarea className="form-control"></textarea>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Receive Patients
            </label>
            <input type="number" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">
              Expert Doctors
            </label>
            <input type="number" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-6">
            <label for="inputZip" class="form-label">
              Years of Experience
            </label>
            <input type="number" class="form-control" id="inputZip" />
          </div>
          <div class="col-md-6">
            <label for="" class="form-label">
              Home Image
            </label>
            <input class="form-control" type="file" id="formFile" />{" "}
          </div>
          <div class="col-12 mt-3">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AdminHome;
