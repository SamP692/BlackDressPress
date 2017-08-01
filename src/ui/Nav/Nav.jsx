import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { connect }          from 'react-redux';

import { navLinks }         from '../../local.config';

import './Nav.css';

class Nav extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const buildLinks = () => (
      Object.entries(navLinks).map(link => (
        <Link
          key={link[0]}
          to={link[1].location}
          className={
            this.props.router.location.pathname === link[1].location ?
              'selected' : null
          }
        >
          {link[1].display}
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
