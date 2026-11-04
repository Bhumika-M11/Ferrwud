import Link from 'next/link'; 
import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react'; 
import { photos, projects, articles } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import SectionIntro from '@/components/SectionIntro'; 
import CTA from '@/components/CTA';
export default function Home() {
    return <>
        <section className="hero">
            <img className="hero-image" src={photos.hero} alt="Warm contemporary living room with considered textures and natural light" />
            <div className="hero-shade" />
            <div className="hero-content">
                <span className="eyebrow hero-eyebrow">FERRWUD <i /> FUSION BY DESIGN</span><h1>Spaces that<br /><em>tell your story.</em></h1>
                <p>We specialise in the design and execution of residential, commercial, and institutional interiors, creating environments that respond to the unique needs of the people who inhabit, work in, and experience them.</p>
                <div className="hero-actions">
                    <Link href="/projects" className="button button-light">Explore our projects <ArrowUpRight size={16} /></Link>
                    <Link href="/start-a-project" className="hero-secondary">Start your project <MoveUpRight size={16} /></Link>
                </div></div>
            <div className="hero-bottom">
                <span>INTERIORS WITH INTENTION</span>
                <a href="#introduction">Scroll to discover <ArrowDown size={14} /></a>
                <span>01 / 04</span>
            </div></section>

        <section className="intro-section section-pad" id="introduction">
            <div className="intro-side">
                <span className="eyebrow">A THOUGHTFUL POINT OF VIEW</span>
                <span className="vertical-label">FERRWUD · EST. DESIGNING AROUND YOU</span></div>
            <div className="intro-copy"><h2>Where thoughtful design meets <em>everyday living.</em></h2>
                <p>Every FERRWUD project begins with understanding the client’s vision, followed by a considered approach to space planning, material selection and detailing. Each decision is guided by purpose, resulting in spaces that balance aesthetics, functionality and enduring design.</p>
                <Link href="/about" className="text-link">Discover our story <ArrowUpRight size={16} /></Link></div>
            <div className="intro-image">
                <img src={photos.detail} alt="Close-up of warm wood, stone and considered interior finishes" loading="lazy" />
                <span>01 — THE ART OF DETAIL</span></div></section>

        <section className="projects-section section-pad">
            <div className="section-heading-row">
                <SectionIntro eyebrow="A SELECTION OF CONCEPTS" title="Spaces we've shaped" description="Every space begins with an idea. Every detail brings it to life." />
                <Link href="/projects" className="text-link heading-link">View all projects <ArrowUpRight size={16} /></Link></div>
            <div className="project-grid home-projects">{projects.slice(0, 4).map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}</div>
            <p className="demo-disclaimer">Portfolio imagery and project names shown here are illustrative demo concepts, not confirmed FERRWUD client projects.</p></section>

        <section className="manifesto">
            <div className="manifesto-image">
                <img src={photos.villa} alt="Contemporary home interior concept" loading="lazy" /></div>
            <div className="manifesto-copy">
                <span className="eyebrow">DESIGN THAT FEELS LIKE YOU</span>
                <h2>Less about trends.<br /><em>More about you.</em></h2>
                <p>Our approach begins with listening. The result is a considered design direction shaped around how you live, what you value and the feeling you want your space to hold.</p>
                <Link href="/about" className="text-link light-link">The FERRWUD approach <ArrowUpRight size={16} /></Link>
                <div className="manifesto-index">F / 02</div></div></section>


        <section className="process-section section-pad">
            <SectionIntro eyebrow="A CLEARER WAY FORWARD" title="Good design is a conversation." description="A collaborative journey, shaped around your brief and the scope agreed together." />
            <div className="process-grid">{[{ n: '01', t: 'Discovery & consultation', d: 'Understand your lifestyle, preferences, functional needs and space.' }, { n: '02', t: 'Concept & design', d: 'Explore layouts, mood boards, materials and visual direction.' }, { n: '03', t: 'Execution & craft', d: 'Coordinate the agreed work, materials and implementation scope.' }, { n: '04', t: 'Final reveal & handover', d: 'Review the finished work and bring the agreed details together.' }].map(s =>
                 <div className="process-step" key={s.n}>
                    <span>{s.n}</span>
                 <div className="process-line" />
                 <h3>{s.t}</h3>
                 <p>{s.d}</p>
                 </div>)}
                 </div></section>

        <section className="journal-section section-pad">
            <div className="section-heading-row">
                <SectionIntro eyebrow="NOTES ON INSPIRED LIVING" title="Ideas to live with" description="Small observations, practical starting points and inspiration for a more considered space." />
                <Link href="/design-ideas" className="text-link heading-link">Visit the journal <ArrowUpRight size={16} />
                </Link></div>
                <div className="journal-grid">{articles.slice(0, 3).map(a => 
                    <Link href={`/ideas/${a.slug}`} className="journal-card" key={a.slug}>
                <div>
                    <img src={a.image} alt={a.title} loading="lazy" /></div>
                    <span className="project-category">{a.category}</span>
                    <h3>{a.title}</h3>
                    <p>{a.excerpt}</p>
                    <span className="text-link">Read the story 
                        <ArrowUpRight size={15} /></span></Link>)}</div>
                        <p className="demo-disclaimer">Journal entries are original placeholder content for the starter site and should be reviewed before launch.</p>
                        </section>
        <CTA /></>
}
