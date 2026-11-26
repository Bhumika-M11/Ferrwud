
import type { Metadata } from 'next';
import { photos } from '@/lib/data';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore illustrative residential and commercial interior design concepts from FERRWUD.',
};

const randomImages = [
  '/images/office/it9.jpg',
  '/images/office/it10.jpg',
  '/images/office/it11.jpg',
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg',
  photos.about,
    photos.contact,
    photos.it1,
    photos.it2,
    photos.it3,
    photos.living,
    photos.kitchen,
    photos.villa,
    photos.office,
];

export default function ProjectsPage() {
  const heroImages = [
    photos.it1,
    photos.it2,
    photos.it3,
    photos.about,
    photos.living,
    '/images/kitchen/k2.jpg',
    '/images/kitchen/k5.jpg',
    '/images/kitchen/k6.jpg',
    photos.villa,
    photos.office,
    '/images/office/it9.jpg',
    '/images/office/it10.jpg',
    '/images/office/it11.jpg',
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg',
    '/7.jpg',
    '/8.jpg',
    '/9.jpg',
  ];

  return (
    <>
 
<section className="page-hero">
  <div className="hero-slideshow">
    {heroImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`FERRWUD interior design ${index + 1}`}
        className="hero-slide"
        style={{
          animationDelay: `${index * 4}s`,
          filter: 'brightness(1.2) contrast(1.08) saturate(1.2)',
        }}
      />
    ))}
  </div>

  <div className="hero-overlay"></div>

  <div className="page-hero-content">
    <span className="eyebrow">
      THE FERRWUD PORTFOLIO
    </span>

    <h1>Spaces we've shaped.</h1>

    <p>
      Explore ideas for homes, workspaces and places to gather.
      Each concept is a starting point for a more personal
      design conversation.
    </p>
  </div>
</section>


      {/* Existing Projects */}
      <section className="content-page">
        <Portfolio />
      </section>

      
{/* Random Interior Gallery Carousel */}

<section className="random-gallery">

  <div className="gallery-heading">
          <span className="eyebrow">DESIGN INSPIRATION</span>
          <h2>More spaces. More inspiration.</h2>
          <p>
            A collection of interiors, details and design ideas
            that inspire beautiful living.
          </p>
        </div>

  <div className="random-carousel">
    <div className="random-carousel-track">
      {[...randomImages, ...randomImages].map((image, index) => (
        <div className="random-carousel-card" key={index}>
          <img
            src={image}
            alt={`FERRWUD interior inspiration ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>

</section>


      <CTA />
    </>
  );
}
