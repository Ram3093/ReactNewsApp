const initState={
    travelPost:"",
    error:null
 }
 
 const travelReducer=(state=initState,action)=>{
     switch(action.type){
         case 'TRAVEL_SUCCESS':
             state.travelPost=action.travelPost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'TRAVEL_FETCH_ERROR':
            // console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default travelReducer