import PropTypes from 'prop-types'
import {StyledTextMessage} from './textMessage.styles'

const TextMessage = ({children}) => {
  return <StyledTextMessage>{children}</StyledTextMessage>
}

TextMessage.propTypes = {
  children: PropTypes.string.isRequired,
}

export default TextMessage