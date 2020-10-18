const initState={
    sciencePost:"",
    error:null
 }
 
 const scienceReducer=(state=initState,action)=>{
     switch(action.type){
         case 'SCIENCE_SUCCESS':
             state.sciencePost=action.sciencePost;
             //console.log(action.healthPost);
             return {...state
             };
         case 'SCIENCE_FETCH_ERROR':
             console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default scienceReducer