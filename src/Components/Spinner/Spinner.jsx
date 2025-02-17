import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Spinner = ({ loading, size = 100, color = "#ca46ef" }) => {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ textAlign: "center", padding: "50px" }}
    >
      <HashLoader color={color} loading={loading} size={size} />
    </div>
  );
};

export default Spinner;
