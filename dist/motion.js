(() => {
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const hero=document.querySelector('.hero'), scene=document.querySelector('.hero-scene'), letters=[...document.querySelectorAll('#heroTitle span')], model=document.querySelector('.hero-model'), collection=document.querySelector('.collection'), stage=document.querySelector('.collection-scene'), word=document.querySelector('.collection-word');
  let px=0,py=0,tx=0,ty=0,frame=0,opened=performance.now(),visible=true;
  const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
  const ease=x=>1-Math.pow(1-x,4);
  const initialX=[-55,-32,24,-35,10,35,-16,46,65],initialY=[-22,40,-38,18,-32,38,-23,30,-25];
  const vectors=[[.07,-.11,-14],[.04,.14,13],[-.03,-.12,-11],[-.07,.11,14]];
  let cardCache=[];
  function cache(){cardCache=[...document.querySelectorAll('.product')];}
  cache();new MutationObserver(()=>{cache();wake()}).observe(document.querySelector('#products'),{childList:true});
  function paint(now){
    frame=0;if(reduce.matches||!visible)return;
    px+=(tx-px)*.085;py+=(ty-py)*.085;
    const rect=hero.getBoundingClientRect(), vh=innerHeight, mobile=innerWidth<=800;
    const progress=clamp(-rect.top/Math.max(1,hero.offsetHeight-scene.offsetHeight));
    const entrance=1-ease(clamp((now-opened)/1400));
    const heroVisible=rect.bottom>0&&rect.top<vh;
    if(heroVisible){
      letters.forEach((l,i)=>{const d=i-4;const x=initialX[i]*entrance+px*d*(mobile?7:19)+d*progress*(mobile?16:33);const y=initialY[i]*entrance+py*(i%2?25:-25)+(i%2?1:-1)*progress*(mobile?65:140);const rot=px*d*.7+(i%2?1:-1)*progress*8+entrance*(i%2?5:-5);l.style.transform=`translate3d(${x}px,${y}px,0) rotate(${rot}deg)`});
      model.style.transform=`translate3d(${px*-12}px,${progress*70}px,0) scale(${1+progress*.09})`;
    }
    const cr=collection.getBoundingClientRect(), p=clamp(-cr.top/Math.max(1,collection.offsetHeight-stage.offsetHeight));
    const chaos=Math.pow(Math.sin(p*Math.PI),1.25);
    if(cr.top<vh&&cr.bottom>0){
      cardCache.forEach((card,i)=>{const [x,y,r]=vectors[i%4];card.style.transform=`translate3d(${x*innerWidth*chaos}px,${y*vh*chaos}px,0) rotate(${r*chaos}deg) scale(${1+chaos*(mobile?.12:.08)})`;card.style.zIndex=i%2?'3':'1';const info=card.querySelector('.product-info'), note=card.querySelector('small');const o=clamp(1-chaos*2.4);if(info)info.style.opacity=o;if(note)note.style.opacity=o});
      word.style.opacity=clamp((chaos-.32)*1.7);word.style.transform=`translate3d(0,${(1-chaos)*45}px,0)`;
      stage.classList.toggle('is-chaos',chaos>.35);
      const hint=stage.querySelector('.motion-hint');hint.textContent=p>.85?'Свой порядок.':p>.2?'Правила можно менять.':'Прокрути. Смени порядок.';
    }
    const moving=Math.abs(tx-px)+Math.abs(ty-py)>.002;
    if(entrance>.001||moving)frame=requestAnimationFrame(paint);
  }
  function wake(){if(!frame&&!reduce.matches&&visible)frame=requestAnimationFrame(paint)}
  scene.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2;wake()});
  scene.addEventListener('pointerleave',()=>{tx=ty=0;wake()});
  addEventListener('scroll',wake,{passive:true});addEventListener('resize',wake,{passive:true});
  document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible)wake()});
  reduce.addEventListener('change',()=>{if(reduce.matches){letters.forEach(l=>l.style.transform='none');model.style.transform='none';cardCache.forEach(c=>{c.style.transform='none';c.querySelector('.product-info').style.opacity=1;c.querySelector('small')?.style.setProperty('opacity','1')});word.style.opacity=0;stage.classList.remove('is-chaos')}else wake()});
  document.addEventListener('site-ready',()=>{opened=performance.now();wake()},{once:true});
  wake();
})();
