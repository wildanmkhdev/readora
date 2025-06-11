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
		id: 1,
		title: "Mengenal Dunia Bitcoin",
		rating: 4.5,
		price: 45000,
		genre: "education",
		coverImage:
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506354431_1636063523720877_1776621881405594104_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFY74egRr-N3k70rqyE3hjGe1S-t1qe4K17VL63Wp7grWLnHrAa0t0PqiY7uxaMCZDKDNWsgrr9UohkYaLmR4Aw&_nc_ohc=MQkVWXViAFkQ7kNvwHp3NTd&_nc_oc=AdkdSgRMjE3IJyrvV_Afruobpj5uU6BJgZDtzLmHan99G8VjVXhrTqTsDdKjXsrwQKs&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=ZgxJhFV5p_q0AzEPPNl5Yg&oh=00_AfPIGcF9AcgIpts9wb8gsQ4uCI461nL36Xp5oZp1U4My0w&oe=684F6B3A",
		purchaseUrl: "https://lynk.id/wildan_mukhaladun/4vr3zze6dx40",
	},
	{
		id: 2,
		title: "Unlocking Data Mistery with Excel",
		rating: 5.0,
		price: 60000,
		genre: "education",
		coverImage:
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506451132_1636063380387558_5529340932227513533_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE5XGGwCYOm8VD-6atnEi5dmSjbZJPKX0aZKNtkk8pfRgMAfjDfUrDmjlmfzy9x8PbfYKWO_Ok4imXAabDv6KSF&_nc_ohc=3QYFRkyjaKkQ7kNvwGhCDat&_nc_oc=AdmKAITizsxkT1OrnnYoAQ3twWD6r9rzzxJKcnPlI2Zwz_3-69BxFyPy5Q0NTFmuM3c&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=ZgxJhFV5p_q0AzEPPNl5Yg&oh=00_AfM6kjPTVtAsUhpLdfSG1ddKimvVlBo35QeqN09kxJySVg&oe=684F49F4",
		purchaseUrl: "https://example.com/book2",
	},
	{
		id: 3,
		title: "Science",
		rating: 4.2,
		price: 50000,
		genre: "science",
		coverImage:
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506285038_1636063520387544_5376284438564891121_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFf_CJJwtGbHBmph6cppHwVlbuaNrTAuMSVu5o2tMC4xBhX5a7zDo3LZWonU3CEgCwkEYuYwbioaoBXTRCGY696&_nc_ohc=szdkSqC87RsQ7kNvwGaflU_&_nc_oc=AdkKjW7uOS0O26A0RVqV8bzRri2L1gltNGoE27ecNMzIW6iNFiqT5Y5m-lfG5NsLy2E&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=ZgxJhFV5p_q0AzEPPNl5Yg&oh=00_AfOqwCr7l2nyw-YX5aQq_q6lRtmIL6Dux9s65q77Q3hRoA&oe=684F731D",
		purchaseUrl: "https://example.com/book3",
	},
	{
		id: 4,
		title: "Clean Code",
		rating: 4.8,
		price: 40000,
		genre: "technology",
		coverImage:
			"https://scontent.fkno9-3.fna.fbcdn.net/v/t39.30808-6/506186807_1636064213720808_6031940592611812364_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF1GtSMAC6hulsZrNvuJMYEroeAv2Qmw0iuh4C_ZCbDSMExTvUaom3iEljKAZvw-dwJwRntusYyoOQnJcte4rMY&_nc_ohc=_5lcUtDI_UkQ7kNvwFmlJWe&_nc_oc=AdmefCa3QR7mT3W0MkN3GT92OeHGpSzKEaJ6uTRxeO1GUty8uGLEI_6gJYj3H6_HI-s&_nc_zt=23&_nc_ht=scontent.fkno9-3.fna&_nc_gid=ZgxJhFV5p_q0AzEPPNl5Yg&oh=00_AfPHoVV-83bwbnMJuYtfJrf2Hp4iKuCobmgvUQFySQ95Wg&oe=684F55EA",
		purchaseUrl: "https://example.com/book4",
	},
	{
		id: 5,
		title: "Psychology Of Money",
		rating: 4.5,
		price: 45000,
		genre: "education",
		coverImage:
			"https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2024/1/20/qvjtc65vbzmexfegzrgs7u.jpg",
		purchaseUrl: "https://lynk.id/wildan_mukhaladun/4vr3zze6dx40",
	},
];

// Utility to generate slug from title
export const generateSlug = (title: string) =>
	title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
