const initState={
    businessPost:"",
    error:null
 }
 
 const businessReducer=(state=initState,action)=>{
     switch(action.type){
         case 'BUSINESS_SUCCESS':
             state.businessPost=action.businessPost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'BUSINESS_FETCH_ERROR':
             console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default businessReducer