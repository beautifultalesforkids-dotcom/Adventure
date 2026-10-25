'use strict';
/* ===== أدوات عامة ===== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const IM=n=>`assets/img/${n}.png`,rnd=n=>Math.floor(Math.random()*n);
const sh=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const pk=a=>a[rnd(a.length)],some=(a,n,ex=[])=>sh(a.filter(x=>!ex.includes(x))).slice(0,n);
const app=$('#app'),ov=$('#ov');
const KEY='mgk1';
const def=()=>({p:{},stars:0,badges:[],snd:1,mus:1,seen:0});
let S=def();
try{S=Object.assign(def(),JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};

/* ===== البيانات ===== */
const COL=[['#e53935','أحمر'],['#fdd835','أصفر'],['#1e88e5','أزرق'],['#43a047','أخضر'],['#fb8c00','برتقالي'],['#8e24aa','بنفسجي'],['#ec407a','وردي'],['#795548','بني'],['#212121','أسود'],['#ffffff','أبيض']];
const L='أبتثجحخدذرزسشصضطظعغفقكلمنهوي'.split('');
const WT='أسد بطة تفاحة ثعلب جمل حصان خروف دب ذرة رمان زهرة سمكة شمس صقر ضفدع طائرة ظرف عصفور غزال فراشة قمر كرة ليمون موز نحلة هلال وردة يد'.split(' ');
const POM='<svg viewBox="0 0 100 100" width="1em" height="1em"><circle cx="50" cy="58" r="34" fill="#c62828"/><path d="M34 28l8 12 8-14 8 14 8-12 2 16H32z" fill="#8e1b1b"/></svg>';
const WE=['🦁','🦆','🍎','🦊','🐪','🐴','🐑','🐻','🌽',POM,'🌸','🐟','☀️','🦅','🐸','✈️','✉️','🐦','🦌','🦋','🌕','⚽','🍋','🍌','🐝','🌙','🌹','✋'];
const SHP={circle:'<circle cx="50" cy="50" r="42"/>',square:'<rect x="10" y="10" width="80" height="80" rx="8"/>',triangle:'<polygon points="50,8 94,88 6,88"/>',rect:'<rect x="4" y="26" width="92" height="48" rx="6"/>',star:'<polygon points="50,6 62,38 96,38 68,58 79,92 50,72 21,92 32,58 4,38 38,38"/>',heart:'<path d="M50 88C10 58 6 30 28 18c12-6 22 0 22 12 0-12 10-18 22-12 22 12 18 40-22 70z"/>',oval:'<ellipse cx="50" cy="50" rx="44" ry="28"/>',diamond:'<polygon points="50,4 90,50 50,96 10,50"/>'};
const SK=Object.keys(SHP),SC=['#e53935','#1e88e5','#43a047','#fb8c00','#fdd835','#ec407a','#8e24aa','#00acc1'],SN=['دائرة','مربع','مثلث','مستطيل','نجمة','قلب','شكل بيضاوي','معين'];
const shp=(i,c=SC[i],s=100)=>`<svg viewBox="0 0 100 100" width="${s}" height="${s}" fill="${c}" stroke="#0003" stroke-width="3">${SHP[SK[i]]}</svg>`;
const FI=['fruit0','fruit1','fruit2','fruit3','fruit4','fruit5','fruit20','fruit21','fruit22','fruit23','fruit24','fruit25'];
const FN='تفاح موز برتقال عنب فراولة بطيخ أناناس كمثرى مانجو خوخ كرز ليمون'.split(' ');
const VI=['veh0','veh1','veh2','veh3','veh4','veh20','veh21','veh22','veh23','veh24','veh31','veh32','veh33'];
const VN=['سيارة','حافلة','قطار','طائرة','سفينة','دراجة','سيارة إسعاف','سيارة إطفاء','سيارة أجرة','مروحية','جرار','مترو','صاروخ'];
const VE='lllawllllalla'.split('');
const AN=[['ani22','ثعلب'],['ani20','أرنب'],['ani0','أسد'],['ani1','فيل'],['ani2','زرافة'],['ani3','حمار وحشي'],['ani4','دب'],['ani23','بومة'],['ani24','بطريق'],['ani21','غزال']];
const img=n=>`<img src="${IM(n)}" alt="">`,ni=n=>img(n<=5?'num'+(n-1):'num2'+(n-6));
const bal=c=>`<span class="bal" style="--c:${c}"></span>`,dot=c=>`<span class="dot" style="--c:${c}"></span>`;
const TXT={};
const _t=(a,l)=>l.forEach((t,i)=>TXT[a+i]=t);
_t(0,['مرحبًا يا صديقي','أهلًا بك في المغامرة الكبرى','هل أنت مستعد؟','هيا نبدأ','هيا نكتشف العوالم ونتعلم أشياء جديدة','ابدأ المغامرة','تابع اللعب','خريطة العوالم','الإعدادات','الصوت','الموسيقى','المساعدة','العودة إلى القائمة الرئيسية','عُد إلى اللعب','هل تريد أن تبدأ مغامرة جديدة؟','سيُمسح تقدمك السابق','تم حفظ تقدمك','استعد لمغامرة جديدة','اختر العالم الذي تريد استكشافه','هذا العالم مقفل الآن','أكمل المرحلة السابقة لفتح هذا العالم','أحسنت','لقد فتحت عالمًا جديدًا','أحسنت يا بطل','رائع جدًا','إجابة صحيحة','ممتاز','أنت مستكشف رائع','نجحت في المهمة','هيا نكتشف شيئًا جديدًا','حاول مرة أخرى يا صديقي','انظر جيدًا','فكّر مرة أخرى','لا بأس','يمكنك المحاولة من جديد','استمع جيدًا','انظر إلى الصور بعناية','لنجرب معًا','اقتربت','حاول مرة أخرى','خذ وقتك','لا داعي للعجلة','لقد جمعت نجمة','حصلت على شارة جديدة','أكملت هذه المرحلة بنجاح','يا له من إنجاز رائع','أنت بطل المغامرة الكبرى','مدينة الألوان','مملكة الأرقام','قرية الحروف','جزيرة الأشكال','حديقة الفواكه','عالم المواصلات','التحديات المختلطة','صندوق الكنوز']);
_t(56,['ابحث عن اللون']);_t(67,COL.map(c=>c[1]));
_t(89,['واحد','اثنان','ثلاثة','أربعة','خمسة','ستة','سبعة','ثمانية','تسعة','عشرة']);
_t(113,'ألف باء تاء ثاء جيم حاء خاء دال ذال راء زاي سين شين صاد ضاد طاء ظاء عين غين فاء قاف كاف لام ميم نون هاء واو ياء'.split(' '));
_t(141,WT);_t(180,SN);_t(200,FN);_t(228,VN);
const PRAISE=[21,23,24,25,26,27,28],RETRY=[30,31,32,34,39];

