import Home from "./components/Home";

import "./index.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  const loggedin = localStorage.getItem("logged");
  console.log(loggedin);

  return (
    <Routes>
      {/* {!loggedin ? (
        <Route
          path="/"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
      ) : (
        <Navigate to="/home" replace />
      )}

      {(authenticated || loggedin) && <Route path="/home" element={<Home />} />} */}
      <Route path="/" element={!loggedin ? <Login /> : <Home />} />
    </Routes>
  );
}

export default App;
