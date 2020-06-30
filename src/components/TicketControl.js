import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import MessageOne from './MessageOne';
import MessageTwo from './MessageTwo';
import MessageThree from './MessageThree';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      counter: 0
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage, 
    }));
  }

  returnToList = () => {
    this.setState({formVisibleOnPage: true}); 
  }

  countClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let addTicketButton = null;

    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket List";
      addTicketButton = <button onClick={this.returnToList}>{buttonText}</button>
      
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
      addTicketButton =  <button onClick={this.countClick}>{buttonText}</button>
      if(this.state.counter === 1 ) {
        currentlyVisibleState = <MessageOne />
        buttonText = "Next";
        console.log(this.state.counter);
        addTicketButton =  <button onClick={this.countClick}>{buttonText}</button>
      } else if(this.state.counter === 2) {
        currentlyVisibleState = <MessageTwo />
        buttonText = "Next";
        console.log(this.state.counter);
        addTicketButton =  <button onClick={this.countClick}>{buttonText}</button>
      } else if(this.state.counter === 3) {
        currentlyVisibleState = <MessageThree />
        buttonText = "Next";
        console.log(this.state.counter);
        addTicketButton =  <button onClick={this.handleClick}>{buttonText}</button>
        // this.setState({counter: 0});
      }
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addTicketButton}
      </React.Fragment>
    );
  }

}

export default TicketControl;