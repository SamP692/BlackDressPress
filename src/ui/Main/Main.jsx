import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { pages }            from '../../local.config';

class Main extends Component {
  render() {
    const buildComponents = () => {
      const pageComponents = pages[this.props.router.location.pathname].components;
      const uiComponents = [];

      if (!pageComponents) return;

      for (let i = 0; i < Object.keys(pageComponents).length; i += 1) {
        const component = (
          <div key={i} className={pageComponents[i].template}>
            <img alt="mainImg" src={pageComponents[i].image} />
            <p>{pageComponents[i].mainText}</p>
            <h1>{pageComponents[i].header}</h1>
          </div>
        );

        uiComponents.push(component);
      }

      return uiComponents;
    };

    return (
      <div id="mainContainer">
        {buildComponents()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { router, uiComponents } = state;
  return { ...ownProps, router, uiComponents };
};

export default connect(mapStateToProps)(Main);
