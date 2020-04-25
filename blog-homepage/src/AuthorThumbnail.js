import React from 'react';
import PropTypes from 'prop-types';

class AuthorThumbail extends React.Component {
    static propTypes= {
        src: PropTypes.string.isRequired
    }

    render(){
        return (
         
           <img style={{height: 30,width:30, borderRadius:50, marginLeft:3, marginRight:5, marginTop:3, marginBottom:5}} src={this.props.src} resizeMode={"cover"} alt="this is a blog post" />
        ); 
    }
}



export default AuthorThumbail; 