const initState={
    latestPost:"",
    error:null
 }
 
 const latestReducer=(state=initState,action)=>{
     switch(action.type){
         case 'LATEST_SUCCESS':
             state.latestPost=action.latestPost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'LATEST_FETCH_ERROR':
             console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default latestReducer