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

//Sinhala Page Script 

const sinhalaDialog = document.querySelector('.sdial');
if (sinhalaDialog) {
    sinhalaDialog.showModal();
    sinhalaDialog.querySelector('.conbtn')?.addEventListener('click', () => {
        sinhalaDialog.close();
    });
}

const placeholder = document.querySelector('#sinbox');
const text_disp = document.querySelector('#sintext');
const prop_disp1 = document.querySelector('#p9');
const prop_disp2 = document.querySelector('#p10');
const prop_disp3 = document.querySelector('#p11');
const prop_disp4 = document.querySelector('#p12');
const prop_displ= document.querySelector('#lnum4');

let extract_array = [];

const filtall3 = document.querySelector("#all3");
const filtbk1 = document.querySelector('#bk1');
const filtbk2 = document.querySelector('#bk2');
const filtbk3 = document.querySelector('#bk3');
const filtflagged3 = document.querySelector('#fxx');
const filterButtons3 = [filtall3, filtbk1, filtbk2, filtbk3].filter(Boolean);
const flaggedExtractIndices = [];
const flagButton3 = document.querySelector('#xx');
let flaggedExtractFilterActive = false;
let currentExtractIndex = null;
const extractTypesByFilter = {
    bk1: 'book',
    bk2: 'book2',
    bk3: 'book3'
};

if (filterButtons3.length > 0) {
    const activeFilter = filterButtons3.find(button => button.classList.contains('active'));
    (activeFilter || filtall3 || filterButtons3[0]).classList.add('active');

    for (const button of filterButtons3) {
        button.addEventListener('click', () => {
            for (const filterButton of filterButtons3) {
                filterButton.classList.toggle('active', filterButton === button);
            }
            flaggedExtractFilterActive = false;
            if (filtflagged3) filtflagged3.classList.remove('activex');
            updateExtract();
        });
    }
}

if (flagButton3) {
    flagButton3.disabled = true;
    flagButton3.addEventListener('click', () => {
        if (currentExtractIndex !== null && !flaggedExtractIndices.includes(currentExtractIndex)) {
            flaggedExtractIndices.push(currentExtractIndex);
        }
        updateExtract();
    });
}

if (filtflagged3) {
    filtflagged3.addEventListener('click', () => {
        flaggedExtractFilterActive = !flaggedExtractFilterActive;
        filtflagged3.classList.toggle('activex', flaggedExtractFilterActive);
        updateExtract();
    });
}



extract_array[1] = {
    text: "Pansiya Panas Jathaka Potha",
    property1: "Source",
    property1_value: "Pali Jathakatta Kathawa",
    property2: "Era",
    property2_value: "Kurunegala",
    property3: "",
    property3_value: "",
    type: "Book",
}

extract_array[2] = {
    text: "Ummagga Jathakaya",
    property1: "Purpose",
    property1_value: "Express Mahoshadha's wisdom and intelligence",
    property2: "Era",
    property2_value: "Kurunegala",
    property3: "",
    property3_value: "",
    type: "Book",
}

extract_array[3] = {
    text: "Sasandawatha",
    property1: "Type",
    property1_value: "Gee Kavya",
    property2: "Era",
    property2_value: "Polonnaruwa",
    property3: "Source",
    property3_value: "Sasa Jathakaya",
    type: "Book",
}

extract_array[4] = {
    text: "Muwadewdawatha",
    property1: "Type",
    property1_value: "Gee Kavya",
    property2: "Era",
    property2_value: "Polonnaruwa",
    property3: "Source",
    property3_value: "Makhadhewa Jathakaya",
    type: "Book",
}

extract_array[5] = {
    text: "Kavusilumina",
    property1: "Type",
    property1_value: "MAHA Kavya",
    property2: "Era",
    property2_value: "Dambadeniya",
    property3: "Source",
    property3_value: "Kusa Jathakaya",
    property4: "Author",
    property4_value: "II Pandith Parakramabahu",
    type: "Book",
}

