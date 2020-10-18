import React, { Component } from 'react'
import { connect } from 'react-redux'
import { top } from '../../store/actions/healthAction'


 class Top extends Component {
    render() {
        
        const { post }=this.props;

        const showLTop= post?post.map((el)=>{
            return(
                <div className="card col l5" style={{ marginLeft:"20px" }}>
                            
                      <div className="card-image">
                            <a href={ el.url} > <img src={ el.urlToImage } height="150" width='100' alt='top-news-img' /></a>
                              
                      </div>

                      <div className="card-content" style={{padding:"5px 0"}}>
                          <a href={ el.url} style={{color:"black"}} > <p>{ el.title.slice(0,40) }....</p> </a>
                      </div>

            </div>
            )

        }):
        (<p>loading....</p>)

        const secondPart=post? post.map((el)=>{
                         return(  <li style={{float:"none"}}>
                                                         <a href={el.url} className='row'>
                                                                  <div className="card-image col l4" >
                                                                        <img src={  el.urlToImage  } height='50' width='80' alt='top-news-img'  />
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
                           { showLTop }
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
    console.log(state)
    return{
       post:state.top.topPost 
    }
}

const mapdispatchToprops=(dispatch)=>{
     return{
          
          top: dispatch(top())

     }
}

export default connect(mapstateToprops,mapdispatchToprops)(Top)
