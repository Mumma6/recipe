import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "../Hooks/useInputState";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function EditRecipe(props) {
  const [title, handleTitle, resetTitle] = useInputState(props.title);
  const [ingredient, handleIngredient, resetIngredient] = useInputState(
    props.ingredients
  );
  return (
    <React.Fragment style={{marginLeft: "1rem"}}>
      <TextField
        margin="normal"
        value={title}
        onChange={handleTitle}
        fullWidth
        autoFocus
      />
      <TextField
        margin="normal"
        value={ingredient}
        onChange={handleIngredient}
        fullWidth
      />
      <Fab size="medium" color="primary" aria-label="add">
        <AddIcon
          onClick={e => {
            e.preventDefault();
            props.editRecipe(props.id, title, ingredient);
            resetIngredient();
            resetTitle();
            props.toggleEdit();
          }}
        />
      </Fab>
    </React.Fragment>
  );
}
export default EditRecipe;
