import React, { useEffect, useState } from "react";
import { ReactBodyLayout } from "./ReactBodyLayout";

export function Layout(props) {
  const [value, setValue] = useState(2);
  useEffect(() => {
    console.log("props: ", props);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Demo react layout</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="pt-36">
        <h1>from local</h1>
        <ReactBodyLayout client:load props={props} />
      </body>
    </html>
  );
}
