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
			"https://storage.googleapis.com/tess11111/mengenal%20dunia%20bitcoin.jpg",
		purchaseUrl: "https://lynk.id/wildan_mukhaladun/4vr3zze6dx40",
	},
	{
		id: 2,
		title: "Unlocking Data Mistery with Excel",
		rating: 5.0,
		price: 60000,
		genre: "education",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506451132_1636063380387558_5529340932227513533_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE5XGGwCYOm8VD-6atnEi5dmSjbZJPKX0aZKNtkk8pfRgMAfjDfUrDmjlmfzy9x8PbfYKWO_Ok4imXAabDv6KSF&_nc_ohc=V0noNKkeqwQQ7kNvwFxkuP9&_nc_oc=AdkbsyL_Di18NZUNOcxMelCDV6URmeeP3RhdRaPQhLmUpKBDDlPIcZo9NXYEM0-7vZQ&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=vEJlWrwW9griwQW0Bz16Cw&oh=00_AfS4lixShmWU965p36mh8uZBqZFTnEfOzyWav9itHH7MFg&oe=68835D34",
		purchaseUrl: "https://example.com/book2",
	},
	{
		id: 3,
		title: "Science",
		rating: 4.2,
		price: 50000,
		genre: "science",
		coverImage:
			"https://scontent.fcgk12-2.fna.fbcdn.net/v/t39.30808-6/506285038_1636063520387544_5376284438564891121_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFf_CJJwtGbHBmph6cppHwVlbuaNrTAuMSVu5o2tMC4xBhX5a7zDo3LZWonU3CEgCwkEYuYwbioaoBXTRCGY696&_nc_ohc=e287sWOVDxsQ7kNvwF_sdLr&_nc_oc=AdlhzToQhaRiSOtUN9r20wj14Z7dPYMV63OuAo32kVwfmEkx89po0BsMqZHJXnRoqSk&_nc_zt=23&_nc_ht=scontent.fcgk12-2.fna&_nc_gid=vEJlWrwW9griwQW0Bz16Cw&oh=00_AfRsdcVz7Q-6vhPuBNJuIdk9Q-6TB38Z9658wHuyMaRqzg&oe=6883865D",
		purchaseUrl: "https://example.com/book3",
	},
	{
		id: 4,
		title: "Clean Code",
		rating: 4.8,
		price: 40000,
		genre: "technology",
		coverImage:
			"https://scontent.fcgk12-1.fna.fbcdn.net/v/t39.30808-6/506186807_1636064213720808_6031940592611812364_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF1GtSMAC6hulsZrNvuJMYEroeAv2Qmw0iuh4C_ZCbDSMExTvUaom3iEljKAZvw-dwJwRntusYyoOQnJcte4rMY&_nc_ohc=f3394ZOaSbMQ7kNvwH0fLUh&_nc_oc=AdkJ6k3tgfLsF2Sd2-N4MqVddpYs2XmzBskdC1ARJ-ph72bGj_5yxiQFKqUmdkIzYNc&_nc_zt=23&_nc_ht=scontent.fcgk12-1.fna&_nc_gid=vEJlWrwW9griwQW0Bz16Cw&oh=00_AfTUuUZC6OUw-CxeUSIrwxqramt468Z2Os93Yt8E3B7z1Q&oe=6883692A",
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
