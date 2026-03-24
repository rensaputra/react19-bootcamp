const About = async () => {
  const users = await fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      return null;
    });

  return (
    <div>
      <h1>About Page</h1>
      {users ? JSON.stringify(users) : <p>Failed to load users.</p>}
    </div>
  );
};

export default About;
