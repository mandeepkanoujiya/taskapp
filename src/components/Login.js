// import React, { Component } from "react";
// import "../App.css";
// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       password: "",
//     };
//   }
//   login() {
//     fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
//       data.json().then((resp) => {
//         console.warn("resp", resp);
//         if (resp.length > 0) {
//           localStorage.setItem("login", JSON.stringify(resp));
//           console.warn(this.props.history.push("/home"));
//         } else {
//           alert("Please check username and password");
//         }
//       });
//     });
//   }
//   render() {
//     return (
//       <div>
//         Username:
//         <input
//           type="text"
//           placeholder="enter name"
//           name="user"
//           onChange={(event) => this.setState({ name: event.target.value })}
//         />{" "}
//         <br /> <br />
//         Password:
//         <input
//           placeholder="enter password"
//           type="password"
//           name="password"
//           onChange={(event) => this.setState({ password: event.target.value })}
//         />{" "}
//         <br /> <br />
//         <button
//           onClick={() => {
//             this.login();
//           }}
//         >
//           Login
//         </button>
//       </div>
//     );
//   }
// }

// export default Login;
