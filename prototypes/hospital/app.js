'use strict';
const ICONS={
grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 4h3m-3 3h6"/>',
queue:'<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3" cy="6" r="1"/><circle cx="3" cy="12" r="1"/><circle cx="3" cy="18" r="1"/>',
users:'<path d="M2 21v-2a6 6 0 0 1 12 0v2m1-7a5 5 0 0 1 7 5v2"/><circle cx="8" cy="7" r="4"/><path d="M16 3a4 4 0 0 1 0 8"/>',
screen:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>',
settings:'<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3" fill="currentColor" stroke="none"/><circle cx="16" cy="17" r="3" fill="currentColor" stroke="none"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
check:'<path d="m5 12 4 4L19 6"/>',
checkcircle:'<circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/>',
search:'<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>',
filter:'<path d="M4 5h16M7 12h10m-7 7h4"/>',
chevron:'<path d="m8 10 4 4 4-4"/>',
more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
pause:'<path d="M8 5v14m8-14v14"/>',
play:'<path d="m8 5 11 7-11 7Z"/>',
bell:'<path d="M6 9a6 6 0 0 1 12 0v7l2 2H4l2-2V9m4 12h4"/>',
briefcase:'<rect x="3" y="6" width="18" height="15" rx="2"/><path d="M8 6V3h8v3M3 12h18m-11 0v3h4v-3"/>',
stethoscope:'<path d="M5 3v5a5 5 0 0 0 10 0V3M3 3h4m6 0h4m-7 10v3a5 5 0 0 0 10 0v-3"/><circle cx="20" cy="10" r="3"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',
location:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
document:'<path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8m-8 4h8"/>',
help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4m0 4v.1"/>',
save:'<path d="M4 3h13l4 4v14H3V3h1Zm3 0v6h9V3M7 21v-7h10v7"/>'
};
const icon=(name)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.grid}</svg>`;
const button=(label,kind='',ico='')=>`<button type="button" class="button ${kind}" data-preview>${ico?icon(ico):''}${label}</button>`;
const badge=(label,tone='grey')=>`<span class="status ${tone}">${label}</span>`;
const head=(eyebrow,title,description,actions='')=>`<div class="page-head"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p class="description">${description}</p></div><div class="head-actions">${actions}</div></div>`;
const panel=(title,sub,body,aside='',extra='')=>`<section class="panel ${extra}"><div class="panel-header"><div><h2>${title}</h2>${sub?`<p class="sub">${sub}</p>`:''}</div>${aside}</div>${body}</section>`;
const stat=(label,value,note,ico)=>`<div class="stat"><div class="label">${label}</div><div class="stat-icon">${icon(ico)}</div><div class="value">${value}<span class="value-note">${note}</span></div></div>`;
const info=(ico,title,desc)=>`<div class="row">${icon(ico)}<div><strong>${title}</strong><p>${desc}</p></div></div>`;
const records=[
 {token:'A01',id:'P001',chamber:'Chamber A',time:'09:00',visit:'Completed',tone:'grey',approval:'Confirmed'},
 {token:'A02',id:'P002',chamber:'Chamber A',time:'09:15',visit:'In consultation',tone:'blue',approval:'Confirmed'},
 {token:'A03',id:'P003',chamber:'Chamber A',time:'09:30',visit:'Waiting',tone:'gold',approval:'Confirmed'},
 {token:'B01',id:'P004',chamber:'Chamber B',time:'09:15',visit:'Waiting',tone:'gold',approval:'Confirmed'},
 {token:'B02',id:'P005',chamber:'Chamber B',time:'09:30',visit:'Not queued',tone:'grey',approval:'Pending'},
 {token:'B03',id:'P006',chamber:'Chamber B',time:'09:45',visit:'Not queued',tone:'grey',approval:'Pending'}
];
function dashboard(){
 return head('Kahaloo Smart Seba / Care workspace','A clearer view of every visit.','Coordinate appointments, chambers and the waiting queue from one workspace.',button('New serial','primary','plus'))+
 `<div class="stats">${stat('Appointment records','6','demo session','calendar')}${stat('Waiting','2','ready for queue','clock')}${stat('Pending approval','2','to review','document')}${stat('Chambers','2','in this preview','location')}</div>`+
 `<div class="layout-main"><div>${panel('Appointment overview','A shared view for the care team',`<table class="table dashboard-table"><colgroup><col style="width:15%"><col style="width:18%"><col style="width:21%"><col style="width:18%"><col style="width:28%"></colgroup><thead><tr><th>Token</th><th>Visitor ID</th><th>Chamber</th><th>Time</th><th>Visit status</th></tr></thead><tbody>${records.slice(0,5).map(r=>`<tr><td><strong class="token">${r.token}</strong></td><td>${r.id}</td><td class="muted">${r.chamber}</td><td>${r.time}</td><td>${badge(r.visit,r.tone)}</td></tr>`).join('')}</tbody></table><div class="table-footer">Showing 5 of 6 demo records · Approval status is shown separately in Appointments.</div>`,button('View all','small'))}</div><div class="stack">${panel('Queue at a glance','Current chamber context',`<div class="panel-body"><div class="queue-mini"><div><div class="tinycaps">Chamber A</div><div class="big-token">A02</div><p class="quiet">Visitor P002</p></div>${badge('In consultation','blue')}</div><div class="queue-mini"><div><div class="tinycaps">Next in Chamber A</div><div class="big-token">A03</div></div>${badge('Waiting','gold')}</div></div>`)}${panel('Team priorities','',`<div class="panel-body info-list">${info('document','Review 2 pending requests','')}${info('users','Coordinate both chambers','')}</div>`)}</div></div>`+
 '';
}
function appointments(){
 return head('Care administration / Appointments','Every serial, in one place.','Review booking requests and follow visit progress without mixing the two statuses.',button('Filter','ghost','filter')+button('New serial','primary','plus'))+
 panel('Appointment register','Illustrative serial workflow',`<div class="toolbar"><div class="searchbox">${icon('search')}Search token or visitor ID</div><div class="filters"><button class="filter active" data-preview>All records</button><button class="filter" data-preview>Both chambers ${icon('chevron')}</button><button class="filter" data-preview>Demo session ${icon('chevron')}</button></div></div><table class="table appointment-table"><colgroup><col style="width:9%"><col style="width:12%"><col style="width:15%"><col style="width:14%"><col style="width:22%"><col style="width:19%"><col style="width:9%"></colgroup><thead><tr><th>Token</th><th>Visitor ID</th><th>Chamber</th><th>Scheduled</th><th>Visit status</th><th>Approval</th><th>Actions</th></tr></thead><tbody>${records.map(r=>`<tr><td><strong class="token">${r.token}</strong></td><td>${r.id}</td><td class="muted">${r.chamber}</td><td>${r.time}</td><td>${badge(r.visit,r.tone)}</td><td>${badge(r.approval,r.approval==='Confirmed'?'green':'gold')}</td><td><button class="button ghost small" data-preview aria-label="Preview ${r.token} actions">${icon('more')}</button></td></tr>`).join('')}</tbody></table><div class="table-footer"><div class="legend"><span><strong>Approval:</strong> booking decision</span><span><strong>Visit:</strong> queue and consultation progress</span><span>6 anonymous demo records</span></div></div>`,badge('Demo session','grey'));
}
function queue(){
 return head('Care administration / Live queue','Keep the next visit moving.','A focused workspace for serial progression and chamber coordination.',button('Chamber A','ghost','location')+button('Add serial','primary','plus'))+
 `<div class="stats">${stat('In consultation','1','visitor','stethoscope')}${stat('Waiting','2','visitors','clock')}${stat('Completed','1','visit','checkcircle')}${stat('Not queued','2','pending approval','document')}</div>`+
 `<div class="queue-grid"><div class="current-token-card"><div class="session"><span>CHAMBER A</span>${badge('In consultation','blue')}</div><div class="token-display">A02</div><div class="token-meta">Visitor P002 <span style="color:#67988b;padding:0 10px">/</span> Scheduled 09:15</div><p class="description" style="margin-top:17px;color:#accdc4">Next confirmed token for this chamber: <strong style="color:#d3f5e6">A03</strong></p><div class="actions">${button('Complete visit','primary','check')}${button('Hold','ghost','pause')}${button('Call next','ghost','play')}</div></div>${panel('Waiting queue','Confirmed visitors, grouped by chamber',`<div class="queue-list"><div class="queue-item"><div class="ticket">A03</div><div><strong>Visitor P003</strong><p>Chamber A · 09:30</p></div>${badge('Next','green')}</div><div class="queue-item"><div class="ticket">B01</div><div><strong>Visitor P004</strong><p>Chamber B · 09:15</p></div>${badge('Waiting','gold')}</div></div><div class="table-footer">Pending requests B02 and B03 are not in the active queue.</div>`,badge('2 waiting','gold'))}</div>`+
 `<div class="inline-note section-gap">${icon('checkcircle')}Completed in this demo: A01 · Visitor P001 · Chamber A. The appointment register retains the visit status.</div>`;
}
function team(){
 const members=[['T01','Team 01','Hospital admin','Care workspace'],['T02','Team 02','Doctor','Chamber A'],['T03','Team 03','Doctor','Chamber B'],['T04','Team 04','Staff','Serial desk'],['T05','Team 05','Staff','Reception']];
 return head('Care administration / Team','People behind each appointment.','A clear view of the team and their assigned workspaces.',button('Add member','primary','plus'))+
 `<div class="role-cards"><div class="role-card"><div class="role-title"><div class="role-icon">${icon('briefcase')}</div><h3>Hospital admin</h3></div><p>Organise the care workspace, chambers and team assignments.</p></div><div class="role-card"><div class="role-title"><div class="role-icon">${icon('stethoscope')}</div><h3>Doctor</h3></div><p>Review assigned appointments and follow the consultation queue.</p></div><div class="role-card"><div class="role-title"><div class="role-icon">${icon('users')}</div><h3>Staff</h3></div><p>Coordinate serial requests, reception and waiting visitors.</p></div></div>`+
 panel('Team directory','Anonymous examples of role and workspace assignment',`<table class="table team-table"><colgroup><col style="width:24%"><col style="width:23%"><col style="width:25%"><col style="width:18%"><col style="width:10%"></colgroup><thead><tr><th>Team member</th><th>Role</th><th>Assigned workspace</th><th>Record status</th><th>Actions</th></tr></thead><tbody>${members.map((m,i)=>`<tr><td><div class="member-id"><div class="member-icon">${m[0]}</div><div><strong>${m[1]}</strong></div></div></td><td>${badge(m[2],i===0?'purple':i<3?'blue':'green')}</td><td class="muted">${m[3]}</td><td>${badge('Active','grey')}</td><td><button class="button small ghost" data-preview aria-label="Preview ${m[1]} actions">${icon('more')}</button></td></tr>`).join('')}</tbody></table><div class="table-footer">Role descriptions illustrate responsibilities. This view does not specify a deployed permissions policy.</div>`,badge('5 demo members','grey'));
}
function tv(){
 return head('Care administration / Waiting display','Make the next token easy to see.','A simplified display concept for the waiting area.',button('Preview fullscreen','primary','screen'))+
 `<div class="tv-layout"><section class="tv-preview"><div class="tv-top"><strong>KSS · Appointment queue</strong><span>Demo session</span></div><div class="tv-current"><div class="now">Current token</div><div class="number">A02</div><div class="chamber">Chamber A</div><p class="description" style="color:#9ac1b6">Please proceed when your token is called.</p></div><div class="tv-next"><div class="upcoming"><div><div class="tinycaps" style="margin-bottom:6px;color:#93b9aa">Next · Chamber A</div><strong>A03</strong></div>${icon('clock')}</div><div class="upcoming"><div><div class="tinycaps" style="margin-bottom:6px;color:#93b9aa">Waiting · Chamber B</div><strong>B01</strong></div>${icon('clock')}</div></div><div class="tv-notice">${icon('info')}For serial assistance, please contact the reception desk.</div></section><div class="stack">${panel('Display preview','Presentation options',`<div class="panel-body"><div class="setting-row"><div class="label">Display format</div><strong>Token and chamber</strong></div><div class="setting-row"><div class="label">Language</div><strong>English concept</strong></div><div class="setting-row"><div class="label">Content source</div><strong>Demo queue</strong></div><div class="setting-row"><div class="label">Visitor information</div><strong>Tokens only</strong></div></div>`)}</div></div>`+
 `<div class="inline-note section-gap">${icon('info')}This is a display layout preview. No live queue, connected screen or announcement system is represented.</div>`;
}
function settings(){
 return head('Care administration / Workspace settings','Keep the care workspace organised.','Manage display labels and service notices in one place.',button('Save preview','primary','save'))+
 `<div class="screen-tabs"><span class="screen-tab selected">Workspace</span><span class="screen-tab">Display notices</span><span class="screen-tab">Help</span></div>`+
 `<div class="settings-layout">${panel('Workspace details','Editable layout concept',`<div class="panel-body"><div class="fieldgrid"><div class="field span2"><label for="workspace-label">Workspace label</label><input id="workspace-label" value="KSS care administration" readonly></div><div class="field"><label for="chamber-a">Chamber label</label><input id="chamber-a" value="Chamber A" readonly></div><div class="field"><label for="chamber-b">Additional chamber</label><input id="chamber-b" value="Chamber B" readonly></div><div class="field span2"><label>Waiting-room notice</label><div class="input multiline">Please keep your token available. Contact reception for serial assistance.</div><div class="help">A short message that can accompany the token display.</div></div></div><div class="setting-actions"><span class="quiet">Inputs are read-only in this visual showcase.</span>${button('Save preview','small primary','save')}</div></div>`)}<div class="stack">${panel('Notice preview','Waiting-room guidance',`<div class="panel-body"><div class="notice-card"><h3>Serial assistance</h3><p>Please keep your token available. Contact reception for serial assistance.</p></div></div>`)}${panel('Workspace help','Guidance for common tasks',`<div class="panel-body"><div class="help-item"><div class="icon">${icon('calendar')}</div><div><strong>Review a serial request</strong><p>Check approval and visit status in the appointment register.</p></div></div><div class="help-item"><div class="icon">${icon('screen')}</div><div><strong>Preview the waiting display</strong><p>Review token size, chamber labels and notice wording.</p></div></div></div>`)}</div></div>`;
}
const views={dashboard,appointments,queue,team,tv,settings};
const nav=[['dashboard','Overview','grid'],['appointments','Appointments','calendar'],['queue','Live queue','queue'],['team','Team & workspaces','users'],['tv','Waiting display','screen'],['settings','Settings & help','settings']];
const param=new URLSearchParams(location.search).get('screen');
const active=Object.hasOwn(views,param)?param:'dashboard';
document.title=`KSS — ${nav.find(n=>n[0]===active)[1]} concept`;
document.getElementById('artboard').innerHTML=`<aside class="sidebar"><div class="brand"><div class="brand-symbol">KSS</div><div><div class="brand-title">Care<br>administration</div><div class="brand-sub">Kahaloo Smart Seba</div></div></div><div class="side-label">Workspace</div><nav class="nav" aria-label="Care administration screens">${nav.map(([id,label,ico])=>`<a href="index.html?screen=${id}" ${id===active?'aria-current="page"':''} class="${id===active?'active':''}">${icon(ico)}${label}</a>`).join('')}</nav><div class="side-note"><strong>Shared care workspace</strong><p>Hospital administration,<br>doctors and staff.<br><br>Visual concept. No live records.</p></div></aside><header class="topbar"><div class="top-context"><strong>Hospital</strong><span>·</span>Doctor<span>·</span>Staff</div><div class="top-right"><span class="prototype">Portfolio prototype</span><div class="role-avatar">CA</div></div></header><main class="main">${views[active]()}</main><footer class="footer"><strong>DESIGN CONCEPT · DEMO RECORDS</strong><span>KAHALOO SMART SEBA · ENGLISH SHOWCASE INTERPRETATION</span></footer>`;
let toastTimeout;
document.addEventListener('click',event=>{
 const preview=event.target.closest('[data-preview]');
 if(!preview)return;
 const toast=document.getElementById('toast');
 toast.textContent='Visual preview only — no live records are changed.';
 toast.classList.add('visible');
 clearTimeout(toastTimeout);
 toastTimeout=setTimeout(()=>toast.classList.remove('visible'),2400);
});

if(new URLSearchParams(location.search).get('export')==='2x')document.body.classList.add('export-2x');
