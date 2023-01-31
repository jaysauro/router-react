import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import UtentsList from "./routes/utentsList";
import User from "./routes/singleUtent";
import Messages from "./routes/messages";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route>
        <Route path="/" element={<App />}>
          <Route path="users" element={<UtentsList />} />
          <Route path="users/:userId" element={<User />} />
          <Route path="messages" element={<Messages/>} />
          <Route path="messages/:messages" element={<Messages/>} />
        </Route>
      </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);