import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

import { writtenText } from '../../content/index.json'

const WrittenText = styled.div`
	font-size: 4em;
	line-height: 1.25;
	color: ${(p) => p.theme.palette.black};
	text-align: left;
	white-space: pre-wrap;
`

const WrittenTextComponent = () => {
	return (
		<WrittenText>
			<Typewriter
				onInit={(typewriter) => {
					typewriter.typeString(writtenText).pauseFor(2500).start()
				}}
			/>
		</WrittenText>
	)
}

export default WrittenTextComponent
