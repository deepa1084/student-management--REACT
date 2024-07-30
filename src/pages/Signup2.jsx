
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password) {
      navigate('/Sidebar');
    } else {
    
      console.log('Please fill in all fields');
    }
  };

  return (

    <form className="form-container" onSubmit={handleSubmit}>
      <h2>SIGN-UP HERE</h2>
      <label>Username:</label>
      <input
        className="input-field"
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
       <label>Email ID:</label>
      <input
        className="input-field"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
       <label>Password:</label>
      <input
        className="input-field"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="button" type="submit">Sign Up</button>
    </form>
  );
};

export default Signup2;
