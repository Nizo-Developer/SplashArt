var lx, ly;
var zoom = 20;
var plzoom = 0;
var foc = 0;
var pos = 2.5;

let side = 10;

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('cursor', 0);
  localStorage.removeItem('interval');
})

export function setCursor() {
  const body = document.querySelector("body");
  
  body.innerHTML += `
    <audio id="audio" src="audio/hover.MP3"></audio>
    <audio id="audio2" src="audio/click.MP3"></audio>
  `;

  console.log(localStorage.getItem('cursor'))

  createCursor();
}

export function createCursor() {
  if (localStorage.getItem('cursor') == 0) {
    cursor.innerHTML = `
      <div class="side-wrapper">
        <div class="cur side" id="side1"></div>
        <div class="cur side" id="side2"></div>
        <div class="cur side" id="side3"></div>
        <div class="cur side" id="side4"></div>
      </div>
      <div class="plus-wrapper">
        <div class="cur plus" id="plus1"></div>
        <div class="cur plus" id="plus2"></div>
        <div class="cur plus" id="plus3"></div>
        <div class="cur plus" id="plus4"></div>
      </div>
      <div class="cur cur-mid" id="mid" draggable="false"></div>
    `;
  } else {
    cursor.innerHTML = `
      <div class="x-cursor">
        <div class="cur x1-wrap" id="x1">
        <div class="cur x1"></div>
        </div>
        <div class="cur x2-wrap" id="x2">
        <div class="cur x2"></div>
        </div>
        <div class="cur cur-dot" id="mid" draggable="false"></div>
      </div>
    `
  }

  startCursor();
}

function startCursor() {
  
  var curMid = document.getElementById("mid");

  console.log(!localStorage.getItem('interval'))
  if (!localStorage.getItem('interval')) {
    
    localStorage.setItem('interval', 1);
    setInterval(function () {
      if (foc == 0 && localStorage.getItem('cursor') == 0) {
        detect(ly, lx);
      } 
    }, 500);
  }

  window.removeEventListener("mousemove", phCursorMove)
  window.removeEventListener("mousemove", xCursorMove)
  window.removeEventListener("click", xCursorClick);

  if (localStorage.getItem('cursor') == 0) {
    var curSide1 = document.getElementById("side1");
    var curSide2 = document.getElementById("side2");
    var curSide3 = document.getElementById("side3");
    var curSide4 = document.getElementById("side4");
    
    var dio2 = document.getElementById("audio2");
  
    var ob = document.querySelectorAll(".object");
  
  
    window.addEventListener("wheel", respond);
  
    ob.forEach(function (item) {
      item.addEventListener("mouseover", respond);
  
      item.addEventListener("click", function (event) {
        plzoom = 4;
        var bound = item.getBoundingClientRect();
        dio2.play();
  
        var xl = bound.left;
        var xr = bound.right;
        var yt = bound.top;
        var yb = bound.bottom;
  
        curSide1.style.transform = `translate(${xl - 10}px, ${yt - 10}px)`;
        curSide2.style.transform = `translate(${xr + 5}px, ${yt - 10}px)`;
        curSide3.style.transform = `translate(${xr + 5}px, ${yb + 5}px)`;
        curSide4.style.transform = `translate(${xl - 10}px, ${yb + 5}px)`;
        detect(ly, lx);
        setTimeout(() => {
          var bound = item.getBoundingClientRect();
          plzoom = 12;
          var xl = bound.left;
          var xr = bound.right;
          var yt = bound.top;
          var yb = bound.bottom;
  
          curSide1.style.transform = `translate(${xl - 20}px, ${yt - 20}px)`;
          curSide2.style.transform = `translate(${xr + 15}px, ${yt - 20}px)`;
          curSide3.style.transform = `translate(${xr + 15}px, ${yb + 15}px)`;
          curSide4.style.transform = `translate(${xl - 20}px, ${yb + 15}px)`;
          detect(ly, lx);
        }, 500);
      });
  
      item.addEventListener("mouseleave", function (event) {
        pos = 2.5;
        plzoom = 0;
        foc = 0;
  
        setTimeout(() => {
          curMid.style.height = "5px";
          curMid.style.width = "5px";
          detect(ly, lx);
          foc = 0;
          plzoom = 0;
        }, 200);
      });
    });
  
    window.addEventListener("mousemove", phCursorMove);
  } else {

    window.addEventListener("mousemove", xCursorMove)

    setTimeout(() => {
      window.addEventListener("click", xCursorClick);
    }, 200);
  }
}

