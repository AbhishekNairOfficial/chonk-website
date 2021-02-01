import styled from 'styled-components'

import { MOBILE_WIDTH } from '../../constants'

const PaddedContainer = styled.div`
	padding: 0 10vw;
	@media (max-width: ${MOBILE_WIDTH}) {
		padding: 0 30px;
	}
`

export default PaddedContainer
