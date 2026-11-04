import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin, MessageCircle, Palette, Ruler, Layers3 } from 'lucide-react';
import { photos } from '@/lib/data';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Our Studio',
  description: 'Meet FERRWUD at the studio to discuss your space, explore ideas and shape your interior design brief.',
};

const moments = [
  { icon: MessageCircle, number: '01', title: 'A conversation first', text: 'Tell us how you live, work or welcome people into your space. We start by listening to your priorities and aspirations.' },
  { icon: Palette, number: '02', title: 'Explore the possibilities', text: 'Discuss moods, colours, finishes and the atmosphere you want to create before the details begin to take shape.' },
  { icon: Ruler, number: '03', title: 'Shape the brief', text: 'Bring the practical needs into focus: how the space should function, what matters most and what happens next.' },
];

export default function OurStudio() {
  return <>
    <section className="page-hero"><img src={photos.detail} alt="Warm interior details and material inspiration in a design studio"/><div className="page-hero-content"><span className="eyebrow">REACH US · OUR STUDIO</span><h1>A place for ideas<br/>to take <em>shape.</em></h1><p>Every thoughtful space begins with a conversation. Meet FERRWUD to explore your ideas, discuss materials and find a direction that feels like you.</p></div></section>
    <section className="content-page"><div className="content-two-col"><div><span className="eyebrow">THE FERRWUD STUDIO</span><h2>Come with a vision.<br/><em>Leave with a direction.</em></h2><p>Our studio is a space to slow down, exchange ideas and think through the details that make a space feel personal. Whether you are planning a home or a commercial environment, we can use the first conversation to understand your brief and the way you want the space to work.</p><p>Bring reference images, a floor plan or simply a few thoughts. You do not need to have every decision made before we begin.</p><Link className="button" href="/start-a-project">Plan your first conversation <ArrowUpRight size={16}/></Link></div><div className="content-image"><img src={photos.living} alt="Calm contemporary living space with warm textures"/></div></div>
      <div style={{marginTop:80}}><span className="eyebrow">A THOUGHTFUL FIRST STEP</span><h2>What we can explore <em>together.</em></h2><div className="feature-list">{moments.map(({icon:Icon,number,title,text})=><article className="feature-item" key={number}><span>{number}</span><Icon size={22} color="#873B2D" style={{marginTop:15}}/><h3>{title}</h3><p>{text}</p></article>)}</div></div>
    </section>
    <section className="content-page" style={{background:'var(--beige)',maxWidth:'none'}}><div style={{maxWidth:900,margin:'auto',textAlign:'center'}}><span className="eyebrow">PLAN A VISIT</span><h2>Let’s make time for <em>good ideas.</em></h2><p>We are preparing our verified studio address and visiting details. Contact FERRWUD before travelling so the team can confirm the location and arrange a suitable time.</p><div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap',marginTop:25}}><Link className="button" href="/contact">Contact FERRWUD <ArrowUpRight size={16}/></Link><Link className="button" href="/our-factory" style={{background:'transparent',color:'var(--charcoal)',borderColor:'var(--charcoal)'}}>Explore our factory <ArrowUpRight size={16}/></Link></div><p style={{fontSize:11,marginTop:24}}><MapPin size={14} style={{display:'inline',verticalAlign:'middle',marginRight:6}}/>Studio address and opening hours will be added once confirmed.</p></div></section>
    <CTA/>
  </>;
}
