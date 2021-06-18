import React from "react";
import "./Documentation.css";
import { ComponentsNav } from "../Components-Nav/ComponentsNav";
import Alert from "../../Content/Alert";
import { Route, Routes } from "react-router-dom";

export const Documentation = () => {
  return (
    <>
      <div className="documentation__container">
        <div className="components__navbar">
          <ComponentsNav />
        </div>
        <div className="documentation__main">
          <div>
            <h1 className="documentation__heading">Documentation</h1>
          </div>
          <div>
            <Routes>
              <Route to="/docs/alert" element = {<Alert />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
