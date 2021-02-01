import styled from 'styled-components'
import SectionTitle from '../../atoms/SectionTitle'
import PaddedContainer from '../../atoms/PaddedContainer'
import { instagramTitle, instagramId } from '../../content/index.json'
import PicturesSection from '../../Molecules/PictureSection'

const Section = styled(PaddedContainer)`
	display: flex;
	padding-top: 50px;
	padding-bottom: 50px;
	& > div {
		flex: 1;
	}
	@media (max-width: 480px) {
		flex-direction: column;
	}
`

const InstagramId = styled.a`
	padding: 10px;
	border-radius: 6px;
	border: ${(p) => `solid 1px ${p.theme.palette.primary}`};
	background-color: ${(p) => p.theme.palette.secondary};
	color: ${(p) => p.theme.palette.white};
	margin-top: 50px;
	font-size: 1.2em;
	font-weight: 500;
	display: inline-block;
	cursor: pointer;
	@media (max-width: 480px) {
		margin-top: 20px;
		margin-bottom: 30px;
	}
	text-decoration: none;
`

const InstagramSection = () => {
	return (
		<Section>
			<div>
				<SectionTitle dark>{instagramTitle}</SectionTitle>
				<InstagramId
					href='https://www.instagram.com/ofwheelsandwords'
					target='_blank'>
					{instagramId}
				</InstagramId>
			</div>
			<PicturesSection />
		</Section>
	)
}

export default InstagramSection
