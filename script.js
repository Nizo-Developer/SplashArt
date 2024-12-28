import { createCursor, setCursor } from "./brain.js"

const side = [
  "./img/picture.jpeg",
  "./img/picture.jpg",
  "./img/picture1.jpeg",
  "./img/picture1.jpg",
  "./img/picture2.jpeg",
  "./img/picture2.jpg",
  "./img/picture3.jpeg",
  "./img/picture3.jpg",
  "./img/picture4.jpeg",
  "./img/picture5.jpeg",
]

const data = [
  {
    title: 'Refleksi Alam',
    description: `
    Pemandangan alam yang indah dengan danau tenang, dikelilingi pegunungan dan pepohonan dengan refleksi yang sempurna di air. Teknik lanskap digunakan dengan lensa sudut lebar dan pencahayaan alami untuk menangkap detail dan warna kontras.
    `,
    price: {
      after: '69.99',
      before: '79.99'
    }
  },
  {
    title: 'Jembatan Batu',
    description: `
    Sebuah jembatan batu melengkung yang tercermin sempurna di permukaan air di bawahnya, menciptakan ilusi lingkaran penuh. Jembatan ini dikelilingi oleh pepohonan dengan dedaunan musim gugur yang berwarna-warni. Metode pemotretan menggunakan teknik lanskap dengan refleksi air tenang untuk menangkap pantulan sempurna.
    `,
    price: {
      after: '89.99',
      before: '102.99'
    }
  },
  {
    title: 'Keharmonisan',
    description: `
    Gambar burung kecil hinggap di tangan dengan latar belakang bokeh ini menggunakan metode makro atau close-up dengan pencahayaan alami. Menyoroti interaksi harmonis antara manusia dan alam.
    `,
    price: {
      after: '44.99',
      before: '49.99'
    }
  },
  {
    title: 'Keindahan Alam',
    description: `
    Gambar ini menampilkan pemandangan alam yang menakjubkan di Washington, dengan latar belakang pegunungan dan hutan lebat. Warna-warna cerah dari langit saat matahari terbenam menciptakan nuansa tenang dan damai, sementara detail pepohonan dan gradasi cahaya memberikan kedalaman visual yang memukau. Pemotretan dilakukan menggunakan teknik landscape photography, memanfaatkan pencahayaan alami saat golden hour untuk menghasilkan warna yang hangat dan lembut. Tripod digunakan untuk memastikan kestabilan kamera dalam kondisi cahaya rendah, dengan pemilihan sudut pandang yang strategis untuk menangkap keindahan alam secara keseluruhan.
    `,
    price: {
      after: '129.99',
      before: '159.99'
    }
  },
  {
    title: 'Danau & Pegunungan',
    description: `
    Gambar ini menunjukkan pemandangan alam dengan pegunungan tajam yang memiliki puncak tertutup salju, serta danau tenang di depannya yang memantulkan bayangan pegunungan dan pohon-pohon hijau. Teknik lanskap digunakan dalam pemotretan ini, dengan aperture kecil untuk menjaga ketajaman gambar dan pencahayaan alami dari matahari. Hasilnya adalah efek cermin dramatis dengan langit biru dan awan putih, menciptakan pemandangan yang menakjubkan dan harmonis.
    `,
    price: {
      after: '69.99',
      before: '78.99'
    }
  },
  {
    title: 'Hutan Danau',
    description: `
    Gambar ini menunjukkan pemandangan alam menakjubkan dari danau biru jernih yang dikelilingi pegunungan tinggi dengan puncak bersalju dan hutan pinus lebat. Langit berawan sebagian menciptakan refleksi indah di permukaan danau, ditambah bebatuan besar di latar depan. Fotografi lanskap ini menggunakan lensa sudut lebar dan mungkin tripod untuk stabilitas, dengan aperture kecil untuk ketajaman seluruh pemandangan.
    `,
    price: {
      after: '94.99',
      before: '109.99'
    }
  },
  {
    title: 'Cermin Sungai',
    description: `
    Gambar ini menampilkan pemandangan pegunungan dengan puncak tajam dan beberapa bagian tertutup salju. Di depan, terdapat danau yang tenang, memantulkan bayangan pegunungan dan pohon-pohon hijau di sekitarnya. Teknik lanskap digunakan dalam pemotretan ini, dengan aperture kecil dan pencahayaan alami dari matahari, menciptakan efek cermin yang dramatis dan harmonis.
    `,
    price: {
      after: '99.99',
      before: '109.99'
    }
  },
  {
    title: 'Gajah',
    description: `
    Seekor gajah dengan gading panjang di padang rumput, di latar belakang ada pohon besar yang kabur. Gajah tersebut tampak sedang mencari makan di rerumputan tinggi. Metode pemotretan adalah fotografi satwa liar menggunakan lensa telefoto untuk menangkap detail dan kedalaman.
    `,
    price: {
      after: '119.99',
      before: '149.99'
    }
  },
  {
    title: 'Hutan Bambu',
    description: `
    Pemandangan hutan bambu dengan batang-batang yang tinggi menjulang dan dedaunan hijau lebat. Pencahayaan alami dari matahari yang menembus dedaunan menciptakan efek dramatis. Metode pemotretan menggunakan teknik lanskap dengan aperture kecil dan pencahayaan alami.
    `,
    price: {
      after: '59.99',
      before: '64.99'
    }
  },
  {
    title: 'Hutan',
    description: `
    Pemandangan hutan dengan pohon-pohon tinggi berdiri tegak, disinari oleh cahaya matahari yang menembus dedaunan, menciptakan bayangan panjang di lantai hutan berlumut hijau. Fotografi lanskap dengan lensa sudut lebar dan pencahayaan alami digunakan untuk menangkap luasnya hutan dan efek cahaya dramatis.
    `,
    price: {
      after: '79.99',
      before: '84.99'
    }
  },
]

