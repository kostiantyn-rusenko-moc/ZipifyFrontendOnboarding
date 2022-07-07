import axios from "axios"
import router from "../router" 
export const bannerModule = {
    state() {
        return {
            bannersData: [],
            wysiwygText: '',
            wysiwygHtml: '',
            bannerTitle: '',
            bannerColor: '#FFFFF',
            bannerProductId: Number,
            bannerId: Number,
            isLoader: false
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
        fetchBanners({commit, state}) {
            state.isLoader = true
            axios.get('/api/v1/banners')
                .then((res) => {
                    commit('setData', res.data.data)
                }).finally(() => {
                    state.isLoader = false
                })
        },
        createBanner({state}) {
            state.isLoader = true
            axios.post('/api/v1/banners', {
                banner: {
                    title: state.bannerTitle,
                    style: {
                        backgoundColor: state.bannerColor
                    },
                    content: state.wysiwygHtml,
                    product_id: state.bannerProductId,
                }
            }).finally(() => {
                state.isLoader = false
            })
        },
        deleteBanner({state, dispatch}) {
            state.isLoader = true
            axios.delete(`/api/v1/banners/${state.bannerId}`)
            .then(() => {
                dispatch('fetchBanners')
            })
        },
        getBanner({state, commit}) {
            axios.get(`/api/v1/banners/${state.bannerId}`)
            .then((res) => {
                commit('setBannerTitle', res.data.data.title)
                commit('setBannerColor', res.data.data.style.backgoundColor)
                commit('setBannerProductId', res.data.data.product_id)
                commit('setWysiwygHtml', res.data.data.content)
            }).then(()=> router.push('edit'))
            
        },
        updateBanner({state}) {
            state.isLoader = true
            axios.put(`/api/v1/banners/${state.bannerId}`, {
                banner: {
                    title: state.bannerTitle,
                    style: {
                        backgoundColor: state.bannerColor
                    },
                    content: state.wysiwygHtml,
                    product_id: state.bannerProductId,
                }
            }).finally(() => {
                state.isLoader = false
            })
        }
    },
    namespaced: true
}