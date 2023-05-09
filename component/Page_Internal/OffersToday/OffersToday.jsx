import { useEffect, useState } from "react"

const Item = ({ image = "", alt, url, title, amp }) => {
	
	if(!title || !url || !image) return null;

	return (
		<>
			<div className='card-offer'>
				<figure style={{margin: 0}}>
					{
						amp ? 
						<amp-img src={image}
							alt={alt}
							width="120"
							height="71"
						/> : 
						<img
							loading="lazy"
							width="120"
							height="80"
							src={image}
							alt={alt}
							className='card-offer__image'
						/>
						}
				</figure>
				<h2 className='description'>
					<a href={url} target='_blank' rel='noopener noreferrer'>
						{title}
					</a>
				</h2>
			</div>

			<style jsx>{`
				.card-offer {
					display: flex;
					gap: 6px;
					align-items: center;
					margin-bottom: 8px;
				}
				.card-offer .description {
					font-size: 1.2rem;
				}
				.card-offer__image {
					display: block;
					min-width: 120px;
					min-height: 80px;
					width: 120px;
					height: 80px;
					border: 1pz solid gray;
					border-radius: 5px;
				}
			`}</style>
		</>
	)
}

const OffersToday = ({ offersToday, shuffle, amp }) => {
	const urlImage = (url = '') => {
		const position = url.indexOf('cuponidad')
		const part_01 = url.substring(0, position)
		const part_02 = url.substring(position, url.length)
		return `${part_01}cdn.${part_02}`
	}

	const [arrOffers, setArrOffers] = useState([])
	let AmpArrOffers = []

	useEffect(() => {
		if (offersToday.length > 0 && !amp) {
			setArrOffers(offersToday)
		}
		if (shuffle && !amp) {
			setArrOffers(
				offersToday.sort(() => Math.random() - 0.5).slice(0, 1)
			)
		}
	}, [offersToday])

	if (amp) {
		AmpArrOffers = offersToday.sort(() => Math.random() - 0.5).slice(0, 1)
	} 

	let dataOffers = amp ? AmpArrOffers : arrOffers

	return (
		<>
			<h3 className='title-offers'>OFERTAS DE HOY</h3>
				<div className='offersList'>
					{
						dataOffers.length > 0 && dataOffers.map((offer, index) => {
							return (
								<Item image={urlImage(offer?.image)} alt={offer?.merchantName} url={offer?.url} title={offer?.title} amp={amp} key={index} />
							)
						}) 
					}
				</div>
			<style jsx>{`
				.title-offers {
					font-size: 1.6rem;
					color: #333;
					background-color: #eee;
					padding: 0.8rem 0;
					text-align: center;
					border-top: 1px solid gray;
					border-bottom: 1px solid gray;
					margin-top: 8px;
				}
				.offersList {
					margin-top: 8px;
				}
			`}</style>
		</>
	)
}
export { OffersToday }
