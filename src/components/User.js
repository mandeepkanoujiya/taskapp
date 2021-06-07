import React from "react";
const User = () => {
  return (
    <div>
      Username:
      <input
        type="text"
        placeholder="enter name"
        name="user"
        onChange={(event) => this.setState({ name: event.target.value })}
      />
      <br /> <br />
      Password:
      <input
        placeholder="enter password"
        type="password"
        name="password"
        onChange={(event) => this.setState({ password: event.target.value })}
      />
      <br /> <br /> <br /> <br /> <br /> <br />
      <div className="pwd">
        <button onClick={() => {}} style={{ marginLeft: "10px" }}>
          Change Password
        </button>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button onClick={() => {}}>Logout</button>
      </div>
    </div>
  );
};
export default User;