/* ===== الصوت ===== */
let cur=null,tok=0,AC=null,musT=null;
function tts(t,res){if(!t||!window.speechSynthesis){res();return}try{const u=new SpeechSynthesisUtterance(t);u.lang='ar';const v=speechSynthesis.getVoices().find(v=>/^ar/.test(v.lang));if(v)u.voice=v;u.rate=.85;u.onend=res;u.onerror=res;speechSynthesis.speak(u);setTimeout(res,5000)}catch(e){res()}}
function one(it){return new Promise(res=>{if(typeof it==='number'){const a=new Audio(`assets/audio/${it}.mp3`);cur=a;a.onended=()=>setTimeout(res,50);a.onerror=()=>tts(TXT[it],res);a.play().catch(()=>tts(TXT[it],res))}else tts(it,res)})}
function say(list){const my=++tok;if(cur)cur.pause();try{window.speechSynthesis&&speechSynthesis.cancel()}catch(e){}if(!S.snd)return Promise.resolve();return(async()=>{for(const it of [].concat(list)){if(my!==tok)return;await one(it)}})()}
function tone(f,t,d,type='sine',v=.14){if(!S.snd)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();const o=AC.createOscillator(),g=AC.createGain(),T=AC.currentTime+t;o.type=type;o.frequency.value=f;g.gain.setValueAtTime(v,T);g.gain.exponentialRampToValueAtTime(.001,T+d);o.connect(g);g.connect(AC.destination);o.start(T);o.stop(T+d+.05)}catch(e){}}
const seq=(a,type,v)=>a.forEach((f,i)=>tone(f,i*.11,.22,type,v));
const playClickSound=()=>tone(700,0,.07,'triangle',.1),playSuccessSound=()=>seq([523,659,784,1047]),playErrorSound=()=>{tone(330,0,.18,'sine',.06);tone(294,.16,.2,'sine',.06)},
playStarSound=()=>seq([1319,1760],'triangle',.1),playLevelCompleteSound=()=>seq([523,659,784,659,784,1047,1319]),playCelebrationSound=()=>{for(let i=0;i<14;i++)tone([523,659,784,880,1047][rnd(5)],i*.13,.2,'triangle',.1)};
const VS=[[[440,0],[440,.25]],[[200,0,.5,'sawtooth']],[[130,0],[130,.25],[130,.5],[130,.75],[700,1,.6,'triangle']],[[180,0],[220,.15],[260,.3],[300,.45],[340,.6]],[[110,0,.9,'sawtooth']],[[1800,0,.3],[1800,.35,.3]],[[700,0,.35],[500,.35,.35],[700,.7,.35],[500,1.05,.35]],[[600,0,.3,'triangle'],[800,.3,.3,'triangle'],[600,.6,.3,'triangle'],[800,.9,.3,'triangle']],[[500,0],[500,.2]],[0,1,2,3,4,5,6,7,8,9].map(i=>[90,i*.1,.07,'square']),[0,1,2,3,4,5,6,7].map(i=>[70,i*.13,.1,'sawtooth']),[[880,0,.3],[660,.35,.5]],[[100,0,.2,'sawtooth'],[150,.2],[200,.4],[300,.6,.3,'sawtooth']]];
const playVehicleSound=i=>(VS[i]||[]).forEach(([f,t,d,ty])=>tone(f,t,d||.15,ty||'square',.12));
function music(){clearInterval(musT);if(!S.mus||!S.started)return;const N=[262,294,330,392,440,392,330,294,262,330,392,523,440,392,330,294];let i=0;musT=setInterval(()=>{if(S.mus&&S.snd)tone(N[i++%N.length],0,.4,'sine',.035)},520)}

