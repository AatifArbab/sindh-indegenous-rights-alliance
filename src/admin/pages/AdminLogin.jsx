import { useState } from "react";
  import { useNavigate } from "react-router-dom";
  // Line 3 Updated: ../.. use kiya hai do levels upar janey ke liye
  import { supabase } from "../../lib/supabaseClient"; 

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // 1. Supabase Auth se login verify karein
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      // 2. Successful login hone par Dashboard par navigate karein
      if (data?.user) {
        navigate("/admin/dashboard", { replace: true });
      }
    } catch (err) {
      setErrorMsg(err.message || "Invalid credentials! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>
        <p style={styles.subtitle}>Enter your credentials to access the admin portal</p>

        {errorMsg && <div style={styles.errorBox}>{errorMsg}</div>}

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.submitButton,
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Authenticating..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#020617",
    color: "#f8fafc",
    fontFamily: "system-ui, sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "32px",
    backgroundColor: "#0f172a",
    borderRadius: "16px",
    border: "1px solid #1e293b",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "22px",
    fontWeight: "700",
  },
  subtitle: {
    margin: "0 0 24px 0",
    fontSize: "13px",
    color: "#94a3b8",
  },
  errorBox: {
    padding: "10px",
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    border: "1px solid #ef4444",
    color: "#f87171",
    borderRadius: "8px",
    fontSize: "13px",
    marginBottom: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "12px",
    color: "#94a3b8",
    fontWeight: "600",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#020617",
    border: "1px solid #334155",
    color: "#f8fafc",
    fontSize: "14px",
    outline: "none",
  },
  submitButton: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "8px",
  },
};

export default AdminLogin;