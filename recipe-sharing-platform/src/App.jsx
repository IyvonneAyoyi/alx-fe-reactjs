import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/RecipeDetail";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />
        {/* Recipe Detail page */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> 
        {/* Add Recipe Form page */}
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        
      </Routes>
    </Router>
  );
}

export default App;

