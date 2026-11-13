const canvas = document.querySelector('#particles');
const context = canvas.getContext('2d');
const particles = [];
const particleCount = 90;

function resizeCanvas() {
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * pixelRatio;
  canvas.height = window.innerHeight * pixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function createParticle() {
  // Pick a random color between rgb(0, 255, 127) and rgb(127, 0, 255).
  const colorPosition = Math.random();
  const red = Math.round(127 * colorPosition);
  const green = Math.round(255 * (1 - colorPosition));
  const blue = Math.round(127 + 128 * colorPosition);

  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 2 + 0.5,
    speedX: (Math.random() - 0.5) * 0.35,
    speedY: (Math.random() - 0.5) * 0.35,
    opacity: Math.random() * 0.6 + 0.2,
    color: `rgb(${red}, ${green}, ${blue})`
  };
}

function drawParticles() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (const particle of particles) {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0 || particle.x > window.innerWidth) particle.speedX *= -1;
    if (particle.y < 0 || particle.y > window.innerHeight) particle.speedY *= -1;

    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = particle.color.replace('rgb', 'rgba').replace(')', `, ${particle.opacity})`);
    context.shadowBlur = 10;
    context.shadowColor = particle.color;
    context.fill();
  }

  requestAnimationFrame(drawParticles);
}

canvas.style.position = 'fixed';
canvas.style.inset = '0';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';

for (let index = 0; index < particleCount; index += 1) {
  particles.push(createParticle());
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawParticles();

//HISTORY.exe//
const prop1_box = document.querySelector('#p1');
const prop2_box = document.querySelector('#p2');
const prop3_box = document.querySelector('#p3');
const image_box = document.querySelector('#image');
const image_container = document.querySelector('#image_box');
const property_container = document.querySelector('.property-box');
const lnum = document.querySelector('#lnum');

const image_array = [];
const lenA = image_array.length;

function updateHistoryPropertyVisibility(image) {
  [
    [prop2_box, image.property2_value],
    [prop3_box, image.property3_value]
  ].forEach(([element, value]) => {
    if (!element) return;

    element.classList.toggle('is-hidden', typeof value !== 'string' || value.trim() === '');
  });
}

image_array[1] = {
  property1: 'Name',
  property1_value: 'Claudius Ptolemi',
  property2: 'Nationality',
  property2_value: 'Greek',
  property3: 'Significance',
  property3_value: 'Made the world map',
  vnum:'G10-L1'
}

image_array[2] = {
  property1: 'Name',
  property1_value: 'Galpotha Sellipiya',
  property2: 'Creator',
  property2_value: 'Keerthi Sri Nisshankamalla',
  property3: 'Location',
  property3_value: 'Polonnaruwa',
  vnum:'G10-L1'
}

image_array[3] = {
  property1: 'Name',
  property1_value: 'Panakaduwa Copper Plate',
  property2: 'Creator',
  property2_value: 'I Vijayabahu',
  property3: 'Content',
  property3_value: 'Praising "Sithnarubima Budalna"',
  vnum:'G10-L1'
}

image_array[4] = {
  property1: 'Historical Name',
  property1_value: 'Madyakalina Ran Kahawanu',
  property2: 'Compisition',
  property2_value: 'Gold',
  property3: 'Shows*',
  property3_value: 'Ancient Technology',
  vnum:'G10-L1'
}

image_array[5] = {
  property1: 'Creation',
  property1_value: 'Minisa & Ashwahisa Sculpture',
  property2: 'Era',
  property2_value: '7-8th Century AD.',
  property3: 'Location',
  property3_value: 'Isurumuni Viharaya',
  vnum:'G10-L1'
}

image_array[6] = {
  property1: 'Significance',
  property1_value: 'Infromation about prehistoric men',
  property2: 'Era',
  property2_value: 'Pre-Historic Era',
  property3: 'Location',
  property3_value: 'Bulathsinhala, Pahiyangala',
  vnum:'G10-L2'
}

image_array[7] = {
  property1: 'Artifact',
  property1_value: '"Geometric" stones',
  property2: 'Era',
  property2_value: 'Middle Stone Age (Madhyashila)',
  property3: 'Composition',
  property3_value: 'Alabaster (Bim-weeduru)',
  vnum:'G10-L2'
}

image_array[8] = {
  property1: 'Artifact',
  property1_value: 'Bead',
  property2: 'Era',
  property2_value: 'Pre-Historic Era',
  property3: 'Composition',
  property3_value: 'Animal Bone',
  vnum:'G10-L2'
}

image_array[9] = {
  property1: 'Content',
  property1_value: 'Human Remains',
  property2: 'Era',
  property2_value: 'Pre-Historic Era',
  property3: 'Location',
  property3_value: 'Sigiri Pothana Cave',
  vnum:'G10-L2'
}

image_array[10] = {
  property1: 'Content',
  property1_value: 'Human Remains',
  property2: 'Era',
  property2_value: 'Pre-Historic Era',
  property3: 'Location',
  property3_value: 'Udaranchamadama',
  vnum:'G10-L2'
}

image_array[11] = {
  property1: 'Object',
  property1_value: 'Clay Tub Burial',
  property2: 'Era',
  property2_value: 'Proto-Historic Era',
  property3: 'Location',
  property3_value: 'Ranchamadama',
  vnum:'G10-L2'
}

image_array[12] = {
  property1: 'Object',
  property1_value: 'Shila Manjusa Burial (Stone Casket)',
  property2: 'Significance',
  property2_value: 'Clay pots containing ashes',
  property3: 'Location',
  property3_value: 'Ibbankatuwa ~Dambulla',
  vnum:'G10-L2'
}

image_array[13] = {
  property1: 'Aritfact',
  property1_value: 'Painted Clay Pot',
  property2: 'Significance',
  property2_value: 'Ancient Pot Making Technology',
  property3: 'Location',
  property3_value: 'Udaranchamadama',
  vnum:'G10-L2'
}

image_array[14] = {
  property1: 'Ruins',
  property1_value: 'Burial Ground',
  property2: 'Era',
  property2_value: 'Proto-Historic Era',
  property3: 'Location',
  property3_value: 'Ibbankatuwa',
  vnum:'G10-L3'
}

image_array[15] = {
  property1: 'Artifact',
  property1_value: 'Clay Stamps (Mudra)',
  property2: 'Significance',
  property2_value: 'Used by Government Officials',
  property3: 'Location',
  property3_value: 'Thissamaharamya',
  vnum:'G10-L3'
}

image_array[16] = {
  property1: 'Statue',
  property1_value: 'King Bhathikhabya',
  property2: 'Significance',
  property2_value: 'Sent Ambassadors to Rome, Almsgiving',
  property3: 'Location',
  property3_value: 'Ruwanmeliseya',
  vnum:'G10-L3'
}

image_array[17] = {
  property1: 'Artifact',
  property1_value: 'Clay Stamp',
  property2: 'Special Features',
  property2_value: 'Engraved Symbols',
  property3: 'Location',
  property3_value: 'Thissamaharamaya',
  vnum:'G10-L3'
}

image_array[18] = {
  property1: 'Error',
  property1_value: '404',
  property2: 'Error',
  property2_value: '405',
  property3: 'Error',
  property3_value: '406',
}

image_array[19] = {
  property1: 'Error',
  property1_value: '404',
  property2: 'Error',
  property2_value: '405',
  property3: 'Error',
  property3_value: '406',
}

image_array[20] = {
  property1: 'Artifact',
  property1_value: 'Engraved (Nestorian) Christian Cross',
  property2: 'Approximate Time Period',
  property2_value: 'After Portugese Colonialism',
  property3: 'Location',
  property3_value: 'Anuradhapura',
  vnum:'G10-L4'
}

image_array[21] = {
  property1: 'Artifact',
  property1_value: 'Tombstone Inscription (Sohon gal  Sellipi)',
  property2: 'Language',
  property2_value: 'Arabic / Kyufik Script',
  property3: 'Origin*',
  property3_value: 'Arab Traders',
  vnum:'G10-L4'
}

image_array[22] = {
  property1: 'Creation',
  property1_value: 'Ancient Siva Temple',
  property2: 'Historic Name',
  property2_value: '"Soththi Shala"',
  property3: 'Location',
  property3_value: 'Polonnaruwa',
  vnum:'G10-L4'
}

image_array[23] = {
  property1: 'Significance',
  property1_value: 'Nature of Arts',
  property2: 'Name given to the figures',
  property2_value: '"Sigiri Apsarawan"',
  property3: 'Location',
  property3_value: 'Sigiriya',
  vnum:'G10-L4'
}

image_array[24] = {
  property1: 'Construction',
  property1_value: 'Sorrowwa',
  property2: 'Significance & Reservoir Aid [Govt.]',
  property2_value: 'Optimal position & German Government',
  property3: 'Location',
  property3_value: 'Maduru Oya',
  vnum:'G10-L5'
}

image_array[25] = {
  property1: 'Construction',
  property1_value: 'Ancient Maha Marghaya(k)',
  property2: 'Composition',
  property2_value: 'Granite (Kalugal)',
  property3: 'Location',
  property3_value: 'Malwathu Oya, Anuradhapura',
  vnum:'G10-L5'
}

image_array[26] = {
  property1: 'Creation',
  property1_value: 'Iron Smelting Oven',
  property2: 'Significance',
  property2_value: 'Ancient Smelting Technology',
  property3: 'Location',
  property3_value: 'Samanalaweva',
  vnum:'G10-L5'
}

image_array[27] = {
  property1: 'Error',
  property1_value: '404',
  property2: 'Error',
  property2_value: '405',
  property3: 'Error',
  property3_value: '406',
}

image_array[28] = {
  property1: 'Artifact',
  property1_value: 'Metal Scissors',
  property2: 'Use Case',
  property2_value: 'Hospital Surgery',
  property3: 'Location',
  property3_value: 'Alahana Pirivena, Polonnaruwa',
  vnum:'G10-L5'
}

image_array[29] = {
  property1: 'Ruins',
  property1_value: 'Ancient Devalaya',
  property2: '[Ritual] was performed',
  property2_value: '"Kirimadu Yagaya"',
  property3: 'Location',
  property3_value: 'Pallebadde Galpaya',
  vnum:'G10-L5'
}

image_array[30] = {
  property1: 'Artifact',
  property1_value: 'Dedigama Ath Pahana',
  property2: 'Composition & Techonology',
  property2_value: 'Bronze & Static-Hydrology',
  property3: 'Location',
  property3_value: 'Dadigama Kota Vehera',
  vnum:'G10-L5'
}

image_array[31] = {
  property1: 'Error',
  property1_value: '404',
  property2: 'Error',
  property2_value: '405',
  property3: 'Error',
  property3_value: '406',
}

image_array[32] = {
  property1: 'Artifact',
  property1_value: 'Oldest Coins that were used',
  property2: 'Origin',
  property2_value: 'India',
  property3: 'Historic Name',
  property3_value: 'Hasebu Coins',
  vnum:'G10-L6'
}

image_array[33] = {
  property1: 'Artifact',
  property1_value: 'Elephant and Swastika Coin',
  property2: 'Origin',
  property2_value: 'Unknown. LOL',
  property3: 'Significance',
  property3_value: 'Used in Ancient Sri Lnaka',
  vnum:'G10-L6'
}

image_array[34] = {
  property1: 'Construction',
  property1_value: 'Thuparamaya (Gantakara)',
  property2: 'Creator',
  property2_value: 'King Devanampiyathissa',
  property3: 'Era',
  property3_value: 'Anuradhapura*',
  vnum:'G10-L7'
}

image_array[35] = {
  property1: 'Construction',
  property1_value: 'Lankathilakaya',
  property2: 'Creator',
  property2_value: 'Maha Parakramabahu',
  property3: 'Era',
  property3_value: 'Pollonnaruwa',
  vnum:'G10-L7'
}

image_array[36] = {
  property1: 'Depicts:',
  property1_value: 'II Rajasinghe',
  property2: 'Creator',
  property2_value: 'Robert Knox',
  property3: 'Significance',
  property3_value: 'Ended Portugese Influence in Sri Lanka',
  vnum:'G10-L8'
}

image_array[39] = {
  property1: 'Painting',
  property1_value: 'Divine Children',
  property2: 'Creator',
  property2_value: 'Rafael Sansiyo',
  property3: 'Location',
  property3_value: 'Sistine Church',
  vnum:'G10-L9'
}

image_array[40] = {
  property1: 'Depicts:',
  property1_value: 'Galelio Galeili (Athadabelime Piya)',
  property2: 'Created',
  property2_value: 'The Telescope',
  property3: 'Nationality',
  property3_value: 'Itallian',
  vnum:'G10-L9'
}

image_array[41] = {
  property1: 'Inscription',
  property1_value: 'Dutch Emblem',
  property2: 'Creator',
  property2_value: 'IDK man',
  property3: 'Location',
  property3_value: '~Colombo',
  vnum:'G10-L10'
}

image_array[42] = {
  property1: 'Depicts',
  property1_value: 'Dutch Meeting with the King',
  property2: 'Era',
  property2_value: 'Kandy',
  property3: '',
  property3_value: '',
  vnum:'G10-L10'
}

image_array[43] = {
  property1: 'Name',
  property1_value: 'Jenny Machine',
  property2: 'Creator',
  property2_value: 'James Hargreeves',
  property3: 'Purpose',
  property3_value: 'Spinning Cotton',
  vnum:'G11-L1'
}

image_array[44] = {
  property1: 'Name',
  property1_value: 'Water Powered Thread Spinning Machine',
  property2: 'Creator',
  property2_value: 'Richard Arkwright',
  property3: 'Purpose',
  property3_value: 'Spinning Threads (w/ H2O)',
  vnum:'G11-L1'
}

image_array[45] = {
  property1: 'Name',
  property1_value: 'Steel Oven',
  property2: 'Creator',
  property2_value: 'Henry Bessemer',
  property3: 'Purpose',
  property3_value: 'Production of Steel',
  vnum:'G11-L1'
}

image_array[46] = {
  property1: 'Name',
  property1_value: 'Steam Engine',
  property2: 'Creator',
  property2_value: 'Thomas Newcommon',
  property3: '',
  property3_value: '',
  vnum:'G11-L1'
}

image_array[47] = {
  property1: 'Name',
  property1_value: 'Steam Engine ',
  property2: 'Creator',
  property2_value: 'James Watt',
  property3: 'Initial Use',
  property3_value: 'Removal of Collected Water in Mines',
  vnum:'G11-L1'
}

image_array[48] = {
  property1: 'Name',
  property1_value: 'Safety Lamp',
  property2: 'Creator',
  property2_value: 'Humphrey davy',
  property3: 'Purpose',
  property3_value: 'THIS IS OBVIOUS GODDAMNIT',
  vnum:'G11-L1'
}

image_array[49] = {
  property1: 'Name',
  property1_value: 'George Stevenson',
  property2: 'Created',
  property2_value: 'The Train Engine',
  property3: 'Nationality',
  property3_value: 'British',
  vnum:'G11-L1'
}

image_array[50] = {
  property1: 'Name',
  property1_value: 'Train Engine',
  property2: 'Creator',
  property2_value: 'George Stevenson',
  property3: 'Year',
  property3_value: '1814',
  vnum:'G11-L1'
}

image_array[51] = {
  property1: 'Name',
  property1_value: 'The Aeroplane',
  property2: 'Creator(s)',
  property2_value: 'Wright Brothers',
  property3: 'Origin',
  property3_value: 'THE LAND OF FREEDOM (USA)',
  vnum:'G11-L1'
}

image_array[52] = {
  property1: 'Name',
  property1_value: 'The Automobile',
  property2: 'Creator(s)',
  property2_value: 'Demler',
  property3: 'Origin',
  property3_value: 'England, 1885',
  vnum:'G11-L1'
}

image_array[53] = {
  property1: 'Name',
  property1_value: 'Alexander Graham Bell',
  property2: 'Created',
  property2_value: 'The Telephone',
  property3: 'Nationality',
  property3_value: 'British',
  vnum:'G11-L1'
}

image_array[54] = {
  property1: 'Invention',
  property1_value: 'The TELEVISION',
  property2: 'Creator',
  property2_value: 'John Logie Beard',
  property3: 'Origin',
  property3_value: 'England, 1925',
  vnum:'G11-L1'
}

image_array[55] = {
  property1: 'Name',
  property1_value: 'V William',
  property2: 'Role',
  property2_value: 'Last Stadholder of the Dutch Republic',
  property3: 'Nationality',
  property3_value: 'Dutch',
  vnum:'G11-L2'
}

image_array[56] = {
  property1: 'Construction',
  property1_value: 'The Kew Palace',
  property2: 'Significance',
  property2_value: 'Origin of the Kew Letter',
  property3: 'Location',
  property3_value: 'England',
  vnum:'G11-L2'
}

image_array[57] = {
  property1: 'Name',
  property1_value: 'Sri Wickrama Rajasinghe',
  property2: 'House (Vansa)',
  property2_value: 'Nayakkar',
  property3: 'Exhiled to:',
  property3_value: 'Vellore, India',
  vnum:'G11-L2'
}

image_array[58] = {
  property1: 'Object',
  property1_value: 'A Monument (Smaraka)',
  property2: 'Significance',
  property2_value: 'Location where the king was Arrested',
  property3: 'Location',
  property3_value: 'Central Kandy',
  vnum:'G11-L2'
}

image_array[59] = {
  property1: 'Year',
  property1_value: '1815',
  property2: 'Incident',
  property2_value: 'Kandyan Convention',
  property3: 'Name of the Thero*',
  property3_value: 'Wariyapola Sri Sumangala Thero',
  vnum:'G11-L2'
}

image_array[60] = {
  property1: 'Artifact',
  property1_value: 'A Throne (Sinhasanaya)',
  property2: 'Significance',
  property2_value: 'Sri Wickrama Rajasinghe`s throne',
  property3: '',
  property3_value: '',
  vnum:'G11-L2'
}

image_array[61] = {
  property1: 'Name',
  property1_value: 'Kappetipola Disawe',
  property2: 'Served In',
  property2_value: '1st Freedom Struggle',
  property3: 'Punishment',
  property3_value: 'Execution: Head CHOPPED off',
  vnum:'G11-L2'
}

image_array[62] = {
  property1: 'Name',
  property1_value: 'Hikkaduwe Sri Sumangala Thero',
  property2: 'Created/Started',
  property2_value: 'Maligakanda Piriwena',
  property3: 'Significance',
  property3_value: 'Role in the Religious Renaissance',
  vnum:'G11-L3'
}

image_array[63] = {
  property1: 'Name',
  property1_value: 'Migettuwaththe Gunananda Thero',
  property2: 'Significance',
  property2_value: 'Pancha Maha Vada',
  property3: 'Achieved Global Influence with:',
  property3_value: 'Panadura Vadaya, 1873',
  vnum:'G11-L3'
}

image_array[64] = {
  property1: 'Name',
  property1_value: 'Henry Steel Olcutt',
  property2: 'Significance',
  property2_value: 'Made Vesak Poya Day a National Holiday, etc.',
  property3: 'Nationality',
  property3_value: 'American',
  vnum:'G11-L3'
}

image_array[65] = {
  property1: 'Name',
  property1_value: 'Brahmachari Walisinghe Harishchandra',
  property2: 'REAL Name',
  property2_value: 'Edward de Silva Harishchandra',
  property3: 'Role',
  property3_value: 'Buddhist Renaissance',
  vnum:'G11-L3'
}

image_array[66] = {
  property1: 'Name',
  property1_value: 'Anagarika Dharmapala',
  property2: 'Birth Name',
  property2_value: 'Don David Hevawitharana',
  property3: 'Founded [Society]',
  property3_value: 'Colombo Paramawignanartha Society',
  vnum:'G11-L3'
}

image_array[67] = {
  property1: 'Name',
  property1_value: 'Arumuga Navalur',
  property2: 'Newspaper',
  property2_value: '"Udayabhanu"',
  property3: 'Books',
  property3_value: 'Periya Puranam & Skanda Puranam',
  vnum:'G11-L3'
}


image_array[68] = {
  property1: 'Name',
  property1_value: 'Ponnambalam Arunachalam',
  property2: 'Founded',
  property2_value: 'Lanka Jathika Sangamaya',
  property3: '',
  property3_value: '',
  vnum:'G11-L3'
}

image_array[69] = {
  property1: 'Name',
  property1_value: 'Ponnambalam Ramanadan',
  property2: 'Founded [School]',
  property2_value: 'Ramanadan Vidyalaya',
  property3: '',
  property3_value: '',
  vnum:'G11-L3'
}

image_array[70] = {
  property1: 'Name',
  property1_value: 'Sidde Lebbe',
  property2: 'Newspapers',
  property2_value: 'Mulsim Nation',
  property3: '',
  property3_value: '',
  vnum:'G11-L3'
}

image_array[71] = {
  property1: 'Name',
  property1_value: 'T.B. Jayah',
  property2: 'Significance',
  property2_value: 'Muslim Education',
  property3: 'Founded',
  property3_value: 'Zahira College Colombo',
  vnum:'G11-L3'
}

image_array[72] = {
  property1: 'Name',
  property1_value: 'James Peiris',
  property2: 'Significance',
  property2_value: 'Petition for Constitutional Reforms',
  property3: 'Influenced',
  property3_value: '1910 Crew-Maclam Reforms',
  vnum:'G11-L4'
}

image_array[73] = {
  property1: 'Name',
  property1_value: 'Mahatma Gandhi',
  property2: 'Significance',
  property2_value: 'Fought for Indian Independance',
  property3: '',
  property3_value: '',
  vnum:'G11-L4'
}

image_array[74] = {
  property1: 'Name',
  property1_value: 'D.B.Jayathilake',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  vnum:'G11-L4'
}

image_array[75] = {
  property1: 'Name',
  property1_value: 'Colvin R. De Silva',
  property2: 'Founded',
  property2_value: 'Lanka Sama Samaja Party',
  property3: '',
  property3_value: '',
  vnum:'G11-L4'
}

image_array[76] = {
  property1: 'Name',
  property1_value: 'N. M. Perera',
  property2: 'Founded',
  property2_value: 'Lanka Sama Samaja Party',
  property3: '',
  property3_value: '',
  vnum:'G11-L4'
}

image_array[77] = {
  property1: 'Name',
  property1_value: 'D. S. Senanayake',
  property2: 'Significance',
  property2_value: 'First Prime Minister, 1948',
  property3: 'Founded',
  property3_value: 'United National Party',
  vnum:'G11-L4'
}

image_array[78] = {
  property1: 'Depicts:',
  property1_value: 'A Middle Class crowd',
  property2: 'Era',
  property2_value: 'British Colonialism',
  property3: '',
  property3_value: '',
  vnum:'G11-L5'
}

image_array[79] = {
  property1: 'Depicts:',
  property1_value: 'Udarata Radalawarun',
  property2: 'Era',
  property2_value: 'British Colonialism',
  property3: '',
  property3_value: '',
  vnum:'G11-L5'
}

image_array[80] = {
  property1: 'Depicts:',
  property1_value: 'The Cabinet',
  property2: 'Prime Minister',
  property2_value: 'S.W.R.D.Bandaranaike',
  property3: 'Founded',
  property3_value: 'Sri Lanka Freedom Party',
  vnum:'G11-L6'
}

image_array[81] = {
  property1: 'Depicts:',
  property1_value: 'William Gopallawa',
  property2: 'Significance',
  property2_value: 'First NON-EXECUTIVE president',
  property3: 'Constitutional Reforms [Year]',
  property3_value: '1972',
  vnum:'G11-L6'
}

image_array[82] = {
  property1: 'Depicts:',
  property1_value: 'J.R. Jayawardena',
  property2: 'Significance',
  property2_value: 'First EXECUTIVE president',
  property3: 'Constitutional Reforms [Year]',
  property3_value: '1978',
  vnum:'G11-L6'
}

image_array[83] = {
  property1: 'Construction',
  property1_value: 'Supreme Court',
  property2: 'Implemented',
  property2_value: '1972',
  property3: '',
  property3_value: '',
  vnum:'G11-L6'
}

image_array[84] = {
  property1: 'Depicts:',
  property1_value: 'Polgolla Dam',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  vnum:'G11-L6'
}

image_array[85] = {
  property1: 'Depicts:',
  property1_value: 'Victoria Dam',
  property2: 'Objective',
  property2_value: 'Hydropower',
  property3: 'Aid',
  property3_value: 'British Government',
  vnum:'G11-L6'
}

image_array[86] = {
  property1: 'Depicts:',
  property1_value: 'Kothmale Reservoir',
  property2: 'Aid',
  property2_value: 'Swedish Government',
  property3: '',
  property3_value: '',
  vnum:'G11-L6'
}

image_array[87] = {
  property1: 'Depicts:',
  property1_value: 'Randenigala Reservoir',
  property2: 'Aid',
  property2_value: 'West Germany',
  property3: 'Objective',
  property3_value: 'Electricity & Irrigation',
  vnum:'G11-L6'
}

image_array[88] = {
  property1: 'Incident',
  property1_value: 'Boston Tea Party',
  property2: 'Location',
  property2_value: 'Boston, US',
  property3: 'Immediate Result',
  property3_value: 'American Revolution',
  vnum:'G11-L7'
}

image_array[89] = {
  property1: 'King',
  property1_value: 'Louis XVI',
  property2: 'Nationality',
  property2_value: 'France',
  property3: 'Critized for:',
  property3_value: 'Overly Lavish Lifestyle',
  vnum:'G11-L7'
}

image_array[90] = {
  property1: 'Construction',
  property1_value: 'Palace of Versailles',
  property2: 'Location',
  property2_value: 'Versailles, France',
  property3: '',
  property3_value: '',
  vnum:'G11-L7'
}

image_array[91] = {
  property1: 'Depicts',
  property1_value: 'Queen Maire Antoinette',
  property2: 'Famous Quote',
  property2_value: 'If you cant afford bread, then eat CAKE',
  property3: 'Nationality',
  property3_value: 'French',
  vnum:'G11-L7'
}

image_array[92] = {
  property1: 'Depicts',
  property1_value: 'Montesquie* (According to the BOOK)',
  property2: 'Nationality',
  property2_value: 'French',
  property3: 'Books &  Ideology',
  property3_value: 'Nithiye Saraya - Legilsataive, Executive, Judicial',
  vnum:'G11-L7'
}

image_array[93] = {
  property1: 'Depicts',
  property1_value: 'Rousseau',
  property2: 'Nationality',
  property2_value: 'French',
  property3: 'Books & Ideology',
  property3_value: 'Samaja Sammuthiya - The King should work for the people`s development*',
  vnum:'G11-L7'
}

image_array[94] = {
  property1: 'Location',
  property1_value: 'The Bastielle, Paris',
  property2: 'Incident',
  property2_value: 'Storming the Bastielle for Gunpowder',
  property3: 'Year',
  property3_value: '1789',
  vnum:'G11-L7'
}

image_array[95] = {
  property1: 'Depicts',
  property1_value: 'Leon Trotsky',
  property2: 'Nationality',
  property2_value: 'Russian',
  property3: 'Era',
  property3_value: 'Russian Revolution',
  vnum:'G11-L8'
}

image_array[96] = {
  property1: 'Depicts',
  property1_value: 'Vladimir Lenin',
  property2: 'Nationality',
  property2_value: 'Russian',
  property3: 'Era',
  property3_value: 'Russian Revolution',
  vnum:'G11-L8'
}

image_array[97] = {
  property1: 'Depicts',
  property1_value: 'Otto Van Bismark',
  property2: 'Nationality',
  property2_value: 'German',
  property3: 'Significance',
  property3_value: 'Unified Germany For the FIRST TIME',
  vnum:'G11-L8'
}

image_array[98] = {
  property1: 'Depicts',
  property1_value: 'II William',
  property2: 'Nationality',
  property2_value: 'German',
  property3: '',
  property3_value: '',
  vnum:'G11-L8'
}

image_array[99] = {
  property1: 'Year',
  property1_value: '1914',
  property2: 'Incident',
  property2_value: 'Assination of Frans Ferdinand',
  property3: 'Location',
  property3_value: 'Sarajevo',
  vnum:'G11-L8'
}

image_array[100] = {
  property1: '',
  property1_value: '',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  vnum:'G11-L8'
}

image_array[101] = {
  property1: 'Name:',
  property1_value: 'Frans Ferdinand',
  property2: 'Nationality',
  property2_value: 'Austro-Hungarian',
  property3: 'Position',
  property3_value: 'Heir to the throne',
  vnum:'G11-L8'
}

image_array[102] = {
  property1: 'Name:',
  property1_value: 'Adolf H!tler',
  property2: 'Nationality',
  property2_value: 'German',
  property3: 'Position',
  property3_value: 'Ruler of Nazi Germany',
  vnum:'G11-L8'
}

image_array[103] = {
  property1: 'Name:',
  property1_value: 'Benito Mussolini',
  property2: 'Nationality',
  property2_value: 'Italian',
  property3: 'Position',
  property3_value: 'Ruler of Italy in WW2',
  vnum:'G11-L8'
}

image_array[106] = {
  property1: 'Name:',
  property1_value: 'Winston Churchill',
  property2: 'Nationality',
  property2_value: 'British',
  property3: 'Position',
  property3_value: 'Ruler of Britain in WW2',
  vnum:'G11-L8'
}

if (prop1_box) {
  prop1_box.addEventListener('mouseenter', () => {
    disp(image_array[rng].property1_value, prop1_box);
  });
}

if (prop2_box) {
  prop2_box.addEventListener('mouseenter', () => {
    disp(image_array[rng].property2_value, prop2_box);
  });
}

if (prop3_box) {
  prop3_box.addEventListener('mouseenter', () => {
    disp(image_array[rng].property3_value, prop3_box);
  });
}

function disp(value, feild) {
  feild.textContent = value;
}

let activeBackdropLayer = null;

function updateImageBackdrop(imagePath) {
  const nextLayer = activeBackdropLayer === 'a' ? 'b' : 'a';
  document.body.style.setProperty(
    `--backdrop-image-${nextLayer}`,
    `url("${imagePath}")`
  );
  document.body.classList.remove('backdrop-a-active', 'backdrop-b-active');
  document.body.classList.add(`backdrop-${nextLayer}-active`);
  activeBackdropLayer = nextLayer;
}

var rng = Math.ceil(Math.random()*106);
var prevrng = 1;
const historyFlagButton = image_box ? document.querySelector('#xx') : null;
const historyFlagFilter = image_box ? document.querySelector('#fxx') : null;
const historyFlaggedImageIndices = [];
let historyFlagFilterActive = false;
let currentHistoryImageIndex = null;
const historyExcludedImageIndices = new Set([18, 27, 37, 38, 100, 104, 105]);
const historyFlagButtonLabel = historyFlagButton?.textContent ?? '';

function updateHistoryFlagButtonState() {
  if (!historyFlagButton) return;
  historyFlagButton.classList.toggle('removeentry', historyFlagFilterActive);
  historyFlagButton.textContent = historyFlagFilterActive ? '✅' : historyFlagButtonLabel;
}

if (historyFlagButton) {
  historyFlagButton.disabled = true;
  historyFlagButton.addEventListener('click', () => {
    if (currentHistoryImageIndex !== null) {
      if (historyFlagFilterActive) {
        const flaggedIndex = historyFlaggedImageIndices.indexOf(currentHistoryImageIndex);
        if (flaggedIndex !== -1) historyFlaggedImageIndices.splice(flaggedIndex, 1);
      } else if (!historyFlaggedImageIndices.includes(currentHistoryImageIndex)) {
        historyFlaggedImageIndices.push(currentHistoryImageIndex);
      }
    }
    dispNextImg();
  });
}

if (historyFlagFilter) {
  historyFlagFilter.addEventListener('click', () => {
    historyFlagFilterActive = !historyFlagFilterActive;
    historyFlagFilter.classList.toggle('activex', historyFlagFilterActive);
    updateHistoryFlagButtonState();
    dispNextImg();
  });
}

function getHistoryImageCandidates() {
  return image_array
    .map((image, index) => ({ image, index }))
    .filter(({ image, index }) => image
      && !historyExcludedImageIndices.has(index)
      && (!historyFlagFilterActive || historyFlaggedImageIndices.includes(index)));
}

function dispNextImg() {
  const candidates = getHistoryImageCandidates();
  if (candidates.length === 0) {
    console.error('No history images match the active filters.');
    if (historyFlagFilterActive) {
      if (image_container) image_container.hidden = true;
      if (property_container) property_container.hidden = true;
      if (lnum) lnum.hidden = true;
      if (historyFlagButton) historyFlagButton.disabled = true;
      document.body.classList.remove('backdrop-a-active', 'backdrop-b-active');
    }
    return;
  }

  if (image_container) image_container.hidden = false;
  if (property_container) property_container.hidden = false;
  if (lnum) lnum.hidden = false;

  let selected = candidates[Math.floor(Math.random() * candidates.length)];
  if (candidates.length > 1 && selected.index === currentHistoryImageIndex) {
    const alternativeCandidates = candidates.filter(({ index }) => index !== currentHistoryImageIndex);
    selected = alternativeCandidates[Math.floor(Math.random() * alternativeCandidates.length)];
  }

  rng = selected.index;
  currentHistoryImageIndex = rng;
  if (historyFlagButton) historyFlagButton.disabled = false;
  updateHistoryPropertyVisibility(selected.image);
  if (prop1_box) prop1_box.textContent = selected.image.property1;
  if (prop2_box) prop2_box.textContent = selected.image.property2;
  if (prop3_box) prop3_box.textContent = selected.image.property3;
  if (lnum) lnum.textContent = selected.image.vnum;
  if (image_box) image_box.src = `histimg/hpic${rng}.png`;
  updateImageBackdrop(`histimg/hpic${rng}.png`);
  console.log('Image Change Attempted')
  console.log(`hpic${rng}.png`);
  prevrng = rng;
}

updateHistoryPropertyVisibility(image_array[1]);

//  while(cnt < image_array[rng].propertiesn) {
//   if(prop`${cnt}`_box) prop`${cnt}`_box.textContent = image_array[rng].property`${cnt}`;
//   cnt++;

if (image_box) {
  image_box.addEventListener('click', dispNextImg);
}

if (image_container) {
  image_container.addEventListener('click', () => {
    image_container.classList.add('refresh');
  });
}

// scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.classList.add("s1");
        document.body.classList.add('s1');
    } else {
        entry.target.classList.remove("s1");
        document.body.classList.remove('s1');
    }
})
}, {});

