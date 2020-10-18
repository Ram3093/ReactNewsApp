import axios from 'axios'

export const politics=()=>{
    return (dispatch,getState)=>{
        axios.get('https://content.guardianapis.com/search?q=politics&api-key=test')
              .then(res=>{
                 // console.log(res);
                  dispatch({ type:"POLITICS_SUCCESS",politicsPost:res.data.response.results.slice(0,4)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"POLITICS_FETCH_ERROR",err:err})
             })
    }
} 


export const business=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_BUSINESS)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"BUSINESS_SUCCESS",businessPost:res.data.articles.slice(0,4)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"BUSINESS_FETCH_ERROR",err:err})
             })
    }
} 


export const science=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_SCIENCE)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"SCIENCE_SUCCESS",sciencePost:res.data.articles.slice(0,4)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"SCIENCE_FETCH_ERROR",err:err})
             })
    }
} 


export const sports=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_SPORTS)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"SPORTS_SUCCESS",sportsPost:res.data.articles.slice(0,4)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"SPORTS_FETCH_ERROR",err:err})
             })
    }
} 



export const tech=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_TECH)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"TECH_SUCCESS",techPost:res.data.articles.slice(0,4)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"TECH_FETCH_ERROR",err:err})
             })
    }
} 

export const travel=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_TRAVEL)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"TRAVEL_SUCCESS",travelPost:res.data.articles.slice(0,4)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"TRAVEL_FETCH_ERROR",err:err})
             })
    }
} 


export const health=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_HEALTH)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"HEALTH_SUCCESS",healthPost:res.data.articles.slice(0,4)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"HEALTH_FETCH_ERROR",err:err})
             })
    }
} 


export const home=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_HOME)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"HOME_SUCCESS",homePost:res.data.articles.slice(0,4)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"HOME_FETCH_ERROR",err:err})
             })
    }
} 


export const world=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_WORLD)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"WORLD_SUCCESS",worldPost:res.data.articles.slice(0,4)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"WORLD_FETCH_ERROR",err:err})
             })
    }
} 


export const top=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_TOP)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"TOP_SUCCESS",topPost:res.data.articles.slice(0,2)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"TOP_FETCH_ERROR",err:err})
             })
    }
} 


export const latest=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_LATEST)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"LATEST_SUCCESS",latestPost:res.data.articles.slice(0,2)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"LATEST_FETCH_ERROR",err:err})
             })
    }
} 


export const feature=()=>{
    return (dispatch,getState)=>{
        axios.get(process.env.REACT_APP_FEATURE)
              .then(res=>{
                 // console.log(res.data.articles.slice(0,10));
                  dispatch({ type:"FEATURE_SUCCESS",featurePost:res.data.articles.slice(0,2)})
             }).catch((err)=>{
                  //console.log('error',res)
                  dispatch({ type:"FEATURE_FETCH_ERROR",err:err})
             })
    }
} 

