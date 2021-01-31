import styled from 'styled-components'

import { subtitle } from '../../content/index.json'

const Text = styled.h2`
	font-family: ${(p) => p.theme.fonts.secondary};
	font-size: 1.5em;
	line-height: 1.25;
	letter-spacing: 1px;
	color: ${(p) => p.theme.palette.black};
	margin: 0;
	display: inline;
	@media (max-width: 480px) {
		font-size: 1.2em;
	}
`

const Wrapper = styled.div`
	position: relative;
	display: inline;
	margin-top: 1em;
`

const Circle = styled.div`
	height: 5em;
	width: 5em;
	border-radius: 5em;
	background-color: ${(p) => p.theme.palette.primary};
	position: absolute;
	right: 0;
	top: -2em;
	z-index: -1;
	@media (max-width: 480px) {
		height: 4em;
		width: 4em;
		top: -1.5em;
	}
`

const SubtitleText = () => (
	<Wrapper>
		<Text>{subtitle}</Text>
		<Circle></Circle>
	</Wrapper>
)

export default SubtitleText
