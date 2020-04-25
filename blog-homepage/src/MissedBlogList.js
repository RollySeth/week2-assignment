import React from 'react';
import PropTypes from 'prop-types';
import './MissedBlogList.css';
import PictureMissedArticle from './PictureMissedArticle'; 
import missedArticles from './_data/missed-articles.json';
import starIcon from './star.svg';
import audioIcon from './audioIcon2.svg';
import AuthorInfo from './AuthorInfo';


class MissedBloglist extends React.Component{
 

    static propTypes= {
        src: PropTypes.string.isRequired
    }

    render(){
        

        return (
           
            <div className="Blog-ForYou2">
            { missedArticles.map((yourArticlesList,idx) => 
                
                      <table className="table-style2" key={idx}>
                         
                          <tr >
                          
                          <PictureMissedArticle src={yourArticlesList.image} />
                             
                          </tr>
                          <tr>       
                                 <div>
                                   
                                      <table>
                                           <tr>
                                           <td>
                                           { yourArticlesList.hasAudioAvailable === true ?
                                            <div>
                                           <img src={audioIcon} className="audioIcon" alt="AudioAvailable" />
                                             Audio Available </div>
                                            : <div></div>
                                            }
                                            </td>
                                            <td>
                                            { yourArticlesList.memberPreview === true ?
                                            <div className='member'>
                                             <img src={starIcon} className="memberIcon2" alt="isMember" /> Member preview
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
                                    
                                    
                                        </tr>
                                    </table>
                                    </div>
                     
                          </tr>
                      </table>


             
             )}
           
          </div>
          
        ); 
    }
 
  
}



export default MissedBloglist; 