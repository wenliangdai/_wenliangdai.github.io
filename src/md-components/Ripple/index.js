import React from 'react';
import ReactDOM from 'react-dom';

import css from './ripple.scss';

const Ripple = React.createClass ({
  render() {
    const rect = this.props.target.getBoundingClientRect();
    const length = Math.max(rect.height, rect.width);
    const style = {
      position: 'absolute',
      transition: 'all 450ms ease-out',
      transform: 'scale(0)',
      borderRadius: '100%',
      pointerEvents: 'none',
      width: length + 'px',
      height: length + 'px',
      left: (this.props.pageX - length / 2 - rect.left) + 'px',
      top: (this.props.pageY - length / 2 - rect.top) + 'px',
      backgroundColor: this.props.type === 'dark' ? 'rgba(0, 0, 0, .36)' : 'rgba(255, 255, 255, .4)',
    };

    return (
      <span
        style={style}
        className='ripple-show'
      ></span>
    );
  },

  componentDidMount() {
    window.setTimeout(() => {
      ReactDOM.unmountComponentAtNode(this.props.target);
    }, 450);
  }
});

export default Ripple;
