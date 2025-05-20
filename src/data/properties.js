import p1_1 from "../assets/images/properties/p1-1.jpg";
import p1_2 from "../assets/images/properties/p1-2.jpg";
import p1_3 from "../assets/images/properties/p1-3.jpg";
import p1_4 from "../assets/images/properties/p1-4.jpg";
// p2
import p2_1 from "../assets/images/properties/p2-1.jpg";
import p2_2 from "../assets/images/properties/p2-2.jpg";
import p2_3 from "../assets/images/properties/p2-3.jpg";
import p2_4 from "../assets/images/properties/p2-4.jpg";
// p3
import p3_1 from "../assets/images/properties/p3-1.jpg";
import p3_2 from "../assets/images/properties/p3-2.jpg";
import p3_3 from "../assets/images/properties/p3-3.jpg";
import p3_4 from "../assets/images/properties/p3-4.jpg";
// p4
import p4_1 from "../assets/images/properties/p4-1.jpg";
import p4_2 from "../assets/images/properties/p4-2.jpg";
import p4_3 from "../assets/images/properties/p4-3.jpg";
import p4_4 from "../assets/images/properties/p4-4.jpg";
// p5
import p5_1 from "../assets/images/properties/p5-1.jpg";
import p5_2 from "../assets/images/properties/p5-2.jpg";
import p5_3 from "../assets/images/properties/p5-3.jpg";
import p5_4 from "../assets/images/properties/p5-4.jpg";
// p6
import p6_1 from "../assets/images/properties/p6-1.jpg";
import p6_2 from "../assets/images/properties/p6-2.jpg";
import p6_3 from "../assets/images/properties/p6-3.jpg";
import p6_4 from "../assets/images/properties/p6-4.jpg";
// p7
import p7_1 from "../assets/images/properties/p7-1.jpg";
import p7_2 from "../assets/images/properties/p7-2.jpg";
import p7_3 from "../assets/images/properties/p7-3.jpg";
import p7_4 from "../assets/images/properties/p7-4.jpg";
// p8
import p8_1 from "../assets/images/properties/p8-1.jpg";
import p8_2 from "../assets/images/properties/p8-2.jpg";
import p8_3 from "../assets/images/properties/p8-3.jpg";
import p8_4 from "../assets/images/properties/p8-4.jpg";
// p9
import p9_1 from "../assets/images/properties/p9-1.jpg";
import p9_2 from "../assets/images/properties/p9-2.jpg";
import p9_3 from "../assets/images/properties/p9-3.jpg";
import p9_4 from "../assets/images/properties/p9-4.jpg";
// p10
import p10_1 from "../assets/images/properties/p10-1.jpg";
import p10_2 from "../assets/images/properties/p10-2.jpg";
import p10_3 from "../assets/images/properties/p10-3.jpg";
import p10_4 from "../assets/images/properties/p10-4.jpg";