/* ===== واجهة عامة ===== */
function hud(){$('#sc').textContent=S.stars;$('#bSnd').classList.toggle('off',!S.snd);$('#bMus').classList.toggle('off',!S.mus);$('#bSnd').textContent=S.snd?'🔊':'🔇'}
function spark(el,ch='⭐',n=10){const r=el.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;for(let i=0;i<n;i++){const s=document.createElement('span');s.className='spark';s.textContent=ch;s.style.left=x+'px';s.style.top=y+'px';s.style.setProperty('--x',(rnd(200)-100)+'px');s.style.setProperty('--y',(rnd(200)-130)+'px');document.body.appendChild(s);setTimeout(()=>s.remove(),1200)}}
function confetti(){for(let i=0;i<40;i++){const s=document.createElement('span');s.className='fall';s.textContent=pk(['⭐','🎉','✨','🎈','🌟']);s.style.left=rnd(96)+'vw';s.style.fontSize=(3+rnd(4))+'vmin';s.style.animationDuration=(2+Math.random()*2.5)+'s';s.style.animationDelay=Math.random()+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),5500)}}
function modal(html,btns){ov.innerHTML=`<div class="card">${html}<div class="row">${btns.map((b,i)=>`<button class="btn ${b[1]||''}" data-i="${i}">${b[0]}</button>`).join('')}</div></div>`;ov.hidden=false;$$('#ov .btn').forEach(b=>b.onclick=()=>{playClickSound();ov.hidden=true;btns[b.dataset.i][2]&&btns[b.dataset.i][2]()})}
const bg=(i,ext='jpg')=>app.style.backgroundImage=`url(assets/img/bg${i}.${ext})`;
const click=playClickSound;

/* ===== العوالم ===== */
const WD=[
{k:'c',n:'مدينة الألوان',a:47,bg:1,b:0,x:22,y:30,t:271},
{k:'n',n:'مملكة الأرقام',a:48,bg:2,b:1,x:78,y:20,t:272},
{k:'l',n:'قرية الحروف',a:49,bg:3,b:2,x:80,y:52,t:273},
{k:'s',n:'جزيرة الأشكال',a:50,bg:4,b:3,x:20,y:58,t:274},
{k:'f',n:'حديقة الفواكه',a:51,bg:5,b:4,x:42,y:84,t:275},
{k:'t',n:'عالم المواصلات',a:52,bg:6,b:5,x:74,y:84,t:276},
{k:'m',n:'التحديات المختلطة',a:53,bg:0,b:5,x:50,y:44,t:277}];
const WK=k=>WD.find(w=>w.k===k),isDone=k=>(S.p[k]||0)>=5;
const unlocked=k=>true;
const INTRO={c:[],n:[77],l:[99],s:[169],f:[188],t:[212],m:[241,243]};

