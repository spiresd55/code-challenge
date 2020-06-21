import {createSelector} from "reselect";

export const getUiState = (state: any) => state.ui;

export const displayLoader = createSelector([getUiState], (ui) => {
   return ui.displayLoader;
});