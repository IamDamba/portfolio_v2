const scroller = (slider) => {    
  const scrollHorizontally = (e)=>{
      e = window.event || e;
      const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      slider.scrollLeft -= delta * 80;
  }
  
  if (slider.addEventListener){
      slider.addEventListener('mousewheel', scrollHorizontally, false);
      slider.addEventListener('DOMMouseScroll', scrollHorizontally, false);
  }else{
      slider.attachEvent('onmousewheel', scrollHorizontally);
  }
  
  if (document.body.addEventListener){
      document.body.addEventListener('mousewheel', scrollHorizontally, false);
      document.body.addEventListener('DOMMouseScroll', scrollHorizontally, false);
  }else{
      document.body.attachEvent('onmousewheel', scrollHorizontally);
  }
}

export default scroller;
