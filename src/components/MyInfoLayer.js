import React from 'react';

import MyInfoLink from './MyInfoLink';
import MyInfoIntro from './MyInfoIntro';
import SingleExperience from './SingleExperience';

import css from '../styles/MyInfoLayer.scss';

import experience from '../data/experience';

const MyInfoLayer = () => (
  <div className='myinfolayer'>
    <div className='myinfomain'>
      <div className='namecard'>
        <img src="//odfk0q3d4.bkt.clouddn.com/images/logo.jpg"/>
        <div>
          <p>WENLIANG DAI</p>
          <p>FRONT-END DEVELOPER</p>
        </div>
      </div>
      <div className='links'>
        <MyInfoLink href="#" hoverColor='rgb(8, 187, 6)'>
          <i className="iconfont">&#xe600;</i>
        </MyInfoLink>
        <MyInfoLink href="http://weibo.com/1955089485/profile" hoverColor='rgb(233, 24, 51)'>
          <i className="iconfont">&#xe603;</i>
        </MyInfoLink>
        <MyInfoLink href="http://www.jianshu.com/users/c69c089e0e44/latest_articles" hoverColor='rgb(234, 140, 123)'>
          <i className="iconfont">&#xe605;</i>
        </MyInfoLink>
        <MyInfoLink href="http://www.linkedin.com/in/%E6%96%87%E4%BA%AE-%E6%88%B4-145116123" hoverColor='rgb(2, 130, 189)'>
          <i className="iconfont">&#xe604;</i>
        </MyInfoLink>
      </div>
    </div>

    <MyInfoIntro />

    <div className='myinfoexperience'>
      <header><i className="iconfont">&#xe607;</i></header>
      <div>
        {experience.map((exp, i) => (
          <SingleExperience {...exp} key={i} />
        ))}
      </div>
    </div>

  </div>
);

export default MyInfoLayer;
