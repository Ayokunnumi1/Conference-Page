// Start of mobile menu
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon-container');

const menuOpen = () => {
  navLinks.classList.add('show-link');
  closeIcon.style.display = 'block';
  hamburgerIcon.style.display = 'none';
};

const menuClose = () => {
  navLinks.classList.remove('show-link');
  closeIcon.style.display = 'none';
  hamburgerIcon.style.display = 'block';
};

hamburgerIcon.addEventListener('click', menuOpen);
closeIcon.addEventListener('click', menuClose);
// End of mobile menu

// Featured Speaker dynamic Creation

const speakers = [
  {
    img: 'images/speaker_1.png',
    name: 'Yochai Benlder',
    profession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    desc: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    img: 'images/speaker_2.png',
    name: 'SohYeong Noh',
    profession: 'Director of Art Centre Nabi and a board member of CC Korea',
    desc: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    img: 'images/speaker_3.png',
    name: 'Lila tretikov',
    profession: 'Executive Director of the Wikimedia Foundation',
    desc: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month',
  },
  {
    img: 'images/speaker_4.png',
    name: 'Kilnam Chon',
    profession: 'Professor of Korea Advanced Institute of science and technology.',
    desc: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    img: 'images/speaker_5.png',
    name: 'Julia Leda',
    profession: 'President of Young Pirates of Europe',
    desc: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    img: 'images/speaker_6.png',
    name: 'Ryan Merkley',
    profession: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    desc: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

const speakerContent = document.querySelector('.featured-speaker-content');

function generateSpeakerData() {
  speakers.forEach((speaker) => {
    speakerContent.innerHTML += `<div class="featured-speaker-achievements">
    <img src="${speaker.img}" class="featured-speaker-img" alt="">
      <article class="featured-speaker-achieve">
      <h4>${speaker.name}</h4> <p class="featured-speaker-title">${speaker.profession}</p>
       <p class="featured-speaker-desc">${speaker.desc}</p></article>
       </div>
     </div> `;
  });
}
generateSpeakerData();