extract_array[6] = {
    text: "Dhampiya Atuwa Gatapadaya",
    property1: "Type",
    property1_value: "",
    property2: "Era",
    property2_value: "Anuradhapura",
    property3: "Significance",
    property3_value: "OLDEST Sinhala Literature",
    property4: "Author",
    property4_value: "V Kasyapa",
    type: "Book",
}

extract_array[7] = {
    text: "Siyabaslakara",
    property1: "Source",
    property1_value: "'Kavyadarsha (by Dhandi)'",
    property2: "Era",
    property2_value: "Anuradhapura",
    property3: "Translated from",
    property3_value: "Sanskrit",
    property4: "Author",
    property4_value: "IV Sena",
    type: "Book",
}

extract_array[8] = {
    text: "Sikhawalanda",
    property1: "Type",
    property1_value: "Vinaya Grantha",
    property2: "Era",
    property2_value: "Anuradhapura",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book",
}

extract_array[9] = {
    text: "Heranasikha",
    property1: "Type",
    property1_value: "Vinaya Grantha",
    property2: "Era",
    property2_value: "Anuradhapura",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book",
}

extract_array[10] = {
    text: "Amawathura",
    property1: "Purpose",
    property1_value: "Express Buddha's පුරිසධම්මසාරථි ගුණය in Sinhala",
    property2: "Era",
    property2_value: "Polonnaruwa",
    property3: "Author",
    property3_value: "Gurulogomi",
    property4: "",
    property4_value: "",
    type: "Book",
}

extract_array[11] = {
    text: "Dharma Pradhipikawa",
    property1: "Author",
    property1_value: "Gurulogomi",
    property2: "Era",
    property2_value: "Polonnaruwa",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book",
}

extract_array[12] = {
    text: "Buthsarana",
    property1: "Author",
    property1_value: "Vidya Chakrawarthi",
    property2: "Era",
    property2_value: "Polonnaruwa",
    property3: "Purpose",
    property3_value: "Exprress Buddha's නව අරහාදී ගුණ in Sinhala",
    property4: "",
    property4_value: "",
    type: "Book",
}

extract_array[13] = {
    text: "Sidath Sangarawa",
    property1: "Author",
    property1_value: "Pathiraja Piriwenpathi Thero",
    property2: "Era",
    property2_value: "Dambadeniya",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book",
}


extract_array[14] = {
    text: "Elu Sandas Lakuna",
    property1: "Era",
    property1_value: "Dambadeniya",
    property2: "",
    property2_value: "",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book",
}

extract_array[15] = {
    text: "Sadhdharmarathnawaliya",
    property1: "Era",
    property1_value: "Dambadeniya",
    property2: "Author",
    property2_value: "Dharmasena Thero",
    property3: "Source",
    property3_value: "Pali Dhammapadhattha Kathawa",
    property4: "Purpose",
    property4_value: "",
    type: "Book",
}

