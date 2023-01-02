import { Link } from "react-router-dom";
import Body from "../components/Body";
import LoginFrom from "../components/LoginForm";

export default function LoginPage() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };
  return (
    <Body sidebar={false}>
      <h1>Login</h1>
      <div className="form-wrapper">
        <LoginFrom handleSubmit={handleSubmit} />
      </div>
      <hr />
      <p>
        Don&apos;t have anaccount? <Link to="/register"> Register here</Link>
      </p>
    </Body>
  );
}
