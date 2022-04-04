import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import { NoteProvider } from "./Context/noteContext";
import { ArchiveProvider } from "./Context/archivedContext";
import { TrashProvider } from "./Context/TrashContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TrashProvider>
        <ArchiveProvider>
          <NoteProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </NoteProvider>
        </ArchiveProvider>
      </TrashProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
