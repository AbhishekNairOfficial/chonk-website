import styled from 'styled-components'
import PaddedContainer from '../../atoms/PaddedContainer'
import { footerText } from '../../content/index.json'
import { MOBILE_WIDTH } from '../../constants'

const Container = styled.footer`
	background-color: ${(p) => p.theme.palette.primary};
	padding-top: 30px;
	padding-bottom: 30px;
`

const Text = styled.a`
	color: ${(p) => p.theme.palette.white};
	text-align: right;
	display: block;
	text-decoration: none;
	@media (max-width: ${MOBILE_WIDTH}) {
		text-align: center;
	}
`

const Footer = () => (
	<Container>
		<PaddedContainer>
			<Text href='https://abhisheknairofficial.com' target='_blank'>
				{footerText}
			</Text>
		</PaddedContainer>
	</Container>
)

export default Footer
