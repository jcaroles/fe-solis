import React from "react";
import { createRoot } from "react-dom/client";

import WebComponents from "./web-components";
import "./styles.scss";

const domNode: any = document.getElementById("root");
const root = createRoot(domNode);

root.render(<WebComponents />);
