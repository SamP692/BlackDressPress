// @flow
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { push }             from 'react-router-redux';

import { Nav, Main }        from './uiComponents';

import { pages }            from './local.config';

class App extends Component {
  render() {
    const updatePageTitle = () => {
      if (pages[this.props.router.location.pathname]) {
        document.title = `${pages[this.props.router.location.pathname].webTitle || 'BDP'}`;
      } else {
        this.props.dispatch(push('/'));
      }
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