const sectionEl = document.querySelectorAll(".sec");
sectionEl.forEach(el => observer.observe(el));

//Theme
const theme_sel = document.querySelector('.theme-toggle');

//Art
const prop4_box = document.querySelector('#p4');
const prop5_box = document.querySelector('#p5');
const prop6_box = document.querySelector('#p6');
const prop7_box = document.querySelector('#p7');
const prop8_box = document.querySelector('#p8');
const image_box2 = document.querySelector('#image2');
const image_container2 = document.querySelector('#image_box2');
const lnum2 = document.querySelector('#lnum2');
const property_container2 = document.querySelector('.property-box2');

const image_array2 = [];
const lenA2 = image_array2.length;
const artPropertyRows = [
  [prop4_box, 'property1_value'],
  [prop5_box, 'property2_value'],
  [prop6_box, 'property3_value'],
  [prop7_box, 'property4_value'],
  [prop8_box, 'property5_value']
];

function updateArtPropertyVisibility(image) {
  artPropertyRows.forEach(([element, property]) => {
    if (!element) return;

    const wasHidden = element.classList.contains('is-hidden');
    const value = image[property];
    const isHidden = typeof value !== 'string' || value.trim() === '';
    element.classList.toggle('is-hidden', isHidden);

    if (isHidden) {
      element.classList.remove('is-reappearing');
    } else if (wasHidden) {
      element.classList.remove('is-reappearing');
      void element.offsetWidth;
      element.classList.add('is-reappearing');
    }
  });
}

if (prop4_box) {
  prop4_box.addEventListener('mouseenter', () => {
    disp(image_array2[rng2].property1_value, prop4_box);
  });
}

if (prop5_box) {
  prop5_box.addEventListener('mouseenter', () => {
    disp(image_array2[rng2].property2_value, prop5_box);
  });
}

if (prop6_box) {
  prop6_box.addEventListener('mouseenter', () => {
    disp(image_array2[rng2].property3_value, prop6_box);
  });
}

if (prop7_box) {
  prop7_box.addEventListener('mouseenter', () => {
    disp(image_array2[rng2].property4_value, prop7_box);
  });
}

if (prop8_box) {
  prop8_box.addEventListener('mouseenter', () => {
    disp(image_array2[rng2].property5_value, prop8_box);
  });
}

function disp2(value, feild) {
  feild.textContent = value;
}

//Art Fillters
const filtall2 = document.querySelector('#all2');
const filtpaint = document.querySelector('#paint');
const filtstatu = document.querySelector('#statu');
const filtbuildi = document.querySelector('#buildi');
const filtbstat = document.querySelector('#bstat');
const filtkat = document.querySelector('#kat');
const filtmutr = document.querySelector('#mutr');
const filtflagged = image_box2 ? document.querySelector('#fxx') : null;

let statFilter2 = 1;
const flaggedImageIndices = [];
let flaggedFilterActive = false;

if (filtall2) filtall2.addEventListener('click', () => {
  statFilter2 = 1;
  filtall2.classList.add('activex');
  filtpaint.classList.remove('activex');
  filtstatu.classList.remove('activex');
  filtbuildi.classList.remove('activex');
  filtbstat.classList.remove('activex');
  filtkat.classList.remove('activex');
  filtmutr.classList.remove('activex');
  dispNextImg2();
});

if (filtpaint) filtpaint.addEventListener('click', () => {
  statFilter2 = 2;
  filtall2.classList.remove('activex');
  filtpaint.classList.add('activex');
  filtstatu.classList.remove('activex');
  filtbuildi.classList.remove('activex');
  filtbstat.classList.remove('activex');
  filtkat.classList.remove('activex');
  filtmutr.classList.remove('activex');
  dispNextImg2();
});

if (filtstatu) filtstatu.addEventListener('click', () => {
  statFilter2 = 3;
  filtall2.classList.remove('activex');
  filtpaint.classList.remove('activex');
  filtstatu.classList.add('activex');
  filtbuildi.classList.remove('activex');
  filtbstat.classList.remove('activex');
  filtkat.classList.remove('activex');
  filtmutr.classList.remove('activex');
  dispNextImg2();
});

if (filtbuildi) filtbuildi.addEventListener('click', () => {
  statFilter2 = 4;
  filtall2.classList.remove('activex');
  filtpaint.classList.remove('activex');
  filtstatu.classList.remove('activex');
  filtbuildi.classList.add('activex');
  filtbstat.classList.remove('activex');
  filtkat.classList.remove('activex');
  filtmutr.classList.remove('activex');
  dispNextImg2();
});

if (filtbstat) filtbstat.addEventListener('click', () => {
  statFilter2 = 5;
  filtall2.classList.remove('activex');
  filtpaint.classList.remove('activex');
  filtstatu.classList.remove('activex');
  filtbuildi.classList.remove('activex');
  filtbstat.classList.add('activex');
  filtkat.classList.remove('activex');
  filtmutr.classList.remove('activex');
  dispNextImg2();
});

if (filtkat) filtkat.addEventListener('click', () => {
  statFilter2 = 6;
  filtall2.classList.remove('activex');
  filtpaint.classList.remove('activex');
  filtstatu.classList.remove('activex');
  filtbuildi.classList.remove('activex');
  filtbstat.classList.remove('activex');
  filtkat.classList.add('activex');
  filtmutr.classList.remove('activex');
  dispNextImg2();
});

if (filtmutr) filtmutr.addEventListener('click', () => {
  statFilter2 = 7;
  filtall2.classList.remove('activex');
  filtpaint.classList.remove('activex');
  filtstatu.classList.remove('activex');
  filtbuildi.classList.remove('activex');
  filtbstat.classList.remove('activex');
  filtkat.classList.remove('activex');
  filtmutr.classList.add('activex');
  dispNextImg2();
});

const artTypesByFilter = {
  1: null,
  2: ['painting'],
  3: ['statue'],
  4: ['building'],
  5: ['budupilimaya'],
  6: ['ketayam', 'ketayama'],
  7: ['murthi']
};

var rng2 = Math.ceil(Math.random()*216);
var prevrng2 = 1;
let currentArtImageIndex = null;

const flagButton = image_box2 ? document.querySelector('.xbtn') : null;
const flagButtonLabel = flagButton?.textContent ?? '';

function updateArtFlagButtonState() {
  if (!flagButton) return;
  flagButton.classList.toggle('removeentry', flaggedFilterActive);
  flagButton.textContent = flaggedFilterActive ? '✅' : flagButtonLabel;
}

if (flagButton) {
  flagButton.disabled = true;
  flagButton.addEventListener('click', () => {
    if (currentArtImageIndex !== null) {
      if (flaggedFilterActive) {
        const flaggedIndex = flaggedImageIndices.indexOf(currentArtImageIndex);
        if (flaggedIndex !== -1) flaggedImageIndices.splice(flaggedIndex, 1);
      } else if (!flaggedImageIndices.includes(currentArtImageIndex)) {
        flaggedImageIndices.push(currentArtImageIndex);
      }
    }
    dispNextImg2();
  });
}

if (filtflagged) filtflagged.addEventListener('click', () => {
  flaggedFilterActive = !flaggedFilterActive;
  filtflagged.classList.toggle('activex', flaggedFilterActive);
  updateArtFlagButtonState();
  dispNextImg2();
});

function dispNextImg2() {
  const allowedTypes = artTypesByFilter[statFilter2];
  const candidates = image_array2
    .map((image, index) => ({ image, index }))
    .filter(({ image, index }) => image
      && (!allowedTypes || allowedTypes.includes(image.type))
      && (!flaggedFilterActive || flaggedImageIndices.includes(index)));

  if (candidates.length === 0) {
    console.error(`No artwork matches filter ${statFilter2}.`);
    if (flaggedFilterActive) {
      if (image_container2) image_container2.hidden = true;
      if (property_container2) property_container2.hidden = true;
      if (lnum2) lnum2.hidden = true;
      if (flagButton) flagButton.disabled = true;
      document.body.classList.remove('backdrop-a-active', 'backdrop-b-active');
    }
    return;
  }

  if (image_container2) image_container2.hidden = false;
  if (property_container2) property_container2.hidden = false;
  if (lnum2) lnum2.hidden = false;

  let selected = candidates[Math.floor(Math.random() * candidates.length)];
  if (candidates.length > 1 && selected.index === prevrng2) {
    const alternativeCandidates = candidates.filter(({ index }) => index !== prevrng2);
    selected = alternativeCandidates[Math.floor(Math.random() * alternativeCandidates.length)];
  }

  currentArtImageIndex = selected.index;
  if (flagButton) flagButton.disabled = false;
  rng2 = selected.index;
  const image = selected.image;
  updateImageBackdrop(`artimg/apic${rng2}.png`);
  updateArtPropertyVisibility(image);
  if (prop4_box) prop4_box.textContent = image.property1;
  if (prop5_box) prop5_box.textContent = image.property2;
  if (prop6_box) prop6_box.textContent = image.property3;
  if (prop7_box) prop7_box.textContent = image.property4;
  if (prop8_box) prop8_box.textContent = image.property5;
  if (lnum2) lnum2.textContent = image.vnum;
  if (image_box2) image_box2.src = `artimg/apic${rng2}.png`;
  console.log('Image Change Attempted')
  console.log(`apic${rng2}.png`);
  prevrng2 = rng2;
}


