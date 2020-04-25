import React from 'react';
import PropTypes from 'prop-types';

class Picture extends React.Component {
    static propTypes= {
        src: PropTypes.string.isRequired
    }

    render(){
        return (
         
           <img style={{height: 200,width: 180}} src={this.props.src} resizeMode={"cover"} alt="this is a blog post" />
        ); 
    }
}



export default Picture; 