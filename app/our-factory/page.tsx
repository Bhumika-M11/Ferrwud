import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Check, Factory, Ruler, ShieldCheck, Truck, Cog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Factory | FERRWUD',
  description: 'Discover FERRWUD manufacturing capabilities, precision furniture production, and quality-focused processes.',
};

type Machine = { title: string; description: string; image: string };
type Group = { title: string; note: string; machines: Machine[] };

const groups: Group[] = [
  {
    title: 'WOOD MANUFACTURING',
    note: 'PANEL CUTTING · CNC MACHINING · EDGE BANDING · MOULDING',
    machines: [
      {
        title: 'Homag-Beam saw HPP130',
        description: 'Precision beam saw designed for accurate, high-speed cutting of wood-based panels, ensuring clean edges and consistent dimensions for furniture production.',
        image: '/images/wood1.png'
      },
      {
        title: 'HOMAG -Ambition 1440 FC',
        description: 'Automatic edge banding machine that applies and finishes edge materials with precision, delivering smooth, durable and seamless furniture panel edges.',
        image: '/images/wood2.png'
      },
      {
        title: 'Homag CNC-Processing Center NMC112',
        description: 'CNC machining center used for precision routing, drilling and shaping of wooden components, enabling complex designs and consistent production quality.',
        image: '/images/wood3.png'
      },
      {
        title: 'HOMAG -Vertical CNC Processing Center',
        description: 'Space-efficient vertical CNC machine for accurate drilling, routing and machining of furniture panels, supporting flexible and customized production.',
        image: '/images/wood4.png'
      },
      {
        title: 'Manual Edge Banding Optimat NKD 720',
        description: 'Edge banding equipment for applying protective and decorative edging to furniture panels, providing clean finishes and improved edge durability.',
        image: '/images/wood5.png'
      },
      {
        title: 'JAI - SPINDLE MOULDER',
        description: 'Woodworking machine used for profiling, shaping and moulding wooden components, producing precise edges, grooves and decorative profiles.',
        image: '/images/wood6.png'
      },
    ]
  },
  {
    title: 'METAL PRODUCTION',
    note: 'LASER CUTTING · SHEET BENDING · CNC PUNCHING · AUTOMATION',
    machines: [
      {
        title: 'Bending Machine-Warcom',
        description: 'Industrial press brake designed for precision bending and forming of sheet metal components used in furniture frames, cabinets and structural fittings.',
        image: '/images/metal1.png'
      },
      {
        title: 'Fiber Laser Cutting Machine',
        description: 'High-precision laser cutting system for producing intricate shapes and clean cuts in metal sheets, ensuring accuracy and efficient material utilization.',
        image: '/images/metal2.png'
      },
      {
        title: 'BENDING MACHINE- JFY',
        description: 'Sheet metal bending machine used to create accurate angles and complex profiles, supporting consistent fabrication of custom metal furniture components.',
        image: '/images/metal3.png'
      },
      {
        title: 'Bending Machine-Amada',
        description: 'Precision press brake for controlled sheet metal forming, delivering repeatable bends and dimensional accuracy for furniture and interior applications.',
        image: '/images/metal4.png'
      },
      {
        title: 'PUNCHING MACHINE-Muratec',
        description: 'CNC punching equipment used to create precise holes, slots and patterns in sheet metal for functional fittings, panels and furniture components.',
        image: '/images/metal5.png'
      },
      {
        title: 'AUTO SHEET LOADING STATION',
        description: 'Automated sheet handling system that streamlines material loading into production equipment, improving workflow efficiency and reducing manual handling.',
        image: '/images/metal6.png'
      },
    ]
  },
];


const advantages = [
  {
    number: '01',
    title: 'INTEGRATED MANUFACTURING',
    description:
      'Wood processing and metal fabrication capabilities support the production of coordinated furniture components for commercial interiors.'
  },
  {
    number: '02',
    title: 'PRECISION & CUSTOMIZATION',
    description:
      'CNC woodworking, laser cutting and sheet metal forming enable accurate component preparation for project-specific furniture designs.'
  },
  {
    number: '03',
    title: 'PRODUCTION EFFICIENCY',
    description:
      'Specialized machinery and coordinated production planning help streamline manufacturing workflows and component preparation.'
  },
  {
    number: '04',
    title: 'QUALITY-FOCUSED EXECUTION',
    description:
      'Attention to dimensions, material preparation, component fit and finishing supports consistent furniture manufacturing.'
  }
];


