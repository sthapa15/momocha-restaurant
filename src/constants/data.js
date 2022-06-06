import images from "./images";

const apps = [
  {
    title: "Chicken Choila",
    price: "$14",
    tags: "NP | Pastured Raised",
  },
  {
    title: "Sadeko Wai Wai",
    price: "$7",
    tags: "NP | Organic",
  },
  {
    title: "Aloo Aachar",
    price: "$8",
    tags: "NP | Heirloom Potato",
  },
  {
    title: "Maas ko Roti",
    price: "$10",
    tags: "NP | Organic",
  },
  {
    title: "Yamori",
    price: "$7",
    tags: "NP | Sweet or Savory",
  },
];

const entrees = [
  {
    title: "Daal Bhaat Tarkari",
    price: "$20",
    tags: "Saag | Cauli | Aachar",
  },
  {
    title: "Daal Bhaat Masu",
    price: "$23",
    tags: "Khasi - Chicken | Saag | Aachar",
  },
  {
    title: "Jhol  Momo (12pc)",
    price: "$18",
    tags: "Chicken | Aachar | Veg",
  },
  {
    title: "Steam Momo (12pc)",
    price: "$16",
    tags: "Chicken | Aachar | Veg",
  },
  {
    title: "Khasi Jhol",
    price: "$25",
    tags: "Goat curry | Rice | Spicy",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { apps, entrees, awards };
