import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { Nav, Main }        from './uiComponents';

import { pages }            from './local.config';

class App extends Component {
  render() {
    const updatePageTitle = () => {
      document.title = `BDP | ${pages[this.props.router.location.pathname].display}`;
    };

    return (
      <div id="appContainer">
        {updatePageTitle()}
        <Nav />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { router } = state;
  return { ...ownProps, router };
};

export default connect(mapStateToProps)(App);
