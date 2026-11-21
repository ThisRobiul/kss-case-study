/* Presentation prototype. No network calls, account access, or data submission. */
const paths={
home:'M3 10 12 3l9 7M5 9v12h5v-7h4v7h5V9',
grid:'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
doctor:'M8 3v4a4 4 0 0 0 8 0V3M6 3h4M14 3h4M12 11v5a4 4 0 0 0 8 0v-3M18 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0',
bot:'M5 6h14a2 2 0 0 1 2 2v10H3V8a2 2 0 0 1 2-2M12 2v4M8 11v2M16 11v2M9 16h6M1 10v5M23 10v5',
user:'M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M4 21v-2a8 8 0 0 1 16 0v2',
search:'M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14M15 15l6 6',
pin:'M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0M9 10a3 3 0 1 0 6 0 3 3 0 0 0-6 0',
hospital:'M5 21V3h14v18M2 21h20M9 7h6M12 4v6M9 14h1M14 14h1M10 21v-4h4v4',
blood:'M12 2C9 7 4 11 4 15a8 8 0 0 0 16 0c0-4-5-8-8-13M8 15a4 4 0 0 0 4 4',
bus:'M5 17h14V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12M5 9h14M8 3v6M16 3v6M5 17v4M19 17v4M8 13h.1M16 13h.1',
phone:'M7 3H3c0 10 8 18 18 18v-4l-5-2-2 2a16 16 0 0 1-7-7l2-2-2-5',
heart:'M3 8c0-6 8-7 9-1 1-6 9-5 9 1 0 6-9 13-9 13S3 14 3 8M4 12h4l2-3 3 6 2-3h5',
tools:'M14 4a6 6 0 0 0-7 7L2 17a3 3 0 0 0 5 5l6-6a6 6 0 0 0 7-7l-4 4-5-5 3-4',
education:'M2 8l10-5 10 5-10 5L2 8M6 10v7c4 3 8 3 12 0v-7M22 8v9',
building:'M3 9h18L12 2 3 9M5 10v9M10 10v9M14 10v9M19 10v9M2 22h20',
bag:'M8 7V4h8v3M3 7h18v14H3V7M3 11c6 4 12 4 18 0M10 13v3h4v-3',
market:'M3 9h18l-2-6H5L3 9M3 9c0 4 5 4 5 0 0 4 8 4 8 0 0 4 5 4 5 0M5 12v9h14v-9M9 21v-6h6v6',
leaf:'M12 21v-9M12 14C3 14 2 8 3 3c7 0 10 4 9 11M12 18c8 0 10-5 9-10-6 0-10 3-9 10',
bike:'M7 9 4 17h8l6-12h-4M10 5h5M10 5l4 12M2 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0M15 17a4 4 0 1 0 8 0 4 4 0 0 0-8 0',
truck:'M2 5h13v13H2V5M15 10h4l3 4v4h-7M5 18a2 2 0 1 0 4 0M16 18a2 2 0 1 0 4 0',
food:'M4 2v7a3 3 0 0 0 6 0V2M7 2v20M18 2c-3 4-4 10 0 11h2V2h-2M20 13v9',
help:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M9 8a3 3 0 1 1 4 3c-1 1-1 1-1 3M12 18h.1',
chevron:'M9 5l7 7-7 7',
calendar:'M4 5h16v16H4V5M8 2v6M16 2v6M4 10h16M8 14h2M14 14h2M8 18h2',
bookmark:'M5 3h14v19l-7-5-7 5V3',
post:'M6 2h9l5 5v15H4V2h2M15 2v6h5M8 12h8M8 16h6',
settings:'M4 7h16M4 17h16M9 3v8M15 13v8',
send:'M3 3l18 9-18 9 4-9-4-9M7 12h14',
eye:'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0',
lock:'M7 10V7a5 5 0 0 1 10 0v3M5 10h14v12H5V10M12 15v3',
sprout:'M12 22V11M12 13C3 14 2 6 3 3c8-1 10 6 9 10M12 18C22 18 22 8 21 7c-9 0-10 7-9 11',
info:'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M12 11v6M12 7h.1'
};
const icon=(name,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name]||paths.grid}"/></svg>`;
const query=new URLSearchParams(location.search),known=['home','services','doctors','assistant','profile','signin'];
const screen=known.includes(query.get('screen'))?query.get('screen'):'home';
if(query.get('export')==='2x')document.body.classList.add('export-2x');
const tile=(name,tone='mint')=>`<span class="icon-tile tone-${tone}">${icon(name)}</span>`;
const search=(placeholder,id='search')=>`<label class="searchbox" for="${id}">${icon('search')}<input id="${id}" type="search" placeholder="${placeholder}" autocomplete="off"><span class="search-filter">${icon('settings')}</span></label>`;
const intro=(eyebrow,title,description)=>`<div class="page-intro"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${description}</p></div>`;
const demo=(label)=>`data-demo="${label} — নমুনা ইন্টারফেস"`;
const categoryData=[['ডাক্তার সেবা','doctor','mint'],['স্বাস্থ্যসেবা','heart','blue'],['রক্ত সেবা','blood','rose'],['জরুরি সেবা','phone','gold'],['বাসা ও ভাড়া','home','mint'],['মিস্ত্রি সেবা','tools','violet'],['শিক্ষা সেবা','education','gold'],['পরিবহন','bus','sky'],['চাকরি','bag','blue'],['মার্কেটপ্লেস','market','violet'],['কৃষি সেবা','leaf','mint'],['রাইড বুকিং','bike','sky'],['কুরিয়ার','truck','gold'],['খাবার','food','rose'],['সরকারি সেবা','building','blue'],['তথ্য সেবা','info','mint']];
const routes={
home:()=>`<section class="hero"><div class="eyebrow">MADE FOR YOUR COMMUNITY</div><h1>আপনার কাহালু,<br>আপনার সেবা</h1><p>স্থানীয় সেবা, এক জায়গায়।</p><span class="hero-sprout">${icon('sprout')}</span></section>${search('কোন সেবা খুঁজছেন?','home-search')}<div class="section-title"><h2>আপনার প্রয়োজনের সেবা</h2><a href="?screen=services">সব দেখুন</a></div><div class="quick-grid">${[['ডাক্তার','doctor','mint','doctors'],['হাসপাতাল','hospital','blue','services'],['রক্ত সেবা','blood','rose','services'],['পরিবহন','bus','gold','services']].map(([label,i,t,r])=>`<a class="quick-item" href="?screen=${r}">${tile(i,t)}<span>${label}</span></a>`).join('')}</div><a class="feature-card" href="?screen=doctors"><div><div class="overline">ডাক্তার ও সিরিয়াল</div><h2>সঠিক সেবার খোঁজে</h2><p>বিশেষজ্ঞ খুঁজুন, সিরিয়ালের তথ্য দেখুন।</p><span class="mini-link">ডাক্তার সেবা দেখুন</span></div><span class="feature-icon">${icon('calendar')}</span></a><a class="assistant-promo" href="?screen=assistant">${tile('bot')}<div><h3>সেবা খুঁজতে সাহায্য লাগবে?</h3><p>Kahaloo AI-কে বাংলায় জিজ্ঞেস করুন</p></div>${icon('chevron','chevron')}</a><div class="location-line">${icon('pin')} কাহালু, বগুড়া</div>`,
services:()=>`${intro('LOCAL SERVICE DIRECTORY','সব সেবা, এক জায়গায়','প্রয়োজন অনুযায়ী আপনার সেবাটি বেছে নিন।')}${search('বিভাগ বা সেবা খুঁজুন','category-search')}<div class="category-intro"><h2>সেবা বিভাগ</h2><small>নির্বাচিত বিভাগসমূহ</small></div><div class="category-grid">${categoryData.map(([label,i,t],n)=>`<a class="category" data-category="${label}" href="?screen=${n===0?'doctors':'services'}" ${n!==0?demo(label):''}>${tile(i,t)}<span class="category-label">${label}</span></a>`).join('')}</div><a class="services-note" href="?screen=assistant">${icon('bot')}<span>কোন বিভাগ বেছে নেবেন? সহকারীর সাহায্য নিন।</span></a>`,
doctors:()=>`<div class="doctors-title">${intro('HEALTHCARE DIRECTORY','ডাক্তার সেবা','বিশেষজ্ঞ অনুযায়ী সেবা খুঁজুন।')}${tile('doctor')}</div>${search('বিশেষজ্ঞ বা সেবার ধরন খুঁজুন','doctor-search')}<div class="chips" role="tablist" aria-label="বিশেষজ্ঞ বিভাগ"><button class="chip active" data-filter="all" role="tab" aria-selected="true">সকল</button><button class="chip" data-filter="মেডিসিন" role="tab" aria-selected="false">মেডিসিন</button><button class="chip" data-filter="শিশু" role="tab" aria-selected="false">শিশু</button><button class="chip" data-filter="চর্ম" role="tab" aria-selected="false">চর্ম</button></div><div class="doctor-list">${[['মেডিসিন বিশেষজ্ঞ','মেডিসিন','DEMO · 001'],['শিশু বিশেষজ্ঞ','শিশু','DEMO · 002'],['চর্মরোগ বিশেষজ্ঞ','চর্ম','DEMO · 003']].map(([label,specialty,id])=>`<article class="doctor-card" data-specialty="${specialty}"><div class="doctor-top"><span class="doctor-avatar">${icon('user')}</span><div><h2>${label}</h2><p>নমুনা চিকিৎসক প্রোফাইল</p></div><span class="sample-label">${id}</span></div><div class="doctor-location">${icon('pin')} কাহালু, বগুড়া · নমুনা চেম্বার</div><div class="doctor-actions"><button class="btn btn-outline" ${demo('প্রোফাইলের বিস্তারিত')}>বিস্তারিত দেখুন</button><button class="btn" ${demo('সিরিয়াল বুকিং')}>${icon('calendar')}সিরিয়াল নিন</button></div></article>`).join('')}</div><p class="doctor-note">প্রদর্শিত প্রোফাইলগুলো ডিজাইনের নমুনা।</p>`,
assistant:()=>`<div class="chat-heading">${tile('bot')}<div><h1>Kahaloo AI</h1><p>আপনার স্থানীয় সেবার সহকারী</p></div></div><div class="chat-date">সেবা খোঁজার একটি নমুনা কথোপকথন</div><div class="chat-bubble"><h2>আসসালামু আলাইকুম!</h2><p>আমি <strong>Kahaloo AI</strong>। কাহালু স্মার্ট সেবায় প্রয়োজনীয় তথ্য ও সেবা খুঁজতে আপনাকে সাহায্য করতে পারি।</p><p>আজ কী খুঁজছেন?</p></div><span class="message-meta">KAHALOO AI · SERVICE ASSISTANT</span><div class="prompt-intro">এভাবে শুরু করতে পারেন</div><div class="prompt-grid"><a class="prompt-chip" href="?screen=doctors">${icon('doctor')}ডাক্তার খুঁজছি</a><a class="prompt-chip" href="?screen=services">${icon('bus')}পরিবহন সেবা</a><a class="prompt-chip" href="?screen=services">${icon('tools')}মিস্ত্রি দরকার</a><a class="prompt-chip" href="?screen=services">${icon('hospital')}হাসপাতালের তথ্য</a></div><div class="chat-sample">ডাক্তার সেবা বিভাগটি কোথায় পাব?</div><p class="chat-demo-note">শুধু ইন্টারফেস প্রিভিউ · কোনো লাইভ AI সংযোগ নেই</p><form class="assistant-input" id="assistant-form"><input aria-label="আপনার প্রশ্ন" placeholder="কাহালুর সেবা নিয়ে প্রশ্ন করুন…" autocomplete="off"><button aria-label="প্রশ্নের নমুনা পাঠান" type="submit">${icon('send')}</button></form>`,
profile:()=>`<section class="profile-card"><div class="profile-cover"><span class="eyebrow">YOUR KSS ACCOUNT</span></div><div class="profile-avatar" aria-hidden="true">R</div><h1>নমুনা প্রোফাইল</h1><p class="profile-subtitle">ডিজাইন প্রিভিউ অ্যাকাউন্ট</p><div class="profile-place">${icon('pin')} কাহালু, বগুড়া</div><button class="btn btn-outline" ${demo('প্রোফাইল সম্পাদনা')}>প্রোফাইল সম্পাদনা</button></section><div class="section-title"><h2>আমার অ্যাকাউন্ট</h2></div><div class="account-menu">${[['আমার সিরিয়াল','সিরিয়াল ও অ্যাপয়েন্টমেন্টের তথ্য','calendar','mint'],['আমার পোস্ট ও সেবা','আপনার যোগ করা তথ্য দেখুন','post','blue'],['সংরক্ষিত সেবা','পরে দেখার জন্য রাখা সেবাগুলো','bookmark','gold'],['অ্যাকাউন্ট সেটিংস','প্রোফাইল ও পছন্দ পরিবর্তন','settings','violet']].map(([label,description,i,t])=>`<button class="account-row" ${demo(label)}>${tile(i,t)}<span><strong>${label}</strong><small>${description}</small></span>${icon('chevron','chevron')}</button>`).join('')}</div><a class="profile-bottom" href="?screen=assistant">${icon('help')}<div><h3>সহায়তা প্রয়োজন?</h3><p>সেবা সহকারীর সঙ্গে কথা বলুন</p></div>${icon('chevron','chevron')}</a><a class="signout" href="?screen=signin">লগইন স্ক্রিন দেখুন</a>`,
signin:()=>`<section class="signin-intro"><div class="signin-logo"><svg viewBox="0 0 34 34" aria-hidden="true"><path d="M7 25C6 11 17 5 29 5c0 12-6 23-20 23" fill="currentColor"/><path d="M6 30 23 12M14 22l-1-8M18 18l7-1" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg></div><h1>স্বাগতম কাহালু স্মার্ট সেবায়</h1><p>আপনার সেবা ও অ্যাকাউন্ট, একসঙ্গে।</p></section><form id="signin-form" class="signin-form"><div class="segmented"><button type="button" class="active">লগইন</button><button type="button" ${demo('নতুন অ্যাকাউন্ট তৈরি')}>নতুন অ্যাকাউন্ট</button></div><label class="field-label" for="phone">মোবাইল নম্বর</label><div class="form-field"><span class="country-code">+88</span><input id="phone" type="tel" inputmode="tel" autocomplete="off" placeholder="01XXXXXXXXX" maxlength="11"></div><label class="field-label" for="password">পাসওয়ার্ড <button type="button" ${demo('পাসওয়ার্ড পুনরুদ্ধার')}>পাসওয়ার্ড ভুলে গেছেন?</button></label><div class="form-field">${icon('lock')}<input id="password" type="password" autocomplete="off" placeholder="আপনার পাসওয়ার্ড"><button type="button" id="toggle-password" aria-label="পাসওয়ার্ড দেখান">${icon('eye')}</button></div><button type="submit" class="btn">লগইন করুন</button><p class="signup-prompt">নতুন ব্যবহারকারী? <button type="button" ${demo('অ্যাকাউন্ট তৈরি')}>অ্যাকাউন্ট তৈরি করুন</button></p></form><p class="signin-info">${icon('info')}এই নমুনা ফর্ম কোনো তথ্য পাঠায় বা সংরক্ষণ করে না।</p>`
};
document.querySelector('#screen').innerHTML=routes[screen]();
document.querySelector('#artboard').dataset.screen=screen;
document.title=`KSS Android — ${screen[0].toUpperCase()+screen.slice(1)} concept`;
const nav=[['home','হোম','home'],['services','সেবাসমূহ','grid'],['doctors','ডাক্তার','doctor'],['assistant','সহকারী','bot'],['profile','প্রোফাইল','user']];
document.querySelector('#bottom-nav').innerHTML=nav.map(([route,label,i])=>`<a class="nav-link ${route===screen?'active':''}" href="?screen=${route}" ${route===screen?'aria-current="page"':''}><span class="nav-icon">${icon(i)}</span><span>${label}</span></a>`).join('');
let toastTimer;
const showToast=(message)=>{const t=document.querySelector('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),3200)};
document.addEventListener('click',e=>{const target=e.target.closest('[data-demo]');if(target){e.preventDefault();showToast(target.dataset.demo)}});
const categorySearch=document.querySelector('#category-search');
if(categorySearch)categorySearch.addEventListener('input',()=>{const value=categorySearch.value.trim().toLowerCase();document.querySelectorAll('[data-category]').forEach(el=>el.hidden=!el.dataset.category.includes(value))});
const homeSearch=document.querySelector('#home-search');
if(homeSearch)homeSearch.addEventListener('keydown',e=>{if(e.key==='Enter'){location.href='?screen=services'}});
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(el=>{el.classList.toggle('active',el===btn);el.setAttribute('aria-selected',String(el===btn))});document.querySelectorAll('[data-specialty]').forEach(el=>el.hidden=btn.dataset.filter!=='all'&&el.dataset.specialty!==btn.dataset.filter)}));
const doctorSearch=document.querySelector('#doctor-search');
if(doctorSearch)doctorSearch.addEventListener('input',()=>{document.querySelectorAll('[data-specialty]').forEach(el=>el.hidden=!el.textContent.includes(doctorSearch.value.trim()))});
document.querySelector('#assistant-form')?.addEventListener('submit',e=>{e.preventDefault();showToast('এটি ডিজাইন প্রিভিউ। সেবার নমুনা দেখতে উপরের বিভাগ বেছে নিন।')});
document.querySelector('#signin-form')?.addEventListener('submit',e=>{e.preventDefault();showToast('লগইন প্রিভিউ — কোনো তথ্য পাঠানো বা সংরক্ষণ করা হয়নি।')});
document.querySelector('#toggle-password')?.addEventListener('click',e=>{const input=document.querySelector('#password');input.type=input.type==='password'?'text':'password';e.currentTarget.setAttribute('aria-label',input.type==='password'?'পাসওয়ার্ড দেখান':'পাসওয়ার্ড লুকান')});
