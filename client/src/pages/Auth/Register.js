import React, { useState } from "react";
import Layout from "../../components/Layout/Layout.js";
import "./Register.css"; // Custom CSS file for styling
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Error during registration, please try again later.");
    }
  };

  return (
    <Layout title={"Register"}>
      <div className="register-page">
        {/* Left Section */}
        <div className="register-left">
          <img
            src="/images/login-img.jpg"
            alt="Register"
            className="register-image"
          />
          <h2 className="welcome-message">Join Us Today!</h2>
          <p className="description">
            Sign up to unlock exclusive deals, personalized recommendations, and
            much more!
          </p>
        </div>

        {/* Right Section */}
        <div className="register-right">
          <div className="register-form-container">
            <h2 className="form-title">Create Your Account</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="answer">Security Question</label>
                <input
                  type="text"
                  id="answer"
                  className="form-control"
                  placeholder="What is your favorite sport?"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
            <p className="login-link">
              Already have an account? <a href="/login">Login here</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
