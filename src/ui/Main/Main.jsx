import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { pages, templates } from '../../local.config';

import './Main.css';

class Main extends Component {
  render() {
    const buildComponents = () => {
      const pageComponents = pages[this.props.router.location.pathname].components;
      const uiComponents = [];

      if (pageComponents) {
        for (let i = 0; i < Object.keys(pageComponents).length; i += 1) {
          const template = templates[pageComponents[i].template];

          const component = (
            <div key={i} className={pageComponents[i].template}>
              <div className={template.image}>
                <img alt="mainImg" src={pageComponents[i].image} />
              </div>
              <div className={template.text}>
                <p>{pageComponents[i].mainText}</p>
              </div>
              <div className={template.header}>
                <h1>{pageComponents[i].header}</h1>
              </div>
            </div>
          );

          uiComponents.push(component);
        }
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
