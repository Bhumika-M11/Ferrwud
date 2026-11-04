import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { photos } from '@/lib/data';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
    title: 'About FERRWUD | Fusion by Design',
    description:
        'Discover FERRWUD — Fusion by Design. We create thoughtful residential, commercial and institutional interiors that bring aesthetics, functionality and purpose together.',
};

  const bannerImages = [
    photos.about,
    photos.project3,
    photos.contact,
    photos.it,
    photos.it1,
    '/images/kitchen/k4.jpg',
    '/images/kitchen/k5.jpg',
    '/images/bedrooms/b4.png',
    '/images/bedrooms/b5.png',
    '/images/bedrooms/b6.png',
    '/images/kitchen/k6.jpg',
    '/images/kitchen/k7.png',
    '/images/bedrooms/b1.png',
    photos.it2,
    photos.it3,
    photos.living,
    '/images/bedrooms/b3.png',
    photos.kitchen,
    photos.villa,
    '/images/kitchen/k1.jpg',
    '/images/kitchen/k2.jpg',
    '/images/kitchen/k3.jpg',  
  ];
  
export default function About() {
    return (
        <>
            <section className="page-hero">
                <img
                    src={photos.about}
                    alt="Thoughtfully designed contemporary interior with refined natural finishes"
                />

                <div className="page-hero-content">
                    <span className="eyebrow">
                        FERRWUD · FUSION BY DESIGN
                    </span>

                    <h1>
                        Good design goes beyond
                        <br />
                        <em>appearances.</em>
                    </h1>

                    <p>
                        We believe exceptional design is not merely about how
                        a space looks, but how it feels, functions and evolves
                        with the people who inhabit it.
                    </p>
                </div>
            </section>

            <section className="content-page">
                <div className="content-two-col">
                    <div>
                        <span className="eyebrow">
                            OUR DESIGN PHILOSOPHY
                        </span>

                        <h2>
                            More than spaces.
                            <br />
                            <em>A way of living.</em>
                        </h2>

                        <p>
                            At FERRWUD, we believe that exceptional design
                            goes beyond appearances. It is about creating
                            environments that respond to the people who
                            inhabit them, enhancing the way they live, work
                            and experience the world around them.
                        </p>

                        <p>
                            Every project begins with a deeper understanding
                            of our clients — their vision, lifestyle,
                            aspirations and everyday needs. This understanding
                            shapes our approach to spatial planning, material
                            selection, textures, finishes and detailing,
                            ensuring that every design decision serves a
                            purpose.
                        </p>

                        <Link
                            className="text-link"
                            href="/start-a-project"
                        >
                            Start a conversation <ArrowUpRight size={16} />
                        </Link>
                    </div>

                    <div className="content-image">
                        <img
                            src={photos.decor}
                            alt="A considered composition of natural materials, textures and refined interior finishes"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="feature-list">
                    {[
                        {
                            n: '01',
                            t: 'Design with purpose',
                            d: 'Create spaces where every decision has meaning and every element contributes to the overall experience.',
                        },
                        {
                            n: '02',
                            t: 'Thoughtful space planning',
                            d: 'Shape layouts around movement, comfort, functionality and the everyday needs of the people who use them.',
                        },
                        {
                            n: '03',
                            t: 'A balance of form and function',
                            d: 'Bring aesthetics and practicality together through considered design and intuitive functionality.',
                        },
                        {
                            n: '04',
                            t: 'Materials, textures & finishes',
                            d: 'Combine materials, tones and tactile details to create depth, character and a sense of harmony.',
                        },
                        {
                            n: '05',
                            t: 'Contemporary yet enduring',
                            d: 'Create distinctive interiors that embrace contemporary expression while retaining lasting appeal.',
                        },
                        {
                            n: '06',
                            t: 'Designed around people',
                            d: 'Understand each clients vision, lifestyle and aspirations to create spaces that feel personal and meaningful.',
                        },
                    ].map((x) => (
                        <div className="feature-item" key={x.n}>
                            <span>{x.n}</span>
                            <h3>{x.t}</h3>
                            <p>{x.d}</p>
                        </div>
                    ))}
                </div>

                <div
                    style={{ marginTop: 85 }}
                    className="content-two-col"
                >
                    <div className="content-image">
                        <img
                            src={photos.villa}
                            alt="Contemporary residential interior combining architectural sensibility and everyday functionality"
                            loading="lazy"
                        />
                    </div>

                    <div>
                        <span className="eyebrow">
                            OUR AREAS OF DESIGN
                        </span>

                        <h2>
                            Distinctive spaces.
                            <br />
                            <em>Meaningful experiences.</em>
                        </h2>

                        <p>
                            Bringing together architectural sensibility,
                            creative expression and functional thinking,
                            we craft distinctive interiors that balance
                            aesthetics with practicality and contemporary
                            design with enduring appeal.
                        </p>

                        <p>
                            From thoughtfully designed residences and
                            bespoke kitchens to dynamic commercial and
                            institutional environments, our focus remains
                            on creating spaces that are meaningful,
                            refined and intuitively functional.
                        </p>

                        <Link
                            href="/projects"
                            className="text-link"
                        >
                            Explore our projects <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>

                <div
                    style={{
                        marginTop: 100,
                        padding: '55px 0',
                        borderTop: '1px solid var(--line, #d8d2c8)',
                        textAlign: 'center',
                    }}
                >
                    {/* Scrolling image banner */}
      <section className="scrolling-banner">
        <div className="scrolling-track">
          {[...bannerImages, ...bannerImages].map((image, index) => (
            <div className="scrolling-image" key={index}>
              <img
                src={image}
                alt={`FERRWUD interior design inspiration ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
                    <span className="eyebrow">
                        THE FERRWUD BELIEF
                    </span>

                    <h2>
                        Design is the art of bringing
                        <br />
                        materials, people and purpose
                        <br />
                        <em>together in harmony.</em>
                    </h2>

                    <p
                        style={{
                            maxWidth: 650,
                            margin: '20px auto 28px',
                        }}
                    >
                        For us, design is more than the arrangement of
                        elements within a space. It is about creating
                        environments that feel connected, considered
                        and purposeful.
                    </p>

                    <span className="eyebrow">
                        FERRWUD — WHERE DESIGN FINDS ITS PURPOSE.
                    </span>

                    <div style={{ marginTop: 28 }}>
                        <Link
                            href="/start-a-project"
                            className="text-link"
                        >
                            Bring your vision to life{' '}
                            <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </div>

                <p className="demo-disclaimer">
                    Add verified information about the FERRWUD team,
                    studio, experience and completed projects before
                    publishing.
                </p>
            </section>

            <CTA />
        </>
    );
}
