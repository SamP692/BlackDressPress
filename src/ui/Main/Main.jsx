import React, { Component } from 'react';
import { connect }          from 'react-redux';

import ContentBox           from './ContentBox/ContentBox';

import { pages }            from '../../local.config';

class Main extends Component {
  render() {
    const buildContentBoxes = () => {
      const pageComponents = pages[this.props.router.location.pathname].components;
      const contentBoxes: Component[] = [];
      if (pageComponents) {
        for (let i: number = 0; i < Object.keys(pageComponents).length; i += 1) {
          contentBoxes.push(<ContentBox componentNumber={i} />);
        }
      }
      return contentBoxes;
    };

    return (
      <div>
        {buildContentBoxes()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { router, uiComponents } = state;
  return { ...ownProps, router, uiComponents };
};

export default connect(mapStateToProps)(Main);
