import Link from 'next/link'; 
import { ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from "next/image";
export default function Footer() 
{ return <footer className="footer">
    <div className="footer-top">
        <div className="footer-brand">
             <Link
      href="/"
      className="wordmark footer-mark"
      aria-label="Ferrwud home"
    >
      <Image
        src="/logo.png"
        alt="FERRWUD - Fusion by Design"
        width={80}
        height={80}
        priority
        className="logo-image"
      />
    </Link>
            <div className="socials"><a href="#socials" aria-label="Instagram placeholder">
                <Instagram size={17} /></a><a href="#socials" aria-label="Facebook placeholder">
                    <Facebook size={17} /></a><a href="#socials" aria-label="LinkedIn placeholder">
                        <Linkedin size={17} /></a></div>
                        <small className="placeholder-note">Social links to be configured</small></div>
                        <div className="footer-col">
                            <h4>Explore</h4>
                            <Link href="/about">Our Story</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/residences">Residences</Link>
                            <Link href="/commercial">Commercial</Link>
                            <Link href="/design-ideas">Design Ideas</Link></div>
                            <div className="footer-col">
                                <h4>Services</h4>
                                <Link href="/services">All Services</Link>
                                <Link href="/service/residential-interior-design">Residential Interiors</Link>
                                <Link href="/service/modular-kitchen-design">Kitchen Design</Link>
                                <Link href="/service/commercial-interior-design">Commercial Interiors</Link>
                                <Link href="/service/space-planning-visualisation">Space Planning</Link></div>
                                <div className="footer-contact">
                                    <span className="eyebrow">HAVE A SPACE IN MIND?</span>
                                    <h3>Let's make room<br />for something <em>beautiful.</em></h3>
                                    <Link className="text-link light-link" href="/start-a-project">Start a conversation <ArrowUpRight size={16} /></Link>
                                    <p className="placeholder-note">Phone, email and address to be added</p></div></div>
                                    <div className="footer-bottom">
                                        <span>© {new Date().getFullYear()} FERRWUD · FUSION BY DESIGN</span>
                                        <div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link>
                                        <span>Made with intention.</span></div></div>
        </footer> }