// houses
import h1_1 from "../assets/images/properties/h1-1.jpg";
import h1_2 from "../assets/images/properties/h1-2.jpg";
import h1_3 from "../assets/images/properties/h1-3.jpg";
import h1_4 from "../assets/images/properties/h1-4.jpg";
// h2
import h2_1 from "../assets/images/properties/h2-1.jpg";
import h2_2 from "../assets/images/properties/h2-2.jpg";
import h2_3 from "../assets/images/properties/h2-3.jpg";
import h2_4 from "../assets/images/properties/h2-4.jpg";
// h3
import h3_1 from "../assets/images/properties/h3-1.jpg";
import h3_2 from "../assets/images/properties/h3-2.jpg";
import h3_3 from "../assets/images/properties/h3-3.jpg";
import h3_4 from "../assets/images/properties/h3-4.jpg";
// h4
import h4_1 from "../assets/images/properties/h4-1.jpg";
import h4_2 from "../assets/images/properties/h4-2.jpg";
import h4_3 from "../assets/images/properties/h4-3.jpg";
import h4_4 from "../assets/images/properties/h4-4.jpg";
// h5
import h5_1 from "../assets/images/properties/h5-1.jpg";
import h5_2 from "../assets/images/properties/h5-2.jpg";
import h5_3 from "../assets/images/properties/h5-3.jpg";
import h5_4 from "../assets/images/properties/h5-4.jpg";
// h6
import h6_1 from "../assets/images/properties/h6-1.jpg";
import h6_2 from "../assets/images/properties/h6-2.jpg";
import h6_3 from "../assets/images/properties/h6-3.jpg";
import h6_4 from "../assets/images/properties/h6-4.jpg";
// h7
import h7_1 from "../assets/images/properties/h7-1.jpg";
import h7_2 from "../assets/images/properties/h7-2.jpg";
import h7_3 from "../assets/images/properties/h7-3.jpg";
import h7_4 from "../assets/images/properties/h7-4.jpg";
// h8
import h8_1 from "../assets/images/properties/h8-1.jpg";
import h8_2 from "../assets/images/properties/h8-2.jpg";
import h8_3 from "../assets/images/properties/h8-3.jpg";
import h8_4 from "../assets/images/properties/h8-4.jpg";
// h9
import h9_1 from "../assets/images/properties/h9-1.jpg";
import h9_2 from "../assets/images/properties/h9-2.jpg";
import h9_3 from "../assets/images/properties/h9-3.jpg";
import h9_4 from "../assets/images/properties/h9-4.jpg";
// h10
import h10_1 from "../assets/images/properties/h10-1.jpg";
import h10_2 from "../assets/images/properties/h10-2.jpg";
import h10_3 from "../assets/images/properties/h10-3.jpg";
import h10_4 from "../assets/images/properties/h10-4.jpg";

