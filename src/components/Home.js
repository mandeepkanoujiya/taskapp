import Dropdown from "./Dropdown";
import React, { useState } from "react";
import "../App.css";
import Information from "./Information";

const Home = () => {
  const [active, setActive] = useState("Select option");
  const data = [
    {
      key: "one",
      value: "Est sunt amet irure veniam deserunt irure ea id commodo.  ",
    },
    {
      key: "two",
      value:
        "Minim minim fugiat aute labore ipsum qui veniam laborum minim fugiat.",
    },
    {
      key: "three",
      value:
        " Dolor laboris ad et minim dolor. In voluptate sunt elit quis non esse labore deserunt fugiat.",
    },
  ];

  const handleChange = (e) => {
    setActive(e.value);
    console.log(e.value);
  };

  return (
    <div>
      <Dropdown value={active} options={data} onChange={handleChange} />

      <Information active={active} />
    </div>
  );
};

export default Home;
