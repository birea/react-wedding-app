// Hotels Array
// February 18, 2018

const hotelsArray = [
	{
		name: 'AirBNB - Village of Los Ranchos',
		img: '/images/AirBNB.jpg',
		url: 'http://bit.ly/2H3WkrD',
		address1: 'Entire homes or private rooms to rent',
		address2: 'Los Ranchos, NM 87114',
		phone: '',
		distance: '1.0 - 3.0 miles',
		note1: 'Enjoy the peace and tranquility of the Village',
		note2: '$45 - $150/night'
	},
	{
		name: 'Los Poblanos Historic Inn & Organic Farm',
		img: '/images/LosPoblanos.jpg',
		url: 'http://www.lospoblanos.com/',
		address1: '4803 Rio Grande Blvd NW',
		address2: 'Los Ranchos, NM 87107',
		phone: '505-344-9297',
		distance: '2.3 miles',
		note1: 'Acclaimed inn, farm, and lavender field on a bucolic 25-acre property',
		note2: '$440+/night'
	},
	{
		name: 'Marriott Pyramid',
		img: '/images/MarriottPyramid.jpg',
		url: 'http://bit.ly/19Swcb8',
		address1: '5151 San Francisco Rd. NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-821-3333',
		distance: '4.0 miles',
		note1: 'Quick access to I-25 and Paseo del Norte; next to NM\'s only Cabela\'s',
		note2: '$129+/night'
	},
	{
		name: 'Courtyard Albuquerque',
		img: '/images/CourtyardMarriott.jpg',
		url: 'http://bit.ly/2GLve8H',
		address1: '5151 Journal Center Blvd. NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-823-1919',
		distance: '4.0 miles',
		note1: 'Quick access to I-25 and Paseo del Norte; next to NM\'s only Cabela\'s',
		note2: '$165+/night'
	},

	{
		name: 'Staybridge Suites North',
		img: '/images/StaybridgeSuites.jpg',
		url: 'http://bit.ly/2BV9ELa',
		address1: '5817 Signal Ave. NE',
		address2: 'Albuquerque, NM 87113',
		phone: '505-266-7829',
		distance: '4.7 miles',
		note1: 'Easy access to I-25, Paseo del Norte, and Sandia Casino',
		note2: '$140+/night'
	},
	{
		name: 'Drury Inn & Suites North',
		img: '/images/DruryInn.jpg',
		url: 'http://bit.ly/2Cc0qdB',
		address1: '4310 The 25 Way NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-341-3600',
		distance: '5.1 miles',
		note1: 'Convenient access to I-25, restaurants, and movie theater',
		note2: '$120+/night'
	},
	{
		name: 'Nativo Lodge',
		img: 'images/NativoLodge.jpg',
		url: 'http://www.nativolodge.com/',
		address1: '6000 Pan American Freeway NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-798-4300',
		distance: '5.2 miles',
		note1: 'Economical, Indian-themed rooms close to I-25 and restaurants',
		note2: '$95+/night'
	},
	{
		name: 'Hampton Inn & Suites',
		img: '/images/HamptonInn.jpg',
		url: 'http://bit.ly/2vlO448',
		address1: '4412 The 25 Way NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-345-4501',
		distance: '5.3 miles',
		note1: 'Convenient access to I-25, restaurants, and movie theater',
		note2: '$149+/night'
	},
	{
		name: 'Fairfield Inn & Suites - North',
		img: '/images/FairfieldInnNorth.jpg',
		url: 'http://bit.ly/2CtkfNW',
		address1: '4875 Pan American West Freeway NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-344-1574',
		distance: '5.7 miles',
		note1: 'Great location for restaurants, next to Century Rio 24 movie theater',
		note2: '$143+/night'
	},
	{
		name: 'Hotel Chaco',
		img: '/images/HotelChaco.jpg',
		url: 'https://www.hotelchaco.com/',
		address1: '2000 Bellamah Ave NW',
		address2: 'Albuquerque, NM 87104',
		phone: '505-246-9989',
		distance: '5.8 miles',
		note1: 'Chic, new, and hip; a short walk to Old Town',
		note2: '$200+/night' 
	},
	{
		name: 'Hotel Albuquerque at Old Town',
		img: '/images/HotelAbq.jpg',
		url: 'https://www.hotelabq.com/',
		address1: '800 Rio Grande Blvd. NW',
		address2: 'Albuquerque, NM 87104',
		phone: '505-843-6300',
		distance: '5.8 miles',
		note1: 'Large, established and well-regarded hotel next to Old Town',
		note2: '$160+/night' 
	},
	{
		name: 'Sandia Resort & Casino',
		img: '/images/SandiaCasino.jpg',
		url: 'http://www.sandiacasino.com/hotel/',
		address1: '30 Rainbow Rd. NE',
		address2: 'Albuquerque, NM 87113',
		phone: '505-796-7500',
		distance: '6.3 miles',
		note1: 'Casino, golf, spa, and fine dining',
		note2: '$249+/night; limited availability Fri (4/27), Sat (4/28), and Sun (4/29)' 
	},
	{
		name: 'Best Western Plus Executive Suites',
		img: '/images/BestWestern.jpg',
		url: 'http://bit.ly/2BA9jkM',
		address1: '4630 Pan American Freeway NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-830-0900',
		distance: '6.8 miles',
		note1: 'Quick, convenient access to I-25 and restaurants',
		note2: '$95+/night'
	},
	{
		name: 'Mauger Estate Bed & Breakfast',
		img: '/images/MaugerEstate.jpg',
		url: 'https://maugerbb.com/',
		address1: '701 Roma Ave. NW',
		address2: 'Albuquerque, NM 87102',
		phone: '505-242-8755',
		distance: '7.5 miles',
		note1: 'Clean, comfortable, historic Bed & Breakfast near Old Town',
		note2: '$109+/night'
	},
	{
		name: 'Hyatt Regency Tamaya Resort & Spa',
		img: '/images/HyattTamaya.jpg',
		url: 'http://bit.ly/2k76vCY',
		address1: '1300 Tuyuna Trail',
		address2: 'Santa Ana Pueblo, NM 87004',
		phone: '505-867-1234',
		distance: '16.0 miles',
		note1: 'Availability Fri (4/27) and Sat (4/28) nights only',
		note2: '$262+/night'
	}
];

export default hotelsArray;