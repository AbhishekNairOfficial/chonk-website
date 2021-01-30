import styled from 'styled-components'
import PaddedContainer from '../../atoms/PaddedContainer'
import WrittenTextComponent from '../../atoms/WrittenText'
import { title, subtitle } from '../../content/index.json'
import SCROLL_IMAGE from '../../images/scroll-logo.png'

const Container = styled(PaddedContainer)`
	height: 100vh;
	width: 100vw;
	padding-top: 100px;
	padding-bottom: 20px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`

const TitleText = styled.h1`
	font-family: ${(p) => p.theme.fonts.primary};
	color: ${(p) => p.theme.palette.black};
	font-size: 7em;
	line-height: 1.33;
	margin: 0;
	text-align: left;
`

const SubTitleText = styled.h2`
	font-family: ${(p) => p.theme.fonts.secondary};
	font-size: 1.5em;
	line-height: 1.25;
	color: ${(p) => p.theme.palette.black};
	margin: 0;
`
const ScrollImage = styled.img`
	height: 40px;
	width: 40px;
	align-self: center;
	position: relative;
	animation: mymove 1s infinite;
	animation-direction: alternate;
	@keyframes mymove {
		from {
			top: 0px;
		}
		to {
			top: -10px;
		}
	}
`

const BannerSection = () => (
	<Container>
		<div>
			<TitleText>{title}</TitleText>
			<SubTitleText>{subtitle}</SubTitleText>
		</div>
		<WrittenTextComponent />
		<ScrollImage src={SCROLL_IMAGE} alt='scroll' />
	</Container>
)

export default BannerSection
