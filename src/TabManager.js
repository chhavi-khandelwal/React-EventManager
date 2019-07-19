import React from 'react';
import TabScreen from './TabScreen';

class TabManager extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  showEventScreen(tab) {
    this.props.updateFocussedTab(tab);
  }

  closeTab(e, id) {
    this.props.closeTab(e, id);
  }

  render() {
    const { openedTabs } = this.props;
    return (
      <div className="tab-manager">
          <header>
            {
              openedTabs.map((tab, id) => {
                return (
                  <div className="tab" key={ id }>
                    <button onClick={ this.showEventScreen.bind(this, tab) }>{ tab.name }
                      <span onClick={ (e) => this.closeTab.bind(this, e, tab.id)() }>x</span>
                    </button>
                  </div>
                )
              })
            }
          </header>
          <div className="content-manager">
            <TabScreen
              screenData = { this.props.focussedTab.data }></TabScreen>
          </div>
        </div>
    )
  }
}

export default TabManager;
