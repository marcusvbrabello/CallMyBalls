import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers/mainstate.slice';

export default configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 512 },
    serializableCheck: { warnAfter: 512 },
  })
});