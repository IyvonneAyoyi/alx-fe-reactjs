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

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Add a New Recipe
      </h1>

      {error && (
        <p className="text-red-600 mb-4 text-center font-semibold">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            rows="4"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g. 1 cup sugar\n2 eggs\n1 tsp vanilla"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            rows="4"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="e.g. Preheat oven to 180°C\nMix dry ingredients\nBake for 20 mins"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

    
