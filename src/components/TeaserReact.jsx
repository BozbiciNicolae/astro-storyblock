import React, { useEffect, useState } from "react";

export function TeaserReact(props) {
  const [value, setValue] = useState(2);
  useEffect(() => {
    // console.log("props: ", props);
  }, []);

  return <>{props.blok.headline}</>;
}
