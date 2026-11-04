'use client';
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
const nav = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects', children: [{ label: 'All Projects', href: '/projects' }, { label: 'Residential', href: '/residences' }, { label: 'Commercial', href: '/commercial' }] }, { label: 'Design Ideas', href: '/design-ideas' },{ label: 'Clients', href: '/clients' }, { label: 'Reach us', href: '/contact', children: [{ label: 'Our Studio', href: '/our-studio' }, { label: 'Our Factory', href: '/our-factory' }] }, { label: 'Contact', href: '/contact' }
];
export default function Header() {
    const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false); const [dropdown, setDropdown] = useState('');
    useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, []);
    return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}><div className="nav-wrap">
        <Link href="/" className="wordmark" aria-label="FERRWUD home">
        <Image
            src="/logo.png"
            alt="FERRWUD Logo"
            width={100}
            height={100}
            className="logo-img"
            priority
        />
        </Link>      
         <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <div className="nav-item" key={item.label} onMouseLeave={() => setDropdown('')}>{item.children ? <><button className="nav-link" onMouseEnter={() => setDropdown(item.label)} onClick={() => setDropdown(dropdown === item.label ? '' : item.label)}>{item.label}<ChevronDown size={13} /></button>{dropdown === item.label && <div className="nav-dropdown" onMouseLeave={() => setDropdown('')}>{item.children.map(child => <Link key={child.href} href={child.href} onClick={() => setDropdown('')}>{child.label}<ArrowUpRight size={13} /></Link>)}</div>}</> : <Link className="nav-link" href={item.href}>{item.label}</Link>}</div>)}</nav>
        <Link href="/start-a-project" className="nav-cta">Start a Project <ArrowUpRight size={15} /></Link>
        <button className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>{open && <div className="mobile-menu">{nav.map(item => <div key={item.label}><Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>{item.children && item.children.map(c => <Link className="mobile-sub" key={c.href} href={c.href} onClick={() => setOpen(false)}>{c.label}</Link>)}</div>)}<Link className="mobile-project" href="/start-a-project" onClick={() => setOpen(false)}>Start a Project <ArrowUpRight size={16} /></Link></div>}</header>
}
