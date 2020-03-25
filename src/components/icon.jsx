// component for eva icons
import React, { useEffect } from "react";
import * as eva from "eva-icons";

const Icons = ({ name, ...styles }) => {
  useEffect(() => {
    eva.replace();
  }, []);

  return <i data-eva={name} {...styles} />;
};

export default Icons;
