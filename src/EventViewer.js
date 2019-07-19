import React from 'react';

class EventViewer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  showEventScreen(id) {
    const { showEventScreen } = this.props;
    showEventScreen(id);
  }

  render() {
    const { events } = this.props;
    return (
      <div className="event-list">
          <header>
            Events Viewer
          </header>
          <ul>
            {
              events.map((event) => {
                return (
                  <li key={ 'event-' + event.id }>
                    <button title="EventType 2" onClick={ this.showEventScreen.bind(this, event) }>{ event.name }</button>
                  </li>
                )
              })
            }           
          </ul>
        </div>
    )
  }
}

export default EventViewer;
