const initState={
    homePost:"",
    error:null
 }
 
 const homeReducer=(state=initState,action)=>{
     switch(action.type){
         case 'HOME_SUCCESS':
             state.homePost=action.homePost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'HOME_FETCH_ERROR':
             console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default homeReducer