function phCursorMove(event) {
  var curMid = document.getElementById("mid");
  var curPlus1 = document.getElementById("plus1");
  var curPlus2 = document.getElementById("plus2");
  var curPlus3 = document.getElementById("plus3");
  var curPlus4 = document.getElementById("plus4");
  var curSide1 = document.getElementById("side1");
  var curSide2 = document.getElementById("side2");
  var curSide3 = document.getElementById("side3");
  var curSide4 = document.getElementById("side4");

  var y = event.clientY;
  var x = event.clientX;

  curMid.style.transform = `translate(${x - pos}px, ${y - pos}px)`;
  curPlus1.style.transform = `translate(${x + 0.5}px, ${
    y - (15 + plzoom)
  }px)`;
  curPlus2.style.transform = `translate(${x + (11 + plzoom)}px, ${y}px)`;
  curPlus3.style.transform = `translate(${x + 0.5}px, ${
    y + (11 + plzoom)
  }px)`;
  curPlus4.style.transform = `translate(${x - (16 + plzoom)}px, ${y}px)`;
  detect(y, x);
  if (foc == 0) {
    curSide1.style.transform = `translate(${x - (20 + zoom)}px, ${
      y - (20 + zoom)
    }px)`;
    curSide2.style.transform = `translate(${x + (15 + zoom)}px, ${
      y - (20 + zoom)
    }px)`;
    curSide3.style.transform = `translate(${x + (15 + zoom)}px, ${
      y + (15 + zoom)
    }px)`;
    curSide4.style.transform = `translate(${x - (20 + zoom)}px, ${
      y + (15 + zoom)
    }px)`;
  }
}

function xCursorMove(event) {
  const dot = document.querySelector('.cur-dot');
  const x1 = document.querySelector('#x1');
  const x2 = document.querySelector('#x2');

  const y = event.clientY;
  const x = event.clientX;
  const height = window.innerHeight;
  const width = window.innerWidth;
  const left = width * 0.2
  const bottom = height - 100;
  const right = width - 100;
  const top = height * 0.2
  
  dot.style.transform = `translate(${x - pos}px, ${y - pos}px)`;

  if (width > 950 && (y <= 100 || (y > 100 && y < bottom && x <= left) || y >= bottom)) {
    x1.style.top = '0';
    x2.style.top = '0';

    if (y <= 100) {
      x1.style.left = '-18px';
      x2.style.left = '15px';
      x1.children[0].style.backgroundColor = 'black';
      x2.children[0].style.backgroundColor = 'black';
    } else if (y > 100 && y < bottom) {
      x1.style.left = '-3px';
      x2.style.left = '-3px';
      x1.children[0].style.backgroundColor = 'rgb(235, 8, 8)';
      x2.children[0].style.backgroundColor = 'rgb(235, 8, 8)';
    } else if (y >= bottom) {
      x1.style.left = '15px';
      x2.style.left = '-18px';
      x1.children[0].style.backgroundColor = 'black';
      x2.children[0].style.backgroundColor = 'black';
    }

    dot.style.height = '3px';
    dot.style.width = '3<px';
    dot.style.top = '1.5px';
    dot.style.left = '1.5px';
    dot.style.opacity = '0';
  } else if (width <= 950 && (x <= 100 || (x > 100 && x < right && y <= top) || x >= right)) {
    x1.style.left = '0';
    x2.style.left = '0';
    if (x <= 100) {
      x1.style.top = '-18px';
      x2.style.top = '15px';
      x1.children[0].style.backgroundColor = 'black';
      x2.children[0].style.backgroundColor = 'black';
    } else if (x > 100 && x < right) {
      x1.style.top = '0';
      x2.style.top = '0';
      x1.style.left = '-3px';
      x2.style.left = '-3px';
      x1.children[0].style.backgroundColor = 'rgb(235, 8, 8)';
      x2.children[0].style.backgroundColor = 'rgb(235, 8, 8)';
    } else if (x >= right) {
      x1.style.top = '15px';
      x2.style.top = '-18px';
      x1.children[0].style.backgroundColor = 'black';
      x2.children[0].style.backgroundColor = 'black';
    }

    dot.style.height = '3px';
    dot.style.width = '3px';
    dot.style.top = '1.5px';
    dot.style.left = '1.5px';
    dot.style.opacity = '0';
  } else {
    x1.children[0].style.backgroundColor = 'transparent';
    x2.children[0].style.backgroundColor = 'transparent';
    
    dot.style.height = '10px';
    dot.style.width = '10px';
    dot.style.top = '-3px';
    dot.style.left = '-3px';
    dot.style.opacity = '1';
  }
  x1.style.transform = `translate(${x - pos}px, ${y - pos}px)`;
  x2.style.transform = `translate(${x - pos}px, ${y - pos}px)`;
}

