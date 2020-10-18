const initState={
    politicsPost:"",
    error:null
 }
 
 const politicsPost=(state=initState,action)=>{
     switch(action.type){
         case 'POLITICS_SUCCESS':
             state.politicsPost=action.politicsPost;
             //console.log(action.politicsPost);
             return {...state
             };
         case 'POLITICS_FETCH_ERROR':
             console.log('health fetch error',action.err)
             return state;
         default:
             return state;
     }
    
 }
 
 export default politicsPost