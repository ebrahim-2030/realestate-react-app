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
  // Apartment (1)
  {
    id: "property_001",
    title: "Luxury Downtown Loft",
    slug: "luxury-downtown-loft",
    description:
      "Industrial-chic loft with exposed brick, high ceilings, and skyline views.",
    price: 650000,
    discount: {
      isDiscounted: true,
      discountedPrice: 617500,
      discountPercentage: 10,
      validUntil: "2025-07-10",
    },
    listingType: "For Sale",
    propertyType: "Apartment",
    status: "Available",
    location: "New York, 45 Broadway",
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
  // House (2)
  {
    id: "property_002",
    title: "Modern 4BHK Smart Home",
    slug: "modern-4bhk-smart-home",
    description:
      "Tech-savvy house with voice-controlled lighting, security, and solar panels.",
    price: 920000,
    discount: {
      isDiscounted: true,
      discountedPrice: 0,
      discountPercentage: 5,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "House",
    status: "Available",
    location: "Austin, 22 Tech Ridge",
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
  // Apartment (3)
  {
    id: "property_003",
    title: "Artist's Studio in SoHo",
    slug: "artists-studio-in-soho",
    description:
      "North-facing studio with perfect natural light for creatives. Pet-friendly!",
    price: 285000,
    discount: {
      isDiscounted: true,
      discountedPrice: 256500,
      discountPercentage: 5,
      validUntil: "2025-06-25",
    },
    listingType: "For Sale",
    propertyType: "Apartment",
    status: "Available",
    location: "New York, 90 Prince St",
    features: {
      bedrooms: 2,
      bathrooms: 1,
      areaSqFt: 600,
      yearBuilt: 2015,
      furnishing: "Unfurnished",
    },
    images: [p2_1, p2_2, p2_3, p2_4],
    agent: "agent_007",
    postedOn: "2025-05-05",
  },
  // House (4)
  {
    id: "property_004",
    title: "Beachfront Cottage",
    slug: "beachfront-cottage",
    description:
      "Steps from the sand with a wraparound porch and sunset views.",
    price: 1250000,
    discount: {
      isDiscounted: false,
      discountedPrice: 0,
      discountPercentage: 0,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "House",
    status: "Available",
    location: "Malibu, 8 Shoreline Dr",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      areaSqFt: 2100,
      yearBuilt: 2017,
      furnishing: "Fully Furnished",
    },
    images: [h2_1, h2_2, h2_3, h2_4],
    agent: "agent_003",
    postedOn: "2025-05-07",
  },
  // Apartment (5) - Rental
  {
    id: "property_005",
    title: "High-Rise Luxury Rental",
    slug: "high-rise-luxury-rental",
    description: "24/7 concierge, infinity pool, and floor-to-ceiling windows.",
    price: 4500,
    discount: {
      isDiscounted: true,
      discountedPrice: 4050,
      discountPercentage: 10,
      validUntil: "2025-07-01",
    },
    listingType: "For Rent",
    propertyType: "Apartment",
    status: "Available",
    location: "Miami, 100 Biscayne Blvd",
    features: {
      bedrooms: 2,
      bathrooms: 2,
      areaSqFt: 1500,
      yearBuilt: 2021,
      furnishing: "Fully Furnished",
    },
    images: [p3_1, p3_2, p3_3, p3_4],
    agent: "agent_010",
    postedOn: "2025-05-09",
  },
  // House (6)
  {
    id: "property_006",
    title: "Renovated Victorian",
    slug: "renovated-victorian",
    description:
      "Classic charm with modern updates. Original hardwood floors + chef's kitchen.",
    price: 775000,
    discount: {
      isDiscounted: true,
      discountedPrice: 0,
      discountPercentage: 10,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "House",
    status: "Available",
    location: "Boston, 34 Beacon St",
    features: {
      bedrooms: 4,
      bathrooms: 2,
      areaSqFt: 2800,
      yearBuilt: 1890,
      furnishing: "Unfurnished",
    },
    images: [h3_1, h3_2, h3_3, h3_4],
    agent: "agent_004",
    postedOn: "2025-05-11",
  },
  // Apartment (7)
  {
    id: "property_007",
    title: "Penthouse with Terrace",
    slug: "penthouse-with-terrace",
    description: "Private rooftop terrace with outdoor kitchen and city views.",
    price: 1200000,
    discount: {
      isDiscounted: false,
      discountedPrice: 0,
      discountPercentage: 0,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Chicago, 200 Lakeshore Dr",
    features: {
      bedrooms: 3,
      bathrooms: 3,
      areaSqFt: 3400,
      yearBuilt: 2023,
      furnishing: "Fully Furnished",
    },
    images: [p4_1, p4_2, p4_3, p4_4],
    agent: "agent_008",
    postedOn: "2025-05-13",
  },
  // House (8) - Rental
  {
    id: "property_008",
    title: "Mountain Retreat Rental",
    slug: "mountain-retreat-rental",
    description:
      "A-frame cabin with hot tub and hiking trail access. 6-month min lease.",
    price: 3200,
    discount: {
      isDiscounted: false,
      discountedPrice: 0,
      discountPercentage: 0,
      validUntil: "",
    },
    listingType: "For Rent",
    propertyType: "House",
    status: "Available",
    location: "Aspen, 12 Alpine Rd",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      areaSqFt: 1800,
      yearBuilt: 2019,
      furnishing: "Fully Furnished",
    },
    images: [h4_1, h4_2, h4_3, h4_4],
    agent: "agent_006",
    postedOn: "2025-05-15",
  },
  // Apartment (9)
  {
    id: "property_009",
    title: "Historic Brownstone Unit",
    slug: "historic-brownstone-unit",
    description: "Crown molding and bay windows in a landmark building.",
    price: 895000,
    discount: {
      isDiscounted: true,
      discountedPrice: 850250,
      discountPercentage: 5,
      validUntil: "2025-07-20",
    },
    listingType: "For Sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Brooklyn, 76 Park Pl",
    features: {
      bedrooms: 2,
      bathrooms: 2,
      areaSqFt: 1600,
      yearBuilt: 1925,
      furnishing: "Semi-Furnished",
    },
    images: [p5_1, p5_2, p5_3, p5_4],
    agent: "agent_008",
    postedOn: "2025-05-17",
  },
  // House (10)
  {
    id: "property_010",
    title: "Desert Modern Oasis",
    slug: "desert-modern-oasis",
    description: "Minimalist design with cactus garden and lap pool.",
    price: 1500000,
    discount: {
      isDiscounted: true,
      discountedPrice: 0,
      discountPercentage: 5,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "House",
    status: "Available",
    location: "Palm Springs, 500 Mirage Ln",
    features: {
      bedrooms: 4,
      bathrooms: 4,
      areaSqFt: 3800,
      yearBuilt: 2020,
      furnishing: "Fully Furnished",
    },
    images: [h1_1, h1_2, h1_3, h1_4],
    agent: "agent_001",
    postedOn: "2025-05-19",
  },
  // Apartment (11)
  {
    id: "property_011",
    title: "Waterfront Condo",
    slug: "waterfront-condo",
    description: "Direct dock access for boats. Includes 2 parking spots.",
    price: 720000,
    discount: {
      isDiscounted: false,
      discountedPrice: 0,
      discountPercentage: 0,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Fort Lauderdale, 33 Marina Blvd",
    features: {
      bedrooms: 2,
      bathrooms: 2,
      areaSqFt: 1450,
      yearBuilt: 2016,
      furnishing: "Semi-Furnished",
    },
    images: [p6_1, p6_2, p6_3, p6_4],
    agent: "agent_005",
    postedOn: "2025-05-21",
  },
  // House (12) - Rental
  {
    id: "property_012",
    title: "Suburban Family Home (Rent)",
    slug: "suburban-family-home-rent",
    description: "Great schools district with backyard playground.",
    price: 2900,
    discount: {
      isDiscounted: true,
      discountedPrice: 2610,
      discountPercentage: 10,
      validUntil: "2025-06-15",
    },
    listingType: "For Rent",
    propertyType: "House",
    status: "Available",
    location: "Seattle, 88 Maple St",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      areaSqFt: 2000,
      yearBuilt: 2015,
      furnishing: "Unfurnished",
    },
    images: [h7_1, h7_2, h7_3, h7_4],
    agent: "agent_005",
    postedOn: "2025-05-23",
  },
  // Apartment (13)
  {
    id: "property_013",
    title: "Micro-Loft Efficiency",
    slug: "micro-loft-efficiency",
    description: "Affordable city living with custom space-saving designs.",
    price: 185000,
    discount: {
      isDiscounted: false,
      discountedPrice: 0,
      discountPercentage: 0,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "Apartment",
    status: "Available",
    location: "San Francisco, 55 Mission St",
    features: {
      bedrooms: 0,
      bathrooms: 1,
      areaSqFt: 400,
      yearBuilt: 2022,
      furnishing: "Fully Furnished",
    },
    images: [p7_1, p7_2, p7_3, p7_4],
    agent: "agent_003",
    postedOn: "2025-05-25",
  },
  // House (14)
  {
    id: "property_014",
    title: "Wine Country Estate",
    slug: "wine-country-estate",
    description: "Vineyard views with guest house and wine cellar.",
    price: 3500000,
    discount: {
      isDiscounted: false,
      discountedPrice: 0,
      discountPercentage: 0,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "House",
    status: "Available",
    location: "Napa Valley, 200 Vineyard Rd",
    features: {
      bedrooms: 5,
      bathrooms: 5.5,
      areaSqFt: 6200,
      yearBuilt: 2018,
      furnishing: "Fully Furnished",
    },
    images: [h5_1, h5_2, h5_3, h5_4],
    agent: "agent_06",
    postedOn: "2025-05-27",
  },
  // Apartment (15) - Rental
  {
    id: "property_015",
    title: "Mid-Century Studio Rental",
    slug: "mid-century-studio-rental",
    description: "Eames-era building with shared courtyard. No pets.",
    price: 1650,
    discount: {
      isDiscounted: true,
      discountedPrice: 0,
      discountPercentage: 5,
      validUntil: "",
    },
    listingType: "For Rent",
    propertyType: "Apartment",
    status: "Available",
    location: "Palm Springs, 444 Retro Ln",
    features: {
      bedrooms: 0,
      bathrooms: 1,
      areaSqFt: 550,
      yearBuilt: 1958,
      furnishing: "Semi-Furnished",
    },
    images: [p8_1, p8_2, p8_3, p8_4],
    agent: "agent_002",
    postedOn: "2025-05-29",
  },
  // House (16)
  {
    id: "property_016",
    title: "Lakefront Log Cabin",
    slug: "lakefront-log-cabin",
    description: "Private dock included. Perfect for year-round getaways.",
    price: 890000,
    discount: {
      isDiscounted: true,
      discountedPrice: 845500,
      discountPercentage: 5,
      validUntil: "2025-07-05",
    },
    listingType: "For Sale",
    propertyType: "House",
    status: "Available",
    location: "Lake Tahoe, 100 Pine Point",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      areaSqFt: 2200,
      yearBuilt: 2010,
      furnishing: "Fully Furnished",
    },
    images: [h8_1, h8_2, h8_3, h8_4],
    agent: "agent_004",
    postedOn: "2025-05-31",
  },
  // Apartment (17)
  {
    id: "property_017",
    title: "Biophilic Design Apartment",
    slug: "biophilic-design-apartment",
    description: "Living wall, natural materials, and abundant greenery.",
    price: 420000,
    discount: {
      isDiscounted: false,
      discountedPrice: 0,
      discountPercentage: 0,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Portland, 30 Green St",
    features: {
      bedrooms: 1,
      bathrooms: 1,
      areaSqFt: 900,
      yearBuilt: 2021,
      furnishing: "Fully Furnished",
    },
    images: [p9_1, p9_2, p9_3, p9_4],
    agent: "agent_006",
    postedOn: "2025-06-02",
  },
  // House (18) - Rental
  {
    id: "property_018",
    title: "Colonial Rental (Short-Term)",
    slug: "colonial-rental-short-term",
    description: "3-month min stay. Antique furnishings + modern amenities.",
    price: 4800,
    discount: {
      isDiscounted: true,
      discountedPrice: 4320,
      discountPercentage: 10,
      validUntil: "2025-06-30",
    },
    listingType: "For Rent",
    propertyType: "House",
    status: "Available",
    location: "Charleston, 12 Magnolia Rd",
    features: {
      bedrooms: 4,
      bathrooms: 3,
      areaSqFt: 3000,
      yearBuilt: 1932,
      furnishing: "Fully Furnished",
    },
    images: [h9_1, h9_2, h9_3, h9_4],
    agent: "agent_002",
    postedOn: "2025-06-04",
  },
  // Apartment (19)
  {
    id: "property_019",
    title: "Corner Unit with City Views",
    slug: "corner-unit-with-city-views",
    description: "Floor-to-ceiling windows and open-concept layout.",
    price: 580000,
    discount: {
      isDiscounted: false,
      discountedPrice: 0,
      discountPercentage: 0,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "Apartment",
    status: "Available",
    location: "Denver, 1800 High St",
    features: {
      bedrooms: 2,
      bathrooms: 2,
      areaSqFt: 1300,
      yearBuilt: 2019,
      furnishing: "Semi-Furnished",
    },
    images: [p10_1, p10_2, p10_3, p10_4],
    agent: "agent_004",
    postedOn: "2025-06-06",
  },
  // House (20)
  {
    id: "property_020",
    title: "Ultra-Modern Smart Villa",
    slug: "ultra-modern-smart-villa",
    description: "Voice-controlled everything + automated privacy glass.",
    price: 2800000,
    discount: {
      isDiscounted: false,
      discountedPrice: 0,
      discountPercentage: 0,
      validUntil: "",
    },
    listingType: "For Sale",
    propertyType: "House",
    status: "Available",
    location: "Beverly Hills, 1000 Star Dr",
    features: {
      bedrooms: 5,
      bathrooms: 6,
      areaSqFt: 7500,
      yearBuilt: 2024,
      furnishing: "Fully Furnished",
    },
    images: [h10_1, h10_2, h10_3, h10_4],
    agent: "agent_005",
    postedOn: "2025-06-08",
  },
];

export default properties;
