import styled from 'styled-components'
import PaddedContainer from '../../atoms/PaddedContainer'
import { footerText } from '../../content/index.json'

const Container = styled.footer`
	background-color: ${(p) => p.theme.palette.primary};
	padding-top: 30px;
	padding-bottom: 30px;
`

const Text = styled.a`
	color: ${(p) => p.theme.palette.white};
	text-align: right;
	display: block;
	@media (max-width: 480px) {
		text-align: center;
	}
`

const Footer = () => (
	<Container>
		<PaddedContainer>
			<Text>{footerText}</Text>
		</PaddedContainer>
	</Container>
)

export default Footer
