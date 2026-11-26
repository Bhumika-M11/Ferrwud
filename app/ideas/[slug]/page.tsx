
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import CTA from '@/components/CTA';
import { articles } from '@/lib/articles';


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
