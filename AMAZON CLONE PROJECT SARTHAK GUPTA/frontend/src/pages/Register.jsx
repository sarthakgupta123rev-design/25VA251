import { useState } from "react";
import "./Register.css";

export default function Register({ setPage }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirmPassword: "", city: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (form.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!form.email.includes("@") || !form.email.includes("."))
      newErrors.email = "Enter a valid email address";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (form.city.trim() === "")
      newErrors.city = "Please enter your city";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate API call to Spring Boot backend
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  if (success) {
    return (
      <div className="page-container reg-success-wrap">
        <div className="reg-success">
          <div className="success-icon">🎉</div>
          <h2>Registration Successful!</h2>
          <p>Welcome, <strong>{form.name}</strong>! Your account has been created.</p>
          <p className="success-note">
            (In production, this would POST to <code>http://localhost:8080/api/users/register</code> — our Spring Boot backend)
          </p>
          <button className="btn-gold" onClick={() => setPage("home")}>
            Start Shopping →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container reg-wrap">
      <div className="reg-left">
        <h2 className="section-title">Create Account</h2>
        <p className="section-sub">Join ShopEasy and unlock exclusive deals</p>

        <form onSubmit={handleSubmit} className="reg-form" noValidate>

          <div className="form-row">
            <div className={`form-group ${errors.name ? "has-error" : ""}`}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Sarthak Gupta"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="err-msg">{errors.name}</span>}
            </div>

            <div className={`form-group ${errors.email ? "has-error" : ""}`}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="sarthak@example.com"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="err-msg">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className={`form-group ${errors.phone ? "has-error" : ""}`}>
              <label>Mobile Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="9876543210"
                value={form.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="err-msg">{errors.phone}</span>}
            </div>

            <div className={`form-group ${errors.city ? "has-error" : ""}`}>
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Ghaziabad"
                value={form.city}
                onChange={handleChange}
              />
              {errors.city && <span className="err-msg">{errors.city}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className={`form-group ${errors.password ? "has-error" : ""}`}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Min. 6 characters"
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <span className="err-msg">{errors.password}</span>}
            </div>

            <div className={`form-group ${errors.confirmPassword ? "has-error" : ""}`}>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span className="err-msg">{errors.confirmPassword}</span>}
            </div>
          </div>

          <button type="submit" className="btn-gold submit-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Register Now →"}
          </button>
        </form>
      </div>

      <div className="reg-right">
        <div className="reg-info">
          <h3>Why Join ShopEasy?</h3>
          <ul className="perks-list">
            {[
              ["🚀", "Free & Fast Delivery", "On all orders above ₹499"],
              ["🔒", "Secure Payments", "100% safe & encrypted"],
              ["🔄", "Easy Returns", "30-day hassle-free returns"],
              ["🎁", "Exclusive Deals", "Members-only offers & discounts"],
            ].map(([icon, title, sub]) => (
              <li key={title} className="perk-item">
                <span className="perk-icon">{icon}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
