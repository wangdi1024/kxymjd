Vue.directive('tap',{
    bind(el, binding, vNode){
    let expression = binding.value;
    let handler = expression.name;
    let args = expression.args
   
    on(el, 'touchstart', (e)=>{
     
     let startX = e.changedTouches[0].clientX;
     let startY = e.changedTouches[0].clientY;
   
     once(el, 'touchend',(ev)=>{
   
     let disX = Math.abs(ev.changedTouches[0].clientX-startX);
     let disY = Math.abs(ev.changedTouches[0].clientY-startY);
   
     if(disX == 0 && disY ==0){
      handler(args);
     }
     })
    })
    }
   })