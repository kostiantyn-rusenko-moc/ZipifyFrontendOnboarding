import axios from "axios"
export const bannerModule = {
    state() {
        return {
            bannersData: [],
            wysiwygText: '',
            wysiwygHtml: '',
            bannerTitle: '',
            bannerColor: '#FFFFF',
            bannerProductId: Number,
            bannerId: Number
        }
    },
    mutations: {
        setData(state, value) {
            state.bannersData = value
        },
        setWysiwygText(state, value) {
            state.wysiwygText = value
        },
        setWysiwygHtml(state, value) {
            state.wysiwygHtml = value
        },
        setBannerTitle(state, value) {
            state.bannerTitle = value
        },
        setBannerColor(state, value) {
            state.bannerColor = value
        },
        setBannerProductId(state, value) {
            state.bannerProductId = value
        },
        setBannerId(state, value) {
            state.bannerId = value
        }

    },
    actions: {
        async fetchBanners({commit, state}) {
            await axios.get('/api/v1/banners')
                .then((res) => {
                    commit('setData', res.data.data)
                    console.log(res.data, state.bannersData);
                })
        },
        async createBanner({state}) {
            console.log(state.bannerTitle)
            await axios.post('/api/v1/banners', {
                banner: {
                    title: state.bannerTitle,
                    style: {
                        backgoundColor: state.bannerColor
                    },
                    content: state.wysiwygHtml,
                    product_id: state.bannerProductId,
                }
            }).then((res) => {
                console.log(res.data)
            })
        },
        async deleteBanner({state, dispatch}) {
            await axios.delete(`/api/v1/banners/${state.bannerId}`)
                .then((res) => {
                    dispatch('fetchBanners')
                    console.log(res.data)
                })
        },
        async getBanner({state, commit}) {
            await axios.get(`/api/v1/banners/${state.bannerId}`)
                .then((res) => {
                    console.log(res.data.data)
                    commit('setBannerTitle', res.data.data.title)
                    commit('setBannerColor', res.data.data.style.backgoundColor)
                    commit('setBannerProductId', res.data.data.product_id)
                    commit('setWysiwygHtml', res.data.data.content)
                }).then(()=> console.log(state, 'state'))
        }
    },
    namespaced: true
}