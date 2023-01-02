import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import DateLocale from "./DateLocale";

export default function User({ user }) {
  return (
    <Stack gap={2} className="User">
      <Stack
        direction="horizontal"
        style={{ borderBottom: "1px solid black", paddingBottom: 5 }}
        gap={3}
      >
        <Image
          src={user.avatar_url + "&s=48"}
          alt={user.username}
          roundedCircle
        />
        <h3>{user.username}</h3>
      </Stack>
      <div>
        <p>
          Member since: &nbsp;
          <DateLocale date={user.first_seen} />
        </p>
      </div>
    </Stack>
  );
}
