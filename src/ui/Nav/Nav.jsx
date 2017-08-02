import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { connect }          from 'react-redux';

import { pages }            from '../../local.config';

import './Nav.css';

class Nav extends Component {
  render() {
    const buildLinks = () => (
      Object.entries(pages).map(page => (
        <Link
          key={page[0]}
          to={page[1].location}
          className={
            this.props.router.location.pathname === page[1].location ?
              'selected' : null
          }
        >
          {page[1].display}
        </Link>
      ))
    );

    return (
      <div id="navContainer">
        <img alt="logo" src="./bdpLogo.gif" />
        <div id="linksContainer">{buildLinks()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { router } = state;
  return { ...ownProps, router };
};

export default connect(mapStateToProps)(Nav);
