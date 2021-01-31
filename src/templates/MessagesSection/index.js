import styled from 'styled-components'
import PaddedContainer from '../../atoms/PaddedContainer'
import FriendsSection from '../../Organisms/FriendsSection'
import SlideIntoDm from '../../Organisms/SlideIntoDM'

const StyledPaddedContainer = styled(PaddedContainer)`
	padding-top: 50px;
	display: flex;
`

const MessagesSection = () => (
	<StyledPaddedContainer>
		<SlideIntoDm />
		<FriendsSection />
	</StyledPaddedContainer>
)

export default MessagesSection
