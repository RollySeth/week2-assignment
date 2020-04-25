import React from 'react';
import PropTypes from 'prop-types';

class PictureMissedArticle extends React.Component {
    static propTypes= {
        src: PropTypes.string.isRequired
    }

    render(){
        return (
         
           <img style={{height: 120,width: 290}} src={this.props.src} resizeMode={"cover"} alt="this is a blog post1" />
        ); 
    }
}



export default PictureMissedArticle; 