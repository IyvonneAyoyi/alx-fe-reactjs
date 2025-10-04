import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center text-xl font-semibold mt-10">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-4 text-green-600 hover:text-green-800 underline"
      >
        ← Back to Home
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Ingredients
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Cooking Instructions
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              {recipe.instructions &&
                recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
