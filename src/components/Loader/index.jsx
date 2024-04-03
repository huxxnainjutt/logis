import * as React from "react";
import { LoaderParent } from "./Loader.styles";

function Loader({ className, ...props }) {
  return (
    <LoaderParent className={className} {...props}>
      <div className="loader"></div>
    </LoaderParent>
  );
}

export default Loader;
