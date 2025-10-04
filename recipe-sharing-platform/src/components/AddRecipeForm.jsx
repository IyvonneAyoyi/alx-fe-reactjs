import React, { useState } from "react";

const AddRecipeForm = () => {
  // Form fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // Error state
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least 2 ingredients.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; 

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    console.log("New recipe submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 
            ${errors.title ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-green-400"}`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Ingredients
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients separated by commas"
            rows="4"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 
            ${errors.ingredients ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-green-400"}`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Write the preparation steps here..."
            rows="5"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 
            ${errors.steps ? "border-red-400 focus:ring-red-400" : "border-gray-300 focus:ring-green-400"}`}
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
