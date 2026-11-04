import type { Metadata } from 'next';
import { photos } from '@/lib/data';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore illustrative residential and commercial interior design concepts from FERRWUD.',
};

export default function ProjectsPage() {
  const heroImages = [
    photos.about,
    photos.project3,
    photos.contact,
    photos.it,
    photos.it1,
    photos.it2,
    photos.it3,
    photos.living,
    photos.kitchen,
    photos.villa,
    photos.office,
    photos.detail,
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

      <section className="content-page">
        <Portfolio />
      </section>

      <CTA />
    </>
  );
}