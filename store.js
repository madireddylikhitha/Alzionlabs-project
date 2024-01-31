import {  combineReducers, legacy_createStore as createStore } from 'redux'
import rootReducer from "./Reducer.js"
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { createFilesystemStorage } from 'redux-persist-filesystem-storage';



const persistConfig = {
    key: 'root',
    storage: createFilesystemStorage,
    whitelist: ['user'],
    blacklist: []
}
const persistedReducer = persistReducer(persistConfig, combineReducers({
    user: rootReducer,
}));


export const store = createStore(persistedReducer);

export const persistor = persistStore(store)