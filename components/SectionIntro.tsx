export default function SectionIntro({eyebrow,title,description,light=false}:{eyebrow:string;title:string;description?:string;light?:boolean})
{return <div className={`section-intro ${light?'intro-light':''}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {description&&<p>{description}</p>}
    </div>}
