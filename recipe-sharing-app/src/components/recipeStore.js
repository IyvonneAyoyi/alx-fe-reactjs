// src/components/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Add recipe
  addRecipe: (recipe) =>set((state) => ({ recipes: [...state.recipes, recipe] })),

  // Update recipe by ID
  updateRecipe: (updatedRecipe) =>set((state) => ({recipes: state.recipes.map((recipe) =>
    recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Delete recipe by ID
  deleteRecipe: (id) =>set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Search term handling
  setSearchTerm: (term) =>set((state) => {
      const filtered = state.recipes.filter((recipe) =>recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
}));
