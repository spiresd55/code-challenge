import { combineReducers, createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import {createReducer} from "redux-orm";
import { all } from "redux-saga/effects";

//Sagas
import { feedSagas } from "./Feed/feedSaga";

//Reducers
import feed from "./Feed/feedReducer";

//ORM
import orm from "./models/Orm";

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
            feed,
            entities: createReducer(orm)
        });

        //Set up sagas
        function* rootSaga() {
            yield all([...feedSagas()]);
        }

        this.store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

        sagaMiddleware.run(rootSaga);

        console.log(this.store.getState());
    }
}

export default AppStore;
