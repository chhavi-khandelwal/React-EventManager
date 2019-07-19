import React from 'react';
import EventViewer from './EventViewer';
import TabManager from './TabManager';


class EventManager extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.events = this.props.events;
    this.openedTabIds = [(this.events[0] && this.events[0].id)];
    this.state = {
      openedTabs: [ this.events[0] ] || [],
      focussedTab: {
        id: this.events[0] && this.events[0].id,
        data: (this.events[0] && this.events[0].data) || {
          timestamp: '',
          raw: '' 
        }
      }
    }
  }

  showEventScreen(event) {
    //return if tab is already opened
    if (this.openedTabIds.indexOf(event.id) >= 0) { return; }
    this.openedTabIds.push(event.id);
    //update focussed tab to the one clicked after updating state of opened tabs
    this.setState({ openedTabs: [ ...this.state.openedTabs, ...[ event ] ] }, () => this.updateFocussedTab(event));
  }

  updateFocussedTab(event) {
    this.setState({ focussedTab: { id: event.id, data: event.data } });
  }

  closeTab(id) {
    const tabIds = this.openedTabIds;
    let changeFocus = false;
    let positionInOpenedtabs;

    //donot close if only one tab is left
    if (tabIds.length === 1) { return; }

    //flag: if focussed tab is closed, focus its previous tab after closing
    if (this.state.focussedTab.id === id) {
      changeFocus = true;
    }
    const currentPosition = this.openedTabIds.indexOf(id);
    this.openedTabIds.splice(currentPosition, 1);

    //find position of closed tab in collection
    for (let i = 0; i < this.state.openedTabs.length; i++) {
      if (this.state.openedTabs[i].id === id) {
        positionInOpenedtabs = i;
        break;
      }
    }
    let tabs = this.state.openedTabs;
    tabs.splice(positionInOpenedtabs, 1);
    //only update focussed tab, if the same has been closed
    this.setState({ openedTabs: tabs  }, () => changeFocus && this.updateFocussedTab(this.state.openedTabs[positionInOpenedtabs - 1]));
  }

  render() {
    return (
      <div className="manager-container">
        <EventViewer events = {this.events} showEventScreen = { this.showEventScreen.bind(this) }></EventViewer>
        <TabManager 
          openedTabs = { this.state.openedTabs }
          focussedTab = { this.state.focussedTab }
          updateFocussedTab = { this.updateFocussedTab.bind(this) }
          showEventScreen = { this.showEventScreen.bind(this) }
          closeTab={ this.closeTab.bind(this) }></TabManager>
      </div>
    )
  }
}

export default EventManager;
