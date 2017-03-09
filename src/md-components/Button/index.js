import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Ripple from '../Ripple';

// import stylesheets
import style from './button.scss';

export const Button = React.createClass ({
  getDefaultProps() {
    return {
      type: 'default'
    }
  },

  onClickCreateRipple(e) {
    const target = e.target;
    const rect = target.getBoundingClientRect();
    const type = this.props.type === 'default' ? 'dark' : 'light';
    ReactDOM.render(
      <Ripple
        target={target}
        pageX={e.pageX}
        pageY={e.pageY}
        type={type}
      />,
      target
    );
  },

  render() {
    return (
      <button
        className={'md-btn btn-' + this.props.type}
        style={this.props.style}
        onClick={this.props.onClick}
        onMouseDown={(e) => {
          e.preventDefault();
          this.onClickCreateRipple(e);
          e.target.style.boxShadow = 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';
        }}
        onMouseUp={(e) => {
          e.preventDefault();
          e.target.style.boxShadow = 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px';
        }}
      >
        <span></span>
        {this.props.children}
      </button>
    );
  }
});
