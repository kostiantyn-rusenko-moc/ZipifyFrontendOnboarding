import {  mount } from '@vue/test-utils'
import {jest} from '@jest/globals'
import ConfirmPopup from '@/homePage/main/card/controls/ConfirmPopup.vue'
test('text', async() => {
  const wrapper = mount(ConfirmPopup, {
    global: {
      mocks: {
        $store: {
          state: {
            banners: {
              isLoader: false,
              bannersData: []
            }
          },
          dispatch: jest.fn()
        }
      }
    }
  })

  await wrapper.find('.bl-popup__del-btn').trigger('click')
})
