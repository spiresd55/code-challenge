import {UI_ACTION_CREATOR, UI_ACTIONS} from "./UIActions";

describe("UIActions", () => {
   it("displayLoader should return an action creator", () => {
       expect(UI_ACTION_CREATOR.displayLoader(false)).toEqual({
           type: UI_ACTIONS.DISPLAY_LOADER,
           payload: {
               show: false
           }
       })
   })
});