if (image_box2) {
  image_box2.addEventListener('click', dispNextImg2);
}

if (image_container2) {
  image_container2.addEventListener('click', () => {
    image_container2.classList.add('refresh');
  });
}

image_array2[1] = {
  property1: 'Title',
  property1_value: 'Siduhath Kumaru & Maw bisawa',
  property2: 'Creator',
  property2_value: 'M. Sarlis',
  property3: 'Style*',
  property3_value: 'Western Natuarilsm',
  property4: 'Color',
  property4_value: '3D, Perspective',
  property5: 'Type',
  property5_value: 'Lithograph',
  vnum:'G10',
  type: 'painting'
}

image_array2[2] = {
  property1: 'Title',
  property1_value: 'Piyuma Pita Wadima',
  property2: 'Creator',
  property2_value: 'M. Sarlis',
  property3: 'Style*',
  property3_value: 'Western Natuarilsm',
  property5: 'Type',
  property5_value: 'Lithograph',
  vnum:'G10',
  type: 'painting'
}

image_array2[3] = {
  property1: 'Title',
  property1_value: 'Hemamala Kumriya & Dantha Kumaru ...',
  property2: 'Creator',
  property2_value: 'Solias Mendis',
  property3: 'Style*',
  property3_value: 'Western Natuarilsm',
  property4: 'Color',
  property4_value: 'Warm',
  property5: 'Location',
  property5_value: 'Kelani Viharaya, Colombo',
  vnum:'G10',
  type: 'painting'
}

image_array2[4] = {
  property1: 'Title',
  property1_value: 'Sangamiththa Theraniya ...',
  property2: 'Creator',
  property2_value: 'Solias Mendis',
  property3: 'Style*',
  property3_value: 'Western Natuarilsm',
  property4: 'Color',
  property4_value: 'Warm',
  property5: 'Location',
  property5_value: 'Kelani Viharaya, Colombo',
  vnum:'G10',
  type: 'painting'
}

image_array2[5] = {
  property1: 'Title',
  property1_value: 'Maara Parajaya',
  property2: 'Creator',
  property2_value: 'George Kit',
  property3: 'Style*',
  property3_value: 'Ganiwakawadi',
  property4: 'Color',
  property4_value: '2D, Light and Dark',
  property5: 'Location',
  property5_value: 'Gothami Viharaya, Colombo',
  vnum:'G10',
  type: 'painting'
}

image_array2[6] = {
  property1: 'Title',
  property1_value: 'Maara Parajaya',
  property2: 'Creator',
  property2_value: 'George Kit',
  property3: 'Style*',
  property3_value: 'GanikaWadi',
  property4: 'Color',
  property4_value: '2D, Light and Dark',
  property5: 'Location',
  property5_value: 'Gothami Viharaya, Colombo',
  vnum:'G10',
  type: 'painting'
}

