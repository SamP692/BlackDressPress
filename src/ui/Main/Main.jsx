import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { pages }            from '../../local.config';

class Main extends Component {
  render() {
    const buildComponents = () => {

    };

    return (
      <div id="mainContainer">
        hello
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { router } = state;
  return { ...ownProps, router };
};

export default connect(mapStateToProps)(Main);
