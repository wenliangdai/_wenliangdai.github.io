import React from 'react';

import css from '../styles/BaseLayer.scss';

const BaseLayer = React.createClass({
  render() {
    return (
      <div className='baselayer'>
        <div className='baselayer-cover'></div>
      </div>
    );
  }
});

export default BaseLayer;
