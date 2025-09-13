 // RecipeDetails component
  import { useRecipeStore } from './recipeStore';
  import EditRecipeForm from './EditRecipeForm';
  import DeleteRecipeButton from './DeleteRecipeButton';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    if (!recipe) {
    return <p>Recipe not found.</p>; // <-- Safe fallback
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Inline editing form */}
      <EditRecipeForm recipe={recipe} />

      {/* Delete button */}
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};


  export default RecipeDetails;