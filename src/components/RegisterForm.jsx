export const RegisterForm = ({ data, handleOnChange, handleOnSubmit }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Register</h2>

      <label>Name</label>
      <input
        type="text"
        name="firstName"
        value={data.firstName}
        placeholder="Please enter your name"
        onChange={handleOnChange}
      />
      <br />
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        placeholder="Please enter your last name"
        onChange={handleOnChange}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={data.email}
        placeholder="Please enter your email"
        onChange={handleOnChange}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={data.password}
        placeholder="Please enter your password"
        onChange={handleOnChange}
      />
      <br />
      <label>Confirm Password</label>
      <input
        type="password"
        name="password_confirmation"
        value={data.password_confirmation}
        placeholder="Please confirm your password"
        onChange={handleOnChange}
      />
      <br />
      <label>I accept terms and conditions</label>
      <input
        type="checkbox"
        required
        name="terms"
        checked={data.terms}
        onChange={handleOnChange}
      />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};
