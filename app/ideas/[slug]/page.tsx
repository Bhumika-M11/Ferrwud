
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import CTA from '@/components/CTA';
import { photos } from '@/lib/data';

// Article data type
export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  backgroundImage: string;
  image: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  tips: string[];
  takeaway: string;
}

// Keep your complete existing articles array here.
// Make sure every article object is separated by a comma.
export const articles: Article[] = [
  {
    slug: "veneer-vs-laminate",
    title: "Veneer vs Laminate: Choosing the Right Finish for Your Interiors",
    category: "Materials & Finishes",
    date: "2026-11-25",
    backgroundImage: "/images/articles/veneer-laminate-bg.jpg",
    image: "/images/articles/veneer-laminate.jpg",
    excerpt:
      "Explore the differences between natural veneer and laminate, their durability, aesthetics, maintenance, and where each material works best.",
    seoTitle: "Veneer vs Laminate | Interior Finishes Guide",
    seoDescription:
      "Compare veneer and laminate finishes for interiors. Learn about appearance, durability, maintenance, cost, and how to choose the right finish for your home.",
    content: [
      {
        heading: "Understanding the Difference",
        paragraphs: [
          "Veneer and laminate are two of the most widely used finishes in modern interior design. Although they can sometimes look similar, they are fundamentally different materials with unique characteristics.",
          "Natural veneer is a thin layer of real wood applied to a substrate, preserving the natural grain, tonal variations, and character of timber. Laminate is a manufactured decorative surface available in a wide range of colours, textures, patterns, and wood-inspired designs.",
        ],
      },
      {
        heading: "The Beauty of Natural Veneer",
        paragraphs: [
          "Veneer brings the warmth and authenticity of natural wood into a space. Each sheet has its own grain pattern, making every furniture surface unique. It is particularly suited to statement furniture, wall panels, wardrobes, and premium living spaces.",
          "Depending on the finish applied, veneer can develop a sophisticated appearance while retaining its natural character. It requires appropriate care to protect it from excessive moisture, scratches, and direct sunlight.",
        ],
      },
      {
        heading: "The Versatility of Laminate",
        paragraphs: [
          "Laminate is valued for its versatility, consistent appearance, and practical maintenance. It comes in a wide selection of colours, wood grains, stone textures, matte finishes, and high-gloss surfaces.",
          "Its ease of maintenance and broad range of options make it suitable for kitchens, wardrobes, study areas, storage units, and high-use furniture.",
        ],
      },
      {
        heading: "Which One Should You Choose?",
        paragraphs: [
          "The decision between veneer and laminate depends on your aesthetic preferences, budget, lifestyle, location of application, and maintenance expectations. Veneer is ideal when natural warmth and wood character are priorities, while laminate is a practical choice for consistency, versatility, and everyday use.",
        ],
      },
    ],
    tips: [
      "Use natural veneer for statement walls and premium furniture.",
      "Choose laminates for high-use surfaces that require easier maintenance.",
      "Consider the lighting in the room before finalising a wood tone.",
      "Always review physical samples rather than relying only on digital images.",
    ],
    takeaway:
      "Veneer offers the authenticity of natural wood, while laminate offers versatility and practicality. The best finish is the one that complements your space, lifestyle, and design vision.",
  },

  {
    slug: "small-space-interior-design",
    title: "Small Spaces, Big Possibilities: Designing Compact Homes",
    category: "Space Planning",
    date: "2026-11-25",
    backgroundImage: "/images/articles/small-space-bg.jpg",
    image: "/images/articles/small-space.jpg",
    excerpt:
      "Discover how thoughtful space planning, multifunctional furniture, lighting, and storage can make compact homes feel spacious and comfortable.",
    seoTitle: "Small Home Interior Design Ideas | Space Saving Guide",
    seoDescription:
      "Make a small home feel bigger with smart interior design. Explore space-saving furniture, lighting, storage, layout, and colour ideas for compact homes.",
    content: [
      {
        heading: "Designing Beyond Square Footage",
        paragraphs: [
          "A compact home does not have to feel cramped. The perception of space is influenced by layout, light, visual clutter, furniture proportions, and the relationship between different areas.",
          "A well-designed compact interior prioritises movement, functionality, and visual openness instead of filling every available corner.",
        ],
      },
      {
        heading: "Make Every Element Work Harder",
        paragraphs: [
          "Multifunctional furniture is one of the most effective solutions for smaller homes. Storage beds, extendable dining tables, wall-mounted desks, and integrated seating help combine multiple functions without overcrowding a room.",
          "Built-in storage can use vertical space efficiently while keeping frequently used objects organised and accessible.",
        ],
      },
      {
        heading: "Create Visual Openness",
        paragraphs: [
          "Consistent colour palettes, appropriately sized furniture, mirrors, and unobstructed sightlines can create a sense of visual continuity. Lighter colours may help reflect daylight, while carefully placed darker accents can add depth.",
          "Lighting also plays an important role. Layered lighting avoids dark corners and helps create a comfortable, visually balanced environment.",
        ],
      },
      {
        heading: "Prioritise Movement",
        paragraphs: [
          "A room should be planned around how people use it. Clear circulation paths, accessible storage, and thoughtfully positioned furniture make a home more comfortable than simply maximising the number of furniture pieces.",
        ],
      },
    ],
    tips: [
      "Use vertical storage instead of occupying valuable floor space.",
      "Choose furniture proportionate to the room dimensions.",
      "Use mirrors strategically to reflect light and create depth.",
      "Avoid unnecessary partitions where visual continuity is possible.",
      "Plan storage before selecting furniture.",
    ],
    takeaway:
      "Small homes feel spacious when every element has a purpose. Smart planning, visual continuity, and functional furniture can transform even compact spaces.",
  },

  {
    slug: "kitchen-work-triangle",
    title: "The Kitchen Work Triangle: Designing for Everyday Efficiency",
    category: "Kitchen Design",
    date: "2026-11-25",
    backgroundImage: "/images/articles/kitchen-triangle-bg.jpg",
    image: "/images/articles/kitchen-triangle.jpg",
    excerpt:
      "Learn how the relationship between the refrigerator, sink, and cooking zone influences kitchen movement, functionality, and workflow.",
    seoTitle: "Kitchen Work Triangle Explained | Smart Kitchen Planning",
    seoDescription:
      "Understand the kitchen work triangle between the refrigerator, sink, and hob. Learn how kitchen layouts improve movement, efficiency, and everyday usability.",
    content: [
      {
        heading: "What Is the Kitchen Work Triangle?",
        paragraphs: [
          "The kitchen work triangle is a planning concept that connects three primary activity zones: the refrigerator, sink, and cooking hob. These represent food storage, preparation and cleaning, and cooking.",
          "The idea is to create a comfortable relationship between these zones so that everyday tasks can be completed with minimal unnecessary movement.",
        ],
      },
      {
        heading: "Why Workflow Matters",
        paragraphs: [
          "A kitchen is one of the most activity-intensive spaces in a home. Poor positioning of appliances, inadequate counter space, or overlapping circulation paths can make cooking uncomfortable.",
          "A thoughtful layout allows ingredients to move logically from storage to preparation, cooking, serving, and cleaning.",
        ],
      },
      {
        heading: "Different Layouts, Different Triangles",
        paragraphs: [
          "L-shaped, U-shaped, parallel, island, and straight-line kitchens all create different relationships between the three primary zones. The most suitable layout depends on the room dimensions, plumbing, appliance placement, and how many people use the kitchen.",
          "In open kitchens or larger spaces, additional planning is necessary to avoid unnecessary walking distances and conflicts between cooking and circulation.",
        ],
      },
      {
        heading: "Beyond the Triangle",
        paragraphs: [
          "Modern kitchens often require more than three zones. Pantry storage, coffee stations, ovens, dishwashers, waste segregation, and breakfast counters all influence the workflow.",
          "The work triangle remains a useful planning principle, but it should be adapted to the actual needs of the household rather than followed rigidly.",
        ],
      },
    ],
    tips: [
      "Keep the sink, hob, and refrigerator logically connected.",
      "Provide adequate counter space near the cooking and washing zones.",
      "Avoid placing tall units where they obstruct movement.",
      "Consider multiple users when planning circulation.",
      "Plan appliance openings and clearances before manufacturing cabinetry.",
    ],
    takeaway:
      "An efficient kitchen is not defined by its size but by how intelligently its work zones, storage, appliances, and movement are connected.",
  },

  {
    slug: "lighting-layers-interior-design",
    title: "The Art of Layered Lighting: Transforming Spaces Through Light",
    category: "Lighting Design",
    date: "2026-11-25",
    backgroundImage: "/images/articles/layered-lighting-bg.jpg",
    image: "/images/articles/layered-lighting.jpg",
    excerpt:
      "Understand ambient, task, and accent lighting and learn how layering different lighting sources creates depth, comfort, and atmosphere.",
    seoTitle: "Layered Lighting in Interior Design | Complete Guide",
    seoDescription:
      "Learn ambient, task, and accent lighting techniques for your home. Discover how layered lighting improves comfort, functionality, and interior aesthetics.",
    content: [
      {
        heading: "Lighting Is More Than Illumination",
        paragraphs: [
          "Lighting influences how a space looks, feels, and functions. It can make materials appear richer, emphasise architectural details, create visual depth, and influence the atmosphere of a room.",
          "A thoughtfully designed lighting plan combines different light sources instead of relying on a single ceiling fixture.",
        ],
      },
      {
        heading: "Ambient Lighting",
        paragraphs: [
          "Ambient lighting provides the general illumination required to navigate and use a space comfortably. It may come from ceiling fixtures, recessed lights, indirect cove lighting, or other distributed sources.",
          "Its purpose is to establish a balanced base level of light without creating excessive brightness or harsh shadows.",
        ],
      },
      {
        heading: "Task Lighting",
        paragraphs: [
          "Task lighting focuses illumination on activities that require visibility and precision. Examples include kitchen counter lights, reading lamps, study lighting, vanity lighting, and wardrobe illumination.",
          "Well-positioned task lighting reduces shadows on work surfaces and makes everyday activities more comfortable.",
        ],
      },
      {
        heading: "Accent Lighting",
        paragraphs: [
          "Accent lighting draws attention to selected elements such as artwork, textured walls, display shelves, architectural features, or decorative objects.",
          "It introduces contrast and depth, helping a room feel more layered and visually interesting.",
        ],
      },
      {
        heading: "Creating the Right Balance",
        paragraphs: [
          "The best lighting plans combine all three layers while considering colour temperature, dimming, glare, beam angles, and the natural light available in the room.",
          "Lighting should be planned early in the design process because fixture placement affects ceilings, cabinetry, electrical points, and furniture arrangement.",
        ],
      },
    ],
    tips: [
      "Combine ambient, task, and accent lighting instead of relying on one source.",
      "Choose colour temperatures according to the mood and function of the space.",
      "Use dimmers wherever appropriate to adjust atmosphere.",
      "Avoid placing lights where they create glare on screens or reflective surfaces.",
      "Plan lighting positions before finalising ceiling and furniture layouts.",
    ],
    takeaway:
      "Lighting creates the atmosphere of an interior. Layering light thoughtfully makes spaces more functional during the day and more inviting in the evening.",
  },

  {
    slug: "understanding-plywood-mdf-hdhmr",
    title: "Plywood, MDF & HDHMR: Understanding Interior Furniture Boards",
    category: "Material Knowledge",
    date: "2026-11-25",
    backgroundImage: "/images/articles/plywood-mdf-bg.jpg",
    image: "/images/articles/plywood-mdf.jpg",
    excerpt:
      "A practical guide to engineered wood boards, their properties, applications, and considerations for furniture and interior cabinetry.",
    seoTitle: "Plywood vs MDF vs HDHMR | Furniture Board Guide",
    seoDescription:
      "Compare plywood, MDF, and HDHMR boards used in interior furniture. Understand strength, moisture resistance, applications, and how to select suitable materials.",
    content: [
      {
        heading: "Why the Core Material Matters",
        paragraphs: [
          "The material beneath a furniture finish is just as important as the finish itself. Engineered wood boards influence strength, dimensional stability, screw holding, weight, edge detailing, and performance under different environmental conditions.",
          "Plywood, MDF, and HDHMR are commonly used in interior applications, but their properties differ and should be considered before selecting a material.",
        ],
      },
      {
        heading: "Understanding Plywood",
        paragraphs: [
          "Plywood is manufactured by bonding multiple thin wood veneers together, typically with their grain directions arranged in alternating orientations. This construction contributes to dimensional stability and strength.",
          "Different plywood grades and adhesive specifications are intended for different applications. Selecting the appropriate grade is important, particularly in areas exposed to moisture or demanding usage.",
        ],
      },
      {
        heading: "Understanding MDF",
        paragraphs: [
          "Medium-density fibreboard is produced from wood fibres combined with resin and formed into a uniform board. Its smooth surface makes it suitable for painted finishes, routed designs, decorative mouldings, and detailed furniture components.",
          "Standard MDF should be selected carefully for environments where moisture exposure may occur. Special moisture-resistant variants have different properties and should not be confused with standard MDF.",
        ],
      },
      {
        heading: "Understanding HDHMR",
        paragraphs: [
          "HDHMR stands for High Density High Moisture Resistant board. It is an engineered board designed for certain furniture and interior applications requiring a dense, moisture-resistant core.",
          "Its suitability depends on the product specification, installation details, edge protection, hardware, and exposure conditions. Moisture resistance does not mean the board is waterproof under every condition.",
        ],
      },
      {
        heading: "Selecting the Right Board",
        paragraphs: [
          "Material selection should consider the furniture's structural requirements, location, finish, hardware, moisture exposure, budget, and manufacturer specifications.",
          "A kitchen carcass, decorative panel, wardrobe shutter, and painted wall moulding may require different board properties. Choosing materials based on application leads to more reliable results.",
        ],
      },
    ],
    tips: [
      "Ask for the exact board specification and grade.",
      "Select moisture-resistant materials where the application demands them.",
      "Protect exposed edges from moisture penetration.",
      "Consider hardware fixing requirements and board density.",
      "Do not select boards based only on brand name or price.",
    ],
    takeaway:
      "The right furniture board depends on the application, not on a single material being universally superior. Understanding the core helps create interiors that perform as well as they look.",
  },

  {
    slug: "wardrobe-design-storage-planning",
    title: "Wardrobe Design: Planning Storage for the Way You Live",
    category: "Furniture Design",
    date: "2026-11-25",
    backgroundImage: "/images/articles/wardrobe-design-bg.jpg",
    image: "/images/articles/wardrobe-design.jpg",
    excerpt:
      "Explore wardrobe planning, internal organisation, hanging zones, drawers, accessories, and storage strategies that make everyday routines easier.",
    seoTitle: "Wardrobe Interior Design & Storage Planning Guide",
    seoDescription:
      "Plan a functional wardrobe with smart hanging space, drawers, accessories, loft storage, and organised compartments. Explore wardrobe design ideas for modern homes.",
    content: [
      {
        heading: "Storage Should Follow Your Lifestyle",
        paragraphs: [
          "A wardrobe should be designed around the user's clothing habits, accessories, daily routine, and available space. A visually beautiful wardrobe can still be frustrating if its internal arrangement does not suit the way it is used.",
          "Before designing the wardrobe, it is helpful to understand what needs to be stored, how frequently items are used, and which categories require dedicated space.",
        ],
      },
      {
        heading: "Divide Storage Into Zones",
        paragraphs: [
          "Wardrobe interiors typically combine hanging sections, shelves, drawers, accessory compartments, and overhead storage. Each zone should be assigned according to the type and frequency of use.",
          "Frequently used clothing should be accessible, while seasonal items and less frequently used belongings can be placed in higher storage areas.",
        ],
      },
      {
        heading: "Make Drawers and Accessories Work",
        paragraphs: [
          "Drawers help organise smaller items and reduce visual clutter. Dedicated organisers for jewellery, watches, belts, ties, and accessories can improve accessibility and protect belongings.",
          "Pull-out trays, trouser racks, shoe storage, and adjustable shelves can add convenience when selected according to actual requirements.",
        ],
      },
      {
        heading: "Design for Comfort and Accessibility",
        paragraphs: [
          "The height and depth of storage, shutter movement, drawer clearances, and internal lighting all affect usability. The design should account for the user's reach, room circulation, and available wall dimensions.",
          "Sliding shutters may work well where swing clearance is limited, while hinged shutters can offer easier access to the entire compartment when sufficient space is available.",
        ],
      },
    ],
    tips: [
      "Measure clothing and storage requirements before finalising the layout.",
      "Separate daily-use items from seasonal belongings.",
      "Use drawers and organisers for smaller accessories.",
      "Consider internal lighting for deeper wardrobes.",
      "Check shutter clearances and movement before choosing the mechanism.",
    ],
    takeaway:
      "A well-designed wardrobe is a personal storage system. It should reflect the user's habits, maximise accessibility, and make everyday organisation effortless.",
  },

  {
    slug: "interior-colour-psychology",
    title: "Colour Psychology in Interiors: Creating the Right Mood",
    category: "Design Principles",
    date: "2026-11-25",
    backgroundImage: "/images/articles/color-psychology-bg.jpg",
    image: "/images/articles/color-psychology.jpg",
    excerpt:
      "Discover how colour, undertones, contrast, and saturation influence the mood and perception of a space, and how to build a balanced colour palette.",
    seoTitle: "Interior Colour Psychology | Choosing Colours for Your Home",
    seoDescription:
      "Learn how colours influence interior spaces, how to use warm and cool tones, and how to build a balanced palette for living rooms, bedrooms, and kitchens.",
    content: [
      {
        heading: "Colour Shapes the Experience of a Space",
        paragraphs: [
          "Colour is one of the first elements people notice when entering a room. It influences visual perception, creates contrast, connects materials, and contributes to the overall atmosphere.",
          "While colour associations can be influenced by culture and personal experience, the way colours interact with light, surrounding materials, and room proportions is important in interior design.",
        ],
      },
      {
        heading: "Warm and Cool Colours",
        paragraphs: [
          "Warm colours such as terracotta, muted reds, earthy browns, and warm yellows can create an inviting feeling. Cool colours such as blue, green, and some grey tones may create a calmer or more refreshing atmosphere.",
          "The effect of a colour depends on its saturation, brightness, undertone, lighting, and the other colours surrounding it.",
        ],
      },
      {
        heading: "Building a Balanced Palette",
        paragraphs: [
          "A successful interior palette often combines a dominant base colour with complementary secondary tones and selected accents. Flooring, cabinetry, wall finishes, textiles, metals, and lighting should be considered together.",
          "A restrained palette can create continuity across connected rooms, while carefully chosen accent colours can introduce character without overwhelming the space.",
        ],
      },
      {
        heading: "Always Test Colours in the Space",
        paragraphs: [
          "Paints and materials can look different under daylight, warm artificial lighting, and cool artificial lighting. They may also appear different depending on adjacent surfaces and the orientation of a room.",
          "Testing physical samples in the intended space is one of the most reliable ways to make confident colour decisions.",
        ],
      },
    ],
    tips: [
      "Start with the mood you want the room to create.",
      "Consider undertones when combining paint, wood, stone, and fabrics.",
      "Test samples in both natural and artificial lighting.",
      "Use accent colours selectively.",
      "Maintain visual continuity in connected spaces.",
    ],
    takeaway:
      "The right colour palette is not about following trends. It is about creating harmony between light, materials, proportions, and the atmosphere you want your space to express.",
  },

  {
    slug: "biophilic-interior-design",
    title: "Biophilic Design: Bringing Nature Into Modern Interiors",
    category: "Design Trends",
    date: "2026-11-25",
    backgroundImage: "/images/articles/biophilic-design-bg.jpg",
    image: "/images/articles/biophilic-design.jpg",
    excerpt:
      "Learn how natural light, plants, organic materials, textures, and nature-inspired design can create more connected and comfortable indoor environments.",
    seoTitle: "Biophilic Interior Design | Nature Inspired Spaces",
    seoDescription:
      "Discover biophilic interior design principles, including natural materials, indoor plants, daylight, organic textures, and ways to bring nature into modern homes.",
    content: [
      {
        heading: "What Is Biophilic Design?",
        paragraphs: [
          "Biophilic design is an approach that seeks to strengthen the connection between people and nature within built environments. It goes beyond adding indoor plants and considers light, views, materials, textures, patterns, and spatial experiences.",
          "The objective is to create environments that feel connected to the natural world and support a more engaging everyday experience.",
        ],
      },
      {
        heading: "Natural Light and Views",
        paragraphs: [
          "Daylight is an important component of nature-inspired interiors. Window treatments, room layouts, reflective surfaces, and furniture placement can influence how daylight moves through a space.",
          "Where possible, views of greenery, outdoor landscapes, or open skies can strengthen the relationship between indoors and outdoors.",
        ],
      },
      {
        heading: "Materials and Textures",
        paragraphs: [
          "Natural wood, stone, clay, linen, cotton, and other tactile materials can introduce visual warmth and texture. Organic patterns, irregular forms, and subtle material variations help create a more natural aesthetic.",
          "Material selection should still consider durability, maintenance, availability, and suitability for the intended environment.",
        ],
      },
      {
        heading: "Plants as Part of the Design",
        paragraphs: [
          "Indoor plants can add colour, softness, scale, and visual interest to an interior. The choice of plant should reflect the available light, humidity, maintenance routine, and space.",
          "Plants work best when integrated into the design rather than placed as an afterthought. Planters, shelves, window zones, and carefully positioned greenery can create a more cohesive result.",
        ],
      },
    ],
    tips: [
      "Maximise natural light where practical.",
      "Combine wood, stone, textiles, and organic textures.",
      "Choose indoor plants suited to your light conditions.",
      "Use natural patterns and forms in moderation.",
      "Create visual connections between indoor and outdoor spaces.",
    ],
    takeaway:
      "Biophilic design is about more than decoration. It is about creating a thoughtful connection to nature through light, materials, textures, views, and spatial design.",
  },

  {
    slug: "interior-design-project-process",
    title: "From Concept to Completion: The Journey of an Interior Project",
    category: "Design & Execution",
    date: "2026-11-25",
    backgroundImage: "/images/articles/project-process-bg.jpg",
    image: "/images/articles/project-process.jpg",
    excerpt:
      "Explore the stages of an interior design project, from initial consultation and space planning to drawings, manufacturing, installation, and final handover.",
    seoTitle: "Interior Design Project Process | Concept to Execution",
    seoDescription:
      "Understand the interior design process step by step, including consultation, space planning, 3D design, technical drawings, manufacturing, execution, and handover.",
    content: [
      {
        heading: "Every Successful Interior Begins With Understanding",
        paragraphs: [
          "An interior project begins with understanding the people who will use the space. Their lifestyle, functional requirements, preferences, budget, and expectations form the foundation of the design.",
          "The initial consultation helps identify priorities, existing conditions, opportunities, and challenges before design decisions are made.",
        ],
      },
      {
        heading: "Planning and Concept Development",
        paragraphs: [
          "Space planning establishes the layout, furniture positions, circulation, and functional relationships between areas. This stage is essential because it influences the comfort and usability of the finished space.",
          "The design concept develops through references, mood boards, materials, colour palettes, furniture styles, and visual direction.",
        ],
      },
      {
        heading: "Visualisation and Technical Drawings",
        paragraphs: [
          "Three-dimensional visualisations help clients understand the proposed space, materials, proportions, and design language before execution.",
          "Technical drawings translate the design into practical instructions for site work, furniture manufacturing, electrical layouts, ceiling details, joinery, and material installation.",
        ],
      },
      {
        heading: "Manufacturing and Execution",
        paragraphs: [
          "Once the design and technical details are finalised, the project moves into procurement, manufacturing, site preparation, installation, and finishing.",
          "Coordination between designers, fabricators, suppliers, installers, and site teams is essential to maintain quality and ensure the work aligns with approved drawings and specifications.",
        ],
      },
      {
        heading: "Quality Checks and Handover",
        paragraphs: [
          "The final stage involves reviewing completed work, checking functionality, addressing finishing issues, testing hardware, verifying installations, and preparing the space for use.",
          "A structured handover helps ensure the project is completed with attention to detail and provides the client with information about maintenance and care.",
        ],
      },
    ],
    tips: [
      "Define requirements and budget before design begins.",
      "Finalise layouts before furniture manufacturing.",
      "Review material samples in person.",
      "Ensure technical drawings are coordinated across teams.",
      "Maintain quality checks throughout execution, not only at handover.",
    ],
    takeaway:
      "A successful interior project is the result of a structured process. Good design, clear drawings, coordinated execution, and quality checks work together to turn an idea into a functional space.",
  },

  {
    slug: "factory-made-vs-site-carpentry",
    title: "Factory-Made Furniture vs On-Site Carpentry: What Is the Difference?",
    category: "Manufacturing",
    date: "2026-11-25",
    backgroundImage: "/images/articles/factory-vs-carpentry-bg.jpg",
    image: "/images/articles/factory-vs-carpentry.jpg",
    excerpt:
      "Understand the differences between factory manufacturing and on-site carpentry in terms of precision, workflow, quality control, installation, and design flexibility.",
    seoTitle: "Factory Furniture vs On-Site Carpentry | Interior Guide",
    seoDescription:
      "Compare factory-made modular furniture and on-site carpentry. Understand precision, installation, material control, finish quality, flexibility, and project planning.",
    content: [
      {
        heading: "Two Approaches to Furniture Making",
        paragraphs: [
          "Interior furniture can be manufactured in a controlled factory environment or constructed directly at the project site. Both approaches have their place in interior design and depend on the project scope, design complexity, site conditions, and available resources.",
          "Understanding the differences helps homeowners make informed decisions about their furniture, finishes, timelines, and expectations.",
        ],
      },
      {
        heading: "Factory-Made Furniture",
        paragraphs: [
          "Factory manufacturing typically uses a structured production workflow, specialised machinery, cutting systems, edge banding equipment, assembly processes, and quality checks.",
          "Controlled manufacturing conditions can improve consistency and precision across multiple components. It may also reduce the amount of fabrication work required at the project site.",
        ],
      },
      {
        heading: "On-Site Carpentry",
        paragraphs: [
          "On-site carpentry allows furniture to be fabricated and adjusted directly within the project environment. This can be useful when dealing with irregular walls, unique architectural conditions, customised details, or work that requires direct adaptation to the site.",
          "However, site conditions, available equipment, workspace, dust management, and coordination can influence the quality and consistency of the final result.",
        ],
      },
      {
        heading: "Choosing the Right Approach",
        paragraphs: [
          "Factory manufacturing may be suitable for modular kitchens, wardrobes, repetitive cabinetry, and projects where precision and consistent finish quality are priorities.",
          "On-site fabrication may be suitable for specialised detailing, complex site adjustments, or certain bespoke applications. Many projects benefit from a hybrid approach that combines factory-made components with carefully executed site work.",
        ],
      },
    ],
    tips: [
      "Compare manufacturing specifications, not only project prices.",
      "Ask about material quality, edge finishing, and hardware.",
      "Check how measurements and site tolerances are handled.",
      "Understand installation, transport, and warranty responsibilities.",
      "Choose the production method based on the project rather than assuming one is always better.",
    ],
    takeaway:
      "Factory manufacturing and on-site carpentry each offer advantages. The best solution depends on the design, site conditions, production requirements, and the level of quality control needed.",
  },

  {
    slug: "interior-design-budget-planning",
    title: "Planning Your Interior Budget: Where to Invest and Where to Save",
    category: "Budget & Planning",
    date: "2026-11-25",
    backgroundImage: "/images/articles/interior-budget-bg.jpg",
    image: "/images/articles/interior-budget.jpg",
    excerpt:
      "Learn how to allocate your interior budget across furniture, materials, lighting, hardware, finishes, and execution while prioritising long-term value.",
    seoTitle: "Interior Design Budget Guide | Planning Your Home Interiors",
    seoDescription:
      "Plan your interior design budget smartly. Understand costs for furniture, finishes, lighting, hardware, execution, and where to invest for long-term value.",
    content: [
      {
        heading: "Start With Priorities",
        paragraphs: [
          "Interior budgeting begins with identifying the spaces and features that matter most. The budget should reflect your lifestyle, functional needs, aesthetic preferences, and long-term expectations.",
          "Rather than making every element a priority, determine which components have the greatest impact on functionality, durability, and the overall experience of your home.",
        ],
      },
      {
        heading: "Invest in the Elements You Use Every Day",
        paragraphs: [
          "Furniture systems, kitchen storage, wardrobe hardware, mattresses, seating, and frequently used surfaces often deserve careful consideration because they directly influence everyday comfort and usability.",
          "Choosing appropriate materials and hardware can reduce inconvenience and maintenance requirements over time.",
        ],
      },
      {
        heading: "Where You Can Be Flexible",
        paragraphs: [
          "Decorative accessories, feature elements, secondary finishes, and certain visual details can often be adjusted to align with the budget without compromising the overall design.",
          "A balanced design can use a few high-impact materials and details while keeping secondary areas simpler and more economical.",
        ],
      },
      {
        heading: "Account for the Complete Project",
        paragraphs: [
          "An interior budget should consider more than furniture. Electrical modifications, ceiling work, lighting, painting, civil work, appliances, transport, installation, and other project requirements may contribute to the overall cost.",
          "Clear specifications and a detailed scope of work help avoid misunderstandings and make it easier to compare quotations accurately.",
        ],
      },
    ],
    tips: [
      "Establish a realistic budget before finalising the design.",
      "Prioritise function, durability, and frequently used elements.",
      "Compare quotations with matching specifications.",
      "Include installation and site work in your budget planning.",
      "Keep a contingency for unforeseen site conditions.",
    ],
    takeaway:
      "A smart interior budget is not about choosing the cheapest option. It is about allocating resources thoughtfully to create the greatest long-term value.",
  },

  {
    slug: "interior-hardware-guide",
    title: "The Hidden Details: Understanding Interior Furniture Hardware",
    category: "Hardware & Detailing",
    date: "2026-11-25",
    backgroundImage: "/images/articles/furniture-hardware-bg.jpg",
    image: "/images/articles/furniture-hardware.jpg",
    excerpt:
      "Discover how hinges, drawer runners, lift systems, handles, and specialised accessories influence furniture functionality, durability, and everyday comfort.",
    seoTitle: "Interior Furniture Hardware Guide | Hinges, Drawers & Accessories",
    seoDescription:
      "Learn about furniture hardware including hinges, drawer runners, lift-up systems, pull-outs, and accessories. Understand how hardware improves functionality and usability.",
    content: [
      {
        heading: "Hardware Is the Function Behind the Finish",
        paragraphs: [
          "Furniture hardware may be small in appearance, but it plays a major role in how furniture functions. Hinges, drawer runners, lift mechanisms, handles, and organisers determine how smoothly storage systems operate.",
          "Hardware selection influences movement, accessibility, load capacity, noise, durability, and the overall experience of using furniture.",
        ],
      },
      {
        heading: "Understanding Hinges",
        paragraphs: [
          "Hinges connect cabinet shutters to the furniture carcass and allow them to open and close. Different hinge types support different opening angles, overlays, mounting conditions, and design requirements.",
          "Soft-close mechanisms can reduce impact and improve the closing experience, while the correct hinge selection and adjustment help ensure proper alignment.",
        ],
      },
      {
        heading: "Drawer Runners and Movement",
        paragraphs: [
          "Drawer runners support drawer movement and influence extension, stability, load handling, and closing behaviour. Different systems offer partial extension, full extension, concealed runners, and soft-close functionality.",
          "The correct system depends on the drawer dimensions, weight, intended use, and furniture construction.",
        ],
      },
      {
        heading: "Accessories That Improve Organisation",
        paragraphs: [
          "Pull-out baskets, corner mechanisms, pantry units, cutlery organisers, trouser racks, lift-up systems, and internal organisers help make storage more accessible.",
          "Accessories should be selected according to the user's requirements and the available space. Adding too many mechanisms can increase complexity without necessarily improving usability.",
        ],
      },
    ],
    tips: [
      "Select hardware based on load and usage requirements.",
      "Check compatible cabinet dimensions before ordering.",
      "Use soft-close mechanisms where they add meaningful comfort.",
      "Choose accessories according to actual storage needs.",
      "Ensure installation and adjustment are performed correctly.",
    ],
    takeaway:
      "Great furniture is not only about how it looks. The quality and selection of hardware determine how smoothly it functions, how comfortably it is used, and how well it performs over time.",
  },

  {
    slug: "interior-maintenance-guide",
    title: "Maintaining Your Interiors: A Guide to Materials and Finishes",
    category: "Maintenance & Care",
    date: "2026-11-25",
    backgroundImage: "/images/articles/interior-maintenance-bg.jpg",
    image: "/images/articles/interior-maintenance.jpg",
    excerpt:
      "Learn how to maintain wood, laminate, stone, glass, metal, upholstery, and interior surfaces to preserve their appearance and extend their life.",
    seoTitle: "Interior Maintenance Guide | Wood, Laminate, Stone & Furniture",
    seoDescription:
      "Maintain your interiors with practical care tips for wood, laminate, veneer, stone, glass, metal, upholstery, and furniture surfaces.",
    content: [
      {
        heading: "Good Design Deserves Good Maintenance",
        paragraphs: [
          "The appearance and performance of interiors depend not only on material selection and workmanship but also on everyday care. Regular cleaning and appropriate maintenance help preserve finishes and prevent avoidable damage.",
          "Different materials react differently to moisture, heat, chemicals, sunlight, and abrasion. Understanding the correct care method is important.",
        ],
      },
      {
        heading: "Caring for Wood and Veneer",
        paragraphs: [
          "Wood and veneer surfaces should be cleaned with soft, dry, or slightly damp cloths according to the finish manufacturer's recommendations. Excess moisture and harsh chemicals may damage the finish.",
          "Avoid prolonged exposure to direct sunlight and standing water. Use coasters, protective pads, and appropriate cleaning methods for finished wood surfaces.",
        ],
      },
      {
        heading: "Caring for Laminates",
        paragraphs: [
          "Laminate surfaces are generally easy to maintain and can often be cleaned using a soft cloth and mild cleaning solution. Abrasive pads and harsh chemicals should be avoided because they may affect the surface finish.",
          "Edges and joints should be kept dry, particularly in areas exposed to water or frequent cleaning.",
        ],
      },
      {
        heading: "Caring for Stone, Glass, and Metal",
        paragraphs: [
          "Stone surfaces require cleaning products suitable for their type and finish. Some natural stones are sensitive to acidic cleaners, while others may require periodic sealing depending on the material.",
          "Glass can generally be maintained with suitable glass cleaners and soft cloths. Metal finishes should be cleaned using products compatible with their coating to prevent scratching, discolouration, or corrosion.",
        ],
      },
      {
        heading: "Preventive Care Matters",
        paragraphs: [
          "Preventive measures such as wiping spills promptly, avoiding excessive heat, using protective mats, maintaining ventilation, and checking hardware periodically can help reduce wear and preserve the interior.",
          "Always follow the specific care instructions provided by the material or product manufacturer.",
        ],
      },
    ],
    tips: [
      "Use soft cleaning cloths rather than abrasive scrubbers.",
      "Wipe spills promptly, especially near furniture joints and edges.",
      "Avoid harsh chemicals unless approved for the material.",
      "Protect surfaces from heat, scratches, and prolonged sunlight.",
      "Check hinges, runners, handles, and other moving hardware periodically.",
    ],
    takeaway:
      "Thoughtful maintenance protects your investment. Simple, material-appropriate cleaning habits can help interiors remain beautiful, functional, and durable for years.",
  },

  {
    slug: "false-ceiling-design-guide",
    title: "False Ceilings Explained: Design, Lighting and Functionality",
    category: "Ceiling Design",
    date: "2026-11-25",
    backgroundImage: "/images/articles/false-ceiling-bg.jpg",
    image: "/images/articles/false-ceiling.jpg",
    excerpt:
      "Understand false ceiling types, lighting integration, proportions, material considerations, and how ceiling design influences the overall interior experience.",
    seoTitle: "False Ceiling Design Guide | Types, Lighting & Planning",
    seoDescription:
      "Explore false ceiling design options, gypsum and other ceiling materials, cove lighting, recessed lights, proportions, and planning considerations for modern interiors.",
    content: [
      {
        heading: "What Is a False Ceiling?",
        paragraphs: [
          "A false ceiling is a secondary ceiling installed below the structural ceiling. It can conceal electrical services, ducting, wiring, and other building components while providing opportunities for lighting, acoustics, and visual design.",
          "False ceilings can be designed in simple, minimal forms or with layered elements, depending on the room, ceiling height, and functional requirements.",
        ],
      },
      {
        heading: "Choosing the Right Ceiling Design",
        paragraphs: [
          "Ceiling design should complement the architecture and furniture layout rather than become an isolated decorative element. Room proportions, ceiling height, ventilation, access to services, and lighting requirements all influence the design.",
          "Simple ceiling layouts can often create a cleaner and more timeless result than overly complicated forms.",
        ],
      },
      {
        heading: "Lighting Integration",
        paragraphs: [
          "False ceilings can accommodate recessed lights, linear profiles, cove lighting, pendants, and other fixtures. The arrangement should support the intended lighting layers and activities of the room.",
          "Light positions should be coordinated with furniture, wall features, circulation, and electrical planning to avoid glare or unwanted shadows.",
        ],
      },
      {
        heading: "Materials and Practical Considerations",
        paragraphs: [
          "Ceiling materials should be selected based on the intended application, installation conditions, moisture exposure, service access, and required performance.",
          "Electrical, HVAC, sprinkler, and other service components should be coordinated before ceiling closure. Appropriate access panels may be necessary for future maintenance.",
        ],
      },
    ],
    tips: [
      "Consider the existing ceiling height before adding layers.",
      "Keep ceiling design coordinated with the furniture layout.",
      "Plan lighting positions and wiring before installation.",
      "Provide access to concealed services where required.",
      "Choose ceiling details that complement the overall design language.",
    ],
    takeaway:
      "A well-designed ceiling balances aesthetics, lighting, proportions, and technical requirements. The best ceiling is one that enhances the room without compromising its comfort or functionality.",
  },
];

