import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileUpload from './FileUpload';
import ResponseDisplay from './ResponseDisplay';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FileUpload />} />
        <Route path="/response" element={<ResponseDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
