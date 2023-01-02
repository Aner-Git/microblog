import Body from "../components/Body";
import RegisterFrom from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <Body sidebar={false}>
      <h1>Register</h1>
      <div className="form-wrapper">
        <RegisterFrom />
      </div>
    </Body>
  );
}
