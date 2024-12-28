import { setCursor } from "./brain.js";

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
  listItem();
  setCursor();
  scene(undefined, localStorage.getItem('page'));
  contactIntro();

  const contactBtn = document.querySelectorAll('.contact-button');
  const brand = document.querySelector('.brand');

  contactBtn.forEach(e => {
    e.addEventListener('click', contactUs)
  })
  brand.addEventListener('click', back);
})

function introIn() {
  const page = document.querySelector('#intro');

  page.style.display = 'flex';
  page.style.transition = 'all 1s ease';
  setTimeout(() => {
    page.style.top = '0';
    page.style.letterSpacing = '10px';
  }, 300);
}

function back() {
  introIn()

  setTimeout(() => {
    window.location.href = 'index.html'
  }, 1300);
}

function contactIntro() {
  const page = document.querySelector('#intro');
  const contact = document.querySelector('#contact-us');
  
  console.log(page)
  if (localStorage.getItem('goto')) {
    page.style.display = 'none';
    page.style.top = '-100vh';

    setTimeout(() => {
    contact.style.left = '-100vw';
    }, 500);

    localStorage.removeItem('goto')
  } else {
    contact.style.display = 'none';
    contact.style.left = '-100vw';
  
    setTimeout(() => {
      page.style.letterSpacing = '0';
  
      setTimeout(() => {
        page.style.transition = 'all 1s ease';
        page.style.top = '-100vh';
        console.log(page.style.top)
        console.log(page)
      }, 500);
    }, 500);
  }
}

function scene(e, identy) {
  if (!localStorage.getItem('onChange')) {
    localStorage.setItem('onChange', 1);

    const scene = document.querySelector('.scene');
    const filter = document.querySelector('.filter');

    if (e || identy) {
      const id = !identy ? e.target.attributes[1].value : identy;

      localStorage.setItem('page', id);
    
      filter.style.opacity = '1';

      setTimeout(() => {
        scene.style.backgroundImage = `url(${side[id]})`;

        setTimeout(() => {
          filter.style.opacity = '0.5';
          localStorage.removeItem('onChange')
        }, 100);
      }, 300);
    } else {
      change(undefined, 0)
    }
  }
}

function listItem() {
  localStorage.removeItem('onChange');

  const container = document.querySelector('.list-item');

  side.forEach((url, index) => {
    const child = document.createElement('div');
    child.setAttribute('class', 'item object');
    child.setAttribute('data', index);
    const img = document.createElement('div');
    img.setAttribute('class', 'img')
    img.style.backgroundImage = `url(${url})`

    child.appendChild(img);
    child.innerHTML += `
      <div class="detail">
        <div class="price">
          <div class="price-now object">$${data[index].price.after}</div>
          <div class="price-before object">$${data[index].price.before}</div>
        </div>
        <div class="contact-button object">
          Contact Us
        </div>
      </div>
    `

    container.appendChild(child);
  })

  setTimeout(() => {
    const item = document.querySelectorAll('.item');
  
    item.forEach((elem) => {
      console.log(elem)
      elem.addEventListener('mouseover', change)
    })
  }, 500);
}

function contactUs() {
  const contact = document.querySelector('#contact-us');

  contact.style.display = 'flex';
  contact.innerHTML = 'Contact Us';
  contact.style.left = '0';

  setTimeout(() => {
    localStorage.setItem('goto', 1)
    window.location.href = './contact.html'
  }, 1000);
}

function change(e) {
  if (Object.values(e.target.classList).includes('item') && localStorage.getItem('page') !== e.target.attributes[1].value) {
    scene(undefined, e.target.attributes[1].value)
  }
}

