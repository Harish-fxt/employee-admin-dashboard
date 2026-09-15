import { useState } from "react";


function Dashboard() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Harish",
      department: "IT"
    },
    {
      id: 2,
      name: "Arun",
      department: "HR"
    },
    {
      id: 3,
      name: "Priya",
      department: "Finance"
    }
  ]);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("IT");

  const addEmployee = () => {

    if (name.trim() === "") {
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name: name,
      department: department
    };

    setEmployees([...employees, newEmployee]);

    setName("");
  };

  const deleteEmployee = (id) => {

    setEmployees(
      employees.filter(
        (employee) => employee.id !== id
      )
    );

  };

  return (
    <div className="dashboard">

      <h2>Employee Admin Dashboard</h2>

      <div className="card">
        <h3>Total Employees</h3>
        <h2>{employees.length}</h2>
      </div>

      <div className="form">

        <input
          type="text"
          placeholder="Enter employee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
  <option value="IT">IT</option>
  <option value="HR">HR</option>
  <option value="Finance">Finance</option>
</select>

        <button onClick={addEmployee}>
          Add
        </button>

      </div>

      <div className="employees">

        <h2>Employees</h2>

        {employees.map((employee) => (

          <div
            className="employee"
            key={employee.id}
          >

            <div>
              <strong>{employee.name}</strong>
              <p>{employee.department}</p>
            </div>

            <button
              className="delete-btn"
              onClick={() =>
                deleteEmployee(employee.id)
              }
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;

