import Home from "./Home";
import React from 'react'
import {Route, Routes, useLocation} from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const Location = useLocation()
  return (
      <AnimatePresence wait>
          <Routes location={Location} key={Location.pathname}>
            <Route path="/" element={<Home/>}/> 
            <Route path="/cuisine/:type" element={<Cuisine/>}/> 
            <Route path="/searched/:search" element={<Searched/>}/>
            <Route path="/recipe/:name" element={<Recipe/>} />
        </Routes>
      </AnimatePresence>
  )
}

export default Pages