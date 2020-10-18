const initState={
   healthPost:"",
   error:null
}

const healthReducer=(state=initState,action)=>{
    switch(action.type){
        case 'HEALTH_SUCCESS':
            state.healthPost=action.healthPost;
            //console.log(action.healthPost);
            return {...state
            };
        case 'HEALTH_FETCH_ERROR':
            console.log('health fetch error',action.err)
            return state;
        default:
            return state;
    }
   
}

export default healthReducer