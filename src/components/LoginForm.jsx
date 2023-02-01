export const LoginForm = ({ user, setUser, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <br />
      <label>Password</label>
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};