function xCursorClick(event) {
  const y = event.clientY;
  const x = event.clientX;
  const height = window.innerHeight;
  const width = window.innerWidth;
  const left = width * 0.2
  const bottom = height - 100;
  const right = width - 100;
  const top = height * 0.2

  if (localStorage.getItem('cursor') == 1) {
    if (width > 950) {
      if (y <= 100 || y > 100 && y < bottom && x <= left || y >= bottom) {
        if (y <= 100) {
          viewChange(0);
        } else if (y > 100 && y < bottom) {
          viewSide();
        } else if (y >= bottom) {
          viewChange(1);
        }
      }
    } else {
      if (x <= 100 || (x > 100 && x < right && y <= top) || x >= right) {
        if (x <= 100) {
          viewChange(0);
        } else if (x > 100 && x < right) {
          viewSide();
        } else if (x >= right) {
          viewChange(1);
        }
      }
    }
  } 
}

function respond(event) {
  if (localStorage.getItem('cursor') == 0) {
    if (Object.values(event.target.classList).includes('object') ) {
    }
    var curMid = document.getElementById("mid");
    var curSide1 = document.getElementById("side1");
    var curSide2 = document.getElementById("side2");
    var curSide3 = document.getElementById("side3");
    var curSide4 = document.getElementById("side4");
  
    var dio = document.getElementById("audio");
  
    const item = event.target;
  
    if (!Object.values(item.classList).includes('object')) {
      return
    }
  
    pos = 5;
    setTimeout(() => {
      var bound = item.getBoundingClientRect();
      plzoom = 12;
      detect(ly, lx);
  
      curMid.style.height = "10px";
      curMid.style.width = "10px";
  
      dio.currentTime = 0;
      dio.play();
      foc = 1;
  
      var xl = bound.left;
      var xr = bound.right;
      var yt = bound.top;
      var yb = bound.bottom;
  
      curSide1.style.transform = `translate(${xl - 20}px, ${yt - 20}px)`;
      curSide2.style.transform = `translate(${xr + 15}px, ${yt - 20}px)`;
      curSide3.style.transform = `translate(${xr + 15}px, ${yb + 15}px)`;
      curSide4.style.transform = `translate(${xl - 20}px, ${yb + 15}px)`;
    }, 200);
  }
}

