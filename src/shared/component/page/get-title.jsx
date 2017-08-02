// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { APP_NAME } from '../../config'
import TitleButton from '../../container/title-button'
import MessageTitle from '../../container/message-title'

const GetTitlePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'This is a boiler plate that adds Styled Components and Helmet. This page gets a title from the database.'},
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <MessageTitle />
    <TitleButton />
  </div>

  export default GetTitlePage
