import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/tours" element={<Tours/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/favourites" element={<Favourites/>}/> */}
      </Routes>
    </>
  );
};
