import {create} from 'zustand'

export const useRecipeStore = create(set => ({
  recipes: [],
  // Add Recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  //Delete Recipe by ID
  deleteRecipe: (id) =>set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),

    //Update Recipe by ID
updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  setRecipes: (recipes) => set({ recipes })
}));

console.log(useRecipeStore.getState().recipes);
