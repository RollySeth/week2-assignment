import React from 'react';
import PropTypes from 'prop-types';
import AuthorThumbnail from './AuthorThumbnail';
import logo from './bookmark.png';
import Moment from 'moment';

class AuthorInfo extends React.Component {
    static propTypes= {
        isMember: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        postedDate:PropTypes.string.isRequired,
        minutesToRead:PropTypes.string.isRequired
    }
    render(){
        
        return (
         
                      <div>
                          <table>
                                 <tr>
                                     <td>
                                     { this.props.isMember === true ?
                                               <div id="circle">
                                               <AuthorThumbnail  src={this.props.src} /> 
                                               </div> 
                                           :
                                           <div >
                                           <AuthorThumbnail  src={this.props.src} /> 
                                           </div> 
                                     }   
                                               </td>
                                               <td>                                             
                                                 <b> {this.props.name} </b> &nbsp;&nbsp;&nbsp;&nbsp; {Moment(this.props.postedDate).format('d MMM')} . {this.props.minutesToRead} min read </td>  <br></br>
                                                <td>                               
                                        <img src={logo} className="bookmarklogo" alt="bookmark" />
                                        </td>
                                        </tr>
                           </table>
                         </div> 
            
        );
      
    }
}



export default AuthorInfo; 