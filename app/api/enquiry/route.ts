import { NextResponse } from 'next/server';
export async function POST(request:Request){
 const endpoint=process.env.LEAD_ENDPOINT;
 if(!endpoint){return NextResponse.json({error:'Enquiry submission is not configured yet. Please contact the site administrator to connect a lead-management endpoint.'},{status:503});}
 try{const body=await request.json();if(!body||typeof body!=='object'||!body.name||!body.phone||!body.email||!body.type||!body.consent){return NextResponse.json({error:'Please complete all required fields and consent.'},{status:400});}
 const headers:Record<string,string>={'Content-Type':'application/json'};if(process.env.LEAD_ENDPOINT_TOKEN)headers.Authorization=`Bearer ${process.env.LEAD_ENDPOINT_TOKEN}`;
 const upstream=await fetch(endpoint,{method:'POST',headers,body:JSON.stringify({...body,source:'FERRWUD website enquiry'}),signal:AbortSignal.timeout(10000)});
 if(!upstream.ok)return NextResponse.json({error:'Your enquiry could not be delivered right now. Please try again later.'},{status:502});return NextResponse.json({ok:true},{status:200});
 }catch{return NextResponse.json({error:'There was a problem sending your enquiry. Please try again later.'},{status:502});}
}
