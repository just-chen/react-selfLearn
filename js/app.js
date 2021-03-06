import React, { Component, PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import TabPane from './TabPane';

class App extends Component {
  constructor(props) {
    super(props);12

    this.state = {
      activeIndex: 0,
    };
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
          <TabPane order="0" tab={'Tab 1'}>第一个 Tab 里的内容1</TabPane>
          <TabPane order="1" tab={'Tab 2'}>第二个 Tab 里的内容</TabPane>
          <TabPane order="2" tab={'Tab 3'}>第三个 Tab 里的内容</TabPane>
          <div>
            1
          </div>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
