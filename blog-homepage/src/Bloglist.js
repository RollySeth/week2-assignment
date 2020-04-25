import React from 'react';
import PropTypes from 'prop-types';
import './Bloglist.css';
import Picture from './Picture'; 
import AuthorThumbnail from './AuthorThumbnail';
import missedArticles from './_data/missed-articles.json';
import yourArticles from './_data/your-articles.json';
import logo from './bookmark.png';
import starIcon from './star.svg';
import audioIcon from './audioIcon2.svg';
import Moment from 'moment'; 
import AuthorInfo from './AuthorInfo';


class Bloglist extends React.Component{
 

    static propTypes= {
        src: PropTypes.string.isRequired
    }

    render(){
        

        return (
           
            <div className="Blog-ForYou">
            { yourArticles.map((yourArticlesList,idx) => 
                
                      <table className="table-style" key={idx}>
                          <tr >
                             <td><Picture src={yourArticlesList.image} /></td>
                             <td>
                                 <div>
                                   
                                      <table>
                                           <tr>
                                           <td>
                                           { yourArticlesList.hasAudioAvailable === true ?
                                            <div>
                                           <img src={audioIcon} className="audioIcon" alt="AudioAvailable" />
                                             Audio available </div>
                                            : <div></div>
                                            }
                                            </td>
                                            <td>
                                            { yourArticlesList.memberPreview === true ?
                                            <div>
                                             <img src={starIcon} className="memberIcon" alt="isMember" />
                                            </div>
                                            : <div></div>
                                            }
                                           </td>
                                          </tr>
                                       </table>
                                       
                                      
                                     <br></br></div>
                                 <div className="heading"><b> {yourArticlesList.title} </b> <br></br></div>
                                 <div className="blogdes">{yourArticlesList.description} <br></br></div>
                                 <div className="blogfooter">
                                     <table>
                                         <tr>
                                         <AuthorInfo src={yourArticlesList.author.image} isMember={yourArticlesList.author.isMediumMember} name={yourArticlesList.author.name}
                                                   postedDate={yourArticlesList.postedDate} minutesToRead={yourArticlesList.minutesToRead}
                                         />
                                         
                                           {/* <td>
                                               { yourArticlesList.author.isMediumMember === true ?
                                            <div>
                                               <div id="circle">
                                              
                                               <AuthorThumbnail  src={yourArticlesList.author.image} /> 
                                               </div>    
                                            </div>
                                            :<AuthorThumbnail  src={yourArticlesList.author.image} /> 
                                             
                                            
                                           }
                                               </td>                          
                                              
                                         <td>
                                      <b> {yourArticlesList.author.name} </b> <br></br>
                                      </td>
                                       <td>
                                       <img src={logo} className="bookmarklogo" alt="bookmark" />
                                       </td>
                                      </tr>
                                      <tr>
                                         <td>
                                          {Moment(yourArticlesList.postedDate).format('d MMM')} 
                                        . {yourArticlesList.minutesToRead} min read
                                        </td> */}
                                    
                                        </tr>
                                    </table>
                                    </div>
                         </td>
                          </tr>
                      </table>


             
             )}
           
          </div>
          
        ); 
    }
 
  
}



export default Bloglist; 