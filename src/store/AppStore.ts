import { combineReducers, createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

//Sagas
import { msgSagas } from "./msgSaga";

//Reducers
import message from "./msgReducer";

export class AppStore {

    private static instance: AppStore;
    public store: Store;

    private constructor() {
        this.initialize();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new AppStore();
        }
        return this.instance;
    }

    initialize() {
        console.info("App store is intializing!");
        const sagaMiddleware = createSagaMiddleware();

        //Allows the store to be broken into different states
        const rootReducer = combineReducers({
            message
        });

        //Set up sagas
        function* rootSaga() {
            yield all([...msgSagas()]);
        }

        this.store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

        sagaMiddleware.run(rootSaga);
    }
}

export default AppStore;
