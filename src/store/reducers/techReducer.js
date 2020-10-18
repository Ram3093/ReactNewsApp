const initState={
    techPost:"",
    error:null
 }
 
 const techReducer=(state=initState,action)=>{
     switch(action.type){
         case 'TECH_SUCCESS':
             state.techPost=action.techPost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'TECH_FETCH_ERROR':
             console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default techReducer