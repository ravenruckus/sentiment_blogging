// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'
import HeroSection from '../../container/hero_section'

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Boiler Plate that adds Styled Components and Helmet' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <HeroSection />
  </div>

export default HomePage
