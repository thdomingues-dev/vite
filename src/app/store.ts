import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter-slice'
import { dogsApi } from '../features/api/dogs-api'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogsApi.reducerPath]: dogsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dogsApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
