export interface Book {
  title: string;
  author: string;
  img: string;
  description: string;
}

export const books: Book[] = [
  {
    title: "The Great Adventure",
    author: "John Doe",
    img: "https://i0.wp.com/agosbookstore.com/wp-content/uploads/2024/01/cbdbe742-caac-408f-beb2-4ef750b81332.png?fit=500%2C743&ssl=1",
    description:
      "Join John Doe on an epic journey filled with danger and excitement through uncharted lands.",
  },
  {
    title: "Mystery of the Deep",
    author: "Jane Smith",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg",
    description:
      "Dive into the secrets lurking beneath the ocean's surface and unravel ancient mysteries.",
  },
  {
    title: "The World Beyond",
    author: "Michael Brown",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymThxDkwzaCF4DmJEgEBV8SnDawddZchOJA&s",
    description:
      "Explore fantastic worlds beyond our own in this thrilling sci-fi adventure.",
  },
  {
    title: "Unseen Realms",
    author: "Emily White",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description:
      "Step into hidden realms unseen by most, filled with magic and wonder.",
  },
  {
    title: "Future of Tomorrow",
    author: "Robert Black",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description:
      "A visionary tale exploring the challenges and hopes of the future society.",
  },
];

// Utility to generate slug from title
export const generateSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
