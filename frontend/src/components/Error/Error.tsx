import _React from "react";
import { ErrorProps } from "../../@types/error";

const Error = ({ errorMessage }: ErrorProps) => {
  return (
    errorMessage && (
      <div
        className="bg-red-500 text-white p-4 text-sm"
        role="alert">
        <span className="font-bold">Error!</span> {errorMessage}
      </div>
    )
  );
};

export default Error;
