import { useEffect, useState } from "react";
import io from "socket.io-client";
import { v4 as uuid4 } from "uuid";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [formInputs, setFormInputs] = useState({});
  const [crudData, setCrudData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const socket = io("localhost:3000");

  const handleInput = (event) => {
    let { name, value } = event.target;
    let currentObj = { [name]: value };

    setFormInputs((prev) => ({ ...prev, ...currentObj }));
  };

  const handleSubmit = () => {
    socket.emit("data", { ...formInputs, id: uuid4() });
    console.log({ ...formInputs, id: uuid4() });
    socket.on("crudData", (res) => {
      setCrudData(res);
    });
    setFormInputs({
      name: "",
      age: "",
      phone: "",
    });
  };
  const handleEdit = () => {
    socket.emit("editData", formInputs);
    setFormInputs({
      name: "",
      age: "",
      phone: "",
    });

    setIsEdit(false);
  };
  const handleDelete = (id) => {
    socket.emit("deleteData", id);
  };

  const getEditData = (data) => {
    setFormInputs(data);
    setIsEdit(true);
  };

  useEffect(() => {
    socket.on("crudData", (res) => {
      setCrudData(res);
    });
  }, []);
  return (
    <>
      <h1>CRUD Operations with WebSocket</h1>
      <div className="header">
        <Input
          name="name"
          label={"Name"}
          placeholder="Enter your Name"
          onChange={handleInput}
          value={formInputs.name}
        />
        <Input
          name="age"
          label={"Age"}
          placeholder="Enter your Age"
          onChange={handleInput}
          value={formInputs.age}
        />
        <Input
          name="phone"
          label={"Phone Number"}
          placeholder="Enter your Phone Number"
          onChange={handleInput}
          value={formInputs.phone}
        />
      </div>
      <button
        className="btn"
        disabled={!formInputs.name || !formInputs.age || !formInputs.phone}
        onClick={isEdit ? handleEdit : handleSubmit}
      >
        {isEdit ? "Edit" : "Add"} Data
      </button>
      <div>
        {crudData.length > 0 ? (
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone Number</th>
              </tr>
              {crudData.map((data) => (
                <>
                  <tr>
                    <td>{data?.name}</td>
                    <td>{data?.age}</td>
                    <td>{data?.phone}</td>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        paddingLeft: "1rem",
                        paddingBottom: "1rem",
                        width: "fit-content",
                      }}
                    >
                      <button onClick={() => getEditData(data)}>Edit</button>
                      <button onClick={() => handleDelete(data?.id)}>
                        Delete
                      </button>
                    </div>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </>
  );
}

export default App;
