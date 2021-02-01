import styled from 'styled-components'
import PaddedContainer from '../../atoms/PaddedContainer'
import SubtitleText from '../../atoms/SubTitleText'
import WrittenTextComponent from '../../atoms/WrittenText'
import { title, pandaPhotoLink } from '../../content/index.json'
import { MOBILE_WIDTH } from '../../constants'
import SCROLL_IMAGE from '../../images/scroll-logo.png'

const Container = styled(PaddedContainer)`
	height: 100vh;
	width: 100vw;
	padding-top: 100px;
	padding-bottom: 20px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media (max-width: ${MOBILE_WIDTH}) {
		height: ${window.innerHeight + 'px'};
		padding-top: 50px;
	}
`

const TitleText = styled.h1`
	font-family: ${(p) => p.theme.fonts.primary};
	color: ${(p) => p.theme.palette.black};
	font-size: 7em;
	line-height: 1.33;
	margin: 0;
	text-align: left;
	@media (max-width: ${MOBILE_WIDTH}) {
		font-size: 3.5em;
		/* To prevent full name in one line */
		max-width: 80vw;
		margin-bottom: 15px;
	}
`

const ScrollImage = styled.img`
	height: 40px;
	width: 40px;
	align-self: center;
	position: relative;
	animation: mymove 0.5s infinite;
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
const LENGTH = title.length - 1 //panda :(

const BannerSection = () => {
	const onTextClick = (index) => {
		if (index === LENGTH - 1) {
			// Stupid way to click on the panda
			window.open(pandaPhotoLink)
		}
	}

	return (
		<Container>
			<div>
				<TitleText>
					{[...title].map((letter, i) => (
						<span key={i} onClick={() => onTextClick(i)}>
							{letter}
						</span>
					))}
				</TitleText>
				<SubtitleText />
			</div>
			<WrittenTextComponent />
			<ScrollImage src={SCROLL_IMAGE} alt='scroll' />
		</Container>
	)
}

export default BannerSection