document.addEventListener('DOMContentLoaded', () => {
  setup();
  responsive();
  setCursor();
  horizontalScroll();

  const width = window.innerWidth;

  if (width > 950) {
    localStorage.setItem('mode', 1);
  } else {
    localStorage.setItem('mode', 2)
  }

  if (!localStorage.getItem('w')) {
    localStorage.setItem('w', 1)
  }

  if (!localStorage.getItem('w')) {
    localStorage.setItem('w', 1)
  }
  
  if (!localStorage.getItem('page')) {
    localStorage.setItem('page', 0)
    change();
  } else {
    change(undefined, localStorage.getItem('page'));
  }
  localStorage.setItem('view', 0);
  
  intro();

  const side = document.querySelectorAll('.sideView');
  const sideWrap = document.querySelector('.wrapper');
  const contact = document.querySelector('.contact-button');
  const preview = document.querySelector('.preview');
  const list = document.querySelector('.list');

  side.forEach((elem) => {
    elem.addEventListener('click', change)
  })

  window.addEventListener('resize', responsive)
  sideWrap.addEventListener('scroll', horizontalScroll)
  contact.addEventListener('click', contactUs)
  preview.addEventListener('click', viewSide)
  list.addEventListener('click', listItem)
})

function intro() {
  const page = document.querySelector('#intro');

  setTimeout(() => {
    page.style.letterSpacing = '0';

    setTimeout(() => {
      page.style.transition = 'all 1s ease'
      page.style.top = '-100vh'
    }, 500);
  }, 500);
}

function setup() {
  localStorage.removeItem('onChange');

  const container = document.querySelector('.long-content');

  side.forEach((url, index) => {
    const child = document.createElement('div');
    child.setAttribute('class', 'sideView object');
    child.setAttribute('data', index);
    child.style.backgroundImage = `url(${url})`

    const grandchild = document.createElement('div');
    grandchild.setAttribute('class', 'filter-child object');
    grandchild.setAttribute('data', index);

    child.appendChild(grandchild);
    container.appendChild(child);
  })

  setBar();
}

function setBar() {
  const wrapper = document.querySelector('.bars');
  
  for (var i = 0; i < side.length * 8; i++) {
    miniBar()
    const bar = document.createElement('div');
    bar.setAttribute('class', 'bar');
    bar.style.height = '40px'

    wrapper.appendChild(bar)
  }
  miniBar()

  function miniBar() {
    for (var o = 0; o < 5; o++) {
      const bar = document.createElement('div');
      bar.setAttribute('class', 'bar');
  
      wrapper.appendChild(bar)
    }
  }
}

