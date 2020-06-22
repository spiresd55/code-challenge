import {getUiState, displayLoader} from "./UISelectors";

describe("UISelectors", () => {
    it("getUiState() should get the UI state", () => {
        const mockState = {
            ui: 'test'
        };
        expect(getUiState(mockState)).toEqual('test');
    });

    it("displayLoader() should select the displayLoader prop", () => {
        const mockState = {
            ui: {
                displayLoader: false
            }
        };
        expect(displayLoader(mockState)).toEqual(false);
    })
});