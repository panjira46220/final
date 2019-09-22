import React from 'react';


class CharacterCard extends React.Component{

    state = {
        active: false
    }
    
    activate = () => {
        this.setState({
            active: !this.state.active
        }) 

        this.props.activationHandler(this.props.value);
    }

    render(){
        let activeCard = this.state.active ? 'activeCard' : '';
        let className = `card ${activeCard}`
        return(
            <div className= {className} onClick={this.activate}>
               {this.props.value}
            </div>
        )
    }
    componentDidUpdate(prevProps){
        if(prevProps.attempt != this.props.attempt){
        this.setState({active: false})
        }
       }
    
}

export default CharacterCard;