import React from "react";
import { Link } from "react-router-dom";
import ReviewAdd from "./ReviewAdd";
import { MdDelete } from "react-icons/md";

function Review() {
  return (
    <section className="container my-4">
      <div className="card shadow border-0 mb-2 top-header">
        <div className="container-fluid py-4">
          <div className="row align-items-center justify-content-between ">
            <div className="col">
              <div className="d-flex align-items-center gap-4">
                <h1 className="h4 ls-tight">Review</h1>
              </div>
            </div>
            <div className="col-auto">
              <div className="hstack gap-2 justify-content-end">
                <ReviewAdd />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow border-0 mb-2 top-header">
        <div className="container py-4">
        <div className="row g-3">
          <div className="table-responsive p-2">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Review Content</th>
                  <th scope="col">Review Name</th>
                  <th scope="col">Review Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Singapore</td>
                  <td>
                    <Link to="/">
                      <button className="btn btn-sm shadow-none border-none">
                        <MdDelete />
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
