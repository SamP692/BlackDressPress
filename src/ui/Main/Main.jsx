import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { pages }            from '../../local.config';

class Main extends Component {
  render() {
    const buildComponents = () => {
      const pageComponents = pages[this.props.router.location.pathname].components;
      const uiComponents = [];

      for (let i = 0; i < Object.keys(pageComponents).length; i += 1) {
        const component = (
          <div className={pageComponents[i].template}>stuff</div>
        );

        uiComponents.push(component);
      }

      return uiComponents;
    };

    return (
      <div id="mainContainer">
        hello
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { router, uiComponents } = state;
  return { ...ownProps, router, uiComponents };
};

export default connect(mapStateToProps)(Main);
