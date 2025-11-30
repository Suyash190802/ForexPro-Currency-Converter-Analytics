
const countryNames = {
  AE: "United Arab Emirates",
  AF: "Afghanistan",
  AG: "Antigua and Barbuda",
  AL: "Albania",
  AM: "Armenia",
  AN: "Netherlands Antilles",
  AO:"Angola",
  AQ: "Antarctica",
  AR: "Argentina",
  AU: "Australia",
  AZ: "Azerbaijan",
  BA: "Bosnia and Herzegovina", 
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgium",
  BG: "Bulgaria",
  BH: "Bahrain",
  BI: "Burundi",
  BM: "Bermuda",
  BN: "Brunei",
  BO: "Bolivia",
  BR: "Brazil",
  BS: "Bahamas",
  BV: "Bouvet Island",
  BW: "Botswana",
  BY: "Belarus",
  BZ: "Belize",
  CA: "Canada",
  CD: "Democratic Republic of the Congo",
  CF: "Central African Republic",
  CH: "Switzerland",
  CL: "Chile",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  CV: "Cape Verde",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DJ: "Djibouti",
  DK: "Denmark",
  DO: "Dominican Republic",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  ET: "Ethiopia",
  FR: "France",
  FJ: "Fiji",
  FK: "Falkland Islands",
  GB: "United Kingdom",
  GE: "Georgia",
  GG: "Guernsey",
  GH: "Ghana",
  GI: "Gibraltar",
  GM: "Gambia",
  GN: "Guinea",
  GT: "Guatemala",
  GY: "Guyana",
  HK: "Hong Kong",
  HN: "Honduras",
  HR: "Croatia",
  HT: "Haiti",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Isreal",
  IN: "India",
  IO: "British Indian Ocean Territory",
  IQ: "Iraq",
  IR: "Iran",
  IS: "Iceland",
  IT: "Italy",
  JE: "Jersey",
  JM: "Jamaica",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kyrgyzstan",
  KH: "Cambodia",
  KM: "Comoros",
  KN: "Saint Kitts and Nevis",
  KP: "North Korea",
  KR: "South Korea",
  KW: "Kuwait",
  KY: "Cayman Islands",
  KZ: "Kazakhstan",
  LA: "Laos",
  LB: "Lebanon",
  LC: "Saint Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  LY: "Libya",
  MA: "Morocco",
  MC: "Monaco",
  MD: "Moldova",
  ME: "Montenegro",
  MF: "Saint Martin",
  MG: "Madagascar",
  MH: "Marshall Islands",
  MK: "North Macedonia",
  ML: "Mali",
  MM: "Myanmar",
  MN: "Mongolia",
  MO: "Macao",
  MP: "Northern Mariana Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldives",
  MW: "Malawi",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NA: "Namibia",
  NC: "New Caledonia",
  NE: "Niger",
  NF: "Norfolk Island",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NP: "Nepal",
  NR: "Nauru",
  NU: "Niue",
  NZ: "New Zealand",
  OM: "Oman",
  PA: "Panama",
  PE: "Peru",
  PF: "French Polynesia",
  PG: "Papua New Guinea",
  PH: "Philippines",
  PK: "Pakistan",
  PL: "Poland",
  PS: "Palestine",
  PT: "Portugal", 
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russia",
  RW: "Rwanda",
  SA: "Saudi Arabia",
  SB: "Solomon Islands",
  SC: "Seychelles",
  SD: "Sudan",
  SE: "Sweden",
  SG: "Singapore",
  SH: "Saint Helena",
  SI: "Slovenia",
  SJ: "Svalbard and Jan Mayen",
  SK: "Slovakia",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Suriname",
  SS: "South Sudan",
  ST: "São Tomé and Príncipe",
  SV: "El Salvador",
  SX: "Sint Maarten",
  SY: "Syria",
  SZ: "Eswatini",
  TC: "Turks and Caicos Islands",
  TD: "Chad",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tajikistan",
  TK: "Tokelau",
  TL: "Timor-Leste",
  TM: "Turkmenistan",
  TN: "Tunisia",
  TO: "Tonga",
  TR: "Turkey",
  TT: "Trinidad and Tobago",
  TV: "Tuvalu",
  TW: "Taiwan",
  TZ: "Tanzania",
  UA: "Ukraine",
  UG: "Uganda",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VA: "Vatican City",
  VC: "Saint Vincent and the Grenadines",
  VE: "Venezuela",
  VG: "British Virgin Islands",
  VI: "U.S. Virgin Islands",
  VN: "Vietnam",
  VU: "Vanuatu",
  WF: "Wallis and Futuna",
  WS: "Samoa",
  XK: "Kosovo",
  YE: "Yemen",
  YT: "Mayotte",
  ZA: "South Africa",
  ZM: "Zambia",
  ZW: "Zimbabwe", 
 };
const baseSelect = document.getElementById("baseCurrency");
const compareSelect = document.getElementById("compareCurrency");
const compareFlag = document.getElementById("compareFlag");
const ctx = document.getElementById("rateChart").getContext("2d");

let chart;

