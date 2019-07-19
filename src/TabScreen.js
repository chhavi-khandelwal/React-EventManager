import React from 'react';

class TabScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  render() {
    const { screenData } = this.props;
    return (
      <div className="screen">
        <ul>
          { 
            screenData.map((data, id) => {
              return (
                <li key={ id }>
                  <div className="timestamp">
                    <div>
                      timestamp
                    </div>
                    <div>
                      { data.timestamp }
                    </div>
                  </div>
                  <div className="rawdata">
                    <div>
                      _raw
                    </div>
                    <div>
                      { data.raw }
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TabScreen;
