// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   margin: "10px 0",
//   border: "1px solid #ccc",
//   borderRadius: "8px",
//   fontSize: "14px",
//   transition: "0.3s",
// };

// const btnStyle = {
//   width: "100%",
//   padding: "12px",
//   background: "linear-gradient(135deg, #ff7b54, #ff9770)",
//   color: "white",
//   border: "none",
//   borderRadius: "8px",
//   cursor: "pointer",
//   fontWeight: "bold",
//   fontSize: "16px",
//   boxShadow: "0 4px 10px rgba(255,123,84,0.4)",
//   transition: "0.3s",
// };

// export default function Signup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [strength, setStrength] = useState({ level: "", color: "" });
//   const navigate = useNavigate();

//   // 🔹 Password strength calculation
//   function evaluateStrength(password) {
//     let score = 0;
//     if (password.length >= 6) score++;
//     if (/[A-Z]/.test(password)) score++;
//     if (/[0-9]/.test(password)) score++;
//     if (/[^A-Za-z0-9]/.test(password)) score++;

//     if (score === 0) return { level: "", color: "" };
//     if (score <= 1) return { level: "Weak", color: "red" };
//     if (score === 2 || score === 3) return { level: "Medium", color: "orange" };
//     if (score >= 4) return { level: "Strong", color: "green" };
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//     setError("");

//     if (name === "password") {
//       setStrength(evaluateStrength(value));
//     }
//   }

//   function saveUserToStorage(user) {
//     const raw = localStorage.getItem("users");
//     const users = raw ? JSON.parse(raw) : [];
//     users.push(user);
//     localStorage.setItem("users", JSON.stringify(users));
//   }

//   async function submit(e) {
//   e.preventDefault();

//   if (!form.name || !form.email || !form.password || !form.confirmPassword) {
//     setError("Please fill all fields.");
//     return;
//   }
//   if (form.password.length < 6) {
//     setError("Password must be at least 6 characters.");
//     return;
//   }
//   if (form.password !== form.confirmPassword) {
//     setError("Passwords do not match.");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:4000/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: form.name,
//         email: form.email,
//         password: form.password,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       setError(data.message || "Signup failed");
//       return;
//     }

//     alert(`Welcome, ${data.user.name}! Your account has been created successfully.`);
//     navigate("/login");
//   } catch (err) {
//     console.error(err);
//     setError("Network error. Please try again later.");
//   }
// }


//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         background: "linear-gradient(135deg, #fff4f0, #ffe0d3)",
//       }}
//     >
//       <form
//         onSubmit={submit}
//         style={{
//           width: "100%",
//           maxWidth: 420,
//           padding: "30px",
//           background: "white",
//           borderRadius: "16px",
//           boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//           animation: "fadeIn 0.6s ease-in-out",
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             color: "#ff7b54",
//             marginBottom: "20px",
//             fontWeight: "bold",
//           }}
//         >
//           Create Account
//         </h2>

//         <input
//           style={inputStyle}
//           placeholder="Full Name"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           style={inputStyle}
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         {/* Password Input + Strength Meter */}
//         <div style={{ position: "relative" }}>
//           <input
//             style={{ ...inputStyle, paddingRight: 90 }}
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword((s) => !s)}
//             style={{
//               position: "absolute",
//               right: 10,
//               top: 8,
//               padding: "8px 10px",
//               borderRadius: 6,
//               border: "none",
//               background: "#f0f0f0",
//               cursor: "pointer",
//             }}
//           >
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>

//         {/* Password Strength Bar */}
//         {form.password && (
//           <div style={{ marginBottom: 10 }}>
//             <div
//               style={{
//                 height: "6px",
//                 borderRadius: "5px",
//                 backgroundColor: "#eee",
//                 marginTop: "5px",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 style={{
//                   width:
//                     strength.level === "Weak"
//                       ? "33%"
//                       : strength.level === "Medium"
//                       ? "66%"
//                       : "100%",
//                   backgroundColor: strength.color,
//                   height: "100%",
//                   transition: "width 0.3s ease-in-out",
//                 }}
//               ></div>
//             </div>
//             <span
//               style={{
//                 color: strength.color,
//                 fontSize: "13px",
//                 fontWeight: "bold",
//               }}
//             >
//               {strength.level && `Password Strength: ${strength.level}`}
//             </span>
//           </div>
//         )}