export default function OurFactory() {
  return (
    <main className="fw-factory">
      
<section className="fw-hero" aria-labelledby="factory-heading">
  <div className="fw-container fw-hero-inner">
    <span className="fw-kicker fw-kicker-light">
      FERRWUD / OUR MANUFACTURING FACILITY
    </span>

    <h1 id="factory-heading">
      Precision Manufacturing.
      <br />
      Built For <span>Modern
      <br />
      Workspaces.</span>
    </h1>

    <p>
      Bringing together advanced wood processing and
      metal fabrication capabilities to create
      functional, durable and thoughtfully crafted
      furniture solutions for modern commercial spaces.
    </p>

    <a href="#infrastructure" className="fw-text-link">
      EXPLORE OUR FACILITY <ArrowUpRight size={17} />
    </a>
  </div>
</section>


      
<section id="infrastructure" className="fw-intro fw-section">
  <div className="fw-container fw-intro-grid">

    <div className="fw-intro-copy">
      <span className="fw-kicker">
        OUR MANUFACTURING FACILITY
      </span>

      <h2>
        Technology-Driven
        <br />
        <span>Manufacturing.</span>
      </h2>

      <p>
        At FERRWUD, manufacturing brings together
        advanced machinery, precision engineering
        and skilled craftsmanship to transform
        design concepts into high-quality furniture
        and interior solutions.
      </p>

      <p>
        Our wood manufacturing capabilities include
        HOMAG beam saws, CNC processing centres,
        edge banding and spindle moulding equipment
        for accurate panel processing and furniture
        component preparation.
      </p>

      <p>
        Our metal production capabilities include
        fibre laser cutting, sheet metal bending,
        CNC punching and automated sheet loading
        to support the fabrication of furniture
        structures and metal components.
      </p>

      <div className="fw-facts">
        <div>
          <span>DIVISIONS</span>
          <strong>WOOD MANUFACTURING & METAL PRODUCTION</strong>
        </div>
        <div>
          <span>TECHNOLOGY</span>
          <strong>CNC MACHINING · LASER CUTTING · FABRICATION</strong>
        </div>
        <div>
          <span>APPLICATIONS</span>
          <strong>MODULAR FURNITURE & COMMERCIAL INTERIORS</strong>
        </div>
      </div>
    </div>

    <div className="fw-intro-photos">
      <img
        className="fw-intro-main"
        src="/images/unit1.png"
        alt="FERRWUD wood manufacturing facility"
      />
      <img
        className="fw-intro-main"
        src="/images/unit2.png"
        alt="FERRWUD metal production facility"
      />
    </div>

  </div>
</section>


      <section className="fw-equipment fw-section" id="capabilities">
        <div className="fw-container">
          
            <span className="fw-kicker">
              OUR MANUFACTURING CAPABILITIES
            </span>

            <h2>
              Advanced Machinery.
              <br />
              <span>Precision Production.</span>
            </h2>

            <p className="fw-section-lead">
              Explore FERRWUD's wood manufacturing and metal
              production equipment, supporting precision cutting,
              CNC machining, edge banding, sheet metal forming
              and component fabrication for modular furniture
              and commercial interior applications.
            </p>

          {groups.map(group => (
            <div className="fw-machine-group" key={group.title}>
              <div className="fw-group-heading"><h3>{group.title}</h3><span>{group.note}</span></div>
              <div className="fw-machine-grid">
                {group.machines.map(machine => (
                  <article className="fw-machine" key={machine.title}>
                    <div className="fw-machine-image"><img src={machine.image} alt={machine.title} loading="lazy" /></div>
                    <div className="fw-machine-content"><h4>{machine.title}</h4><p>{machine.description}</p></div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      
<section className="fw-quality fw-section">
  <div className="fw-container">

    <span className="fw-kicker fw-kicker-light">
      PRECISION ENGINEERING & QUALITY CONTROL
    </span>

    <h2>
      Engineered For Precision.
      <br />
      Built For <span>Quality.</span>
    </h2>

    <p>
      From accurate wood panel processing and CNC
      machining to precision metal cutting and
      forming, FERRWUD focuses on manufacturing
      consistency, dimensional accuracy and
      quality workmanship throughout production.
    </p>

    <div className="fw-quality-grid">
      <div>
        <ShieldCheck size={27} />
        <strong>Quality Focus</strong>
        <small>
          Attention to materials, component finishes
          and production requirements.
        </small>
      </div>

      <div>
        <Ruler size={27} />
        <strong>Precision Engineering</strong>
        <small>
          Accurate panel sizing, CNC machining
          and sheet metal forming.
        </small>
      </div>

      <div>
        <Cog size={27} />
        <strong>Advanced Machinery</strong>
        <small>
          Specialized woodworking and metal
          processing equipment.
        </small>
      </div>

      <div>
        <Truck size={27} />
        <strong>Project Coordination</strong>
        <small>
          Production planning aligned with furniture
          requirements and installation schedules.
        </small>
      </div>
    </div>

  </div>
</section>


      <section className="fw-benefits fw-section">
        <div className="fw-container">
          <span className="fw-kicker">
            THE FERRWUD MANUFACTURING ADVANTAGE
          </span>

          <h2>
            Powering Modern Workspaces
            <br />
            Through <span>Precision Manufacturing.</span>
          </h2>
          <div className="fw-benefit-grid">
            {advantages.map(item => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
          
          <div className="fw-project-strip">
            <div>
              <h3>
                LOOKING FOR CUSTOM FURNITURE
                MANUFACTURING SOLUTIONS?
              </h3>

              <p>
                Explore FERRWUD's wood and metal manufacturing
                capabilities for modular office furniture,
                workstations and commercial interior projects.
              </p>
            </div>

            <Link href="/start-a-project" className="fw-button">
              DISCUSS YOUR REQUIREMENTS
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
