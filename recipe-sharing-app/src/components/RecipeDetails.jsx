import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams(); // get recipe ID from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id)) // convert to number if IDs are numeric
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Edit recipe form */}
      <EditRecipeForm recipe={recipe} />

      {/* Delete recipe button */}
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
