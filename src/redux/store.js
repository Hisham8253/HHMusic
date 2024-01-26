import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import {shazamCoreApi} from './Services/shazamCore';
export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefualtMiddleware)=> getDefualtMiddleware().concat(shazamCoreApi.middleware),
});
