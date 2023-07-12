//定义 action
const ACTION_TYPE = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
}
//action创建函数
function increment() {
    return { type: ACTION_TYPE.INCREMENT }
}
function decrement() {
    return { type: ACTION_TYPE.DECREMENT }
}
//定义reducer函数
const initState=0
function counterReducer(state = initState, action) {
    switch (action.type) {
        case ACTION_TYPE.INCREMENT:
            return state + 1
        case ACTION_TYPE.DECREMENT:
            return state - 1
        default:
            return state
    }
}
//定义 createStore 函数
function createStore(reducer) {
    let state = undefined
    const subscribers = []
    function getState() {
        return state
    }
    function dispatch(action) {
        state = reducer(state, action)
        subscribers.forEach((subscriber) => subscriber())
    }
    function subscribe(subscriber) {
        subscribers.push(subscriber)
    }
    dispatch({}) //初始化 state
    return {
        getState,
        dispatch,
        subscribe,
    }
}
//创建 store
const store = createStore(counterReducer)
//订阅 store 变化
store.subscribe(() => {
    console.log(store.getState())
})
//调用 action 更新 state
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())