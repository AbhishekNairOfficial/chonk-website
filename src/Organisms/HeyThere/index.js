import styled from 'styled-components'
import PaddedContainer from '../../atoms/PaddedContainer'
import SectionTitle from '../../atoms/SectionTitle'
import { heyThereTitle, heyThereBody } from '../../content/index.json'
import { MOBILE_WIDTH } from '../../constants'

const Container = styled(PaddedContainer)`
	background-color: ${(p) => p.theme.palette.secondary};
	padding-top: 50px;
	padding-bottom: 50px;
	display: flex;
	@media (max-width: ${MOBILE_WIDTH}) {
		flex-direction: column;
	}
`

const StyledSectionTitle = styled(SectionTitle)`
	flex: 1;
	white-space: pre-wrap;
	@media (max-width: ${MOBILE_WIDTH}) {
		white-space: nowrap;
	}
`

const Content = styled.div`
	flex: 2;
	font-size: 1.5em;
	line-height: 1.38;
	letter-spacing: normal;
	text-align: left;
	color: ${(p) => p.theme.palette.white};
	@media (max-width: ${MOBILE_WIDTH}) {
		line-height: 1.5;
		margin-top: 50px;
	}
`

const HeyThere = () => (
	<Container>
		<StyledSectionTitle>{heyThereTitle}</StyledSectionTitle>
		<Content>{heyThereBody}</Content>
	</Container>
)

export default HeyThere