// Generate static article pages
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    return {
      title: 'Article Not Found | Ferrwud',
    };
  }

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.image],
      type: 'article',
    },
  };
}

// Article Detail Page
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find(
    (item) => item.slug === slug
  );

  // Show 404 if article does not exist
  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Article Hero Section */}
      <section className="page-hero">
        <img
            src={article.backgroundImage}
            alt=""
        />

        <div className="page-hero-content">
            <span className="eyebrow">
            THE FERRWUD JOURNAL / {article.category}
            </span>

            <h1>{article.title}</h1>

            <p>{article.date}</p>
        </div>
    </section>

      {/* Article Content */}
      <article className="article-body">

        {/* Back Navigation */}
        <Link
          className="text-link"
          href="/design-ideas"
        >
          <ArrowLeft size={15} />
          Back to the journal
        </Link>

        {/* Article Cover Image */}
        <div className="article-cover">
            <img
                src={article.image}
                alt={article.title}
            />
        </div>

        {/* Article Introduction */}
        <p>{article.excerpt}</p>

        {/* Full Article Content */}
        {article.content.map((section, index) => (
          <section key={index}>
            <h2>{section.heading}</h2>

            {section.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>
        ))}

        {/* Practical Tips */}
        <h2>Practical Tips</h2>

        <ul>
          {article.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>

        {/* Key Takeaway */}
        <h2>Key Takeaway</h2>

        <p>{article.takeaway}</p>

        {/* Project CTA Link */}
        <Link
          href="/start-a-project"
          className="text-link"
        >
          Discuss your space
          <ArrowUpRight size={15} />
        </Link>

      </article>

      {/* Call To Action */}
      <CTA />
    </>
  );
}