image_array2[7] = {
  property1: 'Title',
  property1_value: 'Nayika Chithra',
  property2: 'Creator',
  property2_value: 'George Kit',
  property3: 'Style/Inspiration',
  property3_value: 'Western GanikaWadi',
  property4: 'Color',
  property4_value: '2D',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[8] = {
  property1: 'Title',
  property1_value: 'Nayika Chithra',
  property2: 'Creator',
  property2_value: 'George Kit',
  property3: 'Style/Inspiration',
  property3_value: 'Western GanikaWadi',
  property4: 'Color',
  property4_value: '2D',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[9] = {
  property1: 'Title',
  property1_value: 'Jayagrahi Lesa Jerusalemata Piviseema',
  property2: 'Creator',
  property2_value: 'David Painter',
  property3: 'Special Features',
  property3_value: 'Sri Lankan Environment and Feminish Actions*',
  property4: 'Color',
  property4_value: '3D, Pinkish',
  property5: 'Material',
  property5_value: 'Canvas + Oil Paint',
  vnum:'G10',
  type: 'painting'
}

image_array2[10] = {
  property1: 'Title',
  property1_value: 'Good Samaritan',
  property2: 'Creator',
  property2_value: 'David Painter',
  property3: 'Special Features',
  property3_value: 'Sri Lankan Environment and Feminish Actions*',
  property4: 'Style*',
  property4_value: 'European Shasthraliya',
  property5: 'Location',
  property5_value: 'Thrithwa Church, Kandy',
  vnum:'G10',
  type: 'painting'
}

image_array2[11] = {
  property1: 'Title',
  property1_value: 'White CHICKEN',
  property2: 'Creator',
  property2_value: 'Thaavadi Mutherai Sami',
  property3: 'Method*',
  property3_value: 'Presco Secco',
  property4: 'Style*',
  property4_value: 'European Yatharthawadi',
  property5: 'Location',
  property5_value: 'Sattanadar Siva Kovil',
  vnum:'G10',
  type: 'painting'
}

image_array2[12] = {
  property1: 'Title',
  property1_value: 'Sudu Ath Sahitha Jujaka Ruwa & Ganapathi Ruwa',
  property2: 'Creator',
  property2_value: 'Thaavadi Mutherai Sami',
  property3: 'Method*',
  property3_value: 'Presco Secco',
  property4: 'Inspiration*',
  property4_value: 'South Indian Thanjawur Paintings',
  property5: 'Location',
  property5_value: 'Sattanadar Siva Kovil',
  vnum:'G10',
  type: 'painting'
}

image_array2[13] = {
  property1: 'Title',
  property1_value: 'Agasthiyar & Vinayagar',
  property2: 'Creator',
  property2_value: 'Periya Thambi Subramuniyam',
  property3: 'Method*',
  property3_value: 'Chalk Wall + Enamel Color',
  property4: 'Colors',
  property4_value: '3D, Perspective, Color Tone',
  property5: 'Location',
  property5_value: 'Pararajasekara Pilleyar Kovil',
  vnum:'G10',
  type: 'painting'
}

image_array2[14] = {
  property1: 'Title',
  property1_value: 'Atha Walliwa Elawagena Yama',
  property2: 'Creator',
  property2_value: 'Periya Thambi Subramuniyam',
  property3: 'Method*',
  property3_value: 'Chalk Wall + Enamel Color',
  property4: 'Colors',
  property4_value: '3D, Perspective, Fine Lines',
  property5: 'Location',
  property5_value: 'Pararajasekara Pilleyar Kovil',
  vnum:'G10',
  type: 'painting'
}

image_array2[15] = {
  property1: 'Title',
  property1_value: 'Parwatha Masthakaye Sitina Madonna',
  property2: 'Creator',
  property2_value: 'Leonardo Da Vinci',
  property3: 'Material*',
  property3_value: 'Canvas & Oil Paint',
  property4: 'Colors & Features',
  property4_value: 'Triangle Structure',
  property5: 'Location',
  property5_value: 'London National Mueseum',
  vnum:'G10',
  type: 'painting'
}

image_array2[16] = {
  property1: 'Title',
  property1_value: 'Awasan Bojana Sangrahaya',
  property2: 'Creator',
  property2_value: 'Leonardo Da Vinci',
  property3: 'Material*',
  property3_value: 'Canvas & Oil Paint',
  property4: 'Colors & Features',
  property4_value: 'Perspective, 3D, Brown',
  property5: 'Location',
  property5_value: 'Saint Maria Dela Gracy Church',
  vnum:'G10',
  type: 'painting'
}

image_array2[17] = {
  property1: 'Title',
  property1_value: 'Mona Lisa',
  property2: 'Creator',
  property2_value: 'Leonardo Da Vinci',
  property3: 'Material*',
  property3_value: 'Poplar Wood & Oil Paint',
  property4: 'Colors & Features',
  property4_value: 'Triangle Structure, Perspective BG',
  property5: 'Location',
  property5_value: 'The LOURE, France',
  vnum:'G10',
  type: 'painting'
}

image_array2[18] = {
  property1: 'Title',
  property1_value: 'Pieta',
  property2: 'Creator',
  property2_value: 'Michael Angelo',
  property3: 'Material*',
  property3_value: 'Kirigaruda',
  property4: 'Location',
  property4_value: 'Saint Peter Church, Rome',
  property5: 'Expression',
  property5_value: 'Humanity, Sensitivity',
  vnum:'G10',
  type: 'murthi'
}

image_array2[19] = {
  property1: 'Title',
  property1_value: 'Pieta',
  property2: 'Creator',
  property2_value: 'Michael Angelo',
  property3: 'Material*',
  property3_value: 'Kirigaruda',
  property4: 'Location',
  property4_value: 'Saint Peter Church, Rome',
  property5: 'Expression',
  property5_value: 'Humanity, Sensitivity',
  vnum:'G10',
  type: 'murthi'
}

image_array2[20] = {
  property1: 'Title',
  property1_value: 'Pieta',
  property2: 'Creator',
  property2_value: 'Michael Angelo',
  property3: 'Material*',
  property3_value: 'Kirigaruda',
  property4: 'Location',
  property4_value: 'Saint Peter Church, Rome',
  property5: 'Expression',
  property5_value: 'Humanity, Sensitivity',
  vnum:'G10',
  type: 'murthi'
}

image_array2[21] = {
  property1: 'Title',
  property1_value: 'David',
  property2: 'Creator',
  property2_value: 'Michael Angelo',
  property3: 'Material*',
  property3_value: 'Kirigaruda',
  property4: 'Style',
  property4_value: 'Greek-Roman*',
  property5: 'Expression',
  property5_value: 'Strength, Fearlessness*, Youth',
  vnum:'G10',
  type: 'murthi'
}

image_array2[22] = {
  property1: 'Title',
  property1_value: 'David',
  property2: 'Creator',
  property2_value: 'Michael Angelo',
  property3: 'Material*',
  property3_value: 'Kirigaruda',
  property4: 'Style',
  property4_value: 'Greek-Roman*',
  property5: 'Expression',
  property5_value: 'Strength, Fearlessness*, Youth',
  vnum:'G10',
  type: 'murthi'
}

image_array2[23] = {
  property1: 'Title',
  property1_value: 'David',
  property2: 'Creator',
  property2_value: 'Michael Angelo',
  property3: 'Material*',
  property3_value: 'Kirigaruda',
  property4: 'Style',
  property4_value: 'Greek-Roman*',
  property5: 'Expression',
  property5_value: 'Strength, Fearlessness*, Youth',
  vnum:'G10',
  type: 'murthi'
}

image_array2[24] = {
  property1: 'Title',
  property1_value: 'David (`s Hand)',
  property2: 'Creator',
  property2_value: 'Michael Angelo',
  property3: 'Material*',
  property3_value: 'Kirigaruda',
  property4: 'Style',
  property4_value: 'Greek-Roman*',
  property5: 'Expression',
  property5_value: 'Strength, Fearlessness*, Youth',
  vnum:'G10',
  type: 'murthi'
}

image_array2[25] = {
  property1: 'Title',
  property1_value: 'Creation of Adam (Adam Maveema)',
  property2: 'Creator',
  property2_value: 'Michael Angelo',
  property3: 'Method*',
  property3_value: 'Presco Secco',
  property4: 'Expression',
  property4_value: 'Adam`s youth and God`s senility',
  property5: 'Location',
  property5_value: 'Sistine Church, Rome',
  vnum:'G10',
  type: 'painting'
}

image_array2[26] = {
  property1: 'Title',
  property1_value: 'Awasan Vinishwaya',
  property2: 'Creator',
  property2_value: 'Michael Angelo',
  property3: 'Method*',
  property3_value: 'Presco Secco (WORLD`S LARGEST)',
  property4: 'Location',
  property4_value: 'Sistine Church, Rome',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[27] = {
  property1: 'Title',
  property1_value: 'Athens Guru Kulaya',
  property2: 'Creator',
  property2_value: 'Rafael Sansiyo',
  property3: 'Method*',
  property3_value: 'Presco Secco',
  property4: 'Colors',
  property4_value: 'Brown Shades, Dark Shades, Orange & White Shades',
  property5: 'Location',
  property5_value: 'Stanza Dela Segnatura Church',
  vnum:'G10',
  type: 'painting'
}

image_array2[28] = {
  property1: 'Title',
  property1_value: 'Thanapitiye Sitina Madonna',
  property2: 'Creator',
  property2_value: 'Rafael',
  property3: 'Expression',
  property3_value: 'A full and soft* Maria',
  property4: 'Material & Colors',
  property4_value: 'Wood Board; 3D, Perspective',
  property5: 'Location',
  property5_value: 'The LOURE, France',
  vnum:'G10',
  type: 'painting'
}

image_array2[29] = {
  property1: 'Title',
  property1_value: 'Madonna Dela Sedia',
  property2: 'Creator',
  property2_value: 'Rafael Sansiyo',
  property3: 'Style*',
  property3_value: 'Circular Plate',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[30] = {
  property1: 'Creation',
  property1_value: 'A Pillar / Gadoladeniya',
  property2: 'Creator*',
  property2_value: 'Ganeshwaracharya',
  property3: 'Material',
  property3_value: 'Granite (Kalugal)',
  property4: 'Inspiration',
  property4_value: 'Vijayanagar',
  property5: 'Location',
  property5_value: 'Gadoladeniya',
  vnum:'G10',
  type: 'building'
}

image_array2[31] = {
  property1: 'Creation',
  property1_value: 'Gadoladeniya',
  property2: 'Creator*',
  property2_value: 'Ganeshwaracharya',
  property3: 'Material',
  property3_value: 'Granite (Kalugal)',
  property4: 'Inspiration',
  property4_value: 'Hindu Culture',
  property5: 'Era',
  property5_value: 'Gampola, IV Buwanekabahu',
  vnum:'G10',
  type: 'building'
}

image_array2[32] = {
  property1: 'Creation',
  property1_value: 'Vijayothpaya',
  property2: 'Creator*',
  property2_value: 'Ganeshwaracharya',
  property3: 'Material',
  property3_value: 'Granite (Kalugal)',
  property4: 'Significance',
  property4_value: '4x Hidi Pilima & 4x Parivara Stupa',
  property5: 'Location',
  property5_value: 'Gadoladeniya',
  vnum:'G10',
  type: 'building'
}

image_array2[33] = {
  property1: 'Location',
  property1_value: 'Gadoladeniya',
  property2: 'Asana Kramaya*',
  property2_value: 'Virasana',
  property3: 'Mudra',
  property3_value: 'Dhyana Mudra',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'budupilimaya'
}

image_array2[34] = {
  property1: 'Creation',
  property1_value: 'Lankathilakaya',
  property2: 'Creator*',
  property2_value: 'Isthapathiyar',
  property3: 'Material',
  property3_value: 'Bricks & Chalk-Cement',
  property4: 'Art',
  property4_value: '~Kandyan Art, Siv Hansa Puttuwa`',
  property5: 'Era',
  property5_value: 'Gampola, IV Buwanekabahu',
  vnum:'G10',
  type: 'building'
}

image_array2[35] = {
  property1: 'Location',
  property1_value: 'Lankathilakaya',
  property2: 'Asana Kramaya*',
  property2_value: 'Virasana',
  property3: 'Mudra',
  property3_value: 'Dhyana Mudra',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'budupilimaya'
}

image_array2[36] = {
  property1: 'Location',
  property1_value: 'Lankathilakaya',
  property2: 'Asana Kramaya*',
  property2_value: 'Virasana',
  property3: 'Mudra',
  property3_value: 'Vitharka Mudra',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[37] = {
  property1: 'Location',
  property1_value: 'Lankathilakaya',
  property2: 'Name',
  property2_value: 'Siv Hansa Puttuwa',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[38] = {
  property1: 'Location',
  property1_value: 'Lankathilakaya',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[39] = {
  property1: 'Creation',
  property1_value: 'Ambekke Dewalaya',
  property2: 'Creator*',
  property2_value: 'Delmada Mulachari +',
  property3: '26 Poles in one Nail',
  property3_value: 'Madol Kurupuwa',
  property4: 'Sarisili Patterns',
  property4_value: 'Bherunda Pakshiya, Kiduriya, Hansa Puttuwa',
  property5: 'Era',
  property5_value: 'Gampola, III Vickramabhu',
  vnum:'G10',
  type: 'building'
}

image_array2[40] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Special Name',
  property2_value: 'Madol Kurupawa',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'building'
}

image_array2[41] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Bherunda Pakshiya',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[42] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Kinduriya',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[43] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Hansa Puttuwa',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[44] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Wrushabha Knugnaraya',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[45] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Hansaya.. LOL',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[46] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Sinhaya... :/',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[47] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Liyakam Mostarayak',
  property3: 'Relative Location',
  property3_value: 'Pekada',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[48] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Nalagnana',
  property3: 'Relative Location',
  property3_value: 'Pekada',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[49] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Neluma',
  property3: 'Relative Location',
  property3_value: 'Pekada',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[50] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Daruwata Kiri Powana Mawa',
  property3: 'Relative Location',
  property3_value: 'Pekada',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[51] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Mallawa Poraya',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[52] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Videshiya Hevaya',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[53] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Deshiya Hevaya',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[54] = {
  property1: 'Location',
  property1_value: 'Ambekke Devalaya',
  property2: 'Pattern Name',
  property2_value: 'Raban Wayanna',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayama'
}

image_array2[55] = {
  property1: 'Creation',
  property1_value: 'Temple of Tooth',
  property2: 'Era',
  property2_value: 'II Vimaladharmasuriya',
  property3: 'Special Construction',
  property3_value: 'Paththirippuwa',
  property4: 'Creator',
  property4_value: 'Devendra Mulachari',
  property5: 'Era',
  property5_value: 'Sri Wickrama Rajasinghe',
  vnum:'G10',
  type: 'building'
}

image_array2[56] = {
  property1: 'Creation',
  property1_value: 'Sandakadapahana',
  property2: 'Era',
  property2_value: 'Kandy',
  property3: 'Special Featurues',
  property3_value: 'Triangular',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'building'
}

image_array2[57] = {
  property1: 'Creation',
  property1_value: 'Medawala Tampita Viharaya',
  property2: 'Era',
  property2_value: 'Kandy',
  property3: 'Art',
  property3_value: 'Jathaka Katha, Central Kandyan Style',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'building'
}

image_array2[58] = {
  property1: 'Location',
  property1_value: 'Medawala Tampita Viharaya',
  property2: 'Topic',
  property2_value: 'Vessanthara Jathakaya',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[59] = {
  property1: 'Location',
  property1_value: 'Degaldoruwa',
  property2: 'Topic',
  property2_value: 'Maara Parajaya',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  vnum:'G10',
  type: 'painting'

}

image_array2[60] = {
  property1: 'Creation',
  property1_value: 'Degaldoruwa Rajamaha Viharaya',
  property2: 'Era',
  property2_value: 'Keerthi Sri Rajasinghe',
  property3: 'Artists',
  property3_value: 'Dewaragampala Sillaththana',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'building'
}

image_array2[61] = {
  property1: 'Location',
  property1_value: 'Degaldoruwa',
  property2: 'Topic',
  property2_value: 'Vessanthara Rajun Ali Athun Dan Deema',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[62] = {
  property1: 'Location',
  property1_value: 'Dambulu Raja Maha Viharaya',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'budupilimaya'
}

image_array2[63] = {
  property1: 'Creation',
  property1_value: 'Dambulu Raja Maha Viharaya',
  property2: 'Era',
  property2_value: 'King Valagamba',
  property3: 'Artists',
  property3_value: 'Neelagama Siththara Generation*',
  property4: 'Art',
  property4_value: 'Bodhisathwa & Buddha, Historic Events',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'building'
}

image_array2[64] = {
  property1: 'Location',
  property1_value: 'Dambulu Raja Maha Viharaya',
  property2: 'Title',
  property2_value: 'Budhdhathwayen Pasweni Sathiye Maara Duwarun Parajaya Kirima',
  property3: 'Features',
  property3_value: 'Paarshawadarshi, Akhanda Kathana Kramaya',
  property4: 'Background',
  property4_value: 'Filled in with Red & Flowers',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[65] = {
  property1: 'Location',
  property1_value: 'Dambulu Raja Maha Viharaya',
  property2: 'Titile',
  property2_value: 'Maara Parajaya',
  property3: 'Features',
  property3_value: 'Paarshawadarshi, Akhanda Kathana Kramaya',
  property4: 'Background',
  property4_value: 'Filled in with Red',
  property5: 'Mudra*',
  property5_value: 'Bhumi Sparsha',
  vnum:'G10',
  type: 'painting'
}

image_array2[66] = {
  property1: 'Location',
  property1_value: 'Dambulu Raja Maha Viharaya',
  property2: 'Titile',
  property2_value: 'Anothapaththa Vila',
  property3: 'Features',
  property3_value: 'Zero Perspective, 2D',
  property4: 'Background',
  property4_value: 'Filled in with Red',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[67] = {
  property1: 'Location',
  property1_value: 'Dambulu Raja Maha Viharaya',
  property2: 'Titile',
  property2_value: '1000x Buduwarunge Ruwa',
  property3: 'Features',
  property3_value: 'Paarshawadarshi, 2D',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[68] = {
  property1: 'Creation',
  property1_value: 'Pujaka Ruwa',
  property2: 'Ancient Civilization',
  property2_value: 'Indus Valley',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'murthi'
}

image_array2[69] = {
  property1: 'Creation',
  property1_value: 'Pujaka Ruwa',
  property2: 'Ancient Civilization',
  property2_value: 'Indus Valley',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'murthi'
}

image_array2[70] = {
  property1: 'Creation',
  property1_value: 'Nalangana',
  property2: 'Ancient Civilization',
  property2_value: 'Harappa, Indus Valley',
  property3: 'Composition',
  property3_value: 'Bronze',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'murthi'
}

image_array2[71] = {
  property1: 'Creation',
  property1_value: 'Rathuwali walin kara Kawandha Minis Ruwa',
  property2: 'Ancient Civilization',
  property2_value: 'Indus Valley',
  property3: 'Composition',
  property3_value: 'Red Limestone',
  property4: 'Inspiration',
  property4_value: 'Greek Sambhawya',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'murthi'
}

image_array2[72] = {
  property1: 'Creation',
  property1_value: 'Rathuwali walin kara Kawandha Minis Ruwa',
  property2: 'Ancient Civilization',
  property2_value: 'Indus Valley',
  property3: 'Composition',
  property3_value: 'Red Limestone',
  property4: 'Inspiration',
  property4_value: 'Greek Sambhawya',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'murthi'
}

image_array2[73] = {
  property1: 'Creation',
  property1_value: 'Aluwali walin kara Kawandha Minis Ruwa',
  property2: 'Ancient Civilization',
  property2_value: 'Harappa, Indus Valley',
  property3: 'Composition',
  property3_value: 'Grey Limestone',
  property4: 'Inspiration',
  property4_value: 'Greek-Roman Sambhawya',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'murthi'
}

image_array2[74] = {
  property1: 'Creation',
  property1_value: 'Aluwali walin kara Kawandha Minis Ruwa',
  property2: 'Ancient Civilization',
  property2_value: 'Harappa, Indus Valley',
  property3: 'Composition',
  property3_value: 'Grey Limestone',
  property4: 'Inspiration',
  property4_value: 'Greek-Roman Sambhawya',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'murthi'
}

image_array2[75] = {
  property1: 'Creation',
  property1_value: 'Molliya Sahitha Gawa Rupaya (Mudra)',
  property2: 'Ancient Civilization',
  property2_value: 'Indus Valley',
  property3: 'Features',
  property3_value: 'Paarshawadarshi',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayam'
}

image_array2[76] = {
  property1: 'Creation',
  property1_value: 'Pashupathi (Mudra)',
  property2: 'Ancient Civilization',
  property2_value: 'Indus Valley',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'ketayam'
}

image_array2[77] = {
  property1: 'Creation',
  property1_value: 'Sphynx',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt',
  property3: 'Close Proximity to [Pyramid]',
  property3_value: 'Pyaramid of Khufu',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'murthi'
}

image_array2[78] = {
  property1: 'Creation',
  property1_value: 'Sphynx',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt',
  property3: 'Close Proximity to [Pyramid]',
  property3_value: 'Pyaramid of Khufu',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'murthi'
}

image_array2[79] = {
  property1: 'Creation',
  property1_value: 'Scribe',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt (Old)',
  property3: 'Composition',
  property3_value: 'Limestone',
  property4: 'Location',
  property4_value: 'The LOURE, France',
  property5: 'Features',
  property5_value: 'Traingular Structure*',
  vnum:'G10',
  type: 'murthi'
}

image_array2[80] = {
  property1: 'Creation',
  property1_value: 'Scribe',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt (Old)',
  property3: 'Composition',
  property3_value: 'Limestone',
  property4: 'Location',
  property4_value: 'The LOURE, France',
  property5: 'Features',
  property5_value: 'Traingular Structure*',
  vnum:'G10',
  type: 'murthi'
}

image_array2[81] = {
  property1: 'Creation',
  property1_value: 'Scribe',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt (Old)',
  property3: 'Composition',
  property3_value: 'Limestone',
  property4: 'Location',
  property4_value: 'The LOURE, France',
  property5: 'Features',
  property5_value: 'Traingular Structure*',
  vnum:'G10',
  type: 'murthi'
}

image_array2[82] = {
  property1: 'Creation',
  property1_value: 'Nefartiti',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt (Amarna)',
  property3: 'Composition',
  property3_value: 'Limestone',
  property4: 'Location',
  property4_value: 'Berlin Mueseum',
  property5: 'Features',
  property5_value: 'Naturalism*',
  vnum:'G10',
  type: 'murthi'
}

image_array2[83] = {
  property1: 'Creation',
  property1_value: 'Nefartiti',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt (Amarna)',
  property3: 'Composition',
  property3_value: 'Limestone',
  property4: 'Location',
  property4_value: 'Berlin Mueseum',
  property5: 'Features',
  property5_value: 'Naturalism*',
  vnum:'G10',
  type: 'murthi'
}

image_array2[84] = {
  property1: 'Creation',
  property1_value: 'Nefartiti',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt (Amarna)',
  property3: 'Composition',
  property3_value: 'Limestone',
  property4: 'Location',
  property4_value: 'Berlin Mueseum',
  property5: 'Features',
  property5_value: 'Naturalism*',
  vnum:'G10',
  type: 'murthi'
}

image_array2[85] = {
  property1: 'Creation',
  property1_value: 'Nefartiti',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt (Amarna)',
  property3: 'Composition',
  property3_value: 'Limestone',
  property4: 'Location',
  property4_value: 'Berlin Mueseum',
  property5: 'Features',
  property5_value: 'Naturalism*',
  vnum:'G10',
  type: 'murthi'
}

image_array2[86] = {
  property1: 'Creation',
  property1_value: 'Geese of Medium',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt (OLD)',
  property3: 'Features',
  property3_value: '2D, Naturalism',
  property4: 'Location',
  property4_value: 'Medium Hi Mastabha Cemetery*',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[87] = {
  property1: 'Creation',
  property1_value: 'Geese of Medium',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt',
  property3: 'Features',
  property3_value: '3D-ish, Naturalism',
  property4: 'Location',
  property4_value: 'Medium Hi Mastabha Cemetery*',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[88] = {
  property1: 'Creation',
  property1_value: 'Geese of Medium',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt (OLD)',
  property3: 'Features',
  property3_value: '2D, Naturalism',
  property4: 'Location',
  property4_value: 'Medium Hi Mastabha Cemetery*',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'painting'
}

image_array2[89] = {
  property1: 'Creation',
  property1_value: 'Kurulu Dadayama',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt',
  property3: 'Composition',
  property3_value: 'Limestone',
  property4: 'Location',
  property4_value: 'Nebamun Cemetery*, Theebes',
  property5: 'Features',
  property5_value: '3D-ish, Naturalism',
  vnum:'G10',
  type: 'painting'
}


image_array2[90] = {
  property1: 'Creation',
  property1_value: 'Venus De Melo',
  property2: 'Creator',
  property2_value: 'Alexandros',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'The Loure',
  vnum:'G10',
  type: 'statue'
}

image_array2[91] = {
  property1: 'Creation',
  property1_value: 'Venus De Melo',
  property2: 'Creator',
  property2_value: 'Alexandros',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'The Loure',
  vnum:'G10',
  type: 'statue'
}

image_array2[92] = {
  property1: 'Creation',
  property1_value: 'Venus De Melo',
  property2: 'Creator',
  property2_value: 'Alexandros',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'The Loure',
  vnum:'G10',
  type: 'statue'
}

image_array2[93] = {
  property1: 'Creation',
  property1_value: 'Kavapeththa Wisikaranna',
  property2: 'Creator',
  property2_value: 'Myran',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'British Mueseum',
  vnum:'G10',
  type: 'statue'
}

image_array2[94] = {
  property1: 'Creation',
  property1_value: 'Kavapeththa Wisikaranna',
  property2: 'Creator',
  property2_value: 'Myran',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'British Mueseum',
  vnum:'G10',
  type: 'statue'
}

image_array2[95] = {
  property1: 'Creation',
  property1_value: 'Kavapeththa Wisikaranna',
  property2: 'Creator',
  property2_value: 'Myran',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'British Mueseum',
  vnum:'G10',
  type: 'statue'
}

image_array2[96] = {
  property1: 'Creation',
  property1_value: 'Kavapeththa Wisikaranna',
  property2: 'Creator',
  property2_value: 'Myran',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'British Mueseum',
  vnum:'G10',
  type: 'statue'
}

image_array2[97] = {
  property1: 'Creation',
  property1_value: 'Hermes & Dioneses',
  property2: 'Creator',
  property2_value: 'Praxitels',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'Olympia Mueseum, Greece',
  vnum:'G10',
  type: 'statue'
}

image_array2[98] = {
  property1: 'Creation',
  property1_value: 'Hermes & Dioneses',
  property2: 'Creator',
  property2_value: 'Praxitels',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'Olympia Mueseum, Greece',
  vnum:'G10',
  type: 'statue'
}

image_array2[99] = {
  property1: 'Creation',
  property1_value: 'Hermes & Dioneses',
  property2: 'Creator',
  property2_value: 'Praxitels',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Location',
  property5_value: 'Olympia Mueseum, Greece',
  vnum:'G10',
  type: 'statue'
}

image_array2[100] = {
  property1: 'Creation',
  property1_value: 'Athena Partheon',
  property2: 'Creator',
  property2_value: 'Phidias',
  property3: 'Composition',
  property3_value: 'Gold, Wood, Elephant Tusk',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'statue'
}

image_array2[101] = {
  property1: 'Creation',
  property1_value: 'Athena Partheon',
  property2: 'Creator',
  property2_value: 'Phidias',
  property3: 'Composition',
  property3_value: 'Gold, Wood, Elephant Tusk',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'statue'
}

image_array2[102] = {
  property1: 'Creation',
  property1_value: 'Athena Partheon',
  property2: 'Creator',
  property2_value: 'Phidias',
  property3: 'Composition',
  property3_value: 'Gold, Wood, Elephant Tusk',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'statue'
}

image_array2[103] = {
  property1: 'Creation',
  property1_value: 'Lavakun',
  property2: 'Creator',
  property2_value: 'Unknown',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Helanistic',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'statue'
}

image_array2[104] = {
  property1: 'Creation',
  property1_value: 'Lavakun',
  property2: 'Creator',
  property2_value: 'Unknown',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Helanistic',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'statue'
}

image_array2[105] = {
  property1: 'Creation',
  property1_value: 'Lavakun',
  property2: 'Creator',
  property2_value: 'Unknown',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Helanistic',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'statue'
}

image_array2[106] = {
  property1: 'Creation',
  property1_value: 'Lavakun',
  property2: 'Creator',
  property2_value: 'Unknown',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Helanistic',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'statue'
}

image_array2[107] = {
  property1: 'Creation',
  property1_value: 'Lavakun',
  property2: 'Creator',
  property2_value: 'Unknown',
  property3: 'Composition',
  property3_value: 'Kirigaruda',
  property4: 'Era',
  property4_value: 'Helanistic',
  property5: '',
  property5_value: '',
  vnum:'G10',
  type: 'statue'
}

image_array2[108] = {
  property1: 'Creation',
  property1_value: 'Yakadulage Diyaniya',
  property2: 'Creator',
  property2_value: 'Mudalidu S. Amarasekara',
  property3: 'Colors',
  property3_value: 'Oil Paint, Warm, Chiaruscurro, 3D',
  property4: 'Style*',
  property4_value: 'Shasthraliya Yatharthawadi',
  property5: 'Location',
  property5_value: 'Jathika Kala Bhawana, Colombo',
  vnum:'G11',
  type: 'painting'
}

image_array2[109] = {
  property1: 'Creation',
  property1_value: 'Virakiyawa (Unemployed)',
  property2: 'Creator',
  property2_value: 'Mudalidu S. Amarasekara',
  property3: 'Colors',
  property3_value: 'Oil Paint, Chiaruscurro, 3D',
  property4: 'Style*',
  property4_value: 'Shasthraliya Yatharthawadi',
  property5: 'Location',
  property5_value: 'Jathika Kala Bhawana, Colombo',
  vnum:'G11',
  type: 'painting'
}

image_array2[110] = {
  property1: 'Creation',
  property1_value: 'Kumbalhala',
  property2: 'Creator',
  property2_value: 'Stanley Abesinghe',
  property3: 'Colors',
  property3_value: 'No Perspective, 3D by Color',
  property4: 'Style*',
  property4_value: 'Nuthanawadi',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[111] = {
  property1: 'Creation',
  property1_value: 'Esala Perahara',
  property2: 'Creator',
  property2_value: 'Stanley Abesinghe',
  property3: 'Colors',
  property3_value: 'No Perspective, 3D by Color, Visangatha Colors',
  property4: 'Style*',
  property4_value: 'Nuthanawadi',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[112] = {
  property1: 'Creation',
  property1_value: 'Ulu Poranuwa',
  property2: 'Creator',
  property2_value: 'G.S.Fernando',
  property3: 'Colors',
  property3_value: 'Canvas & WaterColor',
  property4: 'Style*',
  property4_value: 'European Naturalism',
  property5: 'Location',
  property5_value: 'Jathika Kala Bhawana, Colombo',
  vnum:'G11',
  type: 'painting'
}

image_array2[113] = {
  property1: 'Creation',
  property1_value: 'Gadoladeniya',
  property2: 'Creator',
  property2_value: 'G.S.Fernando',
  property3: 'Colors',
  property3_value: 'Canvas & WaterColor, 3D',
  property4: 'Style*',
  property4_value: 'European Naturalism',
  property5: 'Location',
  property5_value: 'Jathika Kala Bhawana, Colombo',
  vnum:'G11',
  type: 'painting'
}

image_array2[114] = {
  property1: 'Creation',
  property1_value: 'Kiyawana Lamaya',
  property2: 'Creator',
  property2_value: 'K. Kanaka Sabhapathi',
  property3: 'Colors',
  property3_value: 'Canvas & Oil Paint, 3D By Lines & Color',
  property4: 'Style*',
  property4_value: 'Shailigatha & Ganikawadi',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[115] = {
  property1: 'Creation',
  property1_value: 'Kukul Poraya',
  property2: 'Creator',
  property2_value: 'K. Kanaka Sabhapathi',
  property3: 'Colors',
  property3_value: 'Canvas & Oil Paint, 2D By Lines & Color',
  property4: 'Style*',
  property4_value: 'Ganikawadi',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[116] = {
  property1: 'Creation',
  property1_value: 'Sakunthala',
  property2: 'Creator',
  property2_value: 'A. Mark',
  property3: 'Colors',
  property3_value: 'Pastel, 3D by THICC lines',
  property4: 'Style*',
  property4_value: 'Ganikawadi',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[117] = {
  property1: 'Creation',
  property1_value: 'Minisa & Ballan',
  property2: 'Creator',
  property2_value: 'A. Mark',
  property3: 'Composition',
  property3_value: 'Bronze',
  property4: 'Style*',
  property4_value: 'Ganikawadi',
  property5: 'Inspiration',
  property5_value: 'Henry Moover',
  vnum:'G11',
  type: 'murthi'
}

image_array2[118] = {
  property1: 'Creation',
  property1_value: 'Dushkara Kriyawa',
  property2: 'Creator',
  property2_value: 'Thissa Ranasinghe',
  property3: 'Shape, Shilpaya*',
  property3_value: 'Semi-Abstract, Waththu weda',
  property4: 'Style*',
  property4_value: 'Naturalism',
  property5: 'Composition',
  property5_value: 'Bronze',
  vnum:'G11',
  type: 'murthi'
}

image_array2[119] = {
  property1: 'Location',
  property1_value: 'New Theatre, Royal College Colombo',
  property2: 'Creator',
  property2_value: 'Thissa Ranasinghe',
  property3: 'Inspiration',
  property3_value: 'Sri Lankan Natya Kala',
  property4: 'Style*',
  property4_value: 'Ganikawadi',
  property5: 'Medium',
  property5_value: 'Teracotta',
  vnum:'G11',
  type: 'painting'
}

image_array2[120] = {
  property1: 'Name',
  property1_value: 'Sandapaya',
  property2: 'Creator',
  property2_value: 'H. A. Karunarathne',
  property3: 'Style',
  property3_value: 'American Abstraction',
  property4: 'Inspiration',
  property4_value: 'American Arts',
  property5: 'Medium',
  property5_value: 'Canvas & Oil Paint',
  vnum:'G11',
  type: 'painting'
}

image_array2[121] = {
  property1: 'Name',
  property1_value: 'Untitiled',
  property2: 'Creator',
  property2_value: 'H. A. Karunarathne',
  property3: 'Style',
  property3_value: 'Eklas Kirime Shilpaya',
  property4: 'Expression',
  property4_value: 'Simplicity & Complex(ity)',
  property5: 'Material',
  property5_value: 'Waste: Wires, Nails',
  vnum:'G11',
  type: 'murthi'
}

image_array2[122] = {
  property1: 'Significance',
  property1_value: 'Founder* of Sri Lankan Comic Art',
  property2: 'Creator',
  property2_value: 'Obri Colat',
  property3: 'Team',
  property3_value: '43',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[123] = {
  property1: 'Creation*',
  property1_value: 'Appuhami',
  property2: 'Creator',
  property2_value: 'Jeffry Yunus',
  property3: 'Newspaper',
  property3_value: 'The Times of Ceylon',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[124] = {
  property1: 'Creation*',
  property1_value: 'Gajaman',
  property2: 'Creator',
  property2_value: 'Camilas Perera',
  property3: 'Other Creations',
  property3_value: 'Siribiris, Magodisthuma, Pato',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[125] = {
  property1: 'Newspapers',
  property1_value: 'BLITZ, CONCH',
  property2: 'Creator',
  property2_value: 'C. Sivagnanasundaram',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[126] = {
  property1: 'Creator',
  property1_value: 'Sumana Dissanayake',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[127] = {
  property1: 'Creator',
  property1_value: 'Sumana Dissanayake',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[128] = {
  property1: 'Creator',
  property1_value: 'Vythisawaram Subramuniyam',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[129] = {
  property1: 'Creator',
  property1_value: 'Vythisawaram Subramuniyam',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[130] = {
  property1: 'Creator',
  property1_value: 'Vythisawaram Subramuniyam',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[131] = {
  property1: 'Creator',
  property1_value: 'Vythisawaram Subramuniyam',
  property2: '',
  property2_value: '',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[132] = {
  property1: 'Creator',
  property1_value: 'Pablo Picasso',
  property2: 'Name',
  property2_value: 'Avignonhi Yuwathiyo',
  property3: 'Style',
  property3_value: 'Shasthraliya Yatharthawadi',
  property4: 'Colors',
  property4_value: '3D By Color and Lines',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[133] = {
  property1: 'Creator',
  property1_value: 'Pablo Picasso',
  property2: 'Name',
  property2_value: 'Guvarnika',
  property3: 'Style',
  property3_value: 'Ganikawadi',
  property4: 'Material',
  property4_value: 'Canvas & Oil Paint',
  property5: 'Location',
  property5_value: 'A Madrid Mueseum',
  vnum:'G11',
  type: 'painting'
}

image_array2[134] = {
  property1: 'Creator',
  property1_value: 'Henry Muwar',
  property2: 'Name',
  property2_value: 'Raja Pawula',
  property3: 'Style',
  property3_value: 'Waaththu Kirima',
  property4: 'Material',
  property4_value: 'Bronze',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'murthi'
}

image_array2[135] = {
  property1: 'Creator',
  property1_value: 'Henry Muwar',
  property2: 'Name',
  property2_value: 'Reclining Figure',
  property3: 'Shapes',
  property3_value: 'Simple',
  property4: 'Material',
  property4_value: 'Bronze',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'murthi'
}

image_array2[136] = {
  property1: 'Creator',
  property1_value: 'I Kashyapa',
  property2: 'Name',
  property2_value: 'Sigiriya',
  property3: 'Era',
  property3_value: 'Anuradhapaura',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[137] = {
  property1: 'Creator',
  property1_value: 'I Kashyapa',
  property2: 'Name',
  property2_value: 'Sigiriya',
  property3: 'Era',
  property3_value: 'Anuradhapaura',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[138] = {
  property1: 'Creator',
  property1_value: 'I Kashyapa',
  property2: 'Name',
  property2_value: 'Sigiriya',
  property3: 'Era',
  property3_value: 'Anuradhapaura',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[139] = {
  property1: 'Creator',
  property1_value: 'I Kashyapa',
  property2: 'Name',
  property2_value: 'Sigiriya',
  property3: 'Era',
  property3_value: 'Anuradhapaura',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[140] = {
  property1: 'Creator',
  property1_value: 'I Kashyapa',
  property2: 'Location',
  property2_value: 'Sigiriya',
  property3: 'Era',
  property3_value: 'Anuradhapaura',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[141] = {
  property1: 'Location',
  property1_value: 'Sigiriya',
  property2: 'Era',
  property2_value: 'Anuradhapaura',
  property3: 'Special Features',
  property3_value: 'Depics only the Top Half',
  property4: 'Extra*',
  property4_value: 'Jewlery, Clouds',
  property5: 'Colors',
  property5_value: 'Red, Yellow, Brown, Green, Black',
  vnum:'G11',
  type: 'painting'
}

image_array2[142] = {
  property1: 'Location',
  property1_value: 'Sigiriya',
  property2: 'Era',
  property2_value: 'Anuradhapaura',
  property3: 'Special Features',
  property3_value: 'Depics only the Top Half',
  property4: 'Extra*',
  property4_value: 'Jewlery, Clouds',
  property5: 'Colors',
  property5_value: 'Red, Yellow, Brown, Green, Black',
  vnum:'G11',
  type: 'painting'
}

image_array2[143] = {
  property1: 'Location',
  property1_value: 'Sigiriya',
  property2: 'Era',
  property2_value: 'Anuradhapaura',
  property3: 'Special Features',
  property3_value: 'Depics only the Top Half',
  property4: 'Extra*',
  property4_value: 'Jewlery, Clouds',
  property5: 'Colors',
  property5_value: 'Red, Yellow, Brown, Green, Black',
  vnum:'G11',
  type: 'painting'
}

image_array2[144] = {
  property1: 'Location',
  property1_value: 'Sigiriya',
  property2: 'Era',
  property2_value: 'Anuradhapaura',
  property3: 'Special Features',
  property3_value: 'Depics only the Top Half',
  property4: 'Extra*',
  property4_value: 'Jewlery, Clouds',
  property5: 'Colors',
  property5_value: 'Red, Yellow, Brown, Green, Black',
  vnum:'G11',
  type: 'painting'
}

image_array2[145] = {
  property1: 'Location',
  property1_value: 'Sigiriya',
  property2: 'Era',
  property2_value: 'Anuradhapaura',
  property3: 'Special Features',
  property3_value: 'Depics only the Top Half',
  property4: 'Extra*',
  property4_value: 'Jewlery, Clouds',
  property5: 'Colors',
  property5_value: 'Red, Yellow, Brown, Green, Black',
  vnum:'G11',
  type: 'painting'
}

image_array2[146] = {
  property1: 'Location',
  property1_value: 'Sigiriya',
  property2: 'Era',
  property2_value: 'Anuradhapaura',
  property3: 'Special Features',
  property3_value: 'Depics only the Top Half',
  property4: 'Extra*',
  property4_value: 'Jewlery, Clouds',
  property5: 'Colors',
  property5_value: 'Red, Yellow, Brown, Green, Black',
  vnum:'G11',
  type: 'painting'
}

image_array2[147] = {
  property1: 'Location',
  property1_value: 'Sigiriya',
  property2: 'Era',
  property2_value: 'Anuradhapaura',
  property3: 'Special Features',
  property3_value: 'Depics only the Top Half',
  property4: 'Extra*',
  property4_value: 'Jewlery, Clouds',
  property5: 'Colors',
  property5_value: 'Red, Yellow, Brown, Green, Black',
  vnum:'G11',
  type: 'painting'
}

image_array2[148] = {
  property1: 'Location',
  property1_value: 'Sigiriya',
  property2: 'Era',
  property2_value: 'Anuradhapaura',
  property3: 'Special Features',
  property3_value: 'Depics only the Top Half',
  property4: 'Extra*',
  property4_value: 'Jewlery, Clouds',
  property5: 'Colors',
  property5_value: 'Red, Yellow, Brown, Green, Black',
  vnum:'G11',
  type: 'painting'
}

image_array2[149] = {
  property1: 'Location',
  property1_value: 'Sigiriya',
  property2: 'Era',
  property2_value: 'Anuradhapaura',
  property3: 'Special Features',
  property3_value: 'Depics only the Top Half',
  property4: 'Extra*',
  property4_value: 'Jewlery, Clouds',
  property5: 'Colors',
  property5_value: 'Red, Yellow, Brown, Green, Black',
  vnum:'G11',
  type: 'painting'
}

image_array2[150] = {
  property1: 'Location',
  property1_value: 'Abhyagiri Vihara Complex',
  property2: 'Name',
  property2_value: 'Samadhi Budu Pilimaya',
  property3: 'Expression',
  property3_value: 'Aadhyathmika Gunaya & Samadhiya',
  property4: 'Shilpa Kramaya*',
  property4_value: 'Nelima',
  property5: 'Kala Lakshana*',
  property5_value: 'Indian Guptan',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[151] = {
  property1: 'Location',
  property1_value: 'Abhyagiri Vihara Complex',
  property2: 'Name',
  property2_value: 'Samadhi Budu Pilimaya',
  property3: 'Expression',
  property3_value: 'Aadhyathmika Gunaya & Samadhiya',
  property4: 'Shilpa Kramaya*',
  property4_value: 'Nelima',
  property5: 'Kala Lakshana*',
  property5_value: 'Indian Guptan',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[152] = {
  property1: 'Location',
  property1_value: 'Abhyagiri Vihara Complex',
  property2: 'Name',
  property2_value: 'Samadhi Budu Pilimaya',
  property3: 'Expression',
  property3_value: 'Aadhyathmika Gunaya & Samadhiya',
  property4: 'Shilpa Kramaya*',
  property4_value: 'Nelima',
  property5: 'Kala Lakshana*',
  property5_value: 'Indian Guptan',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[153] = {
  property1: 'Current Location',
  property1_value: 'Colmbo Mueseum',
  property2: 'Name',
  property2_value: 'Tholuwila Budu Pilimaya',
  property3: 'Mudra & Asana Kramaya*',
  property3_value: 'Dhyana Mudra & Virasana',
  property4: 'Shilpa Kramaya*',
  property4_value: 'Nelima',
  property5: 'Kala Lakshana*',
  property5_value: 'Indian Guptan',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[154] = {
  property1: 'Era',
  property1_value: 'Anuradhapura',
  property2: 'Name',
  property2_value: 'Awukkana Pilimaya',
  property3: 'Asana Kramaya*',
  property3_value: 'Padmasana',
  property4: 'Posture*',
  property4_value: '"Samabhanga"',
  property5: 'Mudra (Right hand)',
  property5_value: 'Abhaya',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[155] = {
  property1: 'Era',
  property1_value: 'Anuradhapura',
  property2: 'Name',
  property2_value: 'Awukkana Pilimaya',
  property3: 'Asana Kramaya*',
  property3_value: 'Padmasana',
  property4: 'Posture*',
  property4_value: '"Samabhanga"',
  property5: 'Mudra (Right hand)',
  property5_value: 'Abhaya',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[156] = {
  property1: 'Location',
  property1_value: 'Anuradhapura (Ashokaramaya)',
  property2: 'Name',
  property2_value: 'Pankuliya Budu Pilimaya',
  property3: 'Asana Kramaya*',
  property3_value: 'Virasana',
  property4: 'Expression',
  property4_value: 'Maha Karunawa & Aadhyathmika Guna',
  property5: 'Mudra',
  property5_value: 'L: Kataka Hastha, R: Vitharka',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[157] = {
  property1: 'Location',
  property1_value: 'Anuradhapura (Ashokaramaya)',
  property2: 'Name',
  property2_value: 'Pankuliya Budu Pilimaya',
  property3: 'Asana Kramaya*',
  property3_value: 'Virasana',
  property4: 'Expression',
  property4_value: 'Maha Karunawa & Aadhyathmika Guna',
  property5: 'Mudra',
  property5_value: 'L: Kataka Hastha, R: Vitharka',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[158] = {
  property1: 'Era',
  property1_value: 'Anuradhapura',
  property2: 'Name',
  property2_value: 'Isurumini Viharaya',
  property3: 'Creator',
  property3_value: 'King Devanampiyathissa',
  property4: 'Created FOR',
  property4_value: 'Prince Aritta & 500 Isuru Kula Children',
  property5: 'Ketayam Nelim Krama*',
  property5_value: '"Ardha Unnatha" & "Alpa Unnatha"',
  vnum:'G11',
  type: 'building'
}

image_array2[159] = {
  property1: 'Location',
  property1_value: 'Isurumini Viharaya',
  property2: 'Name',
  property2_value: 'Raja Pawula Inscription',
  property3: 'Nimawa*',
  property3_value: 'Siyum & "Mata-Silutu"',
  property4: 'Depicts',
  property4_value: 'Dutugemunu Family [Senerath Paranawithana]',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'ketayam'
}

image_array2[159] = {
  property1: 'Location',
  property1_value: 'Isurumini Viharaya',
  property2: 'Name',
  property2_value: 'Raja Pawula Inscription',
  property3: 'Nimawa*',
  property3_value: 'Siyum & "Mata-Silutu"',
  property4: 'Depicts',
  property4_value: 'Dutugemunu Family [Senerath Paranawithana]',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'ketayam'
}

image_array2[160] = {
  property1: 'Location',
  property1_value: 'Isurumini Viharaya',
  property2: 'Name',
  property2_value: 'Pem Yuwala Inscription',
  property3: 'Nimawa*',
  property3_value: 'Siyum & "Mata-Silutu"',
  property4: 'Depicts',
  property4_value: 'Saliya & Ashokamala [Senerath Paranawithana]',
  property5: 'Kala Lakshana & Shilpa Kramya',
  property5_value: 'Guptan & "Ardha-unnatha"',
  vnum:'G11',
  type: 'ketayam'
}

image_array2[161] = {
  property1: 'Location',
  property1_value: 'Isurumini Viharaya',
  property2: 'Name',
  property2_value: 'Minisa & Ashwahisa Katayama',
  property3: 'Nimawa* & Kala Lakshana',
  property3_value: 'Siyum, Mata-Silutu & Gupta',
  property4: 'Depicts',
  property4_value: 'Human: God of Rain, Horse: Current/Fire [Senerath Paranawithana]',
  property5: 'Speical name for the man`s posture',
  property5_value: 'Maharaja Lilasana',
  vnum:'G11',
  type: 'ketayam'
}

image_array2[162] = {
  property1: 'Location',
  property1_value: 'Isurumini Viharaya',
  property2: 'Name',
  property2_value: 'Jala krida karana Vilasa*',
  property3: 'Nimawa*',
  property3_value: 'Siyum & "Mata-Silutu"',
  property4: 'Rupa* Swabhawaya',
  property4_value: 'Paarshawadarshi & Rujudarshi',
  property5: 'Shilpa Kramya',
  property5_value: 'Alpa-unnatha',
  vnum:'G11',
  type: 'ketayam'
}

image_array2[163] = {
  property1: 'Location',
  property1_value: 'Isurumini Viharaya',
  property2: 'Name',
  property2_value: 'Jala krida karana Vilasa*',
  property3: 'Nimawa*',
  property3_value: 'Siyum & "Mata-Silutu"',
  property4: 'Rupa* Swabhawaya',
  property4_value: 'Paarshawadarshi & Rujudarshi',
  property5: 'Shilpa Kramya',
  property5_value: 'Alpa-unnatha',
  vnum:'G11',
  type: 'ketayam'
}

image_array2[164] = {
  property1: 'Location',
  property1_value: 'Thiwanka Pilimageya',
  property2: 'Name',
  property2_value: 'Dewaradhanawa',
  property3: 'Relative Location',
  property3_value: 'Antharalaya',
  property4: 'Colors',
  property4_value: 'Red, Brown, Yellow',
  property5: 'Depicts',
  property5_value: 'Thawthisa Dewlova Visu Deviyan Bosathanunta kara Aradhanaya',
  vnum:'G11',
  type: 'painting'
}

image_array2[165] = {
  property1: 'Location',
  property1_value: 'Thiwanka Pilimageya',
  property2: 'Name',
  property2_value: 'Budun Sankassapurayata Wedima',
  property3: 'Relative Location',
  property3_value: 'Garbha Gruhaya',
  property4: 'Colors',
  property4_value: 'Red, Brown, Yellow',
  property5: 'Kala Lakshana (Era)',
  property5_value: 'Anuradhapura',
  vnum:'G11',
  type: 'painting'
}

image_array2[166] = {
  property1: 'Location',
  property1_value: 'Thiwanka Pilimageya',
  property2: 'Name',
  property2_value: 'Budun Sankassapurayata Wedima',
  property3: 'Relative Location',
  property3_value: 'Garbha Gruhaya',
  property4: 'Colors',
  property4_value: 'Red, Brown, Yellow',
  property5: 'Kala Lakshana (Era)',
  property5_value: 'Anuradhapura',
  vnum:'G11',
  type: 'painting'
}

image_array2[167] = {
  property1: 'Location',
  property1_value: 'Thiwanka Pilimageya',
  property2: 'Name',
  property2_value: 'Themiya Jathakaya',
  property3: 'Relative Location',
  property3_value: 'Mandapaya',
  property4: 'Colors',
  property4_value: 'Red, Brown, Yellow',
  property5: 'Kala Lakshana (Era)',
  property5_value: 'Kandyan (Akhandakathanaya, Parshawadarshi)',
  vnum:'G11',
  type: 'painting'
}

image_array2[168] = {
  property1: 'Location',
  property1_value: 'Galvihara Puja Bhumiya',
  property2: 'Name',
  property2_value: 'Samadhi Buddha Prathimawa',
  property3: 'Asana Kramaya & Mudra',
  property3_value: 'Virasana & Dhyana Mudra',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Nimawa*',
  property5_value: 'Mata-Silutu',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[169] = {
  property1: 'Location',
  property1_value: 'Galvihara Puja Bhumiya',
  property2: 'Name',
  property2_value: 'Samadhi Buddha Prathimawa',
  property3: 'Asana Kramaya & Mudra',
  property3_value: 'Virasana & Dhyana Mudra',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Nimawa*',
  property5_value: 'Mata-Silutu',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[170] = {
  property1: 'Location',
  property1_value: 'Vidhyadhara Cave',
  property2: 'Significance of the Cave',
  property2_value: 'Abhyantharata Kapa Sakas Kala Palamu Vishala Gal Guhawa',
  property3: 'Asana Kramaya & Mudra',
  property3_value: 'Virasana & Dhyana Mudra',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Shirsha Lakshana*',
  property5_value: 'Lambasawan Ha Akbamaru Keshakalapaya Matha Ushnisha Shirsha Lakshana',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[171] = {
  property1: 'Significance*',
  property1_value: 'Ekansha Chiwaraya showed by Double Lines*',
  property2: 'Name',
  property2_value: 'Hiti Pilimaya',
  property3: 'Asana Kramaya & Mudra',
  property3_value: 'Padmasana & Paradukkhadukhkitha Mudra',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Shirsha Lakshana*',
  property5_value: 'Lambasawan Ha Akbamaru Keshakalapaya Matha Ushnisha Shirsha Lakshana',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[172] = {
  property1: 'Significance*',
  property1_value: 'Ekansha Chiwaraya showed by Double Lines*',
  property2: 'Name',
  property2_value: 'Hiti Pilimaya',
  property3: 'Asana Kramaya & Mudra',
  property3_value: 'Padmasana & Paradukkhadukhkitha Mudra',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Shirsha Lakshana*',
  property5_value: 'Lambasawan Ha Akbamaru Keshakalapaya Matha Ushnisha Shirsha Lakshana',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[173] = {
  property1: 'Location',
  property1_value: 'Gal Viharaya (South)',
  property2: 'Name',
  property2_value: 'Sethapena Buddha Prathimawa',
  property3: 'Specialty*',
  property3_value: 'Shirshaya Sahitha Kotasa Kottaye Ebi Thibena Akaraya',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Old Ideology on the sculpture',
  property5_value: 'Piriniwan Manchakaya',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[174] = {
  property1: 'Location',
  property1_value: 'Gal Viharaya (South)',
  property2: 'Name',
  property2_value: 'Sethapena Buddha Prathimawa',
  property3: 'Specialty*',
  property3_value: 'Shirshaya Sahitha Kotasa Kottaye Ebi Thibena Akaraya',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Old Ideology on the sculpture',
  property5_value: 'Piriniwan Manchakaya',
  vnum:'G11',
  type: 'budupilimaya'
}

image_array2[175] = {
  property1: 'Location',
  property1_value: 'Pothgul Viharaya (Vijjudhara)',
  property2: 'Expression',
  property2_value: 'Ridmayanukula, Maheshakya, Rajyathwaya*',
  property3: 'Kala Lakshana*',
  property3_value: 'Polonnaru Murthi Shilpaya / Prabudhdha Kala',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Depicts*',
  property5_value: 'King Parakramabhu / Gurulugomi / Kapila Rishiwaraya',
  vnum:'G11',
  type: 'statue'
}

image_array2[176] = {
  property1: 'Location',
  property1_value: 'Pothgul Viharaya (Vijjudhara)',
  property2: 'Expression',
  property2_value: 'Ridmayanukula, Maheshakya, Rajyathwaya*',
  property3: 'Kala Lakshana*',
  property3_value: 'Polonnaru Murthi Shilpaya / Prabudhdha Kala',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Depicts*',
  property5_value: 'King Parakramabhu / Gurulugomi / Kapila Rishiwaraya',
  vnum:'G11',
  type: 'statue'
}

image_array2[177] = {
  property1: 'Location',
  property1_value: 'Pothgul Viharaya (Vijjudhara)',
  property2: 'Expression',
  property2_value: 'Ridmayanukula, Maheshakya, Rajyathwaya*',
  property3: 'Kala Lakshana*',
  property3_value: 'Polonnaru Murthi Shilpaya / Prabudhdha Kala',
  property4: 'Shilpa Kramaya',
  property4_value: 'Adhi-Unnatha',
  property5: 'Depicts*',
  property5_value: 'King Parakramabhu / Gurulugomi / Kapila Rishiwaraya',
  vnum:'G11',
  type: 'statue'
}

image_array2[178] = {
  property1: 'Current Location',
  property1_value: 'Jathika Kalabhawana, Colombo',
  property2: 'Name',
  property2_value: 'Nataraja Murthiya',
  property3: 'Composition',
  property3_value: 'Bronze',
  property4: 'Found (location)',
  property4_value: 'Polonnaruwa, Shiwa Devalaya #1',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'murthi'
}

image_array2[179] = {
  property1: 'Depicts',
  property1_value: 'Paththini',
  property2: 'Name',
  property2_value: 'Shiwakama Sundari Prathimawa',
  property3: 'Composition',
  property3_value: 'Bronze',
  property4: 'Found (location)',
  property4_value: 'Polonnaruwa, Shiwa Devalaya #5',
  property5: 'Mudra',
  property5_value: 'L:Loha Hastha, R:Kataka Hastha',
  vnum:'G11',
  type: 'murthi'
}

image_array2[180] = {
  property1: 'Depicts',
  property1_value: 'Shiwa`s elder son, Ganadewi',
  property2: 'Name',
  property2_value: 'Ganadewi Prathimawa',
  property3: 'Composition',
  property3_value: 'Bronze',
  property4: 'Found (location)',
  property4_value: 'Polonnaruwa, Shiwa Devalaya #5',
  property5: 'Asana Kramya',
  property5_value: 'Padmasana + Rajasana Lilawa',
  vnum:'G11',
  type: 'murthi'
}

image_array2[181] = {
  property1: 'Name',
  property1_value: 'Karykkal Ammayyar Murthiya',
  property2: 'Current Location',
  property2_value: 'Polonnaru Meuseum',
  property3: 'Kala Lakshana',
  property3_value: 'Sri Lankan Hinduism',
  property4: 'Found (location)',
  property4_value: 'Polonnaruwa, Shiwa Devalaya #5',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'murthi'
}

image_array2[182] = {
  property1: 'Name',
  property1_value: 'Sundaramurthiswami Murthiya',
  property2: 'Current Location',
  property2_value: 'Colombo National Meuseum',
  property3: 'Composition',
  property3_value: 'Bronze',
  property4: 'Found (location)',
  property4_value: 'Polonnaruwa, Shiwa Devalaya #5',
  property5: 'Lakshana',
  property5_value: 'Youth, Kadawasam, Lailthya, Thribanga Posture*',
  vnum:'G11',
  type: 'murthi'
}

image_array2[183] = {
  property1: 'Name',
  property1_value: 'Sundaramurthiswami Murthiya',
  property2: 'Current Location',
  property2_value: 'Colombo National Meuseum',
  property3: 'Composition',
  property3_value: 'Bronze',
  property4: 'Found (location)',
  property4_value: 'Polonnaruwa, Shiwa Devalaya #5',
  property5: 'Lakshana',
  property5_value: 'Youth, Kadawasam, Lailthya, Thribanga Posture*',
  vnum:'G11',
  type: 'murthi'
}

image_array2[184] = {
  property1: 'Creation*',
  property1_value: 'Nishshanka Latha Mandapaya',
  property2: 'Creator',
  property2_value: 'THIS IS OBVIOUS BRUH.',
  property3: 'Center Stupa',
  property3_value: 'Bubulakara',
  property4: 'Special Feature',
  property4_value: 'Alankara Pillar Creation*',
  property5: 'Purpose*',
  property5_value: 'Dharmaya Shrawanaya Kirima, Dalada Vahanse Pidima, Pirith Shrawanaya',
  vnum:'G11',
  type: 'building'
}

image_array2[185] = {
  property1: 'Creation*',
  property1_value: 'Nishshanka Latha Mandapaya',
  property2: 'Creator',
  property2_value: 'THIS IS OBVIOUS BRUH.',
  property3: 'Center Stupa',
  property3_value: 'Bubulakara',
  property4: 'Special Feature',
  property4_value: 'Alankara Pillar Creation*',
  property5: 'Purpose*',
  property5_value: 'Dharmaya Shrawanaya Kirima, Dalada Vahanse Pidima, Pirith Shrawanaya',
  vnum:'G11',
  type: 'building'
}

image_array2[186] = {
  property1: 'Creation*',
  property1_value: 'Nishshanka Latha Mandapaya',
  property2: 'Creator',
  property2_value: 'THIS IS OBVIOUS BRUH.',
  property3: 'Center Stupa',
  property3_value: 'Bubulakara',
  property4: 'Special Feature',
  property4_value: 'Alankara Pillar Creation*',
  property5: 'Purpose*',
  property5_value: 'Dharmaya Shrawanaya Kirima, Dalada Vahanse Pidima, Pirith Shrawanaya',
  vnum:'G11',
  type: 'building'
}

image_array2[187] = {
  property1: 'Creation*',
  property1_value: 'Polonnaru Watadage',
  property2: 'Creator',
  property2_value: 'King Nishshankamalla / King Parakramabahu',
  property3: 'Significance',
  property3_value: 'Polonnaruwa`s best Moonstone and Naga Raja sahitha Muragala',
  property4: 'Budu Pilima',
  property4_value: '4x Dhyana Mudra & Reli Rahitha Chiwara',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[188] = {
  property1: 'Creation*',
  property1_value: 'Polonnaru Watadage',
  property2: 'Creator',
  property2_value: 'King Nishshankamalla / King Parakramabahu',
  property3: 'Significance',
  property3_value: 'Polonnaruwa`s best Moonstone and Naga Raja sahitha Muragala',
  property4: 'Budu Pilima',
  property4_value: '4x Dhyana Mudra & Reli Rahitha Chiwara',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[189] = {
  property1: 'Creation*',
  property1_value: 'Polonnaru Watadage',
  property2: 'Creator',
  property2_value: 'King Nishshankamalla / King Parakramabahu',
  property3: 'Significance',
  property3_value: 'Polonnaruwa`s best Moonstone and Naga Raja sahitha Muragala',
  property4: 'Budu Pilima',
  property4_value: '4x Dhyana Mudra & Reli Rahitha Chiwara',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[190] = {
  property1: 'Creation*',
  property1_value: 'Polonnaru Watadage',
  property2: 'Creator',
  property2_value: 'King Nishshankamalla / King Parakramabahu',
  property3: 'Significance',
  property3_value: 'Polonnaruwa`s best Moonstone and Naga Raja sahitha Muragala',
  property4: 'Budu Pilima',
  property4_value: '4x Dhyana Mudra & Reli Rahitha Chiwara',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[191] = {
  property1: 'Creation*',
  property1_value: 'Polonnaru Watadage',
  property2: 'Creator',
  property2_value: 'King Nishshankamalla / King Parakramabahu',
  property3: 'Significance',
  property3_value: 'Polonnaruwa`s best Moonstone and Naga Raja sahitha Muragala',
  property4: 'Budu Pilima',
  property4_value: '4x Dhyana Mudra & Reli Rahitha Chiwara',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[192] = {
  property1: 'Creation*',
  property1_value: 'Shiwa Devalaya #1',
  property2: 'Kala Lakshana',
  property2_value: 'Pandya',
  property3: 'Gruha Nirmana Laksana',
  property3_value: 'Mandapa, Garbha Gruha, Aththarala',
  property4: 'Significance',
  property4_value: 'No cement* Engraved from Stone',
  property5: 'Shikaraya',
  property5_value: 'Made of Bricks',
  vnum:'G11',
  type: 'building'
}

image_array2[193] = {
  property1: 'Creation*',
  property1_value: 'Shiwa Devalaya #1',
  property2: 'Kala Lakshana',
  property2_value: 'Pandya',
  property3: 'Gruha Nirmana Laksana',
  property3_value: 'Mandapa, Garbha Gruha, Aththarala',
  property4: 'Significance',
  property4_value: 'No cement* Engraved from Stone',
  property5: 'Shikaraya',
  property5_value: 'Made of Bricks',
  vnum:'G11',
  type: 'building'
}

image_array2[194] = {
  property1: 'Creation*',
  property1_value: 'Shiwa Devalaya #1',
  property2: 'Kala Lakshana',
  property2_value: 'Pandya',
  property3: 'Gruha Nirmana Laksana',
  property3_value: 'Mandapa, Garbha Gruha, Aththarala',
  property4: 'Significance',
  property4_value: 'No cement* Engraved from Stone',
  property5: 'Shikaraya',
  property5_value: 'Made of Bricks',
  vnum:'G11',
  type: 'building'
}

image_array2[195] = {
  property1: 'Creation*',
  property1_value: 'Shiwa Devalaya #2',
  property2: 'Nirmana Lakshana',
  property2_value: 'South Indian (Chola)',
  property3: 'Gruha Nirmana Laksana',
  property3_value: 'Mandapa, Garbha Gruha, Aththarala',
  property4: 'Significance',
  property4_value: 'Oldest Shiwa Devalaya in Polonnaruwa',
  property5: 'Garbha Gruhaya',
  property5_value: 'Stone Shiwa Linga',
  vnum:'G11',
  type: 'building'
}

image_array2[196] = {
  property1: 'Name',
  property1_value: 'Mahadhana Situwarayage Kathawa & Vinoda weema',
  property2: 'Location',
  property2_value: 'Kathaluwa Viharaya',
  property3: 'Features / Inspiration',
  property3_value: 'European',
  property4: 'Colors',
  property4_value: 'Red, Yellow, Blue, Black',
  property5: 'Drawing*',
  property5_value: '3D by color*, Rekhakaranya, Presco Secco',
  vnum:'G11',
  type: 'painting'
}

image_array2[197] = {
  property1: 'Name',
  property1_value: 'Suthasoma Jathakaya Rajamedure Kanthawo',
  property2: 'Location',
  property2_value: 'Kathaluwa Viharaya',
  property3: 'Features / Inspiration',
  property3_value: 'Akhanda Kathanaya, Parshawadarshi',
  property4: 'Colors',
  property4_value: 'Red, Yellow, Blue, Black',
  property5: 'Drawing*',
  property5_value: '2D-ish, One Plane (ekama thalaya), Presco Secco',
  vnum:'G11',
  type: 'painting'
}

image_array2[198] = {
  property1: 'Name',
  property1_value: 'Pelambawima (Mara Duwaru)',
  property2: 'Location',
  property2_value: 'Karagampitiya Viharaya',
  property3: 'Features / Inspiration',
  property3_value: 'Pahatharata Chithra Kalawa',
  property4: 'Colors',
  property4_value: 'Red, Yellow, Blue, Black',
  property5: 'More Features*',
  property5_value: 'Akhanda Kathana Kramaya, Pahathi Rekha',
  vnum:'G11',
  type: 'painting'
}

image_array2[199] = {
  property1: 'Name',
  property1_value: 'Siduhath Upatha',
  property2: 'Location',
  property2_value: 'Karagampitiya Viharaya',
  property3: 'Features / Inspiration',
  property3_value: 'Pahatharata Chithra Kalawa',
  property4: 'Colors',
  property4_value: 'Red, Yellow, Green, Black',
  property5: 'More Features*',
  property5_value: 'Akhanda Kathana Kramaya, Pahathi Rekha',
  vnum:'G11',
  type: 'painting'
}

image_array2[200] = {
  property1: 'Creation',
  property1_value: 'Sanchi Stupaya',
  property2: 'Location & Creator',
  property2_value: 'India, Emperor Ashokha',
  property3: 'Features',
  property3_value: 'Bubbulakara, Galgaradhi Fence',
  property4: 'Harmikawa',
  property4_value: 'Stupaya Mudune Galgaradhi Wetakin yuth Hathares Kotuwa',
  property5: 'Yupaya / Yashtiya',
  property5_value: 'Harmikawa Muduna Ul wu atapattam selmuwa temba',
  vnum:'G11',
  type: 'building'
}

image_array2[201] = {
  property1: 'Location*',
  property1_value: 'Sanchi Stupaya',
  property2: 'Creation',
  property2_value: 'Sinha Rupa',
  property3: '',
  property3_value: '',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[202] = {
  property1: 'Location*',
  property1_value: 'Sanchi Stupaya',
  property2: 'Relative Location',
  property2_value: 'Uthuru Thorana',
  property3: 'Depicts',
  property3_value: 'Chadhdhanna Jathakaya',
  property4: 'Features',
  property4_value: 'Siyum, Matasilutu, Alpa-Unnatha',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'building'
}

image_array2[203] = {
  property1: 'Location*',
  property1_value: 'Sanchi Stupaya',
  property2: 'Creation',
  property2_value: 'Budun Sankassapurayata Wadama Kirima',
  property3: 'Relative Location',
  property3_value: 'Uthuru Thorana',
  property4: 'Humans',
  property4_value: 'Shailigatha Minis Rupa',
  property5: 'Features',
  property5_value: 'Siyum, Matasilutu, Alpa-Unnatha',
  vnum:'G11',
  type: 'building'
}

image_array2[204] = {
  property1: 'Name*',
  property1_value: 'Saranath Budu Pilimaya',
  property2: 'Kala Lakshana',
  property2_value: 'Gupta',
  property3: 'Asana Krama & Mudra',
  property3_value: 'Padmasana & Dhammachakka',
  property4: 'Depicts',
  property4_value: 'First Dharma Deshanawa (Varanasi Isipathanarama)',
  property5: 'Features',
  property5_value: 'Lambasawan, Fine-lined Chiwaraya, ',
  vnum:'G11',
  type: 'budu pilimaya'
}

image_array2[205] = {
  property1: 'Type',
  property1_value: 'Ajantha Paintings',
  property2: 'Sri Lankan Counterpart*',
  property2_value: 'Sigiri Apsarawan',
  property3: 'Method',
  property3_value: 'Presco Secco',
  property4: 'Wall Adaptation*',
  property4_value: 'Clay, Cow Dung, Dahaiyya, Hay, etc.',
  property5: 'Features',
  property5_value: 'Akhanda Kathanaya, Parimana Lakshana, Brown Lines',
  vnum:'G11',
  type: 'painting'
}

image_array2[206] = {
  property1: 'Type',
  property1_value: 'Ajantha Paintings',
  property2: 'Sri Lankan Counterpart*',
  property2_value: 'Sigiri Apsarawan',
  property3: 'Method',
  property3_value: 'Presco Secco',
  property4: 'Wall Adaptation*',
  property4_value: 'Clay, Cow Dung, Dahaiyya, Hay, etc.',
  property5: 'Features',
  property5_value: 'Akhanda Kathanaya, Parimana Lakshana, Brown Lines',
  vnum:'G11',
  type: 'painting'
}

image_array2[207] = {
  property1: 'Name',
  property1_value: 'Padmapathi Bodhisathwa Ruwa',
  property2: 'Location',
  property2_value: 'Ajantha, Cave #1',
  property3: 'Depicts',
  property3_value: 'Prince Siduhath & Yashodhara',
  property4: 'Wall Adaptation*',
  property4_value: 'Clay, Cow Dung, Dahaiyya, Hay, etc.',
  property5: 'Features',
  property5_value: 'Gupta, Thribhanga Posture, Disproportionally Large Bodhisathwayan',
  vnum:'G11',
  type: 'painting'
}

image_array2[208] = {
  property1: 'Name',
  property1_value: 'Padmapathi Bodhisathwa Ruwa',
  property2: 'Location',
  property2_value: 'Ajantha, Cave #1',
  property3: 'Depicts',
  property3_value: 'Prince Siduhath & Yashodhara',
  property4: 'Wall Adaptation*',
  property4_value: 'Clay, Cow Dung, Dahaiyya, Hay, etc.',
  property5: 'Features',
  property5_value: 'Gupta, Thribhanga Posture, Disproportionally Large Bodhisathwayan',
  vnum:'G11',
  type: 'painting'
}

image_array2[209] = {
  property1: 'Name',
  property1_value: 'Budurajanan Wahanse Kimbulwathpurayata Wedama Kirima',
  property2: 'Location',
  property2_value: 'Ajantha, Cave #17',
  property3: 'Depicts',
  property3_value: 'Lord Buddha (Pidusinga wedima)',
  property4: 'Wall Adaptation*',
  property4_value: 'Clay, Cow Dung, Dahaiyya, Hay, etc.',
  property5: 'Features',
  property5_value: 'Gupta, Perspective, Disproportionally Large Bodhisathwayan',
  vnum:'G11',
  type: 'painting'
}

image_array2[210] = {
  property1: 'Creation',
  property1_value: 'Nike (from Athena Partheon)',
  property2: 'Creator',
  property2_value: 'Phidias',
  property3: 'Composition',
  property3_value: 'Gold, Wood, Elephant Tusk',
  property4: 'Era',
  property4_value: 'Greek Sambhawya',
  property5: 'Depicts',
  property5_value: 'God of Victory',
  vnum:'G10',
  type: 'statue'
}

image_array2[211] = {
  property1: 'Location*',
  property1_value: 'Sanchi Stupaya',
  property2: 'Creation',
  property2_value: 'Ath Rupa & Salabanjika Rupa',
  property3: 'Relative Location',
  property3_value: 'Thorana*',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'ketayam'
}

image_array2[212] = {
  property1: 'Location*',
  property1_value: 'Sanchi Stupaya',
  property2: 'Relative Location',
  property2_value: 'Uthuru Thorana',
  property3: 'Depicts',
  property3_value: 'Chadhdhanna Jathakaya',
  property4: 'Features',
  property4_value: 'Siyum, Matasilutu, Alpa-Unnatha',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'ketayam'
}

image_array2[213] = {
  property1: 'Character',
  property1_value: 'Punchi Singyo',
  property2: 'Creator',
  property2_value: 'W. R. Wijeysoma',
  property3: 'Newspapers',
  property3_value: 'The Times of Ceylon',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[214] = {
  property1: 'Character',
  property1_value: 'Punchi Singyo',
  property2: 'Creator',
  property2_value: 'W. R. Wijeysoma',
  property3: 'Newspapers',
  property3_value: 'The Times of Ceylon',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[215] = {
  property1: 'Creator',
  property1_value: 'Obri Colat',
  property2: 'Team',
  property2_value: '43',
  property3: 'Newspapers',
  property3_value: 'The Times of Ceylon',
  property4: '',
  property4_value: '',
  property5: '',
  property5_value: '',
  vnum:'G11',
  type: 'painting'
}

image_array2[216] = {
  property1: 'Creation',
  property1_value: 'Kurulu Dadayama',
  property2: 'Ancient Civilization',
  property2_value: 'Egypt',
  property3: 'Composition',
  property3_value: 'Limestone',
  property4: 'Location',
  property4_value: 'Nebamun Cemetery*, Theebes',
  property5: 'Features',
  property5_value: '3D-ish, Naturalism',
  vnum:'G10',
  type: 'painting'
}

updateArtPropertyVisibility(image_array2[1]);

const filtall = document.querySelector('#all');
const filtlak = document.querySelector('#lak');
const filthab = document.querySelector('#hab');
const filtreg = document.querySelector('#reg');
const filtoth = document.querySelector('#oth');
const filtcit = document.querySelector('#cit');
const filthis = document.querySelector('#pro');
const filtamu = document.querySelector('#amu');
const gamebtn = document.querySelector('#gmd');
const isWorldMapPage = window.location.pathname.toLowerCase()
  .replace(/\/+$/, '')
  .match(/\/worldmap(?:\.html)?$/) !== null;
let gamemodestatus;
let currentFilter = [];
let statFilter = 1;
let promptRandomLocation;

const setWorldMapFilter = (filter) => {
  if (!isWorldMapPage) return false;

  statFilter = filter;
  filtall?.classList.toggle('activex', filter === 1);
  filtcit?.classList.toggle('activex', filter === 2);
  filtlak?.classList.toggle('activex', filter === 3);
  gamemodestatus = false;
  void promptRandomLocation?.();
  return true;
};

if (filtall) filtall.classList.add('activex');

if (filtall) filtall.addEventListener('click', () => {
  if (setWorldMapFilter(1)) return;
  statFilter = 1;
  filtall.classList.add('activex');
  filtlak.classList.remove('activex');
  filthab.classList.remove('activex');
  filtreg.classList.remove('activex');
  filtoth.classList.remove('activex');
  filtcit.classList.remove('activex');
  filthis.classList.remove('activex');
  filtamu.classList.remove('activex');
  gamebtn.classList.remove('activex');
  gamemodestatus = false;
  void promptRandomLocation?.();
});


if (filtlak) filtlak.addEventListener('click', () => {
  if (setWorldMapFilter(3)) return;
  statFilter = 3;
  filtall.classList.remove('activex');
  filtlak.classList.add('activex');
  filthab.classList.remove('activex');
  filtreg.classList.remove('activex');
  filtoth.classList.remove('activex');
  filtcit.classList.remove('activex');
  filthis.classList.remove('activex');
  filtamu.classList.remove('activex');
  gamebtn.classList.remove('activex');
  gamemodestatus = false;
  void promptRandomLocation?.();
});

if (filthab) filthab.addEventListener('click', () => {
  statFilter = 4;
  filtall.classList.remove('activex');
  filtlak.classList.remove('activex');
  filthab.classList.add('activex');
  filtreg.classList.remove('activex');
  filtoth.classList.remove('activex');
  filtcit.classList.remove('activex');
  filthis.classList.remove('activex');
  filtamu.classList.remove('activex');
  gamebtn.classList.remove('activex');
  gamemodestatus = false;
  void promptRandomLocation?.();
});

if (filtreg) filtreg.addEventListener('click', () => {
  statFilter = 6;
  filtall.classList.remove('activex');
  filtlak.classList.remove('activex');
  filthab.classList.remove('activex');
  filtreg.classList.add('activex');
  filtoth.classList.remove('activex');
  filtcit.classList.remove('activex');
  filthis.classList.remove('activex');
  filtamu.classList.remove('activex');
  gamebtn.classList.remove('activex');
  gamemodestatus = false;
  void promptRandomLocation?.();
});

if (filtoth) filtoth.addEventListener('click', () => {
  statFilter = 7;
  filtall.classList.remove('activex');
  filtlak.classList.remove('activex');
  filthab.classList.remove('activex');
  filtreg.classList.remove('activex');
  filtoth.classList.add('activex');
  filtcit.classList.remove('activex');
  filthis.classList.remove('activex');
  filtamu.classList.remove('activex');
  gamebtn.classList.remove('activex');
  gamemodestatus = false;
  void promptRandomLocation?.();
});

if (filtcit) filtcit.addEventListener('click', () => {
  if (setWorldMapFilter(2)) return;
  statFilter = 2;
  filtall.classList.remove('activex');
  filtlak.classList.remove('activex');
  filthab.classList.remove('activex');
  filtreg.classList.remove('activex');
  filtoth.classList.remove('activex');
  filtcit.classList.add('activex');
  filthis.classList.remove('activex');
  filtamu.classList.remove('activex');
  gamebtn.classList.remove('activex');
  gamemodestatus = false;
  void promptRandomLocation?.();
});

if (filthis) filthis.addEventListener('click', () => {
  statFilter = 5;
  filtall.classList.remove('activex');
  filtlak.classList.remove('activex');
  filthab.classList.remove('activex');
  filtreg.classList.remove('activex');
  filtoth.classList.remove('activex');
  filtcit.classList.remove('activex');
  filthis.classList.add('activex');
  filtamu.classList.remove('activex');
  gamebtn.classList.remove('activex');
  gamemodestatus = false;
  void promptRandomLocation?.();
});

if (filtamu) filtamu.addEventListener('click', () => {
  statFilter = 8;
  filtall.classList.remove('activex');
  filtlak.classList.remove('activex');
  filthab.classList.remove('activex');
  filtreg.classList.remove('activex');
  filtoth.classList.remove('activex');
  filtcit.classList.remove('activex');
  filthis.classList.remove('activex');
  filtamu.classList.add('activex');
  gamebtn.classList.remove('activex');
  gamemodestatus = false;
  void promptRandomLocation?.();
});

if (gamebtn) gamebtn.addEventListener('click', () => {
  statFilter = 1;
  filtall.classList.remove('activex');
  filtlak.classList.remove('activex');
  filthab.classList.remove('activex');
  filtreg.classList.remove('activex');
  filtoth.classList.remove('activex');
  filtcit.classList.remove('activex');
  filthis.classList.remove('activex');
  filtamu.classList.remove('activex');
  gamebtn.classList.add('activex');
  gamemodestatus = true;
  score = 0;
  attempts = 0;
  attemptlist.length = 0;
  attemptResults.length = 0;
  gameLocationSequence = Array.from(
    { length: currentFilter[1].range },
    (_, index) => currentFilter[1].start + index + 1
  );
  for (let index = gameLocationSequence.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [gameLocationSequence[index], gameLocationSequence[swapIndex]] =
      [gameLocationSequence[swapIndex], gameLocationSequence[index]];
  }
  gameLocationSequence.length = GAME_ATTEMPT_LIMIT;
  void promptRandomLocation?.();
});

currentFilter[1] = {
  status: 'all',
  start: 0,
  range: 100
}

currentFilter[3] = {
  status: 'lakes',
  start: 0,
  range: 23
}

currentFilter[2] = {
  status: 'city',
  start: 23,
  range: 22
}

currentFilter[4] = {
  status: 'harbor',
  start: 45,
  range: 27
}

currentFilter[5] = {
  status: 'proto-historic',
  start: 72,
  range: 18
}

currentFilter[7] = {
  status: 'other',
  start: 90,
  range: 5
}

currentFilter[6] = {
  status: 'religious',
  start: 95,
  range: 11
}

currentFilter[8] = {
  status: 'amuna',
  start: 106,
  range: 6
}

let score = 0;
let attempts = 0;
const GAME_ATTEMPT_LIMIT = 72;
let attemptlist = [];
let attemptResults = [];
let gameLocationSequence = [];


const historyMap = document.querySelector('#imageM');
const mapZoomStage = document.querySelector('#mapZoomStage');
const locationMarker = document.querySelector('#locationMarker');
let mapScale = 1;
let mapTranslateX = 0;
let mapTranslateY = 0;
let mapBaseLeft;
let mapBaseTop;

function resetMapZoom() {
  if (!historyMap || !mapZoomStage) return;

  mapScale = 1;
  mapTranslateX = 0;
  mapTranslateY = 0;
  mapBaseLeft = undefined;
  mapBaseTop = undefined;
  mapZoomStage.style.transform = 'translate(0px, 0px) scale(1)';
  historyMap.style.cursor = 'zoom-in';
}

if (historyMap && mapZoomStage) {
  mapZoomStage.addEventListener('wheel', (event) => {
    if (mapBaseLeft === undefined || mapBaseTop === undefined) {
      const bounds = mapZoomStage.getBoundingClientRect();
      mapBaseLeft = bounds.left;
      mapBaseTop = bounds.top;
    }

    const nextScale = Math.min(8, Math.max(1, mapScale * Math.exp(-event.deltaY * 0.001)));
    if (nextScale === mapScale) return;
    event.preventDefault();

    const mapX = (event.clientX - mapBaseLeft - mapTranslateX) / mapScale;
    const mapY = (event.clientY - mapBaseTop - mapTranslateY) / mapScale;

    mapScale = nextScale;
    if (mapScale === 1) {
      mapTranslateX = 0;
      mapTranslateY = 0;
    } else {
      mapTranslateX = event.clientX - mapBaseLeft - mapX * mapScale;
      mapTranslateY = event.clientY - mapBaseTop - mapY * mapScale;
    }

    mapZoomStage.style.transform = `translate(${mapTranslateX}px, ${mapTranslateY}px) scale(${mapScale})`;
    historyMap.style.cursor = mapScale === 1 ? 'zoom-in' : 'zoom-out';
  }, { passive: false });
}

let maploclist = [];

maploclist[1] = {
  prop_name: 'Yoda Weva',
  prop_x: 0.2357,
  prop_y: 0.2554,
  prop_type: 'Lake'
}

maploclist[2] = {
  prop_name: 'Mahawilachchiya',
  prop_x: 0.2892,
  prop_y: 0.3545,
  prop_type: 'Lake'
}

maploclist[3] = {
  prop_name: 'Thisa Weva',
  prop_x: 0.3486,
  prop_y: 0.3895,
  prop_type: 'Lake'
}

maploclist[4] = {
  prop_name: 'Nachchaduwa',
  prop_x: 0.3962,
  prop_y: 0.4072,
  prop_type: 'Lake'
}

maploclist[5] = {
  prop_name: 'Thabbowa',
  prop_x: 0.1982,
  prop_y: 0.4678,
  prop_type: 'Lake'
}

maploclist[6] = {
  prop_name: 'Kala Weva',
  prop_x: 0.4151,
  prop_y: 0.4678,
  prop_type: 'Lake'
}

maploclist[7] = {
  prop_name: 'Minneriya',
  prop_x: 0.5405,
  prop_y: 0.4647,
  prop_type: 'Lake'
}

maploclist[8] = {
  prop_name: 'Girithale Weva',
  prop_x: 0.5608,
  prop_y: 0.4758,
  prop_type: 'Lake'
}

maploclist[9] = {
  prop_name: 'Kothmale Reservoir',
  prop_x: 0.4398,
  prop_y: 0.7081,
  prop_type: 'Lake'
}

maploclist[10] = {
  prop_name: 'Sorabora Weva',
  prop_x: 0.5863,
  prop_y: 0.6353,
  prop_type: 'Lake'
}

maploclist[11] = {
  prop_name: 'Thissamaharama Weva',
  prop_x: 0.6468,
  prop_y: 0.8745,
  prop_type: 'Lake'
}

maploclist[12] = {
  prop_name: 'Randenigala Reservoir',
  prop_x: 0.5295,
  prop_y: 0.6765,
  prop_type: 'Lake'
}

maploclist[13] = {
  prop_name: 'Rantambe',
  prop_x: 0.548,
  prop_y: 0.6765,
  prop_type: 'Lake'
}

maploclist[14] = {
  prop_name: 'Victoria',
  prop_x: 0.4937,
  prop_y: 0.6554,
  prop_type: 'Lake'
}

maploclist[15] = {
  prop_name: 'Gal Oya Reservoir',
  prop_x: 0.7553,
  prop_y: 0.6784,
  prop_type: 'Lake'
}

maploclist[16] = {
  prop_name: 'Maduru Oya Reservoir',
  prop_x: 0.6464,
  prop_y: 0.5829,
  prop_type: 'Lake'
}

maploclist[17] = {
  prop_name: 'Parakrama Samudraya',
  prop_x: 0.5725,
  prop_y: 0.4969,
  prop_type: 'Lake'
}

maploclist[18] = {
  prop_name: 'Nuwara Weva',
  prop_x: 0.3758,
  prop_y: 0.3855,
  prop_type: 'Lake'
}

maploclist[19] = {
  prop_name: 'Kawudulla',
  prop_x: 0.5564,
  prop_y: 0.4366,
  prop_type: 'Lake'
}

maploclist[20] = {
  prop_name: 'Kanthale',
  prop_x: 0.5771,
  prop_y: 0.3846,
  prop_type: 'Lake'
}

maploclist[21] = {
  prop_name: 'Hurulu Weva',
  prop_x: 0.482,
  prop_y: 0.4227,
  prop_type: 'Lake'
}

maploclist[22] = {
  prop_name: 'Padaviya Weva',
  prop_x: 0.4971,
  prop_y: 0.2742,
  prop_type: 'Lake'
}

maploclist[23] = {
  prop_name: 'Iranamadu Weva',
  prop_x: 0.3837,
  prop_y: 0.1539,
  prop_type: 'Lake'
}

maploclist[24] = {
  prop_name: 'Kadurugoda',
  prop_oldname: 'Kandarodaya',
  prop_x: 0.2337,
  prop_y: 0.0355,
  prop_type: 'City'
}

maploclist[25] = {
  prop_name: 'Jaffna',
  prop_x: 0.2104,
  prop_y: 0.0445,
  prop_type: 'City'
}

maploclist[26] = {
  prop_name: 'Nallur',
  prop_x: 0.2398,
  prop_y: 0.0591,
  prop_type: 'City'
}

maploclist[27] = {
  prop_name: 'Ritigala',
  prop_x: 0.4505,
  prop_y: 0.4473,
  prop_type: 'City'
}

maploclist[28] = {
  prop_name: 'Kadurugoda',
  prop_x: 0.2337,
  prop_y: 0.0355,
  prop_type: 'City'
}

maploclist[29] = {
  prop_name: 'Yapahuwa',
  prop_x: 0.4035,
  prop_y: 0.5302,
  prop_type: 'City'
}

maploclist[30] = {
  prop_name: 'Kurunegala',
  prop_x: 0.3360,
  prop_y: 0.6205,
  prop_type: 'City'
}

maploclist[31] = {
  prop_name: 'Dambadeniya',
  prop_x: 0.2621,
  prop_y: 0.6366,
  prop_type: 'City'
}

maploclist[32] = {
  prop_name: 'Kotte',
  prop_x: 0.1649,
  prop_y: 0.7340,
  prop_type: 'City'
}

maploclist[33] = {
  prop_name: 'Sitawaka',
  prop_x: 0.2869,
  prop_y: 0.7309,
  prop_type: 'City'
}

maploclist[34] = {
  prop_name: 'Raigama',
  prop_x: 0.2148,
  prop_y: 0.8020,
  prop_type: 'City'
}

maploclist[35] = {
  prop_name: 'Matale',
  prop_x: 0.4428,
  prop_y: 0.6035,
  prop_type: 'City'
}

maploclist[36] = {
  prop_name: 'Magama',
  prop_x: 0.6725,
  prop_y: 0.9128,
  prop_type: 'City'
}

maploclist[37] = {
  prop_name: 'Katharagama',
  prop_oldname: 'Kacharagama',
  prop_x: 0.6665,
  prop_y: 0.8558,
  prop_type: 'City'
}

maploclist[38] = {
  prop_name: 'Mahiyanganaya',
  prop_x: 0.59,
  prop_y: 0.6555,
  prop_type: 'City'
}

maploclist[39] = {
  prop_name: 'Gampola',
  prop_x: 0.4248,
  prop_y: 0.6732,
  prop_type: 'City'
}

maploclist[40] = {
  prop_name: 'Kandy',
  prop_x: 0.4453,
  prop_y: 0.6495,
  prop_type: 'City'
}

maploclist[41] = {
  prop_name: 'Gannoruwa',
  prop_x: 0.4334,
  prop_y: 0.6409,
  prop_type: 'City'
}

maploclist[42] = {
  prop_name: 'Polonnaruwa',
  prop_x: 0.5901,
  prop_y: 0.4946,
  prop_type: 'City'
}

maploclist[43] = {
  prop_name: 'Sigiriya / Pothana',
  prop_oldname: 'Aligala / Pidurangala',
  prop_x: 0.4921,
  prop_y: 0.4758,
  prop_type: 'City'
}

maploclist[44] = {
  prop_name: 'Sagiriya',
  prop_oldname: 'Mihintale',
  prop_x: 0.4697,
  prop_y: 0.4203,
  prop_type: 'City'
}

maploclist[45] = {
  prop_name: 'Anuradhapura',
  prop_x: 0.3591,
  prop_y: 0.3799,
  prop_type: 'City'
}

maploclist[46] = {
  prop_name: 'Dambakolapatuna',
  prop_oldname: 'Jambakolapattana',
  prop_x: 0.2501,
  prop_y: 0.0276,
  prop_type: 'Harbour'
}

maploclist[47] = {
  prop_name: 'Uratota',
  prop_oldname: 'Sukarathiththa',
  prop_x: 0.1696,
  prop_y: 0.0521,
  prop_type: 'Harbour'
}

maploclist[48] = {
  prop_name: 'Mannar',
  prop_oldname: 'Mannar',
  prop_x: 0.1823,
  prop_y: 0.2299,
  prop_type: 'Harbour'
}

maploclist[49] = {
  prop_name: 'Mathota',
  prop_oldname: 'Mahthiththa',
  prop_x: 0.2113,
  prop_y: 0.2357,
  prop_type: 'Harbour'
}

maploclist[50] = {
  prop_name: 'Magana',
  prop_oldname: 'Magana',
  prop_x: 0.1770,
  prop_y: 0.3417,
  prop_type: 'Harbour'
}

maploclist[51] = {
  prop_name: 'Uruwela',
  prop_oldname: 'Uruwela',
  prop_x: 0.1610,
  prop_y: 0.3998,
  prop_type: 'Harbour'
}

maploclist[52] = {
  prop_name: 'Kalpitiya',
  prop_oldname: 'Kalpitiya',
  prop_x: 0.1119,
  prop_y: 0.4466,
  prop_type: 'Harbour'
}

maploclist[53] = {
  prop_name: 'Puttlam',
  prop_oldname: 'Puttlam',
  prop_x: 0.1644,
  prop_y: 0.4752,
  prop_type: 'Harbour'
}

maploclist[54] = {
  prop_name: 'Chilaw',
  prop_oldname: 'Salawantota',
  prop_x: 0.1518,
  prop_y: 0.5801,
  prop_type: 'Harbour'
}

maploclist[55] = {
  prop_name: 'Kamhaltota',
  prop_oldname: 'Kamhaltota',
  prop_x: 0.1635,
  prop_y: 0.6573,
  prop_type: 'Harbour'
}

maploclist[56] = {
  prop_name: 'Negombo*',
  prop_oldname: 'Meegamawua*',
  prop_x: 0.1619,
  prop_y: 0.6944,
  prop_type: 'Harbour'
}

maploclist[57] = {
  prop_name: 'Kalyanitota',
  prop_oldname: 'Kalyanitota',
  prop_x: 0.1691,
  prop_y: 0.7164,
  prop_type: 'Harbour'
}

maploclist[58] = {
  prop_name: 'Colombo',
  prop_oldname: 'Kolontota',
  prop_x: 0.1623,
  prop_y: 0.7356,
  prop_type: 'Harbour'
}

maploclist[59] = {
  prop_name: 'Kaluthara',
  prop_oldname: 'Kaalathiththa',
  prop_x: 0.2052,
  prop_y: 0.8227,
  prop_type: 'Harbour'
}

maploclist[60] = {
  prop_name: 'Benthara',
  prop_oldname: 'Beemathiththa',
  prop_x: 0.2252,
  prop_y: 0.8825,
  prop_type: 'Harbour'
}

maploclist[61] = {
  prop_name: 'Gimhathiththa',
  prop_oldname: 'Gimhathiththa',
  prop_x: 0.2686,
  prop_y: 0.9388,
  prop_type: 'Harbour'
}

maploclist[62] = {
  prop_name: 'Galle',
  prop_oldname: 'Galle',
  prop_x: 0.3042,
  prop_y: 0.9549,
  prop_type: 'Harbour'
}

maploclist[63] = {
  prop_name: 'Dondra Head',
  prop_oldname: 'Dewanuwara',
  prop_x: 0.4212,
  prop_y: 0.9807,
  prop_type: 'Harbour'
}

maploclist[64] = {
  prop_name: 'Mahawalukagama',
  prop_oldname: 'Mahawalukagama',
  prop_x: 0.3700,
  prop_y: 0.9678,
  prop_type: 'Harbour'
}

maploclist[65] = {
  prop_name: 'Matara',
  prop_oldname: 'Nilwalathiththa',
  prop_x: 0.3994,
  prop_y: 0.9760,
  prop_type: 'Harbour'
}

maploclist[66] = {
  prop_name: 'Hambantota',
  prop_oldname: 'Thotaluthota',
  prop_x: 0.7184,
  prop_y: 0.8946,
  prop_type: 'Harbour'
}

maploclist[67] = {
  prop_name: 'Batticoloa',
  prop_oldname: 'Madakalapuwa',
  prop_x: 0.8263,
  prop_y: 0.5457,
  prop_type: 'Harbour'
}

maploclist[68] = {
  prop_name: 'Lankapatuna',
  prop_oldname: 'Lankapatuna',
  prop_x: 0.7083,
  prop_y: 0.3602,
  prop_type: 'Harbour'
}

maploclist[69] = {
  prop_name: 'Trincomalee',
  prop_oldname: 'Fredrick Fort',
  prop_x: 0.6678,
  prop_y: 0.3334,
  prop_type: 'Harbour'
}

maploclist[70] = {
  prop_name: 'Pallawanka',
  prop_oldname: 'Thiriyaya',
  prop_x: 0.5931,
  prop_y: 0.2578,
  prop_type: 'Harbour'
}

maploclist[71] = {
  prop_name: 'Elephant Pass',
  prop_oldname: 'Alimankada',
  prop_x: 0.3720,
  prop_y: 0.1057,
  prop_type: 'Harbour'
}

maploclist[72] = {
  prop_name: 'Point Pedro',
  prop_oldname: 'Peduru Thuduwa',
  prop_x: 0.3082,
  prop_y: 0.0203,
  prop_type: 'Harbour'
}

maploclist[73] = {
  prop_name: 'Ranchamadama',
  prop_x: 0.4813,
  prop_y: 0.8787,
  prop_type: 'Proto-Historic'
}

maploclist[74] = {
  prop_name: 'Ibbankatuwa',
  prop_x: 0.4422,
  prop_y: 0.5228,
  prop_type: 'Proto-Historic'
}

maploclist[75] = {
  prop_name: 'Pom Parippu',
  prop_x: 0.1727,
  prop_y: 0.4094,
  prop_type: 'Proto-Historic'
}

maploclist[76] = {
  prop_name: 'Galsohon Kanaththa',
  prop_x: 0.2690,
  prop_y: 0.4980,
  prop_type: 'Proto-Historic'
}

maploclist[77] = {
  prop_name: 'Miniha Gal Kanda',
  prop_x: 0.8056,
  prop_y: 0.8438,
  prop_type: 'Proto-Historic'
}

maploclist[78] = {
  prop_name: 'Bundala',
  prop_x: 0.6909,
  prop_y: 0.9089,
  prop_type: 'Proto-Historic'
}

maploclist[79] = {
  prop_name: 'Pahiyangala',
  prop_x: 0.2929,
  prop_y: 0.8118,
  prop_type: 'Proto-Historic'
}

maploclist[80] = {
  prop_name: 'Batadombalena',
  prop_x: 0.3463,
  prop_y: 0.7898,
  prop_type: 'Proto-Historic'
}

maploclist[81] = {
  prop_name: 'Ravana Ella',
  prop_x: 0.6480,
  prop_y: 0.7445,
  prop_type: 'Proto-Historic'
}

maploclist[82] = {
  prop_name: 'Kithulgala Beli Lena',
  prop_x: 0.3733,
  prop_y: 0.7212,
  prop_type: 'Proto-Historic'
}

maploclist[83] = {
  prop_name: 'Bellan Bandi Pelassa',
  prop_x: 0.4550,
  prop_y: 0.7925,
  prop_type: 'Proto-Historic'
}

maploclist[84] = {
  prop_name: 'Horton Plains',
  prop_x: 0.5078,
  prop_y: 0.7630,
  prop_type: 'Proto-Historic'
}

maploclist[85] = {
  prop_name: 'Udamalala',
  prop_x: 0.6419,
  prop_y: 0.9199,
  prop_type: 'Proto-Historic'
}

maploclist[86] = {
  prop_name: 'Udawalave Reservoir',
  prop_x: 0.5140,
  prop_y: 0.8550,
  prop_type: 'Lakes'
}

maploclist[87] = {
  prop_name: 'Aththanagala Alu lena',
  prop_x: 0.3612,
  prop_y: 0.6712,
  prop_type: 'Proto-Historic'
}

maploclist[88] = {
  prop_name: 'Yatigalpoththa',
  prop_x: 0.4057,
  prop_y: 0.5143,
  prop_type: 'Proto-Historic'
}

maploclist[89] = {
  prop_name: 'Haldumulla',
  prop_x: 0.3035,
  prop_y: 0.7214,
  prop_type: 'Proto-Historic'
}

maploclist[90] = {
  prop_name: 'Beragala',
  prop_x: 0.5162,
  prop_y: 0.7773,
  prop_type: 'Proto-Historic'
}

maploclist[91] = {
  prop_name: 'Lunuwila',
  prop_x: 0.1751,
  prop_y: 0.6337,
  prop_type: 'Other'
}

maploclist[92] = {
  prop_name: 'Thalawakele',
  prop_x: 0.4637,
  prop_y: 0.7305,
  prop_type: 'Other'
}

maploclist[93] = {
  prop_name: 'Agalawaththa',
  prop_x: 0.2463,
  prop_y: 0.8456,
  prop_type: 'Other'
}

maploclist[94] = {
  prop_name: 'Welassa',
  prop_x: 0.7078,
  prop_y: 0.7235,
  prop_type: 'Other'
}

maploclist[95] = {
  prop_name: 'Mulativvu',
  prop_x: 0.5171,
  prop_y: 0.1600,
  prop_type: 'Other'
}

maploclist[96] = {
  prop_name: 'Koneshwaram',
  prop_x: 0.6621,
  prop_y: 0.3304,
  prop_type: 'Religious'
}

maploclist[97] = {
  prop_name: 'Thirukethishwaram',
  prop_x: 0.2069,
  prop_y: 0.2469,
  prop_type: 'Religious'
}

maploclist[98] = {
  prop_name: 'Munneshwaram',
  prop_x: 0.1559,
  prop_y: 0.5792,
  prop_type: 'Religious'
}

maploclist[99] = {
  prop_name: 'Madu Dewasthanaya',
  prop_x: 0.3090,
  prop_y: 0.2801,
  prop_type: 'Religious'
}

maploclist[100] = {
  prop_name: 'Seruwawila',
  prop_x: 0.6971,
  prop_y: 0.3678,
  prop_type: 'Religious'
}

maploclist[101] = {
  prop_name: 'Thanthirimale',
  prop_x: 0.3190,
  prop_y: 0.3453,
  prop_type: 'Religious'
}

maploclist[101] = {
  prop_name: 'Medirigiriya',
  prop_x: 0.5735,
  prop_y: 0.4405,
  prop_type: 'Religious'
}

maploclist[102] = {
  prop_name: 'Dimbulagala',
  prop_x: 0.6184,
  prop_y: 0.5304,
  prop_type: 'Religious'
}

maploclist[103] = {
  prop_name: 'Mahanagahula',
  prop_x: 0.5429,
  prop_y: 0.9167,
  prop_type: 'Religious'
}

maploclist[104] = {
  prop_name: 'Kirinda',
  prop_x: 0.6891,
  prop_y: 0.9097,
  prop_type: 'Religious'
}

maploclist[105] = {
  prop_name: 'Sithulpawwa',
  prop_x: 0.7193,
  prop_y: 0.8756,
  prop_type: 'Religious'
}

maploclist[106] = {
  prop_name: 'Deegaghama',
  prop_oldname: 'Deeghawapi',
  prop_x: 0.8732,
  prop_y: 0.6420,
  prop_type: 'Religious'
}

maploclist[107] = {
  prop_name: 'Polgolla',
  prop_x: 0.4353,
  prop_y: 0.6371,
  prop_type: 'Amuna'
}

maploclist[108] = {
  prop_name: 'Minipe',
  prop_x: 0.5861,
  prop_y: 0.6667,
  prop_type: 'Amuna'
}

maploclist[109] = {
  prop_name: 'Haththota',
  prop_x: 0.5215,
  prop_y: 0.5714,
  prop_type: 'Amuna'
}

maploclist[110] = {
  prop_name: 'Elahara',
  prop_x: 0.5102,
  prop_y: 0.5399,
  prop_type: 'Amuna'
}

maploclist[111] = {
  prop_name: 'Angammedilla',
  prop_x: 0.5440,
  prop_y: 0.5156,
  prop_type: 'Amuna'
}

maploclist[112] = {
  prop_name: 'Kasathota',
  prop_oldname: 'Dasthota',
  prop_x: 0.6072,
  prop_y: 0.5032,
  prop_type: 'Amuna'
}

const askedLoc = [];

const resultMap = document.querySelector('#resultMap');
const resultMarkers = document.querySelector('#resultMarkers');
const resultLocationTooltip = document.querySelector('#resultLocationTooltip');
const savedAttemptResults = sessionStorage.getItem('attemptResults');
const results = savedAttemptResults ? JSON.parse(savedAttemptResults) : [];
if (!Array.isArray(results)) {
  throw new TypeError('Saved game results must be an array.');
}

const resultScoreDisplay = document.querySelector('.relt');
if (resultScoreDisplay) {
  const correctMarkerCount = results.filter((result) =>
    result &&
    Number.isInteger(result.locationIndex) &&
    maploclist[result.locationIndex] &&
    result.outcome === 'correct'
  ).length;
  const scorePercent = (correctMarkerCount / GAME_ATTEMPT_LIMIT) * 100;
  const setDisplayedScore = (percent) => {
    const displayedPercent = Math.floor(percent);
    const red = displayedPercent < 75
      ? 127
      : Math.round(127 * (1 - displayedPercent / 100));
    const green = displayedPercent < 75
      ? 0
      : Math.round(127 * displayedPercent / 100);
    const color = displayedPercent < 75
      ? '#7F0000'
      : `rgb(${red}, ${green}, 0)`;

    resultScoreDisplay.textContent = `${displayedPercent}%`;
    resultScoreDisplay.dataset.score = `${displayedPercent}%`;
    resultScoreDisplay.setAttribute('aria-label', `${displayedPercent}%`);
    resultScoreDisplay.style.setProperty('--score-color', color);
    resultScoreDisplay.style.backgroundColor = `rgba(${red}, ${green}, 0, 0.2)`;
  };

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setDisplayedScore(scorePercent);
  } else {
    const animationDuration = 1200;
    const animationStart = performance.now();
    const animateScore = (now) => {
      const progress = Math.min((now - animationStart) / animationDuration, 1);
      setDisplayedScore(scorePercent * progress);
      if (progress < 1) window.requestAnimationFrame(animateScore);
    };

    setDisplayedScore(0);
    window.requestAnimationFrame(animateScore);
  }
}

if (resultMap && resultMarkers) {
  results.forEach((result) => {
    if (!result || !Number.isInteger(result.locationIndex)) return;
    if (!['correct', 'near', 'incorrect'].includes(result.outcome)) return;

    const location = maploclist[result.locationIndex];
    if (!location) return;

    const marker = document.createElement('span');
    marker.classList.add('location-marker', 'visible', 'result-marker');
    if (result.outcome !== 'correct') marker.classList.add(result.outcome);
    marker.style.left = `${location.prop_x * 100}%`;
    marker.style.top = `${location.prop_y * 100}%`;
    marker.dataset.locationName = location.prop_name;
    marker.setAttribute('aria-label', `${location.prop_name}: ${result.outcome}`);
    resultMarkers.append(marker);
  });

  if (resultLocationTooltip) {
    resultMarkers.addEventListener('pointermove', (event) => {
      const marker = document.elementFromPoint(event.clientX, event.clientY)
        ?.closest('.result-marker');
      if (!marker) {
        resultLocationTooltip.classList.remove('visible');
        return;
      }

      resultLocationTooltip.textContent = marker.dataset.locationName;
      resultLocationTooltip.style.left = `${event.clientX}px`;
      resultLocationTooltip.style.top = `${event.clientY}px`;
      resultLocationTooltip.classList.add('visible');
    });

    resultMarkers.addEventListener('pointerleave', (event) => {
      if (event.relatedTarget instanceof Node && resultMarkers.contains(event.relatedTarget)) return;
      resultLocationTooltip.classList.remove('visible');
    });
  }
}

const buzzer = new Audio("https://sigmadamdam24.github.io/m4thfl4sh/fahhh.mp3");
const buzzer1 = new Audio("https://sigmadamdam24.github.io/m4thfl4sh/siren2.mp3");
const corr1 = new Audio("https://sigmadamdam24.github.io/m4thfl4sh/correctsfx.mp3");

const infoDialog = document.querySelector('.adial1, .hdial1');
if (infoDialog) {
  infoDialog.showModal();
  
  infoDialog.querySelector('.conbtn')?.addEventListener('click', () => {
    infoDialog.close();
  });
}

const locdisp = document.querySelector('#locdisplay');
const dialog = document.querySelector('.dial');
const currentLocationDisplay = document.querySelector('.crntloc.cent');
const boldtx = document.querySelector('.boldtext');

if (historyMap && locdisp && dialog && currentLocationDisplay) {
  let currentLocation;
  let currentLocationIndex;
  let roundLocked = true;
  let currentLocationNameInterval;
  let promptSequence = 0;
  let promptTimeout;
  let morphTimeout;
  let nextRoundTimeout;

  promptRandomLocation = async function promptRandomLocation() {
    const sequence = ++promptSequence;
    window.clearTimeout(promptTimeout);
    window.clearTimeout(morphTimeout);
    window.clearTimeout(nextRoundTimeout);
    window.clearInterval(currentLocationNameInterval);
    if (dialog.open) dialog.close();
    roundLocked = true;
    const navBar = document.querySelector('.nav-bar');
    const introAnimations = [
      ...document.body.getAnimations(),
      ...(navBar?.getAnimations() ?? [])
    ];
    await Promise.all(introAnimations.map(animation => animation.finished));
    if (sequence !== promptSequence) return;

    document.body.classList.remove('correct', 'incorrect');
    boldtx?.classList.remove('correct', 'incorrect');
    locationMarker?.classList.remove('visible', 'incorrect', 'near');

    if (isWorldMapPage) {
      const availableLocationIndices = maploclist2
        .map((location, index) => {
          const matchesFilter = statFilter === 1
            || (statFilter === 2 && location?.prop_type === 'city')
            || (statFilter === 3 && location?.prop_type === 'strait');
          return location && matchesFilter ? index : null;
        })
        .filter((index) => index !== null);
      currentLocationIndex = availableLocationIndices[
        Math.floor(Math.random() * availableLocationIndices.length)
      ];
    } else {
      currentLocationIndex = gamemodestatus
        ? gameLocationSequence[attempts]
        : currentFilter[statFilter].start + Math.floor(Math.random() * currentFilter[statFilter].range) + 1;
    }
    currentLocation = (isWorldMapPage ? maploclist2 : maploclist)[currentLocationIndex];
    locdisp.textContent = currentLocation.prop_name;

    dialog.classList.remove('morph-out');
    if (!dialog.open) dialog.show();
    dialog.classList.remove('prompt-animation');
    void dialog.offsetWidth; // Restart the CSS animation
    dialog.classList.add('prompt-animation');

    dialog.classList.add('cnte');

    promptTimeout = window.setTimeout(() => {
      if (sequence !== promptSequence) return;
      const dialogBounds = dialog.getBoundingClientRect();
      const targetBounds = currentLocationDisplay.getBoundingClientRect();
      const targetCenterX = targetBounds.left + targetBounds.width / 2;
      const targetCenterY = targetBounds.top + targetBounds.height / 2;
      const dialogCenterX = dialogBounds.left + dialogBounds.width / 2;
      const dialogCenterY = dialogBounds.top + dialogBounds.height / 2;
      const moveX = targetCenterX - dialogCenterX;
      const moveY = targetCenterY - dialogCenterY;
      const targetScale = Math.min(
        targetBounds.width / dialogBounds.width,
        targetBounds.height / dialogBounds.height
      );

      dialog.style.setProperty('--move-x', `${moveX}px`);
      dialog.style.setProperty('--move-y', `${moveY}px`);
      dialog.style.setProperty('--target-scale', targetScale);
      dialog.classList.add('morph-out');

      morphTimeout = window.setTimeout(() => {
        if (sequence !== promptSequence) return;
        dialog.close();
        currentLocationDisplay.textContent = currentLocation.prop_name;
        roundLocked = false;

        if (Object.prototype.hasOwnProperty.call(currentLocation, 'prop_oldname')) {
          let showingOldName = false;
          currentLocationNameInterval = window.setInterval(() => {
            showingOldName = !showingOldName;
            currentLocationDisplay.textContent = showingOldName
              ? currentLocation.prop_oldname
              : currentLocation.prop_name;
          }, 1000);
        };
      }, 600);
    }, 700);
  }

  if (infoDialog?.open) {
    infoDialog.addEventListener('close', promptRandomLocation, { once: true });
  } else {
    promptRandomLocation();
  }

  historyMap.addEventListener('click', (event) => {
    if (roundLocked) return;

    const bounds = historyMap.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    window.clearInterval(currentLocationNameInterval);

    const mouseX = (event.clientX - bounds.left) / bounds.width;
    const mouseY = (event.clientY - bounds.top) / bounds.height;
    const distanceSquared =
      (mouseX - currentLocation.prop_x) ** 2 +
      (mouseY - currentLocation.prop_y) ** 2;
    const correctThreshold = isWorldMapPage ? 0.0003 : 0.0004;
    const nearThreshold = isWorldMapPage ? 0.0009 : 0.0016;
    const isCorrect = distanceSquared < correctThreshold;
    const isNear = isWorldMapPage
      ? distanceSquared >= correctThreshold && distanceSquared < nearThreshold
      : distanceSquared > correctThreshold && distanceSquared < nearThreshold;
    const isIncorrect = isWorldMapPage
      ? distanceSquared >= nearThreshold
      : distanceSquared > nearThreshold;

    if (gamemodestatus) {
      attemptlist.push(currentLocationIndex);
      attempts += 1;
      if (isCorrect) score += 1;
      attemptResults.push({
        locationIndex: currentLocationIndex,
        outcome: isCorrect ? 'correct' : isNear ? 'near' : 'incorrect'
      });
    }

    if (locationMarker) {
      locationMarker.style.left = `${currentLocation.prop_x * 100}%`;
      locationMarker.style.top = `${currentLocation.prop_y * 100}%`;
      locationMarker.classList.toggle('incorrect', isIncorrect);
      locationMarker.classList.toggle('near', isNear);
      locationMarker.classList.add('visible');
    }

    console.log(isCorrect ? 'correct' : 'incorrect');
    console.log(mouseX);
    console.log(mouseY);
    if (isIncorrect) {
      buzzer.currentTime = 0;
      buzzer.play();
      document.body.classList.add('incorrect');
      boldtx.classList.add('incorrect');
    }
    if (isNear) {
      buzzer1.currentTime = 0;
      buzzer1.play();
      document.body.classList.add('incorrect');
      boldtx.classList.add('incorrect');
    } 
    if (isCorrect) {
      corr1.currentTime = 0;
      corr1.play();
      document.body.classList.add('correct');
      boldtx.classList.add('correct');
    }
    roundLocked = true;
    resetMapZoom();

    nextRoundTimeout = window.setTimeout(() => {
      if (gamemodestatus && attempts >= GAME_ATTEMPT_LIMIT) {
        sessionStorage.setItem('attemptlist', JSON.stringify(attemptlist));
        sessionStorage.setItem('attemptResults', JSON.stringify(attemptResults));
        sessionStorage.setItem('score', String(score));
        sessionStorage.setItem('attempts', String(attempts));
        window.location.assign('gameresult.html');
        return;
      }

      promptRandomLocation();
    }, isCorrect ? 1000 : 2500);
  });
}

const hbtn1 = document.querySelector('.hbtn1');
const hbtn2 = document.querySelector('.hbtn2');
const abtn = document.querySelector('.abtn');

if (hbtn1) hbtn1.addEventListener('mouseenter', () => {
  document.body.style.background = 'linear-gradient(135deg, #1F000F, #0F001F, #00071F)'
})

if (hbtn1) hbtn1.addEventListener('mouseleave', () => {
  document.body.style.background = ''
})

if (hbtn2) hbtn2.addEventListener('mouseenter', () => {
  document.body.style.background = 'linear-gradient(135deg, #1F001F, #1F000F, #1F0F00'
})

if (hbtn2) hbtn2.addEventListener('mouseleave', () => {
  document.body.style.background = ''
})

if (abtn) abtn.addEventListener('mouseenter', () => {
  document.body.style.background = 'linear-gradient(135deg, #000F1F, #001F1F, #001F0F'
})

if (abtn) abtn.addEventListener('mouseleave', () => {
  document.body.style.background = ''
})

const ssbtn = document.querySelector('.ssbtn');

if (ssbtn) ssbtn.addEventListener('mouseenter', () => {
  document.body.style.background = 'linear-gradient(135deg, #1F0000, #1F001F, #0F001F)';
})

if (ssbtn) ssbtn.addEventListener('mouseleave', () => {
  document.body.style.background = ''
})

//bgm
const bgm2 = new Audio("https://sigmadamdam24.github.io/m4thfl4sh/bgx2.mp3");
const bgm3 = new Audio("https://sigmadamdam24.github.io/m4thfl4sh/bgx3.mp3");
const bgm4 = new Audio("https://sigmadamdam24.github.io/m4thfl4sh/misc2.mp3");

const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
const pageName = path.split('/').pop().replace(/\.html$/, '');
const isHomePage = pageName === '' || pageName === 'index';
const isActionPage = ['history', 'historymaps', 'art'].includes(pageName);

if (isHomePage) {
  let soundStarted = false;
  let soundAttempted = false;

  const startBGMSound = () => {
    if (soundAttempted || (soundStarted && !bgm2.paused)) return;
    soundAttempted = true;

    bgm2.volume = 0.10;
    bgm2.preload = 'auto';
    bgm2.load();

    bgm2.play().then(() => {
      soundStarted = true;
      sessionStorage.removeItem('playBGMSound');
    }).catch((error) => {
      // Autoplay may be blocked until the first user interaction.
      soundAttempted = false;
      console.warn('background music blocked:', error.name, error.message);
    });
  };

  const retryBGMSound = () => startBGMSound();

  // Try as soon as the home page is entered.
  window.addEventListener('load', startBGMSound, { once: true });

  // Required fallback when the browser blocks autoplay after navigation.
  document.addEventListener('pointerdown', retryBGMSound);
  document.addEventListener('keydown', retryBGMSound);
  document.querySelector('.nav-bar, .nav-bar2')
    ?.addEventListener('click', retryBGMSound);
}

if (isActionPage) {
  let soundStarted = false;
  let soundAttempted = false;
  const selectedBGMSound = Math.random() < 0.5 ? bgm3 : bgm4;

  const startBGMSound = () => {
    if (soundAttempted || (soundStarted && !selectedBGMSound.paused)) return;
    soundAttempted = true;

    selectedBGMSound.volume = 0.05;
    selectedBGMSound.loop = true;
    selectedBGMSound.preload = 'auto';
    selectedBGMSound.load();

    selectedBGMSound.play().then(() => {
      soundStarted = true;
      sessionStorage.removeItem('playBGMSound');
    }).catch((error) => {
      // Autoplay may be blocked until the first user interaction.
      soundAttempted = false;
      console.warn('background music blocked:', error.name, error.message);
    });
  };

  const retryBGMSound = () => startBGMSound();

  // Try as soon as an action page is entered.
  window.addEventListener('load', startBGMSound, { once: true });

  // Required fallback when the browser blocks autoplay after navigation.
  document.addEventListener('pointerdown', retryBGMSound);
  document.addEventListener('keydown', retryBGMSound);
  document.querySelector('.nav-bar, .nav-bar2')
    ?.addEventListener('click', retryBGMSound);
}


// HMAPWORLD
const mapdial = document.querySelector('.aligndial');


if (hbtn2) hbtn2.addEventListener('click', () => {
  if (mapdial && !mapdial.open) {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    mapdial.showModal();
    window.scrollTo(scrollX, scrollY);
  }
});

let maploclist2 = [];

maploclist2[1] = {
  prop_name: 'Lisbon',
  prop_x: 0.0680,
  prop_y: 0.4380,
  prop_type: 'city'
}

maploclist2[2] = {
  prop_name: 'London',
  prop_x: 0.1049,
  prop_y: 0.2719,
  prop_type: 'city'
}

maploclist2[3] = {
  prop_name: 'Paris',
  prop_x: 0.1251,
  prop_y: 0.3325,
  prop_type: 'city'
}

maploclist2[4] = {
  prop_name: 'Genoa',
  prop_x: 0.1578,
  prop_y: 0.3858,
  prop_type: 'city'
}

maploclist2[5] = {
  prop_name: 'Rome',
  prop_x: 0.1779,
  prop_y: 0.4044,
  prop_type: 'city'
}

maploclist2[6] = {
  prop_name: 'Constantinople',
  prop_x: 0.2685,
  prop_y: 0.4381,
  prop_type: 'city'
}

maploclist2[7] = {
  prop_name: 'Bombay',
  prop_x: 0.5048,
  prop_y: 0.6591,
  prop_type: 'city'
}

maploclist2[8] = {
  prop_name: 'Beijing',
  prop_x: 0.7447,
  prop_y: 0.4936,
  prop_type: 'city'
}

maploclist2[9] = {
  prop_name: 'Tokyo',
  prop_x: 0.8630,
  prop_y: 0.4993,
  prop_type: 'city'
}

maploclist2[10] = {
  prop_name: 'Hiroshima',
  prop_x: 0.8183,
  prop_y: 0.5118,
  prop_type: 'city'
}

maploclist2[11] = {
  prop_name: 'Nagasaki',
  prop_x: 0.8115,
  prop_y: 0.5213,
  prop_type: 'city'
}

maploclist2[12] = {
  prop_name: 'Batavia',
  prop_x: 0.7111,
  prop_y: 0.9425,
  prop_type: 'city'
}

maploclist2[13] = {
  prop_name: 'Singapore',
  prop_x: 0.6665,
  prop_y: 0.8497,
  prop_type: 'city'
}
maploclist2[14] = {
  prop_name: 'Calcutta',
  prop_x: 0.5755,
  prop_y: 0.6478,
  prop_type: 'city'
}

maploclist2[15] = {
  prop_name: 'Chennai',
  prop_oldname: 'Madras',
  prop_x: 0.5388,
  prop_y: 0.7127,
  prop_type: 'city'
}

maploclist2[16] = {
  prop_name: 'Puduchcheri',
  prop_x: 0.5385,
  prop_y: 0.7363,
  prop_type: 'city'
}

maploclist2[17] = {
  prop_name: 'Kalikut',
  prop_x: 0.5192,
  prop_y: 0.7580,
  prop_type: 'city'
}

maploclist2[18] = {
  prop_name: 'Goa',
  prop_x: 0.5103,
  prop_y: 0.7105,
  prop_type: 'city'
}

maploclist2[19] = {
  prop_name: 'Mecca',
  prop_x: 0.3261,
  prop_y: 0.6592,
  prop_type: 'city'
}

maploclist2[20] = {
  prop_name: 'Venice',
  prop_x: 0.1721,
  prop_y: 0.3657,
  prop_type: 'city'
}

maploclist2[21] = {
  prop_name: 'Alexandria',
  prop_x: 0.2657,
  prop_y: 0.5567,
  prop_type: 'city'
}

maploclist2[22] = {
  prop_name: 'Gibraltar',
  prop_x: 0.0780,
  prop_y: 0.4895,
  prop_type: 'strait'
}

maploclist2[23] = {
  prop_name: 'Sues Canal',
  prop_x: 0.2848,
  prop_y: 0.5561,
  prop_type: 'strait'
}

maploclist2[24] = {
  prop_name: 'Palk Strait',
  prop_x: 0.5348,
  prop_y: 0.7696,
  prop_type: 'strait'
}

maploclist2[25] = {
  prop_name: 'Strait of Malacca',
  prop_x: 0.6528,
  prop_y: 0.8424,
  prop_type: 'strait'
}

maploclist2[26] = {
  prop_name: 'Strait of Hormuz',
  prop_x: 0.4160,
  prop_y: 0.6029,
  prop_type: 'strait'
}

const vclose = document.querySelector('#vclose');
const viewdial = document.querySelector('.viewdial');

if (vclose) vclose.addEventListener('click', () => {
  viewdial.style.visibility = 'hidden';
});