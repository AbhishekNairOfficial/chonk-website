import styled from 'styled-components'
import { friendsTitle, testimonials } from '../../content/index.json'
import Testmonial from '../../Molecules/Testimonial'
import { MOBILE_WIDTH } from '../../constants'

const Container = styled.div`
	flex: 2;
	padding: 50px 0 0 50px;
	@media (max-width: ${MOBILE_WIDTH}) {
		padding: 0;
		position: relative;
	}
`
const Title = styled.p`
	font-size: 1.8em;
	line-height: 1.25;
	letter-spacing: normal;
	text-align: left;
	margin: 0;
	margin-bottom: 30px;
	color: ${(p) => p.theme.palette.black};
`

const TestimonialContainer = styled.div`
	position: relative;
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 50% 50%;
	@media (max-width: ${MOBILE_WIDTH}) {
		grid-template-rows: auto;
		grid-template-columns: repeat(4, 1fr);
		width: 100vw;
		overflow-x: scroll;
		margin-left: -30px;
		padding: 30px 30px 50px 30px;
		position: static;
	}
`

const Circle = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -10vw;
	margin-top: -10vw;
	z-index: -1;
	height: 20vw;
	width: 20vw;
	border-radius: 20vw;
	background-color: ${(p) => p.theme.palette.primary};
	@media (max-width: ${MOBILE_WIDTH}) {
		left: -20vw;
		height: 40vw;
		width: 40vw;
	}
`

const FriendsSection = () => (
	<Container>
		<Title>{friendsTitle}</Title>
		<TestimonialContainer>
			<Circle />
			{testimonials.map((item, index) => (
				<Testmonial data={item} key={index} />
			))}
		</TestimonialContainer>
	</Container>
)

export default FriendsSection
