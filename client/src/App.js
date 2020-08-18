import React, { useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/test").then(response => {
      console.log(response.data)
    })
  })
  return (
    <div className="App">
      TEST
    </div>
  );
}

export default App;
