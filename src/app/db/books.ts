// Definisi interface untuk tipe data buku
export interface Book {
	id: number;
	title: string;
	rating: number;
	price: number;
	genre: string;
	coverImage: string;
	purchaseUrl: string;
}

// Data buku dalam bentuk array of objects
const books: Book[] = [
	{
		id: 1,
		title: "Mengenal Dunia Bitcoin",
		rating: 4.5,
		price: 45000,
		genre: "",
		coverImage:
			"https://storage.googleapis.com/tess11111/mengenal%20dunia%20bitcoin.jpg",
		purchaseUrl: "https://lynk.id/wildan_mukhaladun/4vr3zze6dx40",
	},
	{
		id: 2,
		title: "Unlocking Data Mistery with Excel",
		rating: 5.0,
		price: 60000,
		genre: "",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506451132_1636063380387558_5529340932227513533_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE5XGGwCYOm8VD-6atnEi5dmSjbZJPKX0aZKNtkk8pfRgMAfjDfUrDmjlmfzy9x8PbfYKWO_Ok4imXAabDv6KSF&_nc_ohc=V0noNKkeqwQQ7kNvwFxkuP9&_nc_oc=AdkbsyL_Di18NZUNOcxMelCDV6URmeeP3RhdRaPQhLmUpKBDDlPIcZo9NXYEM0-7vZQ&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=vEJlWrwW9griwQW0Bz16Cw&oh=00_AfS4lixShmWU965p36mh8uZBqZFTnEfOzyWav9itHH7MFg&oe=68835D34",
		purchaseUrl: "https://example.com/book2",
	},
	{
		id: 3,
		title: "Science",
		rating: 4.2,
		price: 50000,
		genre: "sains",
		coverImage:
			"https://scontent.fcgk12-2.fna.fbcdn.net/v/t39.30808-6/506285038_1636063520387544_5376284438564891121_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFf_CJJwtGbHBmph6cppHwVlbuaNrTAuMSVu5o2tMC4xBhX5a7zDo3LZWonU3CEgCwkEYuYwbioaoBXTRCGY696&_nc_ohc=e287sWOVDxsQ7kNvwF_sdLr&_nc_oc=AdlhzToQhaRiSOtUN9r20wj14Z7dPYMV63OuAo32kVwfmEkx89po0BsMqZHJXnRoqSk&_nc_zt=23&_nc_ht=scontent.fcgk12-2.fna&_nc_gid=vEJlWrwW9griwQW0Bz16Cw&oh=00_AfRsdcVz7Q-6vhPuBNJuIdk9Q-6TB38Z9658wHuyMaRqzg&oe=6883865D",
		purchaseUrl: "https://example.com/book3",
	},
	{
		id: 4,
		title: "Clean Code",
		rating: 4.8,
		price: 40000,
		genre: "teknologi",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506186807_1636064213720808_6031940592611812364_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF1GtSMAC6hulsZrNvuJMYEroeAv2Qmw0iuh4C_ZCbDSMExTvUaom3iEljKAZvw-dwJwRntusYyoOQnJcte4rMY&_nc_ohc=f3394ZOaSbMQ7kNvwH0fLUh&_nc_oc=AdkJ6k3tgfLsF2Sd2-N4MqVddpYs2XmzBskdC1ARJ-ph72bGj_5yxiQFKqUmdkIzYNc&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=vEJlWrwW9griwQW0Bz16Cw&oh=00_AfTUuUZC6OUw-CxeUSIrwxqramt468Z2Os93Yt8E3B7z1Q&oe=6883692A",
		purchaseUrl: "https://example.com/book4",
	},
	{
		id: 5,
		title: "Psychology Of Money",
		rating: 4.5,
		price: 45000,
		genre: "edukasi",
		coverImage:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2024/1/20/qvjtc65vbzmexfegzrgs7u.jpg",
		purchaseUrl: "https://lynk.id/wildan_mukhaladun/4vr3zze6dx40",
	},
	{
		id: 6,
		title: "Sebuah Seni untuk Bersikap Bodo Amat",
		rating: 5.0,
		price: 60000,
		genre: "edukasi",
		coverImage:
			"https://upload.wikimedia.org/wikipedia/commons/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg",
		purchaseUrl: "https://example.com/book2",
	},
	{
		id: 7,
		title: "Atomic Habits",
		rating: 4.2,
		price: 50000,
		genre: "edukasi",
		coverImage:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786020633176_.Atomic_Habit.jpg",
		purchaseUrl: "https://example.com/book3",
	},
	{
		id: 8,
		title: "Digital Typography",
		rating: 4.8,
		price: 40000,
		genre: "teknologi",
		coverImage:
			"https://www.gramedia.com/blog/content/images/2024/01/attitude-is-everything.jpg",
		purchaseUrl: "https://example.com/book4",
	},
	{
		id: 9,
		title: "Color Theory in Practice",
		rating: 4.6,
		price: 42000,
		genre: "teknologi",
		coverImage:
			"https://i0.wp.com/agosbookstore.com/wp-content/uploads/2024/01/cbdbe742-caac-408f-beb2-4ef750b81332.png",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 10,
		title: "surat",
		rating: 4.2,
		price: 20000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fcgk12-2.fna.fbcdn.net/v/t39.30808-6/506592603_1636808353646394_5822524021560618689_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTpCH9PS1NVAIBnb8IBNQ3zdt4Djbj8krN23gONuPyStrDQEb6CrxJquSDX23h5wUQw0c5DZrdkrxoaJ4IBUuC&_nc_ohc=lCQy8MgrhxAQ7kNvwFqERKI&_nc_oc=AdkKFSaY61aKG9MDFgkK1rMefiSi8SpZ_M54N3zB-t8es-5hK0WZh6OA2tyTVGXbxCc&_nc_zt=23&_nc_ht=scontent.fcgk12-2.fna&_nc_gid=T0TSanu_CN3ThcwyXZE-3w&oh=00_AfS3Q1oyDod7oUee0Vp5hT6X1HRKHB2V4U8yKQL_tLqnlw&oe=68835D7C",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 11,
		title: "june martha",
		rating: 4.1,
		price: 11000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506448217_1636808380313058_5139545280777872080_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEBWrWQmdNH01XGlYaSK0mIe1zgjBZ8LGF7XOCMFnwsYRwFA5mwlvYdGFVS2EgU6KHk8BEAQvwJmtC8ac74gmJ3&_nc_ohc=aTZd1N7fQTYQ7kNvwFQ3jgK&_nc_oc=AdkZZvV0iJj45GI_jgHc227LC-XOOeHDqWSrLFsHJwNR5iNtQPi-gtor-yvdiNDHw6w&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=ojKCIc3lR5uELGyL-j3bOQ&oh=00_AfQZRf_tcHAvT6rFn3lyylGh63J_6nRsjmgOmg2dqPSClg&oe=688374BE",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 12,
		title: "kissed the sun",
		rating: 4.1,
		price: 12000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506641217_1636808366979726_5178393458480270854_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGMNwKI1JGN2Lp1AS7kPI8mkuCgEf0wC_eS4KAR_TAL9_V-ZSlSiqEIsM59PfZStTv-AL7XVYkrLgY5Z9YKx89Q&_nc_ohc=PSZ1qkL0gYoQ7kNvwF7bQ6S&_nc_oc=Adn75L6vJRhBUZqSggZOZlL8lDQLOk2_DNr66_Z8pU08_3ngnp75qmFYsNb1iq3LcvY&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=ojKCIc3lR5uELGyL-j3bOQ&oh=00_AfRKr0db3jVjD5-wjkM64U59i2JYxUyV6NvYjMFz6TPZoQ&oe=68836ACE",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 13,
		title: "scars lines",
		rating: 4.1,
		price: 12000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506855235_1636808426979720_7545413662727369258_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEWvRMJS4rDmZLuCsaABJZwxRpRr6OrdErFGlGvo6t0SpuWlPfvbDtWbDB3fQonigXEE3JpWseLyyUkkMRSpFvG&_nc_ohc=j5RUnN5V66QQ7kNvwE-oYc7&_nc_oc=Adl89hCkImrp5ouCQ7GQISJpXkKqnD0rhMrbriEcXVjKeEx0a53ER6F7z4m3uCpdaNs&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=ojKCIc3lR5uELGyL-j3bOQ&oh=00_AfQ67im069CgTR1HvF1a1N9xtJNaX-wUU0GNGvf3Ug-NFA&oe=68838BC1",
		purchaseUrl: "https://example.com/book5",
	},
];

export default books;
