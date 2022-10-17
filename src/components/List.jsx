import React from "react";
import { Api } from "./Api.jsx";
import Edit from "./Edit.jsx";
export default function List() {
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // get all contact
  const getList = async () => {
    try {
      const details = await Api.get("/");
      setList(details.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  // delete contact
  const deleteContact = async (id) => {
    // e.preventDefault();
    try {
      await Api.delete(`/${id}`);
      setList(list.filter((item) => item.id !== id));
    } catch (err) {
      console.err(err.message);
    }
  };
  React.useEffect(() => {
    getList();
  }, []);

  //   console.log(list);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">s/n</th>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            const { id, name, email, phone } = item;
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>
                  <Edit item={item} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteContact(id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
