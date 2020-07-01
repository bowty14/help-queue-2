import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
// import MessageOne from './MessageOne';
// import MessageTwo from './MessageTwo';
// import MessageThree from './MessageThree';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      //counter: 0,
      masterTicketList: [],
      selectedTicket: null
    };
  }
  handleClick = () => {
    if (this.state.selectedTicket != null) { 
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage, 
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }


  // countClick = () => {
  //   this.setState(prevState => ({
  //     counter: prevState.counter + 1
  //   }));
  // }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket={this.state.selectedTicket} />
      buttonText = "Return to Ticket List";
        }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />; // new code
      buttonText = "Add Ticket"; 
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;







// class TicketControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false,
//       masterTicketList: [],
//       counter: 0

//     };

//   }

//   handleClick = () => {
//     if (this.state.counter <= 3) {
//       this.setState(prevState => ({
//         counter: prevState.counter + 1

//       }));
//     } else {

//       this.setState(prevState => ({
//         formVisibleOnPage: !prevState.formVisibleOnPage,
//         counter: 0
//       }));
//     }
//   }

//   handleAddingNewTicketToList = (newTicket) => {
//     const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
//     this.setState({
//       masterTicketList: newMasterTicketList,
//       formVisibleOnPage: false
//     });
//   }

//   render() {
//     let currentlyVisibleState = null;
//     let buttonText = null;
//     if (this.state.counter == 0) {
//       currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList}/>
//       buttonText = "Add ticket!";
//     } else if (this.state.counter == 1) {
//       currentlyVisibleState = <Help />
//       buttonText = "Yes I've done the steps";
//     } else if (this.state.counter == 2) {
//       currentlyVisibleState = <Steps />
//       buttonText = "Help me";
//     } else if (this.state.counter == 3) {
//       currentlyVisibleState = <Fifteen />
//       buttonText = "Please, I've done it all";
//     } else if (this.state.counter == 4) {
//       currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
//       buttonText = "Return to List";
//     }

//     return (
//       <React.Fragment>
//         {currentlyVisibleState}
//         <button onClick={this.handleClick}>{buttonText}</button>
//       </React.Fragment>
//     );
//   }
// }

// export default TicketControl;