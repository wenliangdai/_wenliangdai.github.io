import React from 'react';
import ReactDOM from 'react-dom';

import Ripple from '../md-components/Ripple';

import css from '../styles/MyInfoLink.scss';

const MyInfoLink = React.createClass({
  render() {
    return (
      <a
        className='myinfolink'
        href={this.props.href || '#'}
        target="_blank"
        onMouseOver={(e) => {
          e.preventDefault();
          e.target.style.color = this.props.hoverColor;
        }}
        onMouseOut={(e) => {
          e.preventDefault();
          e.target.style.color = 'rgba(255, 255, 255, .8)';
        }}
      >
        {this.props.children}
      </a>
    );
  }
});

export default MyInfoLink;
