import React from 'react';

import css from '../styles/SingleExperience.scss';

const SingleExperience = ({
  position,
  company,
  from,
  to,
  length,
  details,
  tags,
  image
}) => (
  <section className='experience'>
    <div>
      <div>
        <img src={image} />
      </div>
      <div>
        <p>{position}</p>
        <p>{company}</p>
        <p>{from} - {to}</p>
      </div>
    </div>
    <footer>
      {tags.map((tag, i) => (
        <span key={i}>
          #{tag}
        </span>
      ))}
    </footer>
  </section>
);

export default SingleExperience;
