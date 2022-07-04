import axios from "axios"
export const bannerModule = {
    state() {
        return {
            wysiwygText: '',
            wysiwygHtml: '',
            text: 'SSS'
        }
    },
    mutations: {
        setWysiwygText(state, value) {
            state.wysiwygText = value
        },
        setWysiwygHtml(state, value) {
            state.wysiwygHtml = value
        },

    },
    actions: {
        async fetchBanners({commit}) {
            await axios.get('/api/v1/banners')
                .then((res) => {
                    console.log(res.data);
                })
        }
    },
    namespaced: true
}