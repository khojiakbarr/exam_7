import { configureStore } from "@reduxjs/toolkit";
import CompanyApi from "./APiSlice/CompaniyApi";
import JobApi from "./APiSlice/JobApi";

const store = configureStore({
  reducer: {
    [CompanyApi.reducerPath]: CompanyApi.reducer,
    [JobApi.reducerPath]: JobApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(CompanyApi.middleware, JobApi.middleware);
  },
});

export default store;
