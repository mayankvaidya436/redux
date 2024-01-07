import { createSlice,configureStore } from "@reduxjs/toolkit";
const initialState = { counter: 0 ,showCounter:true};

const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers:{
    IncrementHandler(state){
      state.counter++;
    },
    DecrementHandler(state){
      state.counter--;
    },
    IncrementBy2Handler(state,action){
  state.counter = state.counter + action.payload;
    },
    DecrementBy2Handler(state,action){
      state.counter= state.counter - action.payload;
    },
    toggleCounterHandler(state){
      state.showCounter = !state.showCounter;
    },
  }
  });
  
  
  // const counterReducer = (state = initialState , action) => {
  //   if (action.type === "increment") {
  //     return {
  //       counter: state.counter + 1,
  //       showCounter: state.showCounter
  //     };
  //   }
  //   if (action.type === "decrement") {
  //     return {
  //       counter: state.counter - 1,
  //       showCounter: state.showCounter
  //     };
  //   }
  //   if (action.type === "INCREMENTBY2") {
  //     return {
  //       counter: state.counter + action.amount,
  //       showCounter: state.showCounter
  //     };
  //   }
  //   if (action.type === "DECREMENTBY2") {
  //     return {
  //       counter: state.counter - action.amount,
  //       showCounter: state.showCounter
  //     };
  //   }
  //   if(action.type === 'toggle'){
  //     return{
  //       showCounter:!state.showCounter,
  //       counter:state.counter
  //     }
  //   }
  //   return state;
  // };
  
  const initialAuthState = { isAuthenticated:false }
  const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
      login(state){
        state.isAuthenticated = true;
      },
      logout(state){
        state.isAuthenticated = false;
      },
    },
  })
  
  
  const store = configureStore({
    reducer:{counter: counterSlice.reducer, auth : authSlice.reducer },
  });
  export const  counterActions = counterSlice.actions;
  export const authActions = authSlice.actions;
  export default store;