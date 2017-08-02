// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Boiler Plate that adds Styled Components and Helmet' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <p>Home - Add Styled Components & Helmet</p>
  </div>

export default HomePage
