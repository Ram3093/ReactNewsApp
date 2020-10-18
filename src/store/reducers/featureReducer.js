const initState={
    featurePost:"",
    error:null
 }
 
 const featureReducer=(state=initState,action)=>{
     switch(action.type){
         case 'FEATURE_SUCCESS':
             state.featurePost=action.featurePost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'FEATURE_FETCH_ERROR':
             console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default featureReducer