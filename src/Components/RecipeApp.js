import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import uuid from "uuid";

// Components
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";

// CSS Styles
import paperStyle from "./Styles";

function RecipeApp() {
  // Implement Instructions for each recipe
  const starterRecipes = JSON.parse(
    window.localStorage.getItem("recipes") || "[]"
  );
  const [recipes, setRecipes] = useState(starterRecipes);

  useEffect(() => {
    window.localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (newTitle, newIngredients) => {
    setRecipes([
      ...recipes,
      { id: uuid(), title: newTitle, ingredients: newIngredients }
    ]);
  };

  const removeRecipe = recipeId => {
    // Filter out removed recipe
    const updatedRecipe = recipes.filter(recipe => recipe.id !== recipeId);
    // Call setRecipes with new recipe array
    setRecipes(updatedRecipe);
  };
  const editRecipe = (recipeId, editTitle, editIngredients) => {
    const updatedRecipe = recipes.map(recipe =>
      recipe.id === recipeId
        ? { ...recipes, title: editTitle, ingredients: editIngredients }
        : recipe
    );
    setRecipes(updatedRecipe);
  };

  return (
    <Paper style={paperStyle} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Recipe list</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1.2rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <RecipeForm addRecipe={addRecipe} />
          {recipes ? (
            <RecipeList
              recipes={recipes}
              removeRecipe={removeRecipe}
              editRecipe={editRecipe}
            />
          ) : null}
        </Grid>
      </Grid>
    </Paper>
  );
}
export default RecipeApp;

// LAYOUT //
// - RecipeApp / Holds all state
//  - RecipeForm
//  - RecipeList
//    -RecipeItem
