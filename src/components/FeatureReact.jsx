import React, { useEffect, useState } from "react";

export function FeatureReact(props) {
  const [value, setValue] = useState(2);
  useEffect(() => {
    // console.log("----props: ", props);
  }, []);

  return (
    <>
      <br />
      {props.blok.name}
    </>
  );
}
