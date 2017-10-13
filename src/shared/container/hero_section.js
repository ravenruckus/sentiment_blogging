// @flow

import { connect } from 'react-redux'
import HeroSection from '../component/hero_section'

const mapStateToProps = () => ({
  mainHeadingText: 'Sentiment Blogging',
  mainHeadingColor: 'hsl(305, 30%, 30%)',
  p1Text: 'Which Emotions Do Your Posts Create?',
  p2Color: 'hsl(0, 0%, 10%)',
  buttonColor: '#fff',
  buttonLabel: 'Discover Now',
  buttonBackgroundColor: 'hsl(305, 30%, 30%)',
  buttonBorderColor: 'hsl(0, 0%, 20%)',
})

export default connect(mapStateToProps)(HeroSection)
