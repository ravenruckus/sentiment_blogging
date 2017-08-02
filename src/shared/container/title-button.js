// @flow

import { connect } from 'react-redux'

import { titleAsync } from '../action/posts'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Get Title',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(titleAsync()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
