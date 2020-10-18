const initState={
    topPost:"",
    error:null
 }
 
 const topReducer=(state=initState,action)=>{
     switch(action.type){
         case 'TOP_SUCCESS':
             state.topPost=action.topPost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'TOP_FETCH_ERROR':
             console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default topReducer