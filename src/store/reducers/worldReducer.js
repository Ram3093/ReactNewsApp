const initState={
    worldPost:"",
    error:null
 }
 
 const worldReducer=(state=initState,action)=>{
     switch(action.type){
         case 'WORLD_SUCCESS':
             state.worldPost=action.worldPost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'WORLD_FETCH_ERROR':
            // console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default worldReducer