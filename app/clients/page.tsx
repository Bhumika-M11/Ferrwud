
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Clients | FERRWUD",
  description:
    "Discover the organizations FERRWUD works with, delivering furniture manufacturing and workspace interior solutions.",
};

/* =========================================
   CLIENT LOGOS
========================================= */

const clients = [
  { name: "ABB", logo: "/images/clients/abb.png" },
  { name: "ACE", logo: "/images/clients/ace.png" },
  { name: "Amphenol", logo: "/images/clients/amphenol.png" },
  { name: "Asterrv", logo: "/images/clients/asterrv.png" },
  { name: "BHEL", logo: "/images/clients/bhel.png" },
  { name: "Blueneem", logo: "/images/clients/blueneem.png" },
  { name: "Copprrod", logo: "/images/clients/copprrod.png" },
  { name: "Fimer", logo: "/images/clients/fimer.png" },
  { name: "H&G", logo: "/images/clients/h&g.png" },
  { name: "HomeLane", logo: "/images/clients/homelane.png" },
  { name: "Nash", logo: "/images/clients/nash.png" },
  { name: "Sangam", logo: "/images/clients/sangam.png" },
  { name: "Vertivo", logo: "/images/clients/vertivo.png" },
];

/* =========================================
   STATISTICS
   Replace with verified FERRWUD figures
========================================= */

const statistics = [
  { value: "110+", label: "CLIENTS SERVED" },
  { value: "500+", label: "PROJECTS DELIVERED" },
  { value: "19+", label: "YEARS OF EXPERIENCE" },
];

/* =========================================
   TESTIMONIALS
========================================= */

const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
}[] = [];

export default function ClientsPage() {
  return (
    <main className="fw-clients-page">

      {/* =====================================
          01. HERO SECTION
      ===================================== */}

      <section
        className="fw-clients-hero"
        aria-labelledby="clients-heading"
      >
        <div className="fw-clients-container fw-clients-hero-inner">

          <span className="fw-clients-hero-kicker">
            FERRWUD / OUR CLIENTS
          </span>

          <h1 id="clients-heading">
            Partnerships
            <br />
            Built On <span>Trust.</span>
          </h1>

          <p>
            Building lasting relationships through
            innovative furniture solutions, precision
            manufacturing and thoughtfully designed
            commercial workspaces.
          </p>

          <a
            href="#client-organizations"
            className="fw-clients-hero-link"
          >
            EXPLORE OUR CLIENTS
            <ArrowUpRight size={17} />
          </a>

        </div>
      </section>

      {/* =====================================
          02. STATISTICS SECTION
      ===================================== */}

      <section
        className="fw-client-stats-section"
        aria-label="FERRWUD company statistics"
      >
        <div className="fw-clients-container">

          <div className="fw-client-stats">
            {statistics.map((stat) => (
              <div
                className="fw-stat-item"
                key={stat.label}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          03. CLIENT LOGOS
      ===================================== */}

      <section
        id="client-organizations"
        className="fw-clients-section"
        aria-labelledby="organizations-heading"
      >
        <div className="fw-clients-container">

          <div className="fw-clients-section-heading">
            <span className="fw-clients-eyebrow">
              OUR VALUED CLIENTS
            </span>

            <h2
              id="organizations-heading"
              className="fw-clients-title"
            >
              Trusted Relationships.
              <br />
              <span>Lasting Impact.</span>
            </h2>

            <p className="fw-clients-intro">
              At FERRWUD, we value the relationships
              that drive every successful project.
              Our focus on quality furniture,
              precision manufacturing and functional
              workspace solutions supports the needs
              of diverse commercial environments.
            </p>
          </div>

          <div className="fw-clients-grid">
            {clients.map((client) => (
              <div
                className="fw-client-logo"
                key={client.name}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={180}
                  height={90}
                  className="fw-logo-img"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          04. CLIENT EXPERIENCES
      ===================================== */}

      <section
        className="fw-testimonials-section"
        aria-labelledby="testimonials-heading"
      >
        <div className="fw-clients-container">

          <div className="fw-clients-section-heading">
            <span className="fw-clients-eyebrow">
              CLIENT EXPERIENCES
            </span>

            <h2
              id="testimonials-heading"
              className="fw-clients-title"
            >
              Relationships Built
              <br />
              <span>On Trust.</span>
            </h2>

            <p className="fw-clients-intro">
              We believe successful projects go
              beyond furniture and interiors.
              They are shaped by clear communication,
              thoughtful execution and lasting
              professional relationships.
            </p>
          </div>

          {testimonials.length > 0 ? (
            <div className="fw-testimonials-grid">
              {testimonials.map((item, index) => (
                <article
                  className="fw-testimonial-card"
                  key={`${item.name}-${index}`}
                >
                  <Quote
                    size={25}
                    className="fw-testimonial-quote"
                    fill="currentColor"
                  />

                  <blockquote>
                    “{item.quote}”
                  </blockquote>

                  <div className="fw-testimonial-author">
                    <strong>{item.name}</strong>
                    <small>
                      {item.role}
                      <span> · {item.company}</span>
                    </small>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="fw-testimonials-empty">
              <Quote size={29} aria-hidden="true" />

              <p>
                Client experiences and project stories
                will be shared here when approved
                for publication.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* =====================================
          05. FINAL CTA
      ===================================== */}

      <section
        className="fw-clients-cta"
        aria-labelledby="clients-cta-heading"
      >
        <div className="fw-clients-container fw-clients-cta-content">
          
          <div className="fw-clients-cta-bottom">
            <div>
              <span className="fw-clients-eyebrow">
                FURNITURE & WORKSPACE SOLUTIONS
              </span>

              <h3>
                THOUGHTFULLY DESIGNED.
                <br />
                BUILT TO <em>PERFORM.</em>
              </h3>
            </div>

            <Link
              href="/contact"
              className="fw-clients-pill"
            >
              LET'S CONNECT
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