function detect(y, x) {
  if (localStorage.getItem('cursor') == 0) {

    var curMid = document.getElementById("mid");
    var curSide1 = document.getElementById("side1");
    var curSide2 = document.getElementById("side2");
    var curSide3 = document.getElementById("side3");
    var curSide4 = document.getElementById("side4");
    var curPlus1 = document.getElementById("plus1");
    var curPlus2 = document.getElementById("plus2");
    var curPlus3 = document.getElementById("plus3");
    var curPlus4 = document.getElementById("plus4");
  
    var curs = document.querySelectorAll(".side");
  
    curs.forEach(function (cur) {
      cur.style.transition = "all 0.5s";
    });
  
    if (x !== lx || y !== ly) {
      lx = x;
      ly = y;
    } else {
      curMid.style.transform = `translate(${x - pos}px, ${y - pos}px)`;
      curPlus1.style.transform = `translate(${x + 0.5}px, ${
        y - (15 + plzoom)
      }px)`;
      curPlus2.style.transform = `translate(${x + (11 + plzoom)}px, ${y}px)`;
      curPlus3.style.transform = `translate(${x + 0.5}px, ${
        y + (11 + plzoom)
      }px)`;
      curPlus4.style.transform = `translate(${x - (16 + plzoom)}px, ${y}px)`;
  
      if (foc == 0) {
        curSide1.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
        curSide2.style.transform = `translate(${x + 15}px, ${y - 20}px)`;
        curSide3.style.transform = `translate(${x + 15}px, ${y + 15}px)`;
        curSide4.style.transform = `translate(${x - 20}px, ${y + 15}px)`;
      }
    }
    setTimeout(() => {
      curs.forEach(function (cur) {
        cur.style.transition = "all 0.3s";
      });
    }, 100);
  }
}

function viewChange(type) {
  console.log('a')
  console.log(localStorage.getItem('w'))
  if (!localStorage.getItem('w')) {
    const page = localStorage.getItem('page');
    console.log('b', type, parseInt(page) > 0 ? parseInt(page) - 1 : side - 1, parseInt(page) < side - 1 ? parseInt(page) + 1 : 0)
    if (type == 0) {
      localStorage.setItem('page', parseInt(page) > 0 ? parseInt(page) - 1 : side - 1)
    } else {
      localStorage.setItem('page', parseInt(page) < side - 1 ? parseInt(page) + 1 : 0)
    }
  
    goto();
  }
  
  localStorage.removeItem('w');
}