const properties = [
  // 1
  {
    id: "property_001",
    title: "Modern Apartment in Kabul Downtown",
    slug: "modern-apartment-kabul-downtown",
    description:
      "Stylish apartment in the heart of Kabul, featuring city views, high ceilings, and modern finishes.",
    price: 650000,
    discount: {
      isDiscounted: true,
      discountedPrice: 617500,
      discountPercentage: 10,
      validUntil: "2025-07-10",
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Kabul, Shahr-e-Naw",
    features: {
      bedrooms: 2,
      bathrooms: 3,
      areaSqFt: 1800,
      yearBuilt: 2018,
      furnishing: "Fully Furnished",
    },
    images: [p1_1, p1_2, p1_3, p1_4],
    agent: "agent_001",
    postedOn: "2025-05-01",
  },

  // 2
  {
    id: "property_002",
    title: "Smart Villa in Herat Suburbs",
    slug: "smart-villa-herat-suburbs",
    description:
      "A beautiful 4-bedroom villa equipped with smart home tech, solar panels, and a peaceful neighborhood atmosphere.",
    price: 920000,
    discount: {
      isDiscounted: true,
      discountedPrice: 874000,
      discountPercentage: 5,
      validUntil: "2025-06-15",
    },
    listingType: "sale",
    propertyType: "House",
    status: "Available",
    location: "Herat, Pul-e-Malan Road",
    features: {
      bedrooms: 4,
      bathrooms: 3,
      areaSqFt: 3100,
      yearBuilt: 2022,
      furnishing: "Semi-Furnished",
    },
    images: [h1_1, h1_2, h1_3, h1_4],
    agent: "agent_002",
    postedOn: "2025-05-03",
  },

  // 3
  {
    id: "property_003",
    title: "Bright Studio Apartment in Mazar",
    slug: "bright-studio-mazar",
    description:
      "A sunny studio apartment perfect for singles or young professionals. Located near shops, cafés, and public transit.",
    price: 285000,
    discount: {
      isDiscounted: true,
      discountedPrice: 256500,
      discountPercentage: 10,
      validUntil: "2025-06-25",
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Mazar-e-Sharif, Main Street",
    features: {
      bedrooms: 1,
      bathrooms: 1,
      areaSqFt: 700,
      yearBuilt: 2015,
      furnishing: "Unfurnished",
    },
    images: [p2_1, p2_2, p2_3, p2_4],
    agent: "agent_003",
    postedOn: "2025-05-07",
  },

  // 4
  {
    id: "property_004",
    title: "Family House with Garden in Jalalabad",
    slug: "family-house-jalalabad",
    description:
      "Spacious 3-bedroom house with a large garden, garage, and modern kitchen located in a quiet neighborhood.",
    price: 780000,
    discount: {
      isDiscounted: false,
      discountedPrice: null,
      discountPercentage: null,
      validUntil: null,
    },
    listingType: "sale",
    propertyType: "House",
    status: "Available",
    location: "Jalalabad, Park Street",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      areaSqFt: 2800,
      yearBuilt: 2017,
      furnishing: "Fully Furnished",
    },
    images: [h2_1, h2_2, h2_3, h2_4],
    agent: "agent_004",
    postedOn: "2025-05-10",
  },

  // 5
  {
    id: "property_005",
    title: "Luxury Penthouse in Kabul City Center",
    slug: "luxury-penthouse-kabul",
    description:
      "Exclusive penthouse with panoramic city views, large terrace, and premium finishes throughout.",
    price: 1200000,
    discount: {
      isDiscounted: true,
      discountedPrice: 1080000,
      discountPercentage: 10,
      validUntil: "2025-07-01",
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Kabul, City Center",
    features: {
      bedrooms: 3,
      bathrooms: 4,
      areaSqFt: 3500,
      yearBuilt: 2023,
      furnishing: "Fully Furnished",
    },
    images: [p3_1, p3_2, p3_3, p3_4],
    agent: "agent_005",
    postedOn: "2025-05-12",
  },

  // 6
  {
    id: "property_006",
    title: "Cozy Cottage near Bamyan",
    slug: "cozy-cottage-bamyan",
    description:
      "Charming 2-bedroom cottage surrounded by nature, perfect for weekend getaways or peaceful living.",
    price: 390000,
    discount: {
      isDiscounted: false,
      discountedPrice: null,
      discountPercentage: null,
      validUntil: null,
    },
    listingType: "sale",
    propertyType: "House",
    status: "Available",
    location: "Bamyan, Mountain Road",
    features: {
      bedrooms: 2,
      bathrooms: 1,
      areaSqFt: 1400,
      yearBuilt: 2010,
      furnishing: "Semi-Furnished",
    },
    images: [h3_1, h3_2, h3_3, h3_4],
    agent: "agent_006",
    postedOn: "2025-05-15",
  },

  // 7
  {
    id: "property_007",
    title: "Modern Apartment Near University",
    slug: "modern-apartment-university",
    description:
      "Perfect apartment for students or faculty, close to university campus, shops, and public transit.",
    price: 520000,
    discount: {
      isDiscounted: true,
      discountedPrice: 494000,
      discountPercentage: 5,
      validUntil: "2025-06-30",
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Kabul, University District",
    features: {
      bedrooms: 2,
      bathrooms: 2,
      areaSqFt: 1500,
      yearBuilt: 2019,
      furnishing: "Fully Furnished",
    },
    images: [p4_1, p4_2, p4_3, p4_4],
    agent: "agent_007",
    postedOn: "2025-05-17",
  },

  // 8
  {
    id: "property_008",
    title: "Spacious Family Home in Kandahar",
    slug: "spacious-family-home-kandahar",
    description:
      "Large 5-bedroom home with pool, garden, and garage. Ideal for families wanting space and comfort.",
    price: 1150000,
    discount: {
      isDiscounted: true,
      discountedPrice: 1035000,
      discountPercentage: 10,
      validUntil: "2025-07-15",
    },
    listingType: "sale",
    propertyType: "House",
    status: "Available",
    location: "Kandahar, Green Zone",
    features: {
      bedrooms: 5,
      bathrooms: 4,
      areaSqFt: 4500,
      yearBuilt: 2021,
      furnishing: "Fully Furnished",
    },
    images: [h4_1, h4_2, h4_3, h4_4],
    agent: "agent_008",
    postedOn: "2025-05-20",
  },

  // 9
  {
    id: "property_009",
    title: "Compact Studio Apartment in Herat",
    slug: "compact-studio-herat",
    description:
      "Affordable studio apartment with efficient design, close to markets and public transport.",
    price: 230000,
    discount: {
      isDiscounted: false,
      discountedPrice: null,
      discountPercentage: null,
      validUntil: null,
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Herat, Old Town",
    features: {
      bedrooms: 1,
      bathrooms: 1,
      areaSqFt: 650,
      yearBuilt: 2014,
      furnishing: "Unfurnished",
    },
    images: [p5_1, p5_2, p5_3, p5_4],
    agent: "agent_009",
    postedOn: "2025-05-22",
  },

  // 10
  {
    id: "property_010",
    title: "Luxury Mansion in Kabul Suburbs",
    slug: "luxury-mansion-kabul-suburbs",
    description:
      "Prestigious 6-bedroom mansion with private gym, cinema, pool, and large gardens.",
    price: 2500000,
    discount: {
      isDiscounted: true,
      discountedPrice: 2375000,
      discountPercentage: 5,
      validUntil: "2025-08-01",
    },
    listingType: "sale",
    propertyType: "House",
    status: "Available",
    location: "Kabul, Shahr-e-Now",
    features: {
      bedrooms: 6,
      bathrooms: 6,
      areaSqFt: 7200,
      yearBuilt: 2024,
      furnishing: "Fully Furnished",
    },
    images: [h5_1, h5_2, h5_3, h5_4],
    agent: "agent_010",
    postedOn: "2025-05-25",
  },

  // 11
  {
    id: "property_011",
    title: "Seaside Apartment in Herat",
    slug: "seaside-apartment-herat",
    description:
      "Beautiful apartment with sea views, balconies, and modern amenities.",
    price: 710000,
    discount: {
      isDiscounted: true,
      discountedPrice: 675000,
      discountPercentage: 5,
      validUntil: "2025-06-20",
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Herat, Waterfront",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      areaSqFt: 2100,
      yearBuilt: 2020,
      furnishing: "Fully Furnished",
    },
    images: [p6_1, p6_2, p6_3, p6_4],
    agent: "agent_011",
    postedOn: "2025-05-28",
  },

  // 12
  {
    id: "property_012",
    title: "Countryside Cottage Near Jalalabad",
    slug: "countryside-cottage-jalalabad",
    description:
      "Peaceful cottage with garden and fireplace, perfect for nature lovers.",
    price: 410000,
    discount: {
      isDiscounted: false,
      discountedPrice: null,
      discountPercentage: null,
      validUntil: null,
    },
    listingType: "sale",
    propertyType: "House",
    status: "Available",
    location: "Jalalabad, Countryside",
    features: {
      bedrooms: 2,
      bathrooms: 1,
      areaSqFt: 1600,
      yearBuilt: 2011,
      furnishing: "Unfurnished",
    },
    images: [h6_1, h6_2, h6_3, h6_4],
    agent: "agent_012",
    postedOn: "2025-06-01",
  },

  // 13
  {
    id: "property_013",
    title: "City Center Studio Apartment in Kabul",
    slug: "city-center-studio-kabul",
    description:
      "Compact and stylish studio apartment in downtown Kabul, close to transport and shops.",
    price: 310000,
    discount: {
      isDiscounted: true,
      discountedPrice: 295000,
      discountPercentage: 5,
      validUntil: "2025-06-30",
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Kabul, Downtown",
    features: {
      bedrooms: 1,
      bathrooms: 1,
      areaSqFt: 750,
      yearBuilt: 2016,
      furnishing: "Semi-Furnished",
    },
    images: [p7_1, p7_2, p7_3, p7_4],
    agent: "agent_013",
    postedOn: "2025-06-05",
  },

  // 14
  {
    id: "property_014",
    title: "Modern Family House in Mazar",
    slug: "modern-family-house-mazar",
    description:
      "Spacious 4-bedroom house with garage, garden, and modern kitchen appliances.",
    price: 950000,
    discount: {
      isDiscounted: false,
      discountedPrice: null,
      discountPercentage: null,
      validUntil: null,
    },
    listingType: "sale",
    propertyType: "House",
    status: "Available",
    location: "Mazar-e-Sharif, New Town",
    features: {
      bedrooms: 4,
      bathrooms: 3,
      areaSqFt: 3300,
      yearBuilt: 2019,
      furnishing: "Fully Furnished",
    },
    images: [h7_1, h7_2, h7_3, h7_4],
    agent: "agent_014",
    postedOn: "2025-06-07",
  },

  // 15
  {
    id: "property_015",
    title: "Affordable Apartment in Kandahar",
    slug: "affordable-apartment-kandahar",
    description:
      "Economical 2-bedroom apartment near markets and transport routes.",
    price: 410000,
    discount: {
      isDiscounted: true,
      discountedPrice: 390000,
      discountPercentage: 5,
      validUntil: "2025-06-30",
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Kandahar, Central District",
    features: {
      bedrooms: 2,
      bathrooms: 2,
      areaSqFt: 1200,
      yearBuilt: 2013,
      furnishing: "Unfurnished",
    },
    images: [p8_1, p8_2, p8_3, p8_4],
    agent: "agent_015",
    postedOn: "2025-06-10",
  },

  // 16
  {
    id: "property_016",
    title: "Elegant Villa in Kabul Suburb",
    slug: "elegant-villa-kabul-suburb",
    description:
      "Modern villa with swimming pool, landscaped garden, and smart home features.",
    price: 1450000,
    discount: {
      isDiscounted: true,
      discountedPrice: 1377500,
      discountPercentage: 5,
      validUntil: "2025-07-10",
    },
    listingType: "sale",
    propertyType: "House",
    status: "Available",
    location: "Kabul, District 10",
    features: {
      bedrooms: 5,
      bathrooms: 4,
      areaSqFt: 5000,
      yearBuilt: 2023,
      furnishing: "Fully Furnished",
    },
    images: [h8_1, h8_2, h8_3, h8_4],
    agent: "agent_016",
    postedOn: "2025-06-15",
  },

  // 17
  {
    id: "property_017",
    title: "Downtown Apartment in Herat",
    slug: "downtown-apartment-herat",
    description:
      "Convenient 3-bedroom apartment near business district and transport hubs.",
    price: 670000,
    discount: {
      isDiscounted: false,
      discountedPrice: null,
      discountPercentage: null,
      validUntil: null,
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Herat, Downtown",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      areaSqFt: 2200,
      yearBuilt: 2018,
      furnishing: "Fully Furnished",
    },
    images: [p9_1, p9_2, p9_3, p9_4],
    agent: "agent_017",
    postedOn: "2025-06-18",
  },

  // 18
  {
    id: "property_018",
    title: "Suburban House in Jalalabad",
    slug: "suburban-house-jalalabad",
    description:
      "Comfortable 4-bedroom house with garage and garden in a friendly community.",
    price: 820000,
    discount: {
      isDiscounted: true,
      discountedPrice: 779000,
      discountPercentage: 5,
      validUntil: "2025-07-20",
    },
    listingType: "sale",
    propertyType: "House",
    status: "Available",
    location: "Jalalabad, New Suburbs",
    features: {
      bedrooms: 4,
      bathrooms: 3,
      areaSqFt: 3500,
      yearBuilt: 2022,
      furnishing: "Semi-Furnished",
    },
    images: [h9_1, h9_2, h9_3, h9_4],
    agent: "agent_018",
    postedOn: "2025-06-20",
  },

  // 19
  {
    id: "property_019",
    title: "Compact Apartment in Mazar",
    slug: "compact-apartment-mazar",
    description:
      "Efficient 1-bedroom apartment ideal for singles or couples, close to city center.",
    price: 290000,
    discount: {
      isDiscounted: false,
      discountedPrice: null,
      discountPercentage: null,
      validUntil: null,
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Mazar-e-Sharif, City Center",
    features: {
      bedrooms: 1,
      bathrooms: 1,
      areaSqFt: 800,
      yearBuilt: 2017,
      furnishing: "Unfurnished",
    },
    images: [p10_1, p10_2, p10_3, p10_4],
    agent: "agent_019",
    postedOn: "2025-06-22",
  },

  // 20
  {
    id: "property_020",
    title: "Luxury Condo in Kabul Downtown",
    slug: "luxury-condo-kabul-downtown",
    description:
      "Stylish condo with high-end appliances, gym access, and secure parking.",
    price: 1150000,
    discount: {
      isDiscounted: true,
      discountedPrice: 1085000,
      discountPercentage: 5,
      validUntil: "2025-07-25",
    },
    listingType: "sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Kabul, Downtown",
    features: {
      bedrooms: 3,
      bathrooms: 3,
      areaSqFt: 2800,
      yearBuilt: 2022,
      furnishing: "Fully Furnished",
    },
    images: [h10_1, h10_2, h10_3, h10_4],
    agent: "agent_020",
    postedOn: "2025-06-25",
  },
];

export default properties;
