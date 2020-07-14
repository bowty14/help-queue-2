import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';




function TicketList(props){

  useFirestoreConnect([
    {collection: 'tickets'}
  ]);

  const tickets =  useSelector(state => state.firestore.ordered.tickets);

  if(isLoaded(tickets)) {
    return (
      <React.Fragment>
        <div className='ticketList'>
          {tickets.map((ticket) => { 
            return <Ticket 
              whenTicketClicked={props.onTicketSelection}
              names={ticket.names}
              location={ticket.location}
              issue={ticket.issue}
              formattedWaitTime={ticket.formattedWaitTime}
              id={ticket.id}
              key={ticket.id} />
            })}
          </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

// Add propTypes for ticketList.
TicketList.propTypes = {
  onTicketSelection: PropTypes.func
};

export default TicketList;