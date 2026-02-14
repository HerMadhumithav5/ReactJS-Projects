import { useState } from "react";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    gender: "",
    ismarried: false,
    location: ""
  });

  function handleChange(e) {
    const key = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setForm({ ...form, [key]: value });
  }

  return (
    <>
    <div className="main-body">
      <div className="register">
        <h2>Register</h2>
        <div className="user">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>

        <div className="password">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>

        <div className="gender">
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={form.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={form.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <div className="maritalstatus">
          IsMarried
          <label>
            <input
              type="checkbox"
              name="ismarried"
              checked={form.ismarried}
              onChange={handleChange}
            />
            Yes
          </label>
        </div>

        <div className="location">
          Location
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
          >
            <option value="">Choose Location</option>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Africa">Africa</option>
          </select>
        </div>
      </div>
</div>
<div className="table">
      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Gender</th>
            <th>IsMarried</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{form.username}</td>
            <td>{form.password ? "•".repeat(form.password.length) : ""}</td>
            <td>{form.gender}</td>
            <td>{form.ismarried ? "Married" : "UnMarried"}</td>
            <td>{form.location}</td>
          </tr>
        </tbody>
      </table>
</div>
    </>
  );
}

export default Register;
