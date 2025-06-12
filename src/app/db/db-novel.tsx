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
			"https://scontent.fkno9-2.fna.fbcdn.net/v/t39.30808-6/506592603_1636808353646394_5822524021560618689_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTpCH9PS1NVAIBnb8IBNQ3zdt4Djbj8krN23gONuPyStrDQEb6CrxJquSDX23h5wUQw0c5DZrdkrxoaJ4IBUuC&_nc_ohc=ab0kYe0w-UQQ7kNvwFI4mWH&_nc_oc=Adnb5floQIF6aFmD8ODLwwP-iIey_3e7skbl5LdF4l2YyM7dtmYeqsQ1u8dnWjh5tIk&_nc_zt=23&_nc_ht=scontent.fkno9-2.fna&_nc_gid=PnjNF2xrhVMKcSN3CJpO-A&oh=00_AfN10rMRSlAEpzTxH_d0Z_FVewtS-1VZKChTu-_3pTRtTQ&oe=6850D3FC",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 11,
		title: "June Martha",
		rating: 4.1,
		price: 11000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fkno9-1.fna.fbcdn.net/v/t39.30808-6/506448217_1636808380313058_5139545280777872080_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEBWrWQmdNH01XGlYaSK0mIe1zgjBZ8LGF7XOCMFnwsYRwFA5mwlvYdGFVS2EgU6KHk8BEAQvwJmtC8ac74gmJ3&_nc_ohc=PLrSqzBTH9AQ7kNvwFMHgvt&_nc_oc=AdlcUP3T96fJLtBn6IxoWh9VvTcpHsTDgwjBlMiBpdMIMDsjHgbzoC5-eLRaLX5_Uh0&_nc_zt=23&_nc_ht=scontent.fkno9-1.fna&_nc_gid=PnjNF2xrhVMKcSN3CJpO-A&oh=00_AfNRljRC34z7EglfPPZcirKOdSEgTMycm9vD6wevFHlZMw&oe=6850B2FE",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 12,
		title: "Kissed The Sun",
		rating: 4.1,
		price: 12000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fkno9-2.fna.fbcdn.net/v/t39.30808-6/506641217_1636808366979726_5178393458480270854_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGMNwKI1JGN2Lp1AS7kPI8mkuCgEf0wC_eS4KAR_TAL9_V-ZSlSiqEIsM59PfZStTv-AL7XVYkrLgY5Z9YKx89Q&_nc_ohc=s7FscTOxz34Q7kNvwGygj0m&_nc_oc=AdkHA5L43XkYlE77afQ_XcB96ijkyZkLxE06Cflsm1biaurvDeUMYlxRFr96zBVQ3Pw&_nc_zt=23&_nc_ht=scontent.fkno9-2.fna&_nc_gid=PnjNF2xrhVMKcSN3CJpO-A&oh=00_AfMAXLvqumwlhRB34pDTlnwKzKKO3D-c36hoASmABrX8ew&oe=6850A90E",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 13,
		title: "Scars Lines",
		rating: 4.1,
		price: 12000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506855235_1636808426979720_7545413662727369258_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEWvRMJS4rDmZLuCsaABJZwxRpRr6OrdErFGlGvo6t0SpuWlPfvbDtWbDB3fQonigXEE3JpWseLyyUkkMRSpFvG&_nc_ohc=G_G0ZcM8u-gQ7kNvwGnIUj3&_nc_oc=AdmfN0kVbjlBHJzVfGWjmygihvW2P3vznYLaLeakqgvLHhUZqeL68VB8ri9PUR_F6Zo&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=PnjNF2xrhVMKcSN3CJpO-A&oh=00_AfM-HP9g0hxf0oIflMr430FGRf0FSp22fGGqbWS-xWlrJw&oe=6850CA01",
		purchaseUrl: "https://example.com/book5",
	},
];

// Utility to generate slug from title
export const generateSlug = (title: string) =>
	title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
