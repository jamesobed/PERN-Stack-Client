// import { json } from "node:stream/consumers";
import React, { useState, Fragment } from "react";
import { Api } from "./Api";
function Edit({ item }) {
  //   console.log(item);
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);
  const [phone, setPhone] = useState(item.phone);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, phone };
      //   const addConctact = await Api.put(`/${item.id}`, { name, email, phone });
      const addConctact = await fetch(
        `http://localhost:3009/api/users/details/${item.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
      console.log(addConctact);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${item.id}`}
      >
        Edit
      </button>
      <div className="modal" id={`id${item.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header ">
              <h4 className="modal-title">Contact List</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setName(item.name)}
              >
                &times;
              </button>
            </div>
            <form>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="edit title"
                  className="form-control mb-4 p-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="edit completed"
                  className="form-control mb-4 p-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="edit completed"
                  className="form-control mb-4 p-4"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="modal-footer display-flex">
                <button
                  type="button"
                  className="btn btn-warning m-2"
                  data-dismiss="modal"
                  onClick={(e) => handleEdit(e)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => setName(item.name)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Edit;
