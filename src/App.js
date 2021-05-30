import "./App.css";
import Main from "./components/main";
import { Layout, Content } from "react-mdl";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <Layout fixedHeader>
      <Content>
        <div className="page-content">
          <Main />
        </div>
      </Content>
    </Layout>
    </Router>
  );
}

export default App;
