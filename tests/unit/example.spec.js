import {  mount } from '@vue/test-utils'
import MainApp from '@/homePage/main/MainApp.vue'


test('render a user banners', async() => {
  const wrapper = mount(MainApp, {

    global: {
      mocks: {
        $store: {
          state: {
            banners: {
              isLoader: false,
              bannersData: []
            }
        }
        }
      }
    },
    props: {
      responseData: true
    }
  })

  await expect(wrapper.find(".bl-main").exists()).toBe(false)
  await expect(wrapper.find('.bl-main__loader').exists()).toBe(false)
})
