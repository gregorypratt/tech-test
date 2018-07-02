import actions from '../actions';

export default ({ dispatch, selectedEvent: { event } }) => {
  const onMessage = ({ data }) => {
    if (data === '"Welcome to the push service"') {
      return w.send(JSON.stringify({ type: 'subscribe', keys: [`e.${event.eventId}`] }));
    }

    dispatch(actions.socketMessage(JSON.parse(data)));
  };

  const w = new WebSocket("ws://localhost:8889");

  w.addEventListener('message', (e) => onMessage(e));
};