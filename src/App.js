import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { FrontPage } from "./components/frontPage";
import { MessagePage } from "./components/messagePage";

const App = () => {
  return (
    <div>
      <FrontPage/>

      {/* <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/messages" element={<MessagePage/>} />
      </Routes> */}
    </div>
  )
};

export default App;

