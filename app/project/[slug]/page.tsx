import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

import { projects, photos } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import CTA from '@/components/CTA';

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const p = projects.find((x) => x.slug === slug);

  return {
    title: p?.title || 'Project',
    description: p?.intro,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = projects.find((x) => x.slug === slug);

  if (!p) notFound();

  const related = projects
    .filter((x) => x.slug !== p.slug)
    .slice(0, 2);

  return (
    <>
      <section className="project-detail-hero">
        <img
          src={p.image}
          alt={`${p.title} interior concept`}
        />

        <div className="project-detail-title">
          <span className="eyebrow">
            {p.category} / CONCEPT PROJECT
          </span>

          <h1>{p.title}</h1>

          <p>
            {p.location} · {p.style}
          </p>
        </div>
      </section>

      <section className="detail-intro">
        <div>
          <span className="eyebrow">THE IDEA</span>
          <h2>{p.intro}</h2>
        </div>

        <div>
          <p>
            This page demonstrates the FERRWUD project-story
            template. The project title, location, design
            description and images are illustrative demo
            content, not a verified client commission.
          </p>

          <p>
            The design direction explores the relationship
            between material, light, proportion and everyday
            use. A real project page can be updated with the
            approved client brief, actual location, final
            materials and genuine photography.
          </p>

          <Link
            href="/start-a-project"
            className="text-link"
          >
            Start a similar project
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section className="detail-gallery">
  {p.gallery.map((photo, index) => (
    <div className="detail-gallery-item" key={index}>
      <img
        src={photo}
        alt={`${p.title} gallery image ${index + 1}`}
      />
    </div>
  ))}
</section>

      <section className="content-page">
        <div className="section-heading-row">
          <div className="section-intro">
            <span className="eyebrow">KEEP EXPLORING</span>
            <h2>Related concepts</h2>
          </div>

          <Link
            href="/projects"
            className="text-link"
          >
            All projects
            <ArrowLeft size={15} />
          </Link>
        </div>

        <div className="project-grid">
          {related.map((x, i) => (
            <ProjectCard
              key={x.slug}
              project={x}
              index={i}
            />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}