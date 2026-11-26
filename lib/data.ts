
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
  project1:'/images/project1/hall.png',
  project4:'/images/project4/3.jpg',
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
    image: photos.project1,
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
    title: 'Sanjay Residence',
    category: 'Villas',
    type: 'Villa',
    location: 'South India',
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
    slug: 'project-4',
    title: 'Residence',
    category: 'Villas',
    type: 'Villa',
    location: 'South India',
    image: photos.project4,
    gallery: [
      '/images/project4/1.jpg',
      '/images/project4/2.jpg',
      '/images/project4/3.jpg',
      '/images/project4/4.jpg',
      '/images/project4/5.jpg',
      '/images/project4/7.jpg',
      '/images/project4/12.jpg',
      '/images/project4/15.jpg',
      '/images/project4/13.jpg',
      '/images/project4/16.jpg',
    ],
    intro: 'An inviting contemporary home pairing earthy textures with clean architectural lines.',
    style: 'Contemporary natural',
  },

  {
    slug: 'modular-kitchen-design',
    title: 'FERRWUD | Kitchen Stories',
    category: 'Modular Kitchens',
    type: 'Kitchen',
    location: 'Bengaluru',
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
    slug: 'Bedroom-Stories',
    title: 'FERRWUD | Bedroom Stories',
    category: 'Bedrooms',
    type: 'Bedroom',
    location: 'Bengaluru',
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
    slug: 'FERRWUD-The-Commercial-Chapter',
    title: 'FERRWUD | The Commercial Chapter',
    category: 'Commercial Interiors',
    type: 'Office',
    location: 'Bengaluru',
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
    slug: 'The-Living-Edit',
    title: 'FERRWUD | The Living Edit',
    category: 'Living Rooms',
    type: 'Living room',
    location: 'Bengaluru',
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
  {
    slug: 'veneer-vs-laminate',
    title: 'Veneer vs Laminate: Choosing the Right Finish for Your Interiors',
    category: 'Materials & Finishes',
    date: '2026-11-25',
    image: '/images/articles/veneer-laminate.jpg',
    excerpt: 'Explore the differences between natural veneer and laminate, including their aesthetics, durability, maintenance, cost, and applications in modern interiors.'
  },
  {
    slug: 'small-space-interior-design',
    title: 'Small Spaces, Big Possibilities: Designing Compact Homes',
    category: 'Space Planning',
    date: '2026-11-25',
    image: '/images/articles/small-space.jpg',
    excerpt: 'Discover how smart layouts, multifunctional furniture, lighting, and storage solutions can transform compact homes into spacious, comfortable, and stylish living environments.'
  },
  {
    slug: 'kitchen-work-triangle',
    title: 'The Kitchen Work Triangle: Designing for Everyday Efficiency',
    category: 'Kitchen Design',
    date: '2026-11-25',
    image: '/images/articles/kitchen-triangle.jpg',
    excerpt: 'Understand the relationship between the refrigerator, sink, and cooking zone, and how smart kitchen planning improves movement, functionality, and everyday workflow.'
  },
  {
    slug: 'lighting-layers-interior-design',
    title: 'The Art of Layered Lighting: Transforming Spaces Through Light',
    category: 'Lighting Design',
    date: '2026-11-25',
    image: '/images/articles/layered-lighting.jpg',
    excerpt: 'Learn how ambient, task, and accent lighting work together to create depth, improve functionality, and transform the mood and atmosphere of your interiors.'
  },
  {
    slug: 'understanding-plywood-mdf-hdhmr',
    title: 'Plywood, MDF & HDHMR: Understanding Interior Furniture Boards',
    category: 'Material Knowledge',
    date: '2026-11-25',
    image: '/images/articles/plywood-mdf.jpg',
    excerpt: 'Explore the differences between plywood, MDF, and HDHMR, including their properties, strength, moisture resistance, applications, and suitability for furniture.'
  },
  {
    slug: 'wardrobe-design-storage-planning',
    title: 'Wardrobe Design: Planning Storage for the Way You Live',
    category: 'Furniture Design',
    date: '2026-11-25',
    image: '/images/articles/wardrobe-design.jpg',
    excerpt: 'Explore smart wardrobe planning with hanging zones, drawers, accessories, shelves, and storage solutions designed around your lifestyle and everyday needs.'
  },
  {
    slug: 'interior-colour-psychology',
    title: 'Colour Psychology in Interiors: Creating the Right Mood',
    category: 'Design Principles',
    date: '2026-11-25',
    image: '/images/articles/color-psychology.jpg',
    excerpt: 'Discover how colours, undertones, contrast, and saturation influence the mood and perception of a space and help create harmonious interior palettes.'
  },
  {
    slug: 'biophilic-interior-design',
    title: 'Biophilic Design: Bringing Nature Into Modern Interiors',
    category: 'Design Trends',
    date: '2026-11-25',
    image: '/images/articles/biophilic-design.jpg',
    excerpt: 'Explore how natural light, indoor plants, organic materials, textures, and nature-inspired elements create more connected, calming, and comfortable indoor environments.'
  },
  {
    slug: 'interior-design-project-process',
    title: 'From Concept to Completion: The Journey of an Interior Project',
    category: 'Design & Execution',
    date: '2026-11-25',
    image: '/images/articles/project-process.jpg',
    excerpt: 'Take a look at the interior design journey from initial consultation and space planning to visualisation, technical drawings, manufacturing, execution, and final handover.'
  },
  {
    slug: 'factory-made-vs-site-carpentry',
    title: 'Factory-Made Furniture vs On-Site Carpentry: What Is the Difference?',
    category: 'Manufacturing',
    date: '2026-11-25',
    image: '/images/articles/factory-vs-carpentry.jpg',
    excerpt: 'Compare factory-manufactured furniture and on-site carpentry to understand differences in precision, quality control, flexibility, installation, and execution.'
  },
  {
    slug: 'interior-design-budget-planning',
    title: 'Planning Your Interior Budget: Where to Invest and Where to Save',
    category: 'Budget & Planning',
    date: '2026-11-25',
    image: '/images/articles/interior-budget.jpg',
    excerpt: 'Learn how to plan your interior budget, prioritise materials and furniture, balance quality with cost, and make smarter decisions for long-term value.'
  },
  {
    slug: 'interior-hardware-guide',
    title: 'The Hidden Details: Understanding Interior Furniture Hardware',
    category: 'Hardware & Detailing',
    date: '2026-11-25',
    image: '/images/articles/furniture-hardware.jpg',
    excerpt: 'Discover how hinges, drawer runners, lift systems, pull-outs, and furniture accessories influence functionality, durability, convenience, and everyday comfort.'
  },
  {
    slug: 'interior-maintenance-guide',
    title: 'Maintaining Your Interiors: A Guide to Materials and Finishes',
    category: 'Maintenance & Care',
    date: '2026-11-25',
    image: '/images/articles/interior-maintenance.jpg',
    excerpt: 'Learn how to care for wood, veneer, laminate, stone, glass, metal, upholstery, and furniture surfaces to preserve their appearance and extend their lifespan.'
  },
  {
    slug: 'false-ceiling-design-guide',
    title: 'False Ceilings Explained: Design, Lighting and Functionality',
    category: 'Ceiling Design',
    date: '2026-11-25',
    image: '/images/articles/false-ceiling.jpg',
    excerpt: 'Explore false ceiling designs, materials, lighting integration, proportions, and practical planning considerations for functional and aesthetically balanced interiors.'
  }
];

