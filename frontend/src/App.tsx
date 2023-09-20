// src/App.js or src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Login from "./components/Login";
import Header from "./components/Header";
import Managers from "./components/managers/Managers";
import Sheds from "./components/sheds/Sheds"

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/sheds" element={<Sheds />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
