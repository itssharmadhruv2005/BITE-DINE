// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   margin: "10px 0",
//   border: "1px solid #ccc",
//   borderRadius: "8px",
//   fontSize: "14px",
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
// };

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError("");
//   };

//   function findUser(email) {
//     const raw = localStorage.getItem("users");
//     if (!raw) return null;
//     const users = JSON.parse(raw);
//     return users.find((u) => u.email.toLowerCase() === email.toLowerCase());
//   }

//   const submit = async (e) => {
//   e.preventDefault();

//   if (!form.email || !form.password) {
//     setError("Please enter email and password.");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:4000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       setError(data.message || "Login failed");
//       return;
//     }

//     localStorage.setItem("token", data.token);
//     localStorage.setItem("user", JSON.stringify(data.user));

//     alert(`Welcome back, ${data.user.name}!`);
//     navigate("/");
//   } catch (err) {
//     console.error(err);
//     setError("Network error. Please try again later.");
//   }
// };


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
//           Login
//         </h2>

//         <input
//           style={inputStyle}
//           placeholder="Email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />

//         <div style={{ position: "relative" }}>
//           <input
//             style={{ ...inputStyle, paddingRight: 90 }}
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             required
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
//             aria-label="Toggle password visibility"
//           >
//             {showPassword ? "Hide" : "Show"}
//           </button>
//         </div>

//         {error && (
//           <div style={{ color: "crimson", marginBottom: 10, fontWeight: 600 }}>{error}</div>
//         )}

//         <button style={btnStyle}>Login</button>

//         <p style={{ marginTop: "15px", textAlign: "center", color: "#555" }}>
//           New here?{" "}
//           <Link to="/signup" style={{ color: "#ff7b54", fontWeight: "bold" }}>
//             Create an Account
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert(`Welcome back, ${data.user.name}!`);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // background:
        //   "linear-gradient(135deg, #ff9770 0%, #ff7b54 25%, #fcb045 100%)",
        backgroundImage: 'url("/public/back2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          padding: "40px 30px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          animation: "fadeIn 0.8s ease-in-out",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            background: "linear-gradient(45deg, #fff, #ffe6cc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
          }}
        >
          🔐 Login to Continue
        </h2>

        <form onSubmit={submit}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px 14px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "none",
              background: "rgba(255, 255, 255, 0.78)",
              color: "white",
              fontSize: "15px",
              outline: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 14px",
                marginBottom: "15px",
                borderRadius: "10px",
                border: "none",
                background: "rgba(255, 255, 255, 0.8)",
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
                background: "rgba(255, 255, 255, 0.79)",
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
                "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.2))",
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
            Login
          </button>
        </form>

        <p style={{ marginTop: "20px", color: "#eee" }}>
          New here?{" "}
          <Link
            to="/signup"
            style={{
              color: "#fff",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
