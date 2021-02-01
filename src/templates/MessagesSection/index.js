import styled from 'styled-components'
import PaddedContainer from '../../atoms/PaddedContainer'
import FriendsSection from '../../Organisms/FriendsSection'
import SlideIntoDm from '../../Organisms/SlideIntoDM'
import { MOBILE_WIDTH } from '../../constants'

const StyledPaddedContainer = styled(PaddedContainer)`
	padding-top: 50px;
	display: flex;
	@media (max-width: ${MOBILE_WIDTH}) {
		flex-direction: column-reverse;
	}
`

const MessagesSection = () => (
	<StyledPaddedContainer>
		<SlideIntoDm />
		<FriendsSection />
	</StyledPaddedContainer>
)

export default MessagesSection
