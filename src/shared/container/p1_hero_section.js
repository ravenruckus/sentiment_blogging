// @flow

import { connect } from 'react-redux'
import Paragraph from '../component/paragraph'

// mapStateToProps takes a second argument that gives access to the props
const mapStateToProps = (state, ownProps ) => ({
  pText: 'Welcome to this Website',
  pFontSize: ownProps.p1FontSize,
  pTextAlign: 'center',
  pColor: 'hsl(0, 0%, 50%)',
})

export default connect(mapStateToProps)(Paragraph)