/* ===== قوالب الأسئلة ===== */
const P=(txt,say,opts,x={})=>({kind:'pick',txt,say,opts,...x});
const trio=(ans,pool,mk,n=3)=>sh([ans,...some(pool,n-1,[ans])]).map(v=>({...mk(v),ok:v===ans}));
const range=(r,a)=>a[Math.min(r,a.length-1)];
const cOpt=i=>({h:bal(COL[i][0])}),lOpt=i=>({h:`<span>${L[i]}</span>`}),nOpt=n=>({h:ni(n)}),sOpt=i=>({h:shp(i)}),fOpt=i=>({h:img(FI[i])}),vOpt=i=>({h:img(VI[i])});
const IDX=n=>Array.from({length:n},(_,i)=>i);
const lPool=r=>IDX(28).slice(r*9,r*9+9+(r===2?1:0));
const house=(parts,m)=>`<svg class="house" viewBox="0 0 200 170">${parts>=1?'<rect x="45" y="75" width="110" height="85" fill="#1e88e5" stroke="#0003" stroke-width="3"/>':''}${parts>=2&&m!=='noroof'?'<polygon points="100,15 175,75 25,75" fill="#43a047" stroke="#0003" stroke-width="3"/>':''}${parts>=3&&m!=='nodoor'?'<rect x="88" y="110" width="26" height="50" rx="4" fill="#fb8c00" stroke="#0003" stroke-width="3"/>':''}${parts>=4?'<circle cx="62" cy="100" r="11" fill="#fdd835" stroke="#0003" stroke-width="3"/>':''}${parts>=5?'<polygon points="165,10 169,22 182,22 172,30 176,42 165,35 154,42 158,30 148,22 161,22" fill="#fdd835" stroke="#0003" stroke-width="2"/>':''}</svg>`;
const rainbow=(order,n)=>`<svg viewBox="0 0 200 110" width="min(60vw,360px)">${[0,4,1,3,2,5].map((ci,i)=>`<path d="M${14+i*12} 105A${86-i*12} ${86-i*12} 0 0 1 ${186-i*12} 105" fill="none" stroke="${order.slice(0,n).includes(ci)?COL[ci][0]:'#d9d9d9'}" stroke-width="11"/>`).join('')}</svg>`;

