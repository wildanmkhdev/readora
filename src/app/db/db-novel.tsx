export interface Book {
	id: number;
	title: string;
	rating: number;
	price: number;
	genre: string;
	coverImage: string;
	purchaseUrl: string;
}

export const books: Book[] = [
	{
		id: 10,
		title: "Surat",
		rating: 4.2,
		price: 20000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fcgk12-2.fna.fbcdn.net/v/t39.30808-6/506592603_1636808353646394_5822524021560618689_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTpCH9PS1NVAIBnb8IBNQ3zdt4Djbj8krN23gONuPyStrDQEb6CrxJquSDX23h5wUQw0c5DZrdkrxoaJ4IBUuC&_nc_ohc=lCQy8MgrhxAQ7kNvwFqERKI&_nc_oc=AdkKFSaY61aKG9MDFgkK1rMefiSi8SpZ_M54N3zB-t8es-5hK0WZh6OA2tyTVGXbxCc&_nc_zt=23&_nc_ht=scontent.fcgk12-2.fna&_nc_gid=T0TSanu_CN3ThcwyXZE-3w&oh=00_AfS3Q1oyDod7oUee0Vp5hT6X1HRKHB2V4U8yKQL_tLqnlw&oe=68835D7C",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 11,
		title: "June Martha",
		rating: 4.1,
		price: 11000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506448217_1636808380313058_5139545280777872080_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEBWrWQmdNH01XGlYaSK0mIe1zgjBZ8LGF7XOCMFnwsYRwFA5mwlvYdGFVS2EgU6KHk8BEAQvwJmtC8ac74gmJ3&_nc_ohc=aTZd1N7fQTYQ7kNvwFQ3jgK&_nc_oc=AdkZZvV0iJj45GI_jgHc227LC-XOOeHDqWSrLFsHJwNR5iNtQPi-gtor-yvdiNDHw6w&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=ojKCIc3lR5uELGyL-j3bOQ&oh=00_AfQZRf_tcHAvT6rFn3lyylGh63J_6nRsjmgOmg2dqPSClg&oe=688374BE",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 12,
		title: "Kissed The Sun",
		rating: 4.1,
		price: 12000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506641217_1636808366979726_5178393458480270854_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGMNwKI1JGN2Lp1AS7kPI8mkuCgEf0wC_eS4KAR_TAL9_V-ZSlSiqEIsM59PfZStTv-AL7XVYkrLgY5Z9YKx89Q&_nc_ohc=PSZ1qkL0gYoQ7kNvwF7bQ6S&_nc_oc=Adn75L6vJRhBUZqSggZOZlL8lDQLOk2_DNr66_Z8pU08_3ngnp75qmFYsNb1iq3LcvY&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=ojKCIc3lR5uELGyL-j3bOQ&oh=00_AfRKr0db3jVjD5-wjkM64U59i2JYxUyV6NvYjMFz6TPZoQ&oe=68836ACE",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 13,
		title: "Scars Lines",
		rating: 4.1,
		price: 12000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506855235_1636808426979720_7545413662727369258_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEWvRMJS4rDmZLuCsaABJZwxRpRr6OrdErFGlGvo6t0SpuWlPfvbDtWbDB3fQonigXEE3JpWseLyyUkkMRSpFvG&_nc_ohc=j5RUnN5V66QQ7kNvwE-oYc7&_nc_oc=Adl89hCkImrp5ouCQ7GQISJpXkKqnD0rhMrbriEcXVjKeEx0a53ER6F7z4m3uCpdaNs&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=ojKCIc3lR5uELGyL-j3bOQ&oh=00_AfQ67im069CgTR1HvF1a1N9xtJNaX-wUU0GNGvf3Ug-NFA&oe=68838BC1",
		purchaseUrl: "https://example.com/book5",
	},
];

// Utility to generate slug from title
export const generateSlug = (title: string) =>
	title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
