import { createStore } from "vuex";
import { bannerModule } from "./bannerModule";

export default createStore({

    modules: {
        banners: bannerModule
    }
})