extract_array[16] = {
    text: "Pujawaliya",
    property1: "Era",
    property1_value: "Dambadeniya",
    property2: "Author",
    property2_value: "Mayurapada Pariwenadhipathi Buddhaputhra Thero",
    property3: " ",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[17] = {
    text: "Sandakinduru Da Kava",
    property1: "Era",
    property1_value: "Kurunegala",
    property2: "Author",
    property2_value: "Vilgammula Thera",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[18] = {
    text: "Sinhala Thupawansha",
    property1: "Era",
    property1_value: "Kurunegala",
    property2: " ",
    property2_value: " ",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[19] = {
    text: "Mayura Sandeshaya",
    property1: "Era",
    property1_value: "Gampola",
    property2: "Author!?",
    property2_value: "Kaveeshwara*",
    property3: "Significance",
    property3_value: "Oldest Sandesha Kavya",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[20] = {
    text: "Thisara Sandeshaya",
    property1: "Era",
    property1_value: "Gampola",
    property2: "Significance",
    property2_value: "Oldest Sandesha Kavya",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[21] = {
    text: "Sadhdharmalankaraya",
    property1: "Era",
    property1_value: "Gampola",
    property2: "Author",
    property2_value: "II Dharmakirthi Thero",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[22] = {
    text: "Parawi Sandeshaya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "Author",
    property2_value: "Thotagamuwe Sri Rahula Thero",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[23] = {
    text: "Salalihini Sandeshaya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "Author",
    property2_value: "Thotagamuwe Sri Rahula Thero",
    property3: "Purpose",
    property3_value: "VI Parakramabahu's request to 'Vibheeshana'",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[24] = {
    text: "Panchika Pradeepaya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "Author",
    property2_value: "Thotagamuwe Sri Rahula Thero",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[25] = {
    text: "Hansa Sandeshaya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "Author",
    property2_value: "Veedagama Maithreya Thero",
    property3: "Purpose",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[26] = {
    text: "Buduguna Alankaraya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "Author",
    property2_value: "Veedagama Maithreya Thero",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[27] = {
    text: "Loweda Sangarawa",
    property1: "Era",
    property1_value: "Kotte",
    property2: "Author",
    property2_value: "Veedagama Maithreya Thero",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[28] = {
    text: "Daham Geta Malaya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "Author",
    property2_value: "Veedagama Maithreya Thero",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[29] = {
    text: "Gira Sandeshaya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "",
    property2_value: "",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[30] = {
    text: "Kokila Sandeshaya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "",
    property2_value: "",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[31] = {
    text: "Parakumba Siritha",
    property1: "Era",
    property1_value: "Kotte",
    property2: "",
    property2_value: "",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[32] = {
    text: "Kuweni Asna",
    property1: "Era",
    property1_value: "Kotte",
    property2: "",
    property2_value: "",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[33] = {
    text: "Guttila Kavya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "Author",
    property2_value: "Waththeve Thero",
    property3: "Purpose",
    property3_value: "To prove his Greatfulness to his Teacher",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[34] = {
    text: "Vesathuru Da Kava",
    property1: "Era",
    property1_value: "Sithawaka",
    property2: "Author",
    property2_value: "Alagiyawanna Mukaweti",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[35] = {
    text: "Dahamsonda Da Kava",
    property1: "Era",
    property1_value: "Sithawaka",
    property2: "Author",
    property2_value: "Alagiyawanna Mukaweti",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[36] = {
    text: "Subhashithaya",
    property1: "Era",
    property1_value: "Sithawaka",
    property2: "Author",
    property2_value: "Alagiyawanna Mukaweti",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[37] = {
    text: "Parangi Hatana",
    property1: "Era",
    property1_value: "Sithawaka",
    property2: "Author",
    property2_value: "Alagiyawanna Mukaweti",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[38] = {
    text: "Kavyashekaraya",
    property1: "Era",
    property1_value: "Kotte",
    property2: "Author",
    property2_value: "Thotagamuwe Sri Rahula Thero",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book",
}

extract_array[39] = {
    text: "Sakvalihini",
    property1: "Era",
    property1_value: "Colombo",
    property2: "Author",
    property2_value: "Mahagama Sekara",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book2",
}

extract_array[40] = {
    text: "Gama Amathakai",
    property1: "Era",
    property1_value: "Colombo",
    property2: "Author",
    property2_value: "Mahagama Sekara",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book2",
}

extract_array[41] = {
    text: "Avarjana",
    property1: "Era",
    property1_value: "Colombo",
    property2: "Author",
    property2_value: "Gunadasa Amarasekara",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book2",
}

extract_array[42] = {
    text: "Asan Paththini Devathawa",
    property1: "Era",
    property1_value: "Colombo",
    property2: "Author",
    property2_value: "Monica Ruwanpathirana",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book2",
}

extract_array[43] = {
    text: "Piyasena Asu Prashnaya",
    property1: "Era",
    property1_value: "Colombo",
    property2: "Author",
    property2_value: "Monica Ruwanpathirana",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book2",
}

extract_array[44] = {
    text: "Sina Kumari",
    property1: "Era",
    property1_value: "Colombo",
    property2: "Author",
    property2_value: "Chandrarathna Manawasinghe",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book2",
}

extract_array[45] = {
    text: "Kukulu Havilla",
    property1: "Era",
    property1_value: "Colombo",
    property2: "Author",
    property2_value: "Ruypiyal Thennakon",
    property3: "",
    property3_value: "",
    property4: " ",
    property4_value: "",
    type: "Book2",
}

extract_array[46] = {
    text: "Beddegama",
    property1: "Source",
    property1_value: "The Village in the Jungle",
    property2: "Original Author",
    property2_value: "Leonard Woolf",
    property3: "Translator",
    property3_value: "A.P. Gunarathne",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[47] = {
    text: "Vanaraya",
    property1: "Source",
    property1_value: "The Monkey",
    property2: "Original Author",
    property2_value: "Chu Cheng Eng",
    property3: "Translator",
    property3_value: "A.P. Gunarathne",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[48] = {
    text: "Vana Sarana",
    property1: "Source",
    property1_value: "Savage Sanctuary",
    property2: "Original Author",
    property2_value: "R. L. Spitle",
    property3: "Translator",
    property3_value: "A.P. Gunarathne",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[49] = {
    text: "Maki Giya Dadaman",
    property1: "Source",
    property1_value: "Vanished Trails",
    property2: "Translator",
    property2_value: "A.P. Gunarathne",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[50] = {
    text: "Sudu Gona",
    property1: "Source",
    property1_value: "Where the White Sambur roams",
    property2: "Translator",
    property2_value: "A.P. Gunarathne",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[51] = {
    text: "Owa Muthu",
    property1: "Author",
    property1_value: "S. Mahinda Thero",
    property2: "Significance",
    property2_value: "The Author's VERY FIRST Book",
    property3: "Type",
    property3_value: "Kavya Grantha",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[52] = {
    text: "Kavmini",
    property1: "Author",
    property1_value: "S. Mahinda Thero",
    property2: "Type",
    property2_value: "Kavya Grantha (For Kids)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[53] = {
    text: "Kavmuthu",
    property1: "Author",
    property1_value: "S. Mahinda Thero",
    property2: "Type",
    property2_value: "Kavya Grantha (For Kids)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[54] = {
    text: "Lama Kav Kalmbha",
    property1: "Author",
    property1_value: "S. Mahinda Thero",
    property2: "Type",
    property2_value: "Kavya Grantha (For Kids)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[55] = {
    text: "Nidahase Dehena",
    property1: "Author",
    property1_value: "S. Mahinda Thero",
    property2: "Type",
    property2_value: "Jathikhabhimani (Patriotic)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[56] = {
    text: "Nidahase Manthraya",
    property1: "Author",
    property1_value: "S. Mahinda Thero",
    property2: "Type",
    property2_value: "Jathikhabhimani (Patriotic)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[57] = {
    text: "Lankamatha",
    property1: "Author",
    property1_value: "S. Mahinda Thero",
    property2: "Type",
    property2_value: "Jathikhabhimani (Patriotic)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[58] = {
    text: "Aa",
    property1: "Author",
    property1_value: "H. M. Kudaligama",
    property2: "Type",
    property2_value: "Padya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[59] = {
    text: "Kunatuwa",
    property1: "Author",
    property1_value: "H. M. Kudaligama",
    property2: "Type",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[60] = {
    text: "Ekomath Eka Rataka",
    property1: "Author",
    property1_value: "H. M. Kudaligama",
    property2: "Type",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[61] = {
    text: "Sanwadaya",
    property1: "Author",
    property1_value: "H. M. Kudaligama",
    property2: "Type",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[62] = {
    text: "Malagiya Aththo",
    property1: "Creator",
    property1_value: "Prof. Ediraweera Sarathchandra",
    property2: "Type",
    property2_value: "Novel",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[63] = {
    text: "Malawunge Awurudu",
    property1: "Creator",
    property1_value: "Prof. Ediraweera Sarathchandra",
    property2: "Type",
    property2_value: "Novel",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[64] = {
    text: "Sinhabahu",
    property1: "Creator",
    property1_value: "Prof. Ediraweera Sarathchandra",
    property2: "Type",
    property2_value: "Natya*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}


extract_array[65] = {
    text: "Pematho Jayathi Soko",
    property1: "Creator",
    property1_value: "Prof. Ediraweera Sarathchandra",
    property2: "Type",
    property2_value: "Natya*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[66] = {
    text: "Pabawathi",
    property1: "Creator",
    property1_value: "Prof. Ediraweera Sarathchandra",
    property2: "Type",
    property2_value: "Natya*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[67] = {
    text: "Kalpana Lokaya",
    property1: "Creator",
    property1_value: "Prof. Ediraweera Sarathchandra",
    property2: "Type",
    property2_value: "Literary Text*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[68] = {
    text: "Sahithya Vidyawa",
    property1: "Creator",
    property1_value: "Prof. Ediraweera Sarathchandra",
    property2: "Type",
    property2_value: "Literary Text*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[69] = {
    text: "Pin Athi Sarasawi Waramak Denne",
    property1: "Creator",
    property1_value: "Prof. Ediraweera Sarathchandra",
    property2: "Type",
    property2_value: "Autobiography",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[70] = {
    text: "Punaruthpaththiya & Thawath Keti Katha",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Keti Katha*",
    property3: "Significance",
    property3_value: "K. Jayathilaka's FIRST Publication",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[71] = {
    text: "Nonimi Siththama & Thawath Keti Katha",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Keti Katha*",
    property3: "Significance",
    property3_value: "Source of 'Apata Vasikilyak' ",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[72] = {
    text: "Ekageyi Awuruddha",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Keti Katha*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[73] = {
    text: "Punchirala",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[74] = {
    text: "Punchiralage Maranaya 💀",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[75] = {
    text: "Rajapaksha Valawwa",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[76] = {
    text: "Mathu Sambandhayi",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[77] = {
    text: "Maya Maliga",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[78] = {
    text: "Kaalo Ayan Thé",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[79] = {
    text: "Charitha Thunak",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[80] = {
    text: "Delowata Nathi Aya",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[81] = {
    text: "Parajithayo",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[82] = {
    text: "Pithaamaha",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Novel*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[83] = {
    text: "Athiranaya",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Keti Katha*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[84] = {
    text: "Vajira Pabbatha",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Keti Katha*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[85] = {
    text: "Katu saha Mal",
    property1: "Creator",
    property1_value: "K. Jayathilaka",
    property2: "Type",
    property2_value: "Keti Katha*",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[86] = {
    text: "Diyamthi Malaya",
    property1: "Source",
    property1_value: "Guy de Maupassant",
    property2: "Translator*",
    property2_value: "K. J. Karunathilaka",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[87] = {
    text: "Prabudhdha",
    property1: "Author",
    property1_value: "Mahagama Sekara",
    property2: "Type*",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[88] = {
    text: "Thunmanhandiya",
    property1: "Author",
    property1_value: "Mahagama Sekara",
    property2: "Type*",
    property2_value: "Novel",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[89] = {
    text: "Mano Mandira",
    property1: "Author",
    property1_value: "Mahagama Sekara",
    property2: "Type*",
    property2_value: "Novel",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[90] = {
    text: "Biyanowan Ayyandi",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[91] = {
    text: "Vassanaya",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[92] = {
    text: "Subha Udesana",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[93] = {
    text: "Sal Gaha Yata",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[94] = {
    text: "Tharu Lakuna",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[95] = {
    text: "Madhyama Yamaya",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[96] = {
    text: "Ganga Geethaya",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Geetha Sangraha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[97] = {
    text: "Irabatu Tharuwa",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Geetha Sangraha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[98] = {
    text: "Netha Nilupul",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Geetha Sangraha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[99] = {
    text: "Vankagiri Arane",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Geetha Sangraha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[100] = {
    text: "Alakamanda",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Geetha Sangraha",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[101] = {
    text: "Selalihiniyo",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha (For Kids)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[102] = {
    text: "Rankirikata",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha (For Kids)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[103] = {
    text: "Rathu Kikili",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha (For Kids)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[104] = {
    text: "Rathu Kikili",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha (For Kids)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

extract_array[105] = {
    text: "Rathu Kikili",
    property1: "Author",
    property1_value: "Rathne Sri Vijesinghe",
    property2: "Type*",
    property2_value: "Kavya Grantha (For Kids)",
    property3: "",
    property3_value: "",
    property4: "",
    property4_value: "",
    type: "Book3",
}

const sinbg = document.querySelector('#bgsinx');
const sinbgNext = document.querySelector('#bgsin-next');
let activeSinBackground = sinbg;
let currentIMG = 1; 

let rng = 1;
function updateExtract() {
    const activeFilter = filterButtons3.find(button => button.classList.contains('active'));
    const activeType = activeFilter && extractTypesByFilter[activeFilter.id];
    const allowedTypes = activeType ? [activeType] : null;
    const candidates = extract_array
        .map((extract, index) => ({ extract, index }))
        .filter(({ extract, index }) => extract && (
            !allowedTypes || allowedTypes.includes(extract.type.toLowerCase())
        ) && (!flaggedExtractFilterActive || flaggedExtractIndices.includes(index)));

    if (candidates.length === 0) {
        console.error(`No Sinhala extracts match filter ${activeFilter ? activeFilter.id : 'all3'}.`);
        if (flaggedExtractFilterActive) {
            if (placeholder) placeholder.hidden = true;
            const propertyContainer = document.querySelector('.property-box3');
            if (propertyContainer) propertyContainer.hidden = true;
            if (flagButton3) flagButton3.disabled = true;
        }
        return;
    }

    const selected = candidates[Math.floor(Math.random() * candidates.length)];
    rng = selected.index;
    currentExtractIndex = rng;
    if (flagButton3) flagButton3.disabled = false;
    if (placeholder) placeholder.hidden = false;
    const propertyContainer = document.querySelector('.property-box3');
    if (propertyContainer) propertyContainer.hidden = false;
    text_disp.textContent = extract_array[rng].text;
    prop_disp1.textContent = extract_array[rng].property1;

    for (const [index, propertyElement] of [[2, prop_disp2], [3, prop_disp3], [4, prop_disp4]]) {
        const property = extract_array[rng][`property${index}`];
        const propertyValue = extract_array[rng][`property${index}_value`];

        propertyElement.textContent = property;
        propertyElement.classList.toggle(
            'is-hidden',
            property.trim() === '' && propertyValue.trim() === ''
        );
    }
    currentIMG++;
    if (currentIMG > 4) {
        currentIMG = 1;
    }
    const nextBackground = activeSinBackground === sinbg ? sinbgNext : sinbg;
    if (nextBackground) {
        nextBackground.src = `iosbg/ios${currentIMG}.png`;
        nextBackground.classList.add('is-active');
        activeSinBackground.classList.remove('is-active');
        activeSinBackground = nextBackground;
    }
}

if (placeholder) {
    placeholder.addEventListener('click', updateExtract);
}

if (prop_disp1) {
    prop_disp1.addEventListener('mouseover', () => {
        prop_disp1.textContent = extract_array[rng].property1_value;
});
}

if (prop_disp2) {
    prop_disp2.addEventListener('mouseover', () => {
        prop_disp2.textContent = extract_array[rng].property2_value;
});
}

if (prop_disp3) {
    prop_disp3.addEventListener('mouseover', () => {
        prop_disp3.textContent = extract_array[rng].property3_value;
});
}

if (prop_disp4) {
    prop_disp4.addEventListener('mouseover', () => {
        prop_disp4.textContent = extract_array[rng].property4_value;
});
}