
export const photos = {
  hero: '/it.jpg',
  living:'/images/livingroom/hall.png',
  kitchen: '/kitchen.jpg',
  bedroom: '/images/bedrooms/b3.png',
  villa: '/hall.jpg',
  office: '/it1.jpg',
  detail: '/it1.jpg',
  decor: '/decor.jpg',
  project3:'/images/project3/11.png',
  about:'/images/livingroom/hall2.png',
  contact:'/images/bedrooms/b6.png',
  it:'/images/office/it1.jpg',
  it1:'/images/office/it2.jpg',
  it2:'/images/office/it3.jpg',
  it3:'/images/office/it4.jpg',
  team: '/images/team.jpg',
  dining:'/images/kitchen/k5.jpg',
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  type: string;
  location: string;
  image: string;
  gallery: string[];
  intro: string;
  style: string;
};

export const projects: Project[] = [
  {
    slug: 'the-quiet-residence',
    title: 'The Quiet Residence',
    category: 'Luxury Residences',
    type: 'Apartment',
    location: 'Bengaluru · Demo project',
    image: photos.living,
    gallery: [
      '/images/project1/hall.png',
      '/images/project1/dinning.png',
      '/images/project1/kitchen.png',
      '/images/project1/b1.png',
      '/images/project1/b2.png',
      '/images/project1/b3.png',
      '/images/project1/bathroom1.png',
      '/images/project1/bathroom2.png',
    ],
    intro: 'A calm, tactile home shaped around natural light, thoughtful storage and a warm, restrained material palette.',
    style: 'Warm minimalism',
  },

  {
    slug: 'earth-and-oak',
    title: 'Earth & Oak',
    category: 'Apartment',
    type: 'Apartment',
    location: 'South India · Demo project',
    image: photos.villa,
    gallery: [
      '/images/project2/hall.jpg',
      '/images/project2/hall1.jpg',
      '/images/project2/kitchen.jpg',
      '/images/project2/kitchen1.jpg',
    ],
    intro: 'An inviting contemporary home pairing earthy textures with clean architectural lines.',
    style: 'Contemporary natural',
  },

  {
    slug: 'earth-oak',
    title: 'Earth  Oak',
    category: 'Villas',
    type: 'Villa',
    location: 'South India · Demo project',
    image: photos.project3,
    gallery: [
      '/images/project3/11.png',
      '/images/project3/13.png',
      '/images/project3/12.png',
      '/images/project3/14.png',
      '/images/project3/10.png',
      '/images/project3/9.png',
      '/images/project3/2.png',
      '/images/project3/1.png',
      '/images/project3/4.png',
      '/images/project3/3.png',
      '/images/project3/5.png',
    ],
    intro: 'An inviting contemporary home pairing earthy textures with clean architectural lines.',
    style: 'Contemporary natural',
  },

  {
    slug: 'the-sunday-kitchen',
    title: 'The Sunday Kitchen',
    category: 'Modular Kitchens',
    type: 'Kitchen',
    location: 'Bengaluru · Demo project',
    image: photos.kitchen,
    gallery: [
      '/images/kitchen/k1.jpg',
      '/images/kitchen/k2.jpg',
      '/images/kitchen/k3.jpg',
      '/images/kitchen/k4.jpg',
      '/images/kitchen/k5.jpg',
      '/images/kitchen/k6.jpg',
      '/images/kitchen/k7.png',
    ],
    intro: 'A practical kitchen concept where considered finishes meet an uncluttered, everyday workflow.',
    style: 'Modern organic',
  },

  {
    slug: 'soft-hours',
    title: 'Soft Hours',
    category: 'Bedrooms',
    type: 'Bedroom',
    location: 'South India · Demo project',
    image: photos.bedroom,
    gallery: [
      '/images/bedrooms/b1.png',
      '/images/bedrooms/b2.png',
      '/images/bedrooms/b3.png',
      '/images/bedrooms/b4.png',
      '/images/bedrooms/b5.png',
      '/images/bedrooms/b6.png',
    ],
    intro: 'A restful bedroom concept with soft layers, muted tones and purposeful detailing.',
    style: 'Soft contemporary',
  },

  {
    slug: 'form-and-function',
    title: 'Form & Function',
    category: 'Commercial Interiors',
    type: 'Office',
    location: 'Bengaluru · Demo project',
    image: photos.office,
    gallery: [
      '/images/office/it1.jpg',
      '/images/office/it2.jpg',
      '/images/office/it3.jpg',
      '/images/office/it4.jpg',
      '/images/office/it5.jpg',
      '/images/office/it6.jpg',
    ],
    intro: 'A people-first workplace concept with a clear sense of flow and flexible work zones.',
    style: 'Modern workspace',
  },

  {
    slug: 'gathered-light',
    title: 'Gathered Light',
    category: 'Living Rooms',
    type: 'Living room',
    location: 'Bengaluru · Demo project',
    image: photos.about,
    gallery: [
      '/images/project1/hall.png',
      '/images/project2/hall.jpg',
      '/images/project2/hall1.jpg',
      '/images/project3/13.png',
      '/images/livingroom/hall.png',
      '/images/livingroom/hall1.png',
      '/images/livingroom/hall2.png',
    ],
    intro: 'A layered living and dining concept designed for conversation, comfort and everyday rituals.',
    style: 'Understated elegance',
  },
];
export const categories = ['All Projects','Apartments','Villas','Living Rooms','Modular Kitchens','Bedrooms','Commercial Interiors','Institutions','Cafés & Restaurants',' IT Offices',' Hospitality'];
export const services = [
 { slug:'residential-interior-design', title:'Residential Interior Design', image:photos.living, desc:'A considered approach to making your home feel personal, intuitive and beautifully resolved.', deliverables:['Space planning','Concept and mood boards','Material and finish direction'] },
 { slug:'luxury-villa-interiors', title:'Luxury Villa Interiors', image:photos.villa, desc:'A cohesive design language for generous spaces, architectural features and everyday living.', deliverables:['Whole-home design direction','Room-by-room planning','Finish coordination'] },
 { slug:'apartment-interiors', title:'Apartment Interiors', image:photos.bedroom, desc:'Make every square foot work harder without compromising warmth, flow or character.', deliverables:['Layout optimisation','Storage planning','Furniture and lighting plans'] },
 { slug:'modular-kitchen-design', title:'Modular Kitchen Design', image:photos.kitchen, desc:'Kitchen concepts that balance practical workflows, durable finishes and clean detailing.', deliverables:['Workflow planning','Cabinet and finish selection','Storage concepts'] },
 { slug:'custom-storage', title:'Wardrobes & Custom Storage', image:photos.detail, desc:'Tailored storage ideas that help keep daily routines simple and spaces visually calm.', deliverables:['Storage zoning','Internal layout concepts','Material direction'] },
 { slug:'commercial-interior-design', title:'Commercial Interior Design', image:photos.office, desc:'Distinctive environments for teams, customers and the work that happens between them.', deliverables:['Space planning','Brand-aligned concepts','Furniture and finish direction'] },
 { slug:'cafe-restaurant-interiors', title:'Café & Restaurant Interiors', image:photos.it, desc:'Atmosphere-led hospitality concepts that consider guest experience and operational flow.', deliverables:['Guest journey planning','Seating concepts','Lighting and material palette'] },
 { slug:'space-planning-visualisation', title:'Space Planning & 3D Visualisation', image:photos.villa, desc:'Explore layouts, proportions and material combinations before decisions are finalised.', deliverables:['Furniture layouts','Mood boards','Visualisation brief'] }
];
export const articles = [
 {slug:'warm-minimalism-at-home', title:'Warm Minimalism: A Softer Way to Live', category:'Interior Design Ideas', date:'Design journal · Demo article', image:photos.living, excerpt:'Explore how natural textures, quiet colours and considered objects can make minimal spaces feel welcoming.'},
 {slug:'a-more-thoughtful-kitchen', title:'Planning a Kitchen Around Real Life', category:'Modular Kitchen Inspiration', date:'Design journal · Demo article', image:photos.kitchen, excerpt:'A practical starting point for thinking about zones, storage, lighting and the rhythm of everyday cooking.'},
 {slug:'layering-a-restful-bedroom', title:'Layering a Restful Bedroom', category:'Bedroom Design', date:'Design journal · Demo article', image:photos.bedroom, excerpt:'Bring together light, tactile materials and useful routines to shape a room that feels calm.'},
 {slug:'materials-that-age-beautifully', title:'Choosing Materials That Age Beautifully', category:'Material and Finish Guides', date:'Design journal · Demo article', image:photos.detail, excerpt:'A simple guide to thinking beyond first impressions when selecting finishes for a lived-in home.'}
];
