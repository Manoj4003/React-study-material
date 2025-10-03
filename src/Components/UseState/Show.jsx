import { useState } from "react";

const ToggleMessage = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={toggle}>
        {show ? "Hide message" : "Show message"}
      </button>

      {show && <p>Hello 👋</p>}
    </div>
  );
};

export default ToggleMessage;