function change(e, identy) {
  if (!localStorage.getItem('onChange')) {
    localStorage.setItem('onChange', 1);

    const scene = document.querySelector('.scene');
    const filter = document.querySelector('.filter');
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    const priceNow = document.querySelector('.price-now');
    const priceBefore = document.querySelector('.price-before');
    const list = [title, description, priceNow, priceBefore];

    if (e || identy) {
      const id = !identy ? e.target.attributes[1].value : identy;

      const innerWidth = window.innerWidth;

      localStorage.setItem('page', id);

      sideChange(id)
    
      filter.style.opacity = '1';
      list.forEach(elem => {
        elem.style.opacity = '0';
      })

      setTimeout(() => {
        scene.style.backgroundImage = `url(${side[id]})`;
        title.innerHTML = data[id].title;
        description.innerHTML = data[id].description;
        priceNow.innerHTML = '$' + data[id].price.after;
        priceBefore.innerHTML = '$' + data[id].price.before;

        setTimeout(() => {
          filter.style.opacity = '0.5';
          list.forEach(elem => {
            elem.style.opacity = '1';

            localStorage.removeItem('onChange')
          })
        }, 100);
      }, 300);
    } else {
      change(undefined, 0)
    }
  }
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

function responsive() {
  const width = window.innerWidth;
  const sideElem = document.querySelectorAll('.sideView');
  const barWrap = document.querySelector('.bar-wrapper');
  const mode = localStorage.getItem('mode');

  if (width > 950) {
    sideElem.forEach(e => {
      e.style.removeProperty('bottom');
      e.style.removeProperty('width');
    })
    barWrap.scrollLeft = 0;

    if (mode == 2) {
      viewSide(undefined, 1);
      localStorage.setItem('mode', 1)
    }
  } else {
    sideElem.forEach(e => {
      e.style.removeProperty('right');
    })
    barWrap.scrollLeft = barWrap.getBoundingClientRect().width;

    if (mode == 1) {
      viewSide(undefined, 1);
      localStorage.setItem('mode', 2)
    }
  }

  if (localStorage.getItem('view') == 1) {
    setTimeout(() => {
      goto()
    }, 500);
  }

  setTimeout(() => {
    sideChange(localStorage.getItem('page'))
  }, 500);
}

function horizontalScroll(e) {
  if (localStorage.getItem('view') == 0) {
    const barWrap = document.querySelector('.bar-wrapper');
    const shadowTop = document.querySelector('.shadow-top');
    const shadowBottom = document.querySelector('.shadow-bottom');
    if (!e) {
      e = document.querySelector('.long-content')
    } else {
      e = e.target
    }
    const width = window.innerWidth;
  
    const scroll = width > 950 ? e.scrollTop : e.scrollLeft;
  
    if (width > 950) {
      barWrap.scrollLeft = scroll * 0.8;
  
      if (e.scrollTop < 120) {
        shadowTop.style.opacity = 0;
      } else {
        shadowTop.style.opacity = 1;
      }
  
      if (e.scrollTop > e.getBoundingClientRect().height - 280) {
        shadowBottom.style.opacity = 0;
      } else {
        shadowBottom.style.opacity = 1;
      }
    } else {
      barWrap.scrollLeft = barWrap.getBoundingClientRect().width + scroll * -0.8;
  
      if (e.scrollLeft < 60) {
        shadowTop.style.opacity = 0;
      } else {
        shadowTop.style.opacity = 1;
      }
  
      if (e.scrollLeft > e.getBoundingClientRect().width - 220) {
        shadowBottom.style.opacity = 0;
      } else {
        shadowBottom.style.opacity = 1;
      }
    }
  }
}

function contactUs() {
  const contact = document.querySelector('#contact-us');

  contact.style.left = '0';

  setTimeout(() => {
    localStorage.setItem('goto', 1)
    window.location.href = './contact.html'
  }, 1000);
}

function contactIntroIn(title) {
  const contact = document.querySelector('#contact-us');

  if (title) {
    contact.innerHTML = title
  }

  contact.style.display = 'flex';
  setTimeout(() => {
    contact.style.left = '0';
  }, 300);
}

function listItem() {
  contactIntroIn('List Item')

  localStorage.setItem('goto', 1);

  setTimeout(() => {
    window.location.href = './list.html'
  }, 1300);
}

function viewSide(e, type) {
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

      section.style.removeProperty('grid-template-columns');
      long.style.removeProperty('padding-inline');

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
        e.style.width = 'calc(100vw - 60px)';
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

function goto() {
  const page = localStorage.getItem('page');

  const wrapper = document.querySelector('.wrapper');
  const selectSide = document.querySelector(`.sideView[data="${page}"]`);

  const width = window.innerWidth;

  if (width > 950) {
    wrapper.scrollTop = selectSide.offsetTop - 45;
  } else {
    wrapper.scrollLeft = selectSide.offsetLeft - 30;
  }
}