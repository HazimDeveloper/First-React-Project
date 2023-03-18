
import React from "react";

class Footer extends React.Component{
    
 constructor (props){
       return super(props);
    }
    render(){
        return(
            <div>
                <h1>Ini Footer</h1>
               {this.props.paragraf()}
            </div>
            );
    }

}

export default Footer;