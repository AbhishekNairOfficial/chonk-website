import styled from 'styled-components'

import { MOBILE_WIDTH } from '../../constants'

const SectionTitle = styled.p`
	font-family: ${(p) => p.theme.fonts.primary};
	font-size: 3em;
	text-align: left;
	margin: 0;
	max-width: 30vw;
	color: ${(p) => (p.dark ? p.theme.palette.black : p.theme.palette.white)};
	@media (max-width: ${MOBILE_WIDTH}) {
		font-size: 2.5em;
		max-width: 80vw;
	}
`
export default SectionTitle
