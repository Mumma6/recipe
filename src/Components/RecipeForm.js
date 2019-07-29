import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";


import useInputState from "../Hooks/useInputState";

function RecipeForm({ addRecipe }) {
  const [title, handleTitle, resetTitle] = useInputState("");
  const [ingredients, handleIngredients, resetIngredients] = useInputState("");

  return (
    <Paper style={{ margin: "1rem", padding: "1rem" }}>
      <form>
        <TextField
          value={title}
          onChange={handleTitle}
          margin="normal"
          label="Dish"
          fullWidth
        />

        <TextField
          value={ingredients}
          onChange={handleIngredients}
          margin="normal"
          label="Ingredients"
          fullWidth
        />

        <Fab size="medium" color="primary" aria-label="add">
          <AddIcon
            onClick={e => {
              e.preventDefault();
              addRecipe(title, ingredients);
              resetIngredients();
              resetTitle();
            }}
          />
        </Fab>
      </form>
    </Paper>
  );
}
export default RecipeForm;
