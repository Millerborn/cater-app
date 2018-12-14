import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <h3>
        Technology used
      </h3>
      <ul>
      <li>Node</li>
      <li>Express</li>
      <li>React</li>
      <li>Redux</li>
      <li>PostgreSQL</li>
      <li>Passport</li>
      <li>Stripe API</li>
      <li>Moment.js</li>
      <li>Slider</li>
      </ul>
    </div>
  </div>
);

export default AboutPage;
