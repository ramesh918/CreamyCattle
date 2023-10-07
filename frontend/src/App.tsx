import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Login from "./components/Login";
import Managers from "./components/managers/Managers";
import Sheds from "./components/sheds/Sheds";


function App() {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.token
  );


  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/managers"
            element={isAuthenticated ? <Managers /> : <Navigate to="/" replace />}
          />
          <Route
            path="/sheds"
            element={isAuthenticated ? <Sheds /> : <Navigate to="/" replace />}
          />
        </Routes>
      </Container>
    </Router>
  );
}


export default App;







