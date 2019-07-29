import React from "react";
import useToggleState from "../Hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import EditRecipe from "./EditRecipe";

function Recipe(props) {
  const [isEditing, toggle] = useToggleState();

  return (
    <ListItem>
      {isEditing ? (
        <EditRecipe
          editRecipe={props.editRecipe}
          id={props.id}
          title={props.title}
          ingredients={props.ingredients}
          toggleEdit={toggle}
        />
      ) : (
        <React.Fragment>
          <Grid item xs={11} md={8} lg={4}>
            <ListItemText>
              <h3>{props.title}</h3>
            </ListItemText>
            <ListItemText>
              <p style={{ margin: "10px", width: "80%" }}>
                {props.ingredients}
              </p>
            </ListItemText>
          </Grid>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => props.removeRecipe(props.id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </React.Fragment>
      )}
    </ListItem>
  );
}
export default Recipe;
