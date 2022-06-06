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
    imgUrl: images.award01,
    title: "Michelin Star",
    subtitle: "Recognized as one of the very best in D.C.",
  },
  {
    imgUrl: images.award02,
    title: "Rising Star",
    subtitle: "Awarded for creative, successful, and well-executed restaurant concept",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Recognized as a top restaurant for warm staff and chefs",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Awarded to the best chefs of the region",
  },
];

export default { apps, entrees, awards };
