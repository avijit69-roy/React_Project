import { useEffect, useState } from "react";
import OldUserPosts from "./OldUserPosts";

const OldUserProfile = ({ userid }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [userid]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div>
        <h2>Name - {user.name}</h2>
        <h3>Email - {user.email}</h3>
        <h3>Phone - {user.phone}</h3>
      </div>
      <div>
        <h3>Posts:</h3>
        {/* <OldUserPosts userid={userid} /> */}
      </div>
    </div>
  );
};

export default OldUserProfile;