// Function to get flag emoji (not used for <img>, just for emojis if needed)
function getFlagEmoji(cc) {
  return cc.toUpperCase().replace(/./g, char =>
    String.fromCodePoint(127397 + char.charCodeAt())
  );
}

// Populate base currency dropdown
function populateBaseSelect() {
baseSelect.innerHTML = ""; // Clear existing options

  // Add placeholder option
  const placeholder = document.createElement("option");
  placeholder.textContent = "Select a base currency";
  placeholder.disabled = true;
  placeholder.selected = true;
  baseSelect.appendChild(placeholder);

  
  
  for (let code in countryList) {
    const cc = countryList[code];
    const country = countryNames[cc] || "";
    const option = document.createElement("option");
    option.value = code.toLowerCase();
    option.textContent = `${code} - ${country}`;
     option.dataset.flag = `https://flagsapi.com/${cc}/flat/24.png`;
    baseSelect.appendChild(option);
  }
    updateBaseFlag();
}
function updateBaseFlag() {
  const selectedOption = baseSelect.options[baseSelect.selectedIndex];
  baseFlag.src = selectedOption.dataset.flag || "";
}
// Populate compare currency dropdown (excluding base)
function populateCompareSelect(base) {
  compareSelect.innerHTML = "";
   const placeholder = document.createElement("option");
  placeholder.textContent = "Select a currency";
  placeholder.disabled = true;
  placeholder.selected = true;
  compareSelect.appendChild(placeholder);

  for (let code in countryList) {
    const lower = code.toLowerCase();
    if (lower === base) continue;

    const cc = countryList[code];
    const country = countryNames[cc] || "";

    const option = document.createElement("option");
    option.value = lower;
    option.textContent = `${code} - ${country}`;
    option.dataset.flag = `https://flagsapi.com/${cc}/flat/24.png`;

    compareSelect.appendChild(option);
  }

  updateCompareFlag(); // show flag for default selected
}

// Show selected compare flag


// Fetch historical rates
async function fetchHistoricalRates(base = "usd", targets = []) {
  const endDate = new Date();
  const labels = [];
  const datasets = {};
  for (let curr of targets) datasets[curr] = [];

  for (let i = 29; i >= 0; i--) {
    const date = new Date(endDate);
    date.setDate(endDate.getDate() - i);
    const formattedDate = date.toISOString().split("T")[0];
    labels.push(formattedDate);

    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${formattedDate}/v1/currencies/${base}.json`;
    if (!base) return;

    try {
      const response = await fetch(url);
      const data = await response.json();
      for (let curr of targets) {
        const rate = data[base][curr];
        datasets[curr].push(rate ?? null);
      }
    } catch {
      for (let curr of targets) {
        datasets[curr].push(null);
      }
    }
  }

  document.getElementById("chartTitle").innerText =
    `Exchange Rates for ${base.toUpperCase()} - Last 30 Days`;

  renderMultiChart(labels, datasets, base);
}

// Render chart
function renderMultiChart(labels, datasets, base) {
  if (chart) chart.destroy();

  const datasetArray = Object.keys(datasets).map(curr => ({
    label: `${base.toUpperCase()} to ${curr.toUpperCase()}`,
    data: datasets[curr],
    borderColor: getRandomColor(),
    backgroundColor: getRandomColor() + "33",
    fill: true,
    tension: 0.4,
    pointRadius: 3,
    pointHoverRadius: 6
  }));

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: datasetArray
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: context => `Rate: ${context.parsed.y?.toFixed(2) ?? "N/A"}`
          }
        },
        legend: {
          position: "top"
        }
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false
      },
      scales: {
        x: { ticks: { color: "#444" } },
        y: { ticks: { color: "#444" } }
      }
    }
  });
}

// Random color generator
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Update chart based on selections
function updateChart() {
  const base = baseSelect.value;
  const compare = compareSelect.value;
  if (!compare || base === compare) return;
  fetchHistoricalRates(base, [compare]);
}

// Initialize on DOM ready
window.addEventListener("DOMContentLoaded", () => {
  populateBaseSelect();
 // baseSelect.value = "in"; // default to INR
  updateBaseFlag();
  populateCompareSelect("in");
  updateCompareFlag();
  updateChart();
});

// Event listeners
baseSelect.addEventListener("change", () => {
  updateBaseFlag();
  populateCompareSelect(baseSelect.value);
  updateChart();
});

compareSelect.addEventListener("change", () => {
  updateCompareFlag();
  updateChart();
});

function updateBaseFlag() {
  const selectedOption = baseSelect.options[baseSelect.selectedIndex];
  const cc = countryList[baseSelect.value.toUpperCase()];
    if (cc) {
    baseFlag.src = `https://flagsapi.com/${cc}/flat/24.png`;
    baseFlag.style.display = "inline";
  } else {
    baseFlag.style.display = "none";
  }
}

function updateCompareFlag() {
  const selectedOption = compareSelect.options[compareSelect.selectedIndex];
  const cc = countryList[compareSelect.value.toUpperCase()]
  if (cc) {
    compareFlag.src = `https://flagsapi.com/${cc}/flat/24.png`;
    compareFlag.style.display = "inline";
  } else {
    compareFlag.style.display = "none";
  }
}


