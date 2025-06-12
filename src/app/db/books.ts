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
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506354431_1636063523720877_1776621881405594104_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFY74egRr-N3k70rqyE3hjGe1S-t1qe4K17VL63Wp7grWLnHrAa0t0PqiY7uxaMCZDKDNWsgrr9UohkYaLmR4Aw&_nc_ohc=MQkVWXViAFkQ7kNvwHp3NTd&_nc_oc=AdkdSgRMjE3IJyrvV_Afruobpj5uU6BJgZDtzLmHan99G8VjVXhrTqTsDdKjXsrwQKs&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=ZgxJhFV5p_q0AzEPPNl5Yg&oh=00_AfPIGcF9AcgIpts9wb8gsQ4uCI461nL36Xp5oZp1U4My0w&oe=684F6B3A",
		purchaseUrl: "https://lynk.id/wildan_mukhaladun/4vr3zze6dx40",
	},
	{
		id: 2,
		title: "Unlocking Data Mistery with Excel",
		rating: 5.0,
		price: 60000,
		genre: "",
		coverImage:
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506451132_1636063380387558_5529340932227513533_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE5XGGwCYOm8VD-6atnEi5dmSjbZJPKX0aZKNtkk8pfRgMAfjDfUrDmjlmfzy9x8PbfYKWO_Ok4imXAabDv6KSF&_nc_ohc=3QYFRkyjaKkQ7kNvwGhCDat&_nc_oc=AdmKAITizsxkT1OrnnYoAQ3twWD6r9rzzxJKcnPlI2Zwz_3-69BxFyPy5Q0NTFmuM3c&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=ZgxJhFV5p_q0AzEPPNl5Yg&oh=00_AfM6kjPTVtAsUhpLdfSG1ddKimvVlBo35QeqN09kxJySVg&oe=684F49F4",
		purchaseUrl: "https://example.com/book2",
	},
	{
		id: 3,
		title: "Science",
		rating: 4.2,
		price: 50000,
		genre: "sains",
		coverImage:
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506285038_1636063520387544_5376284438564891121_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFf_CJJwtGbHBmph6cppHwVlbuaNrTAuMSVu5o2tMC4xBhX5a7zDo3LZWonU3CEgCwkEYuYwbioaoBXTRCGY696&_nc_ohc=szdkSqC87RsQ7kNvwGaflU_&_nc_oc=AdkKjW7uOS0O26A0RVqV8bzRri2L1gltNGoE27ecNMzIW6iNFiqT5Y5m-lfG5NsLy2E&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=ZgxJhFV5p_q0AzEPPNl5Yg&oh=00_AfOqwCr7l2nyw-YX5aQq_q6lRtmIL6Dux9s65q77Q3hRoA&oe=684F731D",
		purchaseUrl: "https://example.com/book3",
	},
	{
		id: 4,
		title: "Clean Code",
		rating: 4.8,
		price: 40000,
		genre: "teknologi",
		coverImage:
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506186807_1636064213720808_6031940592611812364_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF1GtSMAC6hulsZrNvuJMYEroeAv2Qmw0iuh4C_ZCbDSMExTvUaom3iEljKAZvw-dwJwRntusYyoOQnJcte4rMY&_nc_ohc=_5lcUtDI_UkQ7kNvwFmlJWe&_nc_oc=AdmefCa3QR7mT3W0MkN3GT92OeHGpSzKEaJ6uTRxeO1GUty8uGLEI_6gJYj3H6_HI-s&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=ZgxJhFV5p_q0AzEPPNl5Yg&oh=00_AfPHoVV-83bwbnMJuYtfJrf2Hp4iKuCobmgvUQFySQ95Wg&oe=684F55EA",
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
			"https://scontent.fkno9-2.fna.fbcdn.net/v/t39.30808-6/506592603_1636808353646394_5822524021560618689_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTpCH9PS1NVAIBnb8IBNQ3zdt4Djbj8krN23gONuPyStrDQEb6CrxJquSDX23h5wUQw0c5DZrdkrxoaJ4IBUuC&_nc_ohc=ab0kYe0w-UQQ7kNvwFI4mWH&_nc_oc=Adnb5floQIF6aFmD8ODLwwP-iIey_3e7skbl5LdF4l2YyM7dtmYeqsQ1u8dnWjh5tIk&_nc_zt=23&_nc_ht=scontent.fkno9-2.fna&_nc_gid=PnjNF2xrhVMKcSN3CJpO-A&oh=00_AfN10rMRSlAEpzTxH_d0Z_FVewtS-1VZKChTu-_3pTRtTQ&oe=6850D3FC",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 11,
		title: "june martha",
		rating: 4.1,
		price: 11000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fkno9-1.fna.fbcdn.net/v/t39.30808-6/506448217_1636808380313058_5139545280777872080_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEBWrWQmdNH01XGlYaSK0mIe1zgjBZ8LGF7XOCMFnwsYRwFA5mwlvYdGFVS2EgU6KHk8BEAQvwJmtC8ac74gmJ3&_nc_ohc=PLrSqzBTH9AQ7kNvwFMHgvt&_nc_oc=AdlcUP3T96fJLtBn6IxoWh9VvTcpHsTDgwjBlMiBpdMIMDsjHgbzoC5-eLRaLX5_Uh0&_nc_zt=23&_nc_ht=scontent.fkno9-1.fna&_nc_gid=PnjNF2xrhVMKcSN3CJpO-A&oh=00_AfNRljRC34z7EglfPPZcirKOdSEgTMycm9vD6wevFHlZMw&oe=6850B2FE",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 12,
		title: "kissed the sun",
		rating: 4.1,
		price: 12000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fkno9-2.fna.fbcdn.net/v/t39.30808-6/506641217_1636808366979726_5178393458480270854_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGMNwKI1JGN2Lp1AS7kPI8mkuCgEf0wC_eS4KAR_TAL9_V-ZSlSiqEIsM59PfZStTv-AL7XVYkrLgY5Z9YKx89Q&_nc_ohc=s7FscTOxz34Q7kNvwGygj0m&_nc_oc=AdkHA5L43XkYlE77afQ_XcB96ijkyZkLxE06Cflsm1biaurvDeUMYlxRFr96zBVQ3Pw&_nc_zt=23&_nc_ht=scontent.fkno9-2.fna&_nc_gid=PnjNF2xrhVMKcSN3CJpO-A&oh=00_AfMAXLvqumwlhRB34pDTlnwKzKKO3D-c36hoASmABrX8ew&oe=6850A90E",
		purchaseUrl: "https://example.com/book5",
	},
	{
		id: 13,
		title: "scars lines",
		rating: 4.1,
		price: 12000,
		genre: "fiksi",
		coverImage:
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506855235_1636808426979720_7545413662727369258_n.jpg?stp=dst-jpg_p370x247_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEWvRMJS4rDmZLuCsaABJZwxRpRr6OrdErFGlGvo6t0SpuWlPfvbDtWbDB3fQonigXEE3JpWseLyyUkkMRSpFvG&_nc_ohc=G_G0ZcM8u-gQ7kNvwGnIUj3&_nc_oc=AdmfN0kVbjlBHJzVfGWjmygihvW2P3vznYLaLeakqgvLHhUZqeL68VB8ri9PUR_F6Zo&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=PnjNF2xrhVMKcSN3CJpO-A&oh=00_AfM-HP9g0hxf0oIflMr430FGRf0FSp22fGGqbWS-xWlrJw&oe=6850CA01",
		purchaseUrl: "https://example.com/book5",
	},
];

export default books;
