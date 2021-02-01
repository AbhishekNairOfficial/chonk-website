import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import { writtenText } from '../../content/index.json'
import { MOBILE_WIDTH } from '../../constants'

const WrittenText = styled.div`
	font-size: 4em;
	line-height: 1.25;
	color: ${(p) => p.theme.palette.black};
	text-align: left;
	white-space: pre-wrap;
	@media (max-width: ${MOBILE_WIDTH}) {
		font-size: 2.5em;
	}
`

const WrittenTextComponent = () => {
	return (
		<WrittenText>
			<Typewriter
				onInit={(typewriter) => {
					typewriter.pauseFor(2500).typeString(writtenText).start()
				}}
			/>
		</WrittenText>
	)
}

export default WrittenTextComponent
