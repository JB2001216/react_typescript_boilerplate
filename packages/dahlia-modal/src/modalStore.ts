import { createStore } from 'dahlia-store'

interface ModalInstnce {
  name: string
  data: any
  isOpen: boolean
}

interface Modals {
  [modalName: string]: ModalInstnce
}

export const modalStore = createStore({
  modals: {} as Modals,
  open(name: string, data?: any) {
    modalStore.modals[name] = {
      name,
      data,
      isOpen: true,
    }
  },

  close(name: string) {
    modalStore.modals[name].isOpen = false
  },

  getModal(name: string) {
    return modalStore.modals[name]
  },
})