/* ===== الأنشطة (5 لكل عالم × 3 جولات) ===== */
const ACT={
c:[
r=>{const pool=IDX(range(r,[4,7,10])),t=pk(pool);return P(`ابحث عن اللون ${COL[t][1]}`,[56,67+t],trio(t,pool,cOpt))},
r=>{const pool=IDX(range(r,[4,7,10])).filter(i=>i!==9),t=pk(pool);return P(`لوّن الزهرة باللون ${COL[t][1]}`,[59,67+t],trio(t,pool,i=>({h:dot(COL[i][0])})),{stage:'<svg viewBox="0 0 100 100" width="120"><g id="fl" fill="#cfcfcf" stroke="#0003" stroke-width="2"><circle cx="50" cy="22" r="16"/><circle cx="78" cy="50" r="16"/><circle cx="50" cy="78" r="16"/><circle cx="22" cy="50" r="16"/></g><circle cx="50" cy="50" r="12" fill="#fff" stroke="#0003"/></svg>',fx:o=>{const i=o.h.match(/--c:([^"]+)"/)[1];$('#fl').setAttribute('fill',i)}})},
r=>{const cs=some(IDX(range(r,[4,6,9])),3),its=sh([...cs,...some(cs,1)]);return{kind:'sort',txt:'طابق كل لون مع اللون نفسه',say:[65],items:its.map(i=>({h:`<span style="font-size:1.2em">${dot(COL[i][0])}</span>`,bin:i})),bins:cs.map(i=>({id:i,h:`<span class="bin" style="background:${COL[i][0]};color:${i===1||i===9?'#333':'#fff'}">${COL[i][1]}</span>`}))}},
r=>{const pool=IDX(range(r,[4,7,10])),a=pk(pool),b=pk(pool.filter(x=>x!==a)),o=sh([...Array(5).fill(a),b]);return P('ابحث عن اللون المختلف',[60],o.map(c=>({...cOpt(c),ok:c===b})))},
r=>{const order=range(r,[[0,1,2],[0,4,1,3],[0,4,1,3,2,5]]),shf=sh(order);return{kind:'seq',txt:'ساعدنا في إكمال قوس قزح!',say:[61],items:shf.map(i=>({h:dot(COL[i][0]),id:i})),order,ann:s=>[67+order[s]],stageFn:n=>rainbow(order,n)}}],
n:[
r=>{const m=range(r,[3,6,10]),t=1+rnd(m);return P(`اختر الرقم ${t}`,[246,88+t],trio(t,IDX(m).map(i=>i+1),nOpt))},
r=>{const m=range(r,[3,6,10]),t=1+rnd(m);return P('كم شيئًا ترى؟',[85],trio(t,IDX(m).map(i=>i+1),nOpt),{stage:Array(t).fill(img('star')).join('')})},
r=>{const m=range(r,[3,5,10]),order=IDX(m).map(i=>i+1);return{kind:'seq',txt:'ضع الأرقام بالترتيب',say:[80],items:sh(order).map(n=>({h:ni(n),id:n})),order,stageFn:n=>`<span style="font-size:.5em">🚂 ${order.map(o=>o<=n?'🟩':'⬜').join('')}</span>`}},
r=>{const t=range(r,[2,3,5])+rnd(2);return{kind:'collect',txt:`أعطِ الأرنب ${t} من الجزر`,say:[82,88+t],n:t,stage:'🐰',items:IDX(8).map(()=>({h:'🥕',ok:1}))}},
r=>{const s=1+rnd(range(r,[3,4,7])),m=rnd(4),t=s+m;return P('ما الرقم الناقص؟',[81],trio(t,IDX(10).map(i=>i+1),nOpt),{stage:`<span style="font-size:.55em;display:flex;gap:1.4vmin;align-items:center">${IDX(4).map(i=>i===m?'<b style="color:#e91e63">؟</b>':ni(s+i)).join('')}</span>`})}],
l:[
r=>{const i=pk(lPool(r));return P('استمع إلى الحرف، ثم اختره',[100,113+i],trio(i,lPool(r),lOpt),{after:[141+i]})},
r=>{const i=pk(lPool(r));return P(`أين حرف ${L[i]}؟`,[250,113+i],trio(i,IDX(28),lOpt),{after:[141+i]})},
r=>{const i=pk(lPool(r)),pool=IDX(28).filter(j=>j===i||L[j]!==L[i]);return P('طابق الحرف مع الصورة المناسبة',[103,113+i],trio(i,pool,j=>({h:WE[j]})),{stage:`<span style="font-size:1.2em">${L[i]}</span>`,after:[141+i]})},
r=>{const i=pk(lPool(r));return P('ما الحرف الذي تبدأ به هذه الكلمة؟',[104,141+i],trio(i,IDX(28),lOpt),{stage:`${WE[i]}<span style="font-size:.4em">${WT[i]}</span>`})},
r=>{const G=range(r,[[[0,1,2,3],[4,5,6],[7,8]],[[9,10],[11,12],[13,14]],[[15,16],[17,18],[19,20]]]),g=pk(G.length?G:[[0,1]]),i=pk(g);return P(`أين حرف ${L[i]}؟ انظر إلى النقاط جيدًا`,[105,250,113+i],g.map(j=>({...lOpt(j),ok:j===i})),{after:[141+i]})}],
s:[
r=>{const pool=IDX(range(r,[4,6,8])),t=pk(pool);return P(`أين ${SN[t]}؟`,[170,180+t],trio(t,pool,sOpt))},
r=>{const order=['square','triangle','rect','circle','star'].slice(0,range(r,[3,4,5])).map(k=>SK.indexOf(k));return{kind:'seq',txt:'ساعدنا في بناء البيت',say:[173],items:sh(order).map(i=>({h:shp(i),id:i})),order,stageFn:n=>house(n)}},
r=>{const pool=IDX(range(r,[4,6,8])),t=pk(pool),others=some(pool.filter(x=>x!==t),4);return{kind:'collect',txt:`ابحث عن ${SN[t]} في الصورة`,say:[174,180+t],n:3,items:sh([t,t,t,...others,...some(others,2)]).map(i=>({h:shp(i),ok:i===t}))}},
r=>{const pool=IDX(range(r,[4,6,8])),t=pk(pool);return P('طابق الشكل مع ظله',[176],trio(t,pool,sOpt),{stage:`<span style="opacity:.8">${shp(t,'#37474f')}</span>`})},
r=>{const m=['noroof','nodoor','noroof'][r],t=m==='noroof'?2:3;return P('ما الشكل الذي ينقص الصورة؟',[175],trio(m==='noroof'?2:3,[0,1,2,3,4,5],sOpt),{stage:house(3,m)})}],
f:[
r=>{const pool=IDX(range(r,[4,8,12])),t=pk(pool);return P(`أين ${FN[t]}؟`,[189,200+t],trio(t,pool,fOpt),{after:[200+t]})},
r=>{const pool=IDX(range(r,[5,8,12])),t=pk(pool),o=some(pool,4,[t]);return{kind:'collect',txt:`اجمع ${FN[t]}`,say:[190,200+t],n:3,items:sh([t,t,t,...o,...some(o,2)]).map(i=>({h:img(FI[i]),ok:i===t}))}},
r=>{const pool=IDX(range(r,[5,8,12])),c=some(pool,2),its=sh([c[0],c[0],c[1],c[1]]);return{kind:'sort',txt:'ضع الفاكهة في السلة المناسبة',say:[191],items:its.map(i=>({h:img(FI[i]),bin:i})),bins:c.map(i=>({id:i,h:`<span class="bin">${img(FI[i])}</span>`}))}},
r=>{const t=1+rnd(range(r,[3,5,8])),f=rnd(12);return P('عدّ الفواكه واختر العدد الصحيح',[192,193],trio(t,IDX(10).map(i=>i+1),nOpt),{stage:Array(t).fill(img(FI[f])).join('')})},
r=>{const pool=IDX(range(r,[5,8,12])),t=pk(pool);return P('هل تستطيع معرفة هذه الفاكهة؟',[194],trio(t,pool,i=>({h:FN[i],t:1})),{stage:`<span id="mys" style="filter:brightness(0) opacity(.6);display:inline-flex">${img(FI[t])}</span>`,fx:()=>{$('#mys').style.filter='none'},after:[200+t]})}],
t:[
r=>{const pool=IDX(range(r,[6,10,13])),t=pk(pool);return P(`أين ${VN[t]}؟`,[218,228+t],trio(t,pool,vOpt),{after:[228+t]})},
r=>{const pool=IDX(range(r,[6,10,13])),t=pk(pool);return P('استمع إلى الصوت، ثم اختر المركبة المناسبة',[214],trio(t,pool,vOpt),{stage:'<button class="sm" id="snd" style="font-size:1.6rem">🔊</button>',on:()=>{setTimeout(()=>playVehicleSound(t),1500);$('#snd').onclick=()=>{click();playVehicleSound(t)}},after:[228+t]})},
r=>{const pool=IDX(13).filter(i=>i!==9||r>0),its=some(pool,range(r,[3,4,5]));const B=[{id:'l',h:'<span class="bin">🛣️<br>على الطريق</span>'},{id:'a',h:'<span class="bin">☁️<br>في السماء</span>'},{id:'w',h:'<span class="bin">🌊<br>على الماء</span>'}];return{kind:'sort',txt:'أين تتحرك هذه المركبة؟',say:[215],items:(its.includes(4)?its:[...its.slice(1),4]).map(i=>({h:img(VI[i]),bin:VE[i],say:228+i})),bins:B}},
r=>{const k=range(r,[3,4,5]);return{kind:'seq',txt:'ساعد المركبة على الوصول إلى وجهتها',say:[217],items:sh(IDX(k).map(i=>i+1)).map(n=>({h:ni(n),id:n})),order:IDX(k).map(i=>i+1),stageFn:n=>`<span style="font-size:.5em">${img(VI[0])}${'➜'.repeat(k-n)}🏁</span>`}},
r=>{const q=[[[224],3,[3,1,4]],[[220,221],4,[0,4,3]],[[222,223],0,[0,3,4]]][r];return P('أحسنت التفكير! اختر المركبة المناسبة',q[0],sh(q[2]).map(i=>({...vOpt(i),ok:i===q[1]})),{after:[228+q[1]]})}],
m:[
r=>{const q=[[244,0,'اختر التفاحة الحمراء',[0,1,3],[244]],[248,1,'اختر الفاكهة التي لونها أصفر',[3,1,0],[248,68]],[248,3,'اختر الفاكهة التي لونها بنفسجي',[2,3,1],[248,72]]][r];const o=sh(q[3]);return P(q[2],q[4],o.map(i=>({...fOpt(i),ok:i===q[1]})))},
r=>{const n=1+rnd(8);if(r===2){const i=rnd(28);return P(`اختر الحرف ${L[i]}`,[250,113+i],trio(i,IDX(28),lOpt),{stage:'🚂'})}return P(`اختر المركبة التي تحمل الرقم ${n}`,[249,88+n],trio(n,IDX(10).map(i=>i+1),k=>({h:`<span style="position:relative">${img(VI[(k*3)%13])}<span style="position:absolute;top:-2vmin;right:-2vmin;font-size:.4em;background:#fff;border-radius:50%;width:1.4em;height:1.4em;display:flex;align-items:center;justify-content:center;border:3px solid #7a35d8">${k}</span></span>`})))},
r=>{const k=[0,2,4][r];return P(`ابحث عن الشكل ${SN[k]}`,[247,180+k],trio(k,IDX(8),sOpt))},
r=>{if(r===0)return P('اختر الحافلة الزرقاء',[245],sh([['veh1',0],['veh30',1],['veh31',0]]).map(a=>({h:img(a[0]),ok:!!a[1]})));if(r===1){const n=1+rnd(10);return P(`اختر الرقم ${n}`,[246,88+n],trio(n,IDX(10).map(i=>i+1),nOpt))}const i=rnd(28);return P(`اختر الحرف ${L[i]}`,[250,113+i],trio(i,IDX(28),lOpt))},
r=>{const q=[()=>{const i=rnd(28);return P('لغز المستكشف: اختر الحرف',[250,113+i],trio(i,IDX(28),lOpt),{stage:WE[i]})},()=>{const t=1+rnd(10);return P('لغز المستكشف: اختر الرقم',[246,88+t],trio(t,IDX(10).map(i=>i+1),nOpt))},()=>{const f=pk([1,3,0]),c={1:68,3:72,0:67}[f];return P(`اختر الفاكهة التي لونها ${TXT[c]}`,[248,c],trio(f,[0,1,2,3,4],fOpt))}];return q[r]()}]
};
/* ===== عرض الأسئلة ===== */
let cw,ca,cr,sp;
function renderQ(){
  sp=ACT[cw][ca](cr);const w=WK(cw);bg(w.bg);
  const items=sp.kind==='pick'?sp.opts:sp.kind==='sort'?[]:sp.items;
  const optHtml=items.map((o,i)=>`<button class="opt${o.t?' t':''}" data-i="${i}">${o.h}</button>`).join('');
  const bins=sp.kind==='sort'?`<div class="row" id="bins">${sp.bins.map((b,i)=>`<button data-i="${i}" style="background:none">${b.h}</button>`).join('')}</div>`:'';
  app.innerHTML=`<div class="bar"><button class="sm" id="bk">↩</button><div class="dots">${[0,1,2].map(i=>i<cr?'●':i===cr?'◉':'○').join(' ')}</div><button class="sm" id="rp">🔊</button></div>
  <div class="prompt">${sp.txt}</div><div class="stage" id="stg">${sp.kind==='sort'?'':sp.stage||''}${sp.kind==='seq'?sp.stageFn(0):''}</div>${bins}<div class="opts" id="opts">${optHtml}</div>`;
  $('#bk').onclick=()=>{click();stageMenu(cw)};$('#rp').onclick=()=>{click();say(sp.say)};
  say(sp.say);sp.on&&sp.on();
  const B=$$('#opts .opt');let wrong=0,locked=false;
  const bad=b=>{playErrorSound();b.classList.add('shake');setTimeout(()=>b.classList.remove('shake'),500);say(pk(RETRY));wrong++};
  if(sp.kind==='pick')B.forEach((b,i)=>b.onclick=()=>{if(locked)return;click();const o=sp.opts[i];if(o.ok){locked=true;b.classList.add('good');sp.fx&&sp.fx(o);win(b)}else{bad(b);if(wrong>=2)B[sp.opts.findIndex(x=>x.ok)].classList.add('hint')}});
  if(sp.kind==='seq'){let s=0;const ann=()=>sp.ann&&say(sp.ann(s));if(sp.ann)setTimeout(ann,2600);B.forEach((b,i)=>b.onclick=()=>{if(locked)return;click();if(sp.items[i].id===sp.order[s]){b.classList.add('done');s++;$('#stg').innerHTML=sp.stageFn(s);playStarSound();if(s===sp.order.length){locked=true;win(b)}else ann()}else bad(b)})}
  if(sp.kind==='collect'){let c=0;B.forEach((b,i)=>b.onclick=()=>{if(locked||b.classList.contains('done'))return;click();if(sp.items[i].ok){b.classList.add('done');c++;playStarSound();spark(b,'✨',4);if(c>=sp.n){locked=true;win(b)}}else bad(b)})}
  if(sp.kind==='sort'){let k=0;const show=()=>{$('#stg').innerHTML=sp.items[k].h;$('#stg').firstElementChild&&0};show();$$('#bins button').forEach((b,i)=>b.onclick=()=>{if(locked)return;click();const it=sp.items[k];if(sp.bins[i].id===it.bin){playStarSound();spark(b,'✨',6);k++;if(k>=sp.items.length){locked=true;$('#stg').innerHTML='';win(b)}else show()}else{bad($('#stg'))}})}
}
function win(el){playSuccessSound();spark(el);const x=sp.after||[];let f=0;const go=()=>{if(f)return;f=1;done()};say([pk(PRAISE),...x]).then(()=>setTimeout(go,450));setTimeout(go,9000)}
let busy=0;
function done(){if(busy)return;busy=1;setTimeout(()=>busy=0,600);S.stars++;save();hud();playStarSound();cr++;if(cr<3)renderQ();else actDone()}
function actDone(){S.p[cw]=Math.max(S.p[cw]||0,ca+1);save();const w=WK(cw);playLevelCompleteSound();confetti();
  if(cw==='m'&&isDone('m')){return final()}
  if(isDone(cw)&&!S.badges.includes(cw)){S.badges.push(cw);save();return modal(`<div>🎉 تهانينا! أكملت هذا العالم!</div>${img('badge'+w.b)}<div>${w.k==='m'?'':'بطل '}${w.n}</div>`,[['خريطة العوالم','b',map]]),say([258,w.t])}
  say([44]);modal('<div>⭐ أكملت هذه المرحلة بنجاح!</div>',ca<4?[['المرحلة التالية','',()=>startAct(ca+1)],['العوالم','b',()=>stageMenu(cw)]]:[['خريطة العوالم','b',map]])}
function startAct(a){ca=a;cr=0;renderQ()}
function stageMenu(k){cw=k;const w=WK(k),p=S.p[k]||0;bg(w.bg);say([w.a,...INTRO[k]]);
  app.innerHTML=`<h2 class="title" style="font-size:clamp(28px,7vmin,60px)">${w.n}</h2><div class="row">${IDX(5).map(i=>`<button class="stagebtn ${i<p?'done':''}" data-i="${i}">${i<p?'⭐':i+1}<small>${i<p?'':''}</small></button>`).join('')}</div><button class="btn b" id="mp">خريطة العوالم</button>`;
  $$('.stagebtn').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;click();startAct(i)});$('#mp').onclick=()=>{click();map()}}
