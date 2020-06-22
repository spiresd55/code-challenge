import ui from "./UIReducer";
import {UI_ACTIONS} from "./UIActions";

describe("UIReducer", () => {
   it("should return initial state", () => {
       expect(ui(undefined, {type: "NULL"})).toEqual({
           displayLoader: false
       })
   });

    it("should update display loader", () => {
        expect(ui({displayLoader: true},
            {type: UI_ACTIONS.DISPLAY_LOADER, payload: {show: false}})).toEqual({
            displayLoader: false
        })
    })
});