/* All visitors share one event instant, resolved explicitly in America/Sao_Paulo. */
(function(root){
  const TIME_ZONE='America/Sao_Paulo';
  function zonedTimestamp(year,month,day,hour,minute=0,second=0){
    const wall=Date.UTC(year,month-1,day,hour,minute,second);
    const format=new Intl.DateTimeFormat('en-GB',{timeZone:TIME_ZONE,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});
    let instant=wall;
    for(let i=0;i<3;i++){
      const p=Object.fromEntries(format.formatToParts(new Date(instant)).map(p=>[p.type,p.value]));
      const rendered=Date.UTC(+p.year,+p.month-1,+p.day,+p.hour,+p.minute,+p.second);
      instant+=wall-rendered;
    }
    return instant;
  }
  const TARGET=zonedTimestamp(2026,9,8,10);
  // Fixed decorative countdown window; never resets on a visit or reload.
  const START=zonedTimestamp(2026,9,1,10);
  function snapshot(now){
    const remaining=Math.max(0,TARGET-now),s=Math.ceil(remaining/1000);
    let message='O grande dia está chegando ♡';
    if(remaining===0)message='CHEGOU A HORA! 🎉👶🎉';
    else if(remaining<600000)message='PREPAREM OS CORAÇÕES! ❤️👶';
    else if(remaining<3600000)message='Está quase na hora! 😱❤️';
    else if(remaining<86400000)message='É amanhã! 😍👶💗💙';
    return {remaining,values:[Math.floor(s/86400),Math.floor(s/3600)%24,Math.floor(s/60)%60,s%60],message,progress:Math.min(100,Math.max(0,(now-START)/(TARGET-START)*100))};
  }
  root.BabyCountdown={TIME_ZONE,TARGET,START,snapshot};
})(typeof module!=='undefined'?module.exports:window);
