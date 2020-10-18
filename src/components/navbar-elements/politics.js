import React, { Component } from 'react'
import { politics } from '../../store/actions/healthAction'
import { connect } from 'react-redux';
 import moment from 'moment'

const badgeStyle={
    display:"inlineBlock",
    position:"absolute",
    top:"5px",
    right:"15px",
    backgroundColor:"red",
    color:"#fff",
    borderRadius:"15px",
    fontWeight:"bolder",
    wordSpacing:"1px"
}

export class Politics extends Component {
    render() {
        
        const { post }=this.props;
        const politicsnews=post? post.map((el)=>{
            return(
                <div className='col l3 m4 s6'>

                
<div className="card"  >
                      <div className="card-image">
                               <a href={el.url} >
                                   <img src={el.urlToImage } height="150" width='100' alt='business-news-img'/>
                               </a>
                              <span className=' badge' style={ badgeStyle } >politics</span>
                              
                      </div>

                      <div className="card-content">
                        <a href={el.webUrl }  style={{color:"black"}}>{el.webTitle.slice(0,50)+"..."}</a>
                        <a href={el.webUrl }  style={{color:"black"}}><p style={{color:"orange",fontWeight:"bolder"}}>{  moment(el.webPublicationDate).fromNow() }</p></a>
                        
                      </div>
                 </div>

            </div>
            )

        }):<p>....loading</p>
        return (
               
            <div style={{marginTop:"50px"}}>
               
                <div className='fluid-container #eceff1 blue-grey lighten-5' style={{height:"",padding:"30px 0 50px"}}>
                   <div className='container'>
                         <div className='row'>

                            { politicsnews }
                              
                            </div>
                        </div>
                    </div>
             </div>
        )
    }
}


const mapdataToprops=(state)=>{
    console.log(state)
    return{
       post:state.politics.politicsPost 
    }
}


const mapdispatchToprops=(dispatch)=>{
    return{
         
         //business:()=>{  dispatch(business()) }
         business:  dispatch(politics()) 

    }
}

export default connect(mapdataToprops,mapdispatchToprops)(Politics)


