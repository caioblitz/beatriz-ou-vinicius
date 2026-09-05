(()=>{
'use strict';
const {TARGET,snapshot}=window.BabyCountdown;
const fields=['days','hours','minutes','seconds'].map(id=>document.getElementById(id));
const section=document.querySelector('.countdown-section');
let timer,finished=false;
function celebrate(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const container=document.getElementById('celebration');
  const icons=['♥','✦','✧','▪','●','🎈'];
  for(let i=0;i<65;i++){
    const p=document.createElement('span');p.className='particle'+(i%6===5?' balloon':'');p.textContent=icons[i%6];
    p.style.cssText=`--x:${Math.random()*98}%;--color:${['#d78daf','#8cbed7','#d8bb65','#b39bce','#8dbfa7'][i%5]};--size:${12+Math.random()*16}px;--duration:${5+Math.random()*5}s;--delay:${Math.random()*3}s`;
    container.appendChild(p);
  }
  setTimeout(()=>container.replaceChildren(),14000);
}
function render(){
  const now=Date.now(),state=snapshot(now);
  fields.forEach((el,i)=>{const text=String(state.values[i]).padStart(2,'0');if(el.textContent!==text){el.textContent=text;el.classList.remove('changed');void el.offsetWidth;el.classList.add('changed');}});
  const status=document.getElementById('status');if(status.textContent!==state.message)status.textContent=state.message;
  document.getElementById('progress').value=state.progress;
  section.classList.toggle('final-minute',state.remaining>0&&state.remaining<=60000);
  if(state.remaining===0){
    if(!finished){finished=true;section.classList.add('arrived');document.getElementById('countdown-heading').textContent='CHEGOU A HORA! 🎉👶🎉';status.textContent='O grande momento chegou!';document.getElementById('faltam').hidden=true;document.getElementById('reveal').hidden=false;celebrate();}
    clearTimeout(timer);return;
  }
  timer=setTimeout(render,Math.min(1000-(Date.now()%1000),Math.max(1,TARGET-Date.now())));
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!finished){clearTimeout(timer);render();}});
window.addEventListener('pageshow',()=>{if(!finished){clearTimeout(timer);render();}});
render();
})();
