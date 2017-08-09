import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { pages, templates } from '../../local.config';

import './Main.css';
import './backgroundColors.css';

class Main extends Component {
  render() {
    const buildComponents = () => {
      const pageComponents = pages[this.props.router.location.pathname].components;
      const uiComponents = [];

      if (pageComponents) {
        for (let i = 0; i < Object.keys(pageComponents).length; i += 1) {
          const template = templates[pageComponents[i].template];

          const convertTextToHTML = { __html: pageComponents[i].text };
          const componentElements = {
            image: <img alt="mainImg" src={pageComponents[i].image} />,
            text: <p dangerouslySetInnerHTML={convertTextToHTML} />,
            header: <h1>{pageComponents[i].header}</h1>,
          };

          const buildElement = location => (
            template[location] ?
              <div className={location === 'bottom' ?
                `${location} ${template.bottomAlign === 'left' ? 'bottomLeft' : 'bottomRight'}` : 
                location}
              >
                {componentElements[template[location]]}
              </div> :
              null
          );

          const component = (
            <div key={i} className={`mainContainer ${pageComponents[i].color}`}>
              {buildElement('left')}
              {buildElement('right')}
              {buildElement('bottom')}
            </div>
          );

          uiComponents.push(component);
        }
      }

      return uiComponents;
    };

    return (
      <div>
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
