import React from "react";
import "./App.css";
import Main from "./components/main";
import { Layout, Content } from "react-mdl";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

function App() {
  return (
    <Layout fixedHeader>
      <Content>
        <div className="page-content">
          <Main />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