/* ===== الخريطة والشاشات ===== */
function map(){bg(0);say([7,18]);app.innerHTML=`<div class="map">${WD.map(w=>{const u=unlocked(w.k);return`<button class="node ${u?'':'lock'} ${isDone(w.k)?'done':''}" data-k="${w.k}" style="left:${w.x}%;top:${w.y}%">${img(w.k==='m'?'crown':'badge'+w.b)}<span>${w.n}</span></button>`}).join('')}</div>
  <div class="row"><button class="btn o" id="tr">🎁 صندوق الكنوز</button><button class="btn p" id="hm">الرئيسية</button></div>`;
  $$('.node').forEach(b=>b.onclick=()=>{click();const k=b.dataset.k;stageMenu(k)});
  $('#tr').onclick=()=>{click();treasure()};$('#hm').onclick=()=>{click();home()}}
function treasure(){if(!isDone('m')){say([54,19]);return modal('<div>🔒 صندوق الكنوز</div><div style="font-size:.7em">أكمل التحديات المختلطة لفتحه</div>',[['حسنًا','',null]])}
  bg(0);say([279,280]);app.innerHTML=`<h2 class="title" style="font-size:clamp(28px,7vmin,60px)">صندوق الكنوز</h2><img class="chest" src="${IM('chest')}" id="ch" alt=""><button class="btn o" id="bk2">العودة</button>`;
  $('#ch').onclick=()=>{playCelebrationSound();confetti();say([281]);$('#ch').outerHTML='<div class="row" id="an">'+AN.map((a,i)=>`<button class="opt ani" data-i="${i}">${img(a[0])}<span>${a[1]}</span></button>`).join('')+'</div>';$$('.ani').forEach(b=>b.onclick=()=>{click();spark(b);say(AN[+b.dataset.i][1])})};$('#bk2').onclick=()=>{click();map()}}