//         {/* Confirm Password */}
//         <div style={{ position: "relative" }}>
//           <input
//             style={{ ...inputStyle, paddingRight: 90 }}
//             type={showConfirmPassword ? "text" : "password"}
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword((s) => !s)}
//             style={{
//               position: "absolute",
//               right: 10,
//               top: 8,
//               padding: "8px 10px",
//               borderRadius: 6,
//               border: "none",
//               background: "#f0f0f0",
//               cursor: "pointer",
//             }}
//           >
//             {showConfirmPassword ? "Hide" : "Show"}
//           </button>
//         </div>

//         {error && (
//           <div style={{ color: "crimson", marginBottom: 10, fontWeight: 600 }}>
//             {error}
//           </div>
//         )}

//         <button
//           type="submit"
//           style={btnStyle}
//           onMouseOver={(e) => (e.target.style.opacity = "0.95")}
//           onMouseOut={(e) => (e.target.style.opacity = "1")}
//         >
//           Sign Up
//         </button>

//         <p style={{ marginTop: "15px", textAlign: "center", color: "#555" }}>
//           Already have an account?{" "}
//           <Link to="/login" style={{ color: "#ff7b54", fontWeight: "bold" }}>
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

















import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [strength, setStrength] = useState({ level: "", color: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  function evaluateStrength(password) {
    let score = 0;
    if (password.length >= 6) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score === 0) return { level: "", color: "" };
    if (score <= 1) return { level: "Weak", color: "red" };
    if (score === 2 || score === 3) return { level: "Medium", color: "orange" };
    if (score >= 4) return { level: "Strong", color: "lime" };
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError("");
    if (name === "password") setStrength(evaluateStrength(value));
  }

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }
      alert(`Welcome, ${data.user.name}!`);
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        // background:
        //   "linear-gradient(135deg, #ff7b54 0%, #ff9770 50%, #ffd280 100%)",
        backgroundImage: 'url("/public/back2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          width: "90%",
          maxWidth: "420px",
          padding: "40px 30px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "700",
            background: "linear-gradient(45deg, #fff, #ffe6cc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ✨ Create Account
        </h2>

        {["name", "email"].map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={field === "name" ? "Full Name" : "Email Address"}
            value={form[field]}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255, 255, 255, 0.81)",
              color: "white",
              fontSize: "15px",
              outline: "none",
            }}
          />
        ))}

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255, 255, 255, 0.75)",
              color: "white",
              fontSize: "15px",
              outline: "none",
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              background: "rgba(255, 255, 255, 0.73)",
              border: "none",
              borderRadius: "6px",
              padding: "4px 10px",
              cursor: "pointer",
              color: "#222",
              fontWeight: "600",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Password Strength Meter */}
        {form.password && (
          <div style={{ marginBottom: "10px", textAlign: "left" }}>
            <div
              style={{
                height: "6px",
                borderRadius: "4px",
                backgroundColor: "#eee",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width:
                    strength.level === "Weak"
                      ? "33%"
                      : strength.level === "Medium"
                      ? "66%"
                      : "100%",
                  backgroundColor: strength.color,
                  borderRadius: "4px",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
            <small style={{ color: strength.color }}>
              {strength.level && `Password: ${strength.level}`}
            </small>
          </div>
        )}

        <div style={{ position: "relative" }}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255, 255, 255, 0.78)",
              color: "white",
              fontSize: "15px",
              outline: "none",
            }}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((s) => !s)}
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              background: "rgba(255, 255, 255, 0.77)",
              border: "none",
              borderRadius: "6px",
              padding: "4px 10px",
              cursor: "pointer",
              color: "#222",
              fontWeight: "600",
            }}
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        {error && (
          <div
            style={{
              color: "#ffbaba",
              background: "rgba(255, 0, 0, 0.15)",
              padding: "6px",
              borderRadius: "8px",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.83), rgba(86, 83, 83, 0.06))",
            border: "none",
            borderRadius: "12px",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.3))")
          }
          onMouseLeave={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.2))")
          }
        >
          Sign Up
        </button>

        <p style={{ marginTop: "20px", color: "#eee", textAlign: "center" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#fff",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
