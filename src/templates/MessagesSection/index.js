import styled from 'styled-components'
import PaddedContainer from '../../atoms/PaddedContainer'
import FriendsSection from '../../Organisms/FriendsSection'
import SlideIntoDm from '../../Organisms/SlideIntoDM'

const StyledPaddedContainer = styled(PaddedContainer)`
	padding-top: 50px;
	display: flex;
	@media (max-width: 480px) {
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
