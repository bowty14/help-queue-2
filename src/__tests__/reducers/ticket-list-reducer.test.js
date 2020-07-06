import ticketListReducer from '../../reducers/ticket-list-reducer';

let action;
const currentState = {
  1: {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
    },
    2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2
    }
  };

  const ticketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  const updatedTicketData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Now everything is broken!!',
    id: 1,
  };
  
describe('ticketListReducer', () => {
  
  test('Should teturn default state if no action type is recongized', () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to masterTickerList', () => {
    const { names, location, issue, id } = ticketData;
    action ={
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id,
    };

    expect(ticketListReducer({}, action)).toEqual({
      1: {
        names: names,
        location: location,
        issue: issue,
        id: id,
      },
    });
  });

  test("Should update ticket data if key already exists using the same ADD_TICKET Reducer", () => {
    const { names, location, issue, id } = updatedTicketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id,
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id,
      },
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2}
    });
  });
});