import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quote from "./components/Quote";

function App() {
  const [data, setData] = useState(null);
  const handleData = (data) => {
    setData(data);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home handleData={handleData} />} />
          <Route path="/quote" element={<Quote quote={data} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
