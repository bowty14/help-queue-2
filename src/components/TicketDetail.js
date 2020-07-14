import React from "react";
import PropTypes from "prop-types"

function TicketDetail(props) {
  const { ticket, onClickingDelete } = props;
  
  return (
    <React.Fragment> 
      <div className='detail'>
        <h1>Ticket Detail</h1>
        <h3>{ticket.location} - {ticket.names}</h3>
        <p><em>{ticket.issue}</em></p>
        <button onClick={props.onClickingEdit}>Update Ticket</button>
        <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      </div>
      </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickEdit: PropTypes.func
};

export default TicketDetail;