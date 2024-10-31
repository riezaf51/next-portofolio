import React from "react";

const CurvedSeparator: React.FC = (): React.JSX.Element => (
  <svg
    className="w-full fill-slate-900"
    viewBox="0 0 500 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0C0 0 -9.81273e-05 22.3881 250 22.3881C500 22.3881 500 0 500 0V50H0L0 0Z"
    ></path>
  </svg >
);

export default CurvedSeparator;
