import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/slice';
// import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   auth: authReducer,
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
