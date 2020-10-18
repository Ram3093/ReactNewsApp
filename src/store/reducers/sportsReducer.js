const initState={
    sportsPost:"",
    error:null
 }
 
 const sportsReducer=(state=initState,action)=>{
     switch(action.type){
         case 'SPORTS_SUCCESS':
             state.sportsPost=action.sportsPost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'SPORTS_FETCH_ERROR':
             console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default sportsReducer