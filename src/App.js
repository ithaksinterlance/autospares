import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <i class="fas fa-info-square"></i>Auto spare Inquiry
        </p>
        <a
          className="App-link"
          href="https://hakstime.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by HAKS INTERNATIONAL LANCING
        </a>
      </header>
    </div>
  );
}

export default App;
