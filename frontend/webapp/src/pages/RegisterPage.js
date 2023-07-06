import { useNavigate } from "react-router-dom";
import { useApi } from "../contexts/ApiProvider";
import Body from "../components/Body";
import RegisterFrom from "../components/RegisterForm";

export default function RegisterPage() {
  const navigate = useNavigate();
  const api = useApi();

  const handle = async (values, { setErrors }) => {
    const regval = (({ password, email, username }) => ({
      password,
      email,
      username,
    }))(values);
    const data = await api.post("/users", regval);
    if (!data.ok) {
      setErrors(data.body.errors.json);
      return;
    }
    navigate("/login");
  };

  return (
    <Body sidebar={false}>
      <h1>Register</h1>
      <div className="form-wrapper">
        <RegisterFrom handleSubmit={handle} />
      </div>
    </Body>
  );
}
