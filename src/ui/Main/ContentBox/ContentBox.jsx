// @flow
import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { pages, templates } from '../../../local.config';

import './styles.css';

class ContentBox extends Component {
  render() {
    const hydrateContentBox = () => {
      const pageComponents = pages[this.props.router.location.pathname].components;

      const componentNumber: string = this.props.componentNumber;

      const template = templates[pageComponents[componentNumber].template];

      const convertTextToHTML = { __html: pageComponents[componentNumber].text };
      const componentElements = {
        image: <img alt="mainImg" src={pageComponents[componentNumber].image} />,
        text: <p dangerouslySetInnerHTML={convertTextToHTML} />,
        header: <h1>{pageComponents[componentNumber].header}</h1>,
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

      return (
        <div key={componentNumber} className={`mainContainer ${pageComponents[componentNumber].color}`}>
          {buildElement(template.type === 'grid' ? 'left' : 'top')}
          {buildElement(template.type === 'grid' ? 'right' : 'middle')}
          {buildElement('bottom')}
        </div>
      );
    };

    return (
      <div>
        {hydrateContentBox()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { router, uiComponents } = state;
  return { ...ownProps, router, uiComponents };
};

export default connect(mapStateToProps)(ContentBox);
