import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import Divider from "@material-ui/core/Divider";

import Recipe from "./Recipe";

function RecipeList(props) {
  if(props.recipes.length) return (
    <Paper>
      <List>
      {props.recipes.map(recipe => (
        <React.Fragment>
        <Recipe
          id={recipe.id}
          title={recipe.title}
          key={recipe.id}
          ingredients={recipe.ingredients}
          removeRecipe={props.removeRecipe}
          editRecipe={props.editRecipe}
        />
        <Divider />
        </React.Fragment>
      ))}
      </List>
    </Paper>
  )
  return null;
}
export default RecipeList;