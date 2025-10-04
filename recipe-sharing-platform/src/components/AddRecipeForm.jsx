import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setError("All fields are required!");
      return;
    }

    // Convert textarea inputs into arrays
    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      instructions: instructions.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);
    setError("");
    alert("Recipe submitted successfully!");

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

    
