import React from "react";
import { ClipLoader } from "react-spinners";

function Spinner({ loading }) {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <ClipLoader
      className="text-primary"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}

export default Spinner;
