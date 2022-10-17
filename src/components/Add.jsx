import React, { useState } from "react";
import { Api } from "./Api";
function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddContact = async (e) => {
    e.preventDefault();
    try {
      const addConctact = Api.post("/", { name, email, phone });
      window.location = "/";
      console.log(addConctact);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="container mb-10">
      {/* <h2>Modal Example</h2> */}
      <button
        type="button"
        className="btn btn-info btn-lg"
        data-toggle="modal"
        data-target="#myModal"
      >
        Add Contact
      </button>

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header form-control display-flex p-10 mb-4">
              <h4 className="modal-title ">Enter Contact Details</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <form>
              <div className="modal-body p-4 m-6">
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control mb-4 "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control  mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control  mb-4"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              </div>
              <div className="modal-footer form-control display-flex ">
                <button
                  type="button"
                  className="btn btn-primary"
                  // data-dismiss="modal"
                  onClick={handleAddContact}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
/*
function Add() {
 
  return (
    <div className="container mb-10">
      <Fragment>
        <button
          type="button"
          className="btn btn-warning"
          data-toggle="modal"
          data-target={`#id$`}
        >
          Add Contact
        </button>
        <div className="modal" id={`id$`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header ">
                <h4 className="modal-title">Enter Contact List</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

             

            <div className="modal-footer display-flex">
              <button
                type="button"
                className="btn btn-warning m-2"
                data-dismiss="modal"
                // onClick={(e) => submitHandler(e)}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
*/
