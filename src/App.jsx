import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    let chars = "";

    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}<>?";

    if (!chars) {
      alert("Select at least one option!");
      return;
    }

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Password Generator</h1>

        <div className="input-group">
          <label>Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="30"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
            />
            Uppercase
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeLower}
              onChange={() => setIncludeLower(!includeLower)}
            />
            Lowercase
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Numbers
          </label>

          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Symbols
          </label>
        </div>

        <button className="generate-btn" onClick={generatePassword}>
          Generate Password
        </button>

        {password && (
          <div className="result">
            <input type="text" value={password} readOnly />
            <button onClick={copyPassword}>Copy</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;