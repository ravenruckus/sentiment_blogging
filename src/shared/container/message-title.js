// @flow

import { connect } from 'react-redux'

import Title from '../component/message'

const mapStateToProps = state => ({
  message: state.posts.get('title'),
})

export default connect(mapStateToProps)(Title)
