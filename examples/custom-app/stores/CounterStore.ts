import { createStore } from 'dahlia/store'

const counterStore = createStore({
  count: 0,
  increment(step: number = 1) {
    counterStore.count += step
  },
  decrement() {
    counterStore.count--
  },

  async asyncIncrement() {
    await sleep(1000)
    counterStore.count++
  },
  async asyncDecrement() {
    await sleep(1000)
    counterStore.count--
  },
})

function sleep(time: number) {
  return new Promise(resove => setTimeout(resove, time))
}

export default counterStore