function final(){bg(0);playCelebrationSound();confetti();say([267,268,269]);app.innerHTML=`<img class="duo" src="${IM('hero0')}" alt=""><h1 class="title">بطل المغامرة الكبرى!</h1><div class="row">${IDX(6).map(i=>img('badge'+i).replace('<img','<img style="height:12vmin"')).join('')}${img('trophy').replace('<img','<img style="height:16vmin"')}</div><div class="sub">شكرًا لك على اللعب والتعلم معنا</div><button class="btn" id="mp">خريطة العوالم</button>`;$('#mp').onclick=()=>{click();map()}}
function home(){bg(0);S.started=1;music();const has=Object.keys(S.p).length>0;
  app.innerHTML=`<img class="duo" src="${IM('hero0')}" alt=""><h1 class="title">المغامرة الكبرى</h1><p class="sub">هيا نكتشف ونتعلم ونلعب!</p><div class="row"><button class="btn" id="go">ابدأ المغامرة</button>${has?'<button class="btn b" id="ct">متابعة اللعب</button>':''}<button class="btn p" id="mp">خريطة العوالم</button></div>`;
  say([0,1,2]);$('#go').onclick=()=>{click();has?modal('<div>هل تريد أن تبدأ مغامرة جديدة؟<br>سيُمسح تقدمك السابق.</div>',[['نعم','r',fresh],['لا','b',null]]):intro()};
  if(has)$('#ct').onclick=()=>{click();say([6]);map()};$('#mp').onclick=()=>{click();map()}}
