import React, { useEffect, useState } from "react";

export function ReactDemo(props) {
  const [value, setValue] = useState(2);
  useEffect(() => {
    // console.log("props: ", props);
  }, []);

  return (
    <>
      {props.story.content.body?.map((blok) => {
        return (
          <>
            ---+{blok._uid}+--*****{value}****
          </>
        );
      })}
    </>
  );
}
