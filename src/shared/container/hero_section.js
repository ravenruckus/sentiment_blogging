// @flow

import { connect } from 'react-redux'
import HeroSection from '../component/hero_section'

const mapStateToProps = () => ({
  mainHeadingColor: 'hsl(220, 35%, 75%)',
  mainHeadingText: 'This is a Main Heading!',
  p1Text: 'This is the Second Paragraph',
  p1Color: '#fff',
  p2Text: 'This is the Third Paragraph',
  p2Color: 'hsl(0, 0%, 20%)'
})

export default connect(mapStateToProps)(HeroSection)
