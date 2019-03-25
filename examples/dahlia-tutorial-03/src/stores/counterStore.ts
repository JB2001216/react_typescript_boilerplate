import { createStore } from 'dahlia/store'

export const { useStore, dispatch } = createStore({
  state: {
    count: 10,
  },
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
  effects: {
    async asyncIncrement() {
      await sleep(1000)
      dispatch(A => A.increment)
    },
    async asyncDecrement() {
      await sleep(1000)
      dispatch(A => A.decrement)
    },
  },
})

async function sleep(time: number) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export default { useStore, dispatch }
