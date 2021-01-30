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
`

const InstagramId = styled.a``

const InstagramSection = () => {
	return (
		<Section>
			<div>
				<SectionTitle dark>{instagramTitle}</SectionTitle>
				<InstagramId>{instagramId}</InstagramId>
			</div>
			<PicturesSection />
		</Section>
	)
}

export default InstagramSection
