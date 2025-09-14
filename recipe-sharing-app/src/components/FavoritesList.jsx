import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((recipe) => recipe.id === id))
  );

  if (favorites.length === 0) {
    return <p>No favorites yet. Add some recipes to your favorites!</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(
        (recipe) =>
          recipe && (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          )
      )}
    </div>
  );
};

export default FavoritesList;
