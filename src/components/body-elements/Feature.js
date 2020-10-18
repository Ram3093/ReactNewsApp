import React, { Component } from 'react'
import { connect } from 'react-redux'
import { feature } from '../../store/actions/healthAction'

//import { Link } from 'react-router-dom'

 class Feature extends Component {
    render() {
        //console.log(this.props)
        const { post }=this.props;

        const showFeature= post?post.map((el)=>{
            return(
                <div className="card col l5" style={{ marginLeft:"20px" }}>
                            
                      <div className="card-image">
                            <a href={ el.url} > <img src={ el.urlToImage } height="150" width='100' alt='feature-news-img'   /></a>
                              
                      </div>

                      <div className="card-content" style={{padding:"5px 0"}}>
                          <a href={ el.url} style={{color:"black"}}> <p>{ el.title.slice(0,40) }....</p> </a>
                      </div>

            </div>
            )

        }):
        (<p>loading....</p>)

        const secondPart=post? post.map((el)=>{
                         return(  <li style={{float:"none"}}>
                                                         <a href={el.url} className='row'>
                                                                  <div className="card-image col l4" >
                                                                        <img src={  el.urlToImage  } height='50' width='80' alt='feature-news-img'  />
                                                                  </div>
                                                                   <div className=" col l8 right" >
                                                                          <p >{ el.title.slice(0,20)}...</p>
                                                                   </div>
                                                         </a>
                            </li>
                         )
        }):<p>...loading</p>

        return (
            <div className='container' style={{marginTop:"px"}}>
              <div className='row' >
                   <div className='col l8'>
                       <div className='row' style={{marginLeft:"5px",marginBottom:"0"}}>
                           { showFeature }
                        </div>
                   </div>
                   

                   <div className='col l4' style={{float:"left"}}>
                      <nav>
                           <ul >
                               {  secondPart }
                               
                          </ul>
                      </nav>

                   </div>

              </div>
                
            </div>
        )
    }
}

const mapstateToprops=(state)=>{
    //console.log(state)
    return{
       post:state.feature.featurePost 
    }
}

const mapdispatchToprops=(dispatch)=>{
     return{
          
          feature: dispatch(feature())

     }
}

export default connect(mapstateToprops,mapdispatchToprops)(Feature)
