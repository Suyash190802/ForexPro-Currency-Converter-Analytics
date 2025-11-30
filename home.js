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






const grid = document.getElementById("countryGrid");
let index=0;
for (let code in countryList) {
  let countryCode = countryList[code];
  console.log(countryCode)
  if (!countryCode) {
    console.log("here");
    console.warn(`Missing country code for currency: ${code}`);
    continue;

  } // Skip if no country code is found
  let fullName = countryNames[countryCode] || "Unknown";

  console.log(fullName)

  let div = document.createElement("div");
  div.className = "country-box";
  div.style.animationDelay = `${index * 0.1}s`; 
  div.innerHTML = `
    <img src="https://flagsapi.com/${countryCode}/shiny/64.png" alt="${code}" />
    <div><strong>${code}</strong></div>
    <div>${fullName}</div>
  `;
  grid.appendChild(div);
  index++;
}
window.addEventListener("DOMContentLoaded", () => {
  const countrySection = document.getElementById("countrySection");
  const getStartedBtn = document.getElementById("getStartedBtn");
 const footer = document.getElementById("pageFooter");
  // ❗ Reset on full refresh (optional: remove if you want flags to persist)
  if (!performance.navigation || performance.navigation.type === 1) {
    // Full reload → Reset session
    sessionStorage.removeItem("started");
  }

  // Initial state
  if (sessionStorage.getItem("started") === "true") {
    countrySection.classList.remove("hidden");
     countrySection.classList.add("fade-in");
    getStartedBtn.style.display = "none";
     footer.classList.remove("hidden");
  } else {
    countrySection.classList.add("hidden");
    getStartedBtn.style.display = "inline-block";
    footer.classList.add("hidden");
  }

  // On click
  getStartedBtn.addEventListener("click", () => {
    countrySection.classList.remove("hidden");
     countrySection.classList.add("fade-in");
    getStartedBtn.style.display = "none";
    sessionStorage.setItem("started", "true");
        footer.classList.remove("hidden");
  });
});
