const redux=require('redux')

const counterReducer=(state={counter:0},action)=>{
   if(action.type==='increment')
   {
    return { 

        counter:state.counter+2
    }
   }
    if(action.type==='decrement')
    {
       return {
        counter:state.counter-2
       }
    }
}

const store=redux.createStore(counterReducer);
  
const counterSubsribe=()=>{
    const latestState=store.getState();
    console.log(latestState)
}

store.subscribe(counterSubsribe)
for(let i=0;i<5;i++)
{
store.dispatch({type:'increment'})
}
store.dispatch({type:'decrement'})