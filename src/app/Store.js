import { configureStore } from "@reduxjs/toolkit";
import WatchLaterSlice from "./WatchLaterSlice";

const Store = configureStore({
    reducer: {
        watchLater: WatchLaterSlice
    },
})

export default Store;