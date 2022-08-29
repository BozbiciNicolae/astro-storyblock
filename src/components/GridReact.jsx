import React, { useEffect, useState } from "react";

export function GridReact(props) {
  const [value, setValue] = useState(2);
  useEffect(() => {
    console.log("----props: ", props);
  }, []);

  return <>Grid</>;
}
