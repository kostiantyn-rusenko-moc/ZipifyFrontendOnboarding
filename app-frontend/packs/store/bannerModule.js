import axios from "axios"
import router from "../router" 
export const bannerModule = {
    state() {
        return {
            bannersData: [],
            wysiwygText: '',
            wysiwygHtml: '',
            bannerTitle: '',
            bannerColor: '#E5D6AE',
            bannerProductId: Number,
            bannerId: Number,
            isLoader: false,
            responseData: Boolean,
            productTitlePreview: '',
            productImgPreview: '',
            toastMsg: '',
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
        },
        setProductTitlePreview(state, value) {
            state.productTitlePreview = value
        },
        setProductImgPreview(state, value) {
            state.productImgPreview = value
        },
        setToastMsg(state, value) {
            state.toastMsg = value
        }

    },
    actions: {
        fetchBanners({commit, state}) {
            state.isLoader = true
            axios.get('/api/v1/banners')
                .then((res) => {
                    commit('setData', res.data.data)
                    state.responseData = !!state.bannersData.length
                }).finally(() => {
                    state.isLoader = false
                })
        },
        createBanner({state, commit}) {
            state.isLoader = true
            axios.post('/api/v1/banners', {
                banner: {
                    title: state.bannerTitle,
                    style: {
                        backgoundColor: state.bannerColor,
                        productPreview: {
                            title: state.productTitlePreview,
                            img: state.productImgPreview
                        }
                    },
                    content: state.wysiwygHtml,
                    product_id: state.bannerProductId,
                }
            }).then(() => {
                commit('setToastMsg', 'Bannser saved')
            }).catch(err => {
                commit('setToastMsg', Object.values(JSON.parse(err.response.request.response).error)[0][0])
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
                commit('setProductTitlePreview', res.data.data.style.productPreview.title)
                commit('setProductImgPreview', res.data.data.style.productPreview.img)
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
        },
        clearInputFields({commit}) {
            commit('setWysiwygText', '')
            commit('setWysiwygHtml', '')
            commit('setBannerTitle', '');
            commit('setBannerColor', '#E5D6AE')
            commit('setBannerProductId', '')
            commit('setProductTitlePreview', '')
            commit('setProductImgPreview', '')
        }
    },
    namespaced: true
}