function viewSide(type) {
  localStorage.setItem('onChange', 1)
  if (!type) {
    const view = localStorage.getItem('view');
    if (view == undefined) {
      localStorage.setItem('view', 1);
    } else {
      localStorage.setItem('view', view == 1 ? 0 : 1);
    }
  }

  const scroll = document.querySelector('.scroll-side');
  const section = document.querySelector('section');
  const content = document.querySelector('.content');
  const sideView = document.querySelectorAll('.sideView');
  const wrapper = document.querySelector('.wrapper');
  const bar = document.querySelector('.bars');
  const shadow = document.querySelectorAll('.sh')
  const long = document.querySelector('.long-content');

  const width = window.innerWidth;

  if (width > 950) {
    if (localStorage.getItem('view') == 1) {
      localStorage.removeItem('w')

      wrapper.style.removeProperty('padding-top');
      scroll.style.removeProperty('height');
      section.style.removeProperty('grid-template-rows');
      long.style.removeProperty('padding-inline');
      content.style.removeProperty('height');


      section.style.gridTemplateColumns = '0fr 1fr';
      bar.style.opacity = 0;
      long.style.paddingBlock = '50px';
      long.style.paddingInline = '30px';
      long.style.gap = '50px';
      content.style.padding = 0;
      shadow.forEach(e => {
        e.style.display = 'none';
      })
      sideView.forEach(e => {
        e.style.transition = 'all 0.5s ease';
        e.style.height = 'calc(100vh - 90px)';
        e.style.removeProperty('width');
        e.style.removeProperty('bottom');
        e.style.pointerEvents = 'none';
        e.querySelector('.object').style.pointerEvents = 'all';
        e.style.right = 0;
        setTimeout(() => {
          e.style.removeProperty('transition');
        }, 1000);
      })
    
      setTimeout(() => {   
        goto()
        wrapper.style.overflow = 'hidden';
      }, 1000);
    } else {
      localStorage.setItem('w', 1)

      section.style.removeProperty('grid-template-columns');
      bar.style.opacity = 1;
      long.style.removeProperty('padding-block');
      long.style.removeProperty('padding-inline');
      long.style.removeProperty('gap');
      content.style.removeProperty('padding');
      shadow.forEach(e => {
        e.style.removeProperty('display')
      })
      sideView.forEach(e => {
        e.style.removeProperty('transition')
        e.style.removeProperty('height');
        e.style.removeProperty('pointer-events');
        e.querySelector('.object').style.removeProperty('pointer-events');
        e.style.removeProperty('right');
        sideChange(localStorage.getItem('page'))
      })
    
      setTimeout(() => {   
        wrapper.style.overflow = 'auto';
      }, 1000);
    }
  } else {
    if (localStorage.getItem('view') == 1) {
      localStorage.removeItem('w');

      wrapper.style.paddingTop = 0;
      scroll.style.height = '100dvh';
      section.style.gridTemplateRows = '0fr 1fr';
      bar.style.opacity = 0;
      long.style.paddingBlock = '50px';
      long.style.paddingInline = '25px';
      long.style.gap = '50px';
      content.style.height = 0;
      content.style.padding = 0;
      shadow.forEach(e => {
        e.style.display = 'none';
      })
      sideView.forEach(e => {
        e.style.transition = 'all 0.5s ease';
        e.style.height = 'calc(100dvh - 100px)';
        e.style.width = '90vw';
        e.style.bottom = '0';
        e.style.pointerEvents = 'none';
        e.querySelector('.object').style.pointerEvents = 'all';
        e.style.right = 0;
        setTimeout(() => {
          e.style.removeProperty('transition');
        }, 1000);
      })
    
      setTimeout(() => {   
        goto()
        wrapper.style.overflow = 'hidden';
      }, 1000);
    } else {
      localStorage.setItem('w', 1)

      wrapper.style.removeProperty('padding-top');
      scroll.style.removeProperty('height');
      section.style.removeProperty('grid-template-rows');
      bar.style.removeProperty('opacity');
      long.style.removeProperty('padding-block');
      long.style.removeProperty('padding-inline');
      long.style.removeProperty('gap');
      content.style.removeProperty('height');
      content.style.removeProperty('padding');
      shadow.forEach(e => {
        e.style.removeProperty('display');
      })
      sideView.forEach(e => {
        e.style.transition = 'all 0.5s ease';
        e.style.removeProperty('height');
        e.style.removeProperty('width');
        e.style.removeProperty('pointer-events');
        e.querySelector('.object').style.removeProperty('pointer-events');
        e.style.removeProperty('right');
        setTimeout(() => {
          e.style.removeProperty('transition');
        }, 1000);
        sideChange(localStorage.getItem('page'))
      })
    
      setTimeout(() => {   
        wrapper.style.overflow = 'auto';
      }, 1000);
    }
  } 

  if (!type) {
    changeCursor()
  }
  localStorage.removeItem('onChange');
}

function sideChange(id) {
  const view = localStorage.getItem('view')

  if (view && view == 0) {
    const sideElem = document.querySelectorAll('.sideView');
  
    sideElem.forEach(elem => {
      if (elem.attributes[1].value == id) {
        
        if (innerWidth > 950) {
          elem.style.height = '150px';
          elem.style.right = '20px';
        } else {
          elem.style.height = '340px';
          elem.style.width = '240px';
          elem.style.bottom = '50px';
        }
        elem.querySelector('.filter-child').style.backgroundColor = 'rgba(0, 0, 0, 0)';
      } else {
        elem.style.removeProperty('height');
        elem.style.removeProperty('right');
        elem.style.removeProperty('bottom');
        elem.querySelector('.filter-child').removeAttribute('style');
      }
    })
  }
}

function goto() {
  const page = localStorage.getItem('page');

  const wrapper = document.querySelector('.wrapper');
  const selectSide = document.querySelector(`.sideView[data="${page}"]`);

  const width = window.innerWidth;

  if (width > 950) {
    wrapper.scrollTop = selectSide.offsetTop - 45;
  } else {
    wrapper.scrollLeft = selectSide.offsetLeft - 25;
  }
}

function changeCursor() {
  const cursor = localStorage.getItem('cursor');
  if (cursor == undefined) {
    localStorage.setItem('cursor', 1);
  } else {
    localStorage.setItem('cursor', cursor == 1 ? 0 : 1);
  }
  console.trace(localStorage.getItem('view'), localStorage.getItem('cursor'))

  createCursor();
}