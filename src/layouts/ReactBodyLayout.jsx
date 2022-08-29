import React, { useEffect, useState } from "react";
// import { ReactBodyLayout } from "../layouts/ReactBodyLayout";

export function ReactBodyLayout(props) {
  const [value, setValue] = useState(2);
  useEffect(() => {
    console.log("props: ", props);
  }, []);

  // return props.story?.content.body?.map((blok) => {
  //   return <>child component</>;
  // });
  return <>child component</>;
}