function fresh(){S=Object.assign(def(),{snd:S.snd,mus:S.mus,started:1});save();hud();intro()}
function intro(){say([17,3]);app.innerHTML=`<img class="duo" src="${IM('hero0')}" alt=""><img src="${IM('map')}" style="height:40vmin;border-radius:24px;animation:pop 1.4s" alt=""><div class="sub">استعد لمغامرة جديدة!</div>`;setTimeout(map,3200)}
/* ===== أزرار الشريط العلوي ===== */
$('#bHome').onclick=()=>{click();home()};
$('#bSnd').onclick=()=>{S.snd=S.snd?0:1;save();hud();if(!S.snd){tok++;try{speechSynthesis.cancel()}catch(e){}if(cur)cur.pause()}else{click();say(9)}};
$('#bMus').onclick=()=>{S.mus=S.mus?0:1;save();hud();music();say(10)};
$('#bHelp').onclick=()=>{click();say([35,36]);modal('<div>❓ مساعدة</div><div style="font-size:.7em">استمع جيدًا، وانظر إلى الصور بعناية، ثم اضغط على الإجابة الصحيحة.<br>لا بأس إن أخطأت، يمكنك المحاولة من جديد!</div>',[['عُد إلى اللعب','',()=>say([13])]])};
hud();home();
document.addEventListener('pointerdown',()=>{if(!S.started){S.started=1;music()}},{once:true});
