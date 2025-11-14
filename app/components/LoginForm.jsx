"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../services/api";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setValidationErrors({});
      // localStorage.setItem("token", 'data.access_token');
      // router.push("/dashboard");
    try {
      const data = await login(email, password);
      console.log("Login success:", data);

      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        router.push("/dashboard");
      } else {
        throw new Error("Token not found in response");
      }
    } catch (err) {
      console.error("Login error:", err);

      if (err.status == false ) {
        // Laravel returns JSON like { status: false, message, errors: {...} }
        const res = err.status;

        if (err.status) {
          // Validation errors
          setValidationErrors(res.errors);
        } else if (res.message) {
          // General error message
          setError(res.message);
        } else {
          setError(err.message);
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="vh-100 d-flex justify-content-between flex-column p-4 pb-0"
    >
      <div className="text-center mb-4 auth-logo">
        <img src="/assets/img/logo.svg" alt="Logo" width={150} height={50} />
      </div>

      <div>
        <h3 className="mb-2">Sign In</h3>
        <p className="mb-3">
          Access the M CRM Administrator panel using your email and passcode.
        </p>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {Object.keys(validationErrors).length > 0 && (
          <div className="alert alert-warning" role="alert">
            <ul className="mb-0">
              {Object.entries(validationErrors).map(([field, messages]) => (
                <li key={field}>
                  <strong>{field}:</strong> {messages.join(", ")}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <div className="input-group input-group-flat">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
            <span className="input-group-text">
              <i className="ti ti-mail" />
            </span>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group input-group-flat pass-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <span
              className="input-group-text toggle-password"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              <i className={`ti ti-${showPassword ? "eye" : "eye-off"}`} />
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Signing In...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </div>

      <div className="text-center pb-4">
        <p className="text-dark mb-0">Copyright © - M CRM</p>
      </div>
    </form>
  );
}
