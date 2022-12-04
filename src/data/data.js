/**
 * For the sake of simplicity, no need to parse through csv files
 *
 * Datasets initialized here for the sake of clean code
 * and easy retrieval from the Project.jsx file
 */

const billionaire_country_wealth = [
  { name: "Poland", USD: 597, fill: "#E57373" },
  { name: "Saudi Arabia", USD: 700, fill: "#BA68C8" },
  { name: "Turkey", USD: 720, fill: "#7986CB" },
  { name: "Switzerland", USD: 752, fill: "#4FC3F7" },
  { name: "Netherlands", USD: 914, fill: "#4DB6AC" },
  { name: "Indonesia", USD: 1058, fill: "#AED581" },
  { name: "Mexico", USD: 1074, fill: "#00897B" },
  { name: "Spain", USD: 1281, fill: "#7CB342" },
  { name: "Australia", USD: 1328, fill: "#C0CA33" },
  { name: "Brazil", USD: 1445, fill: "#FFF176" },
  { name: "Top Ten Billionaires", USD: 1447.6, fill: "#FFB74D" },
];

const state_covid_deaths_by_race = [
  {
    name: "Alabama",
    populations: [
      { name: "White", value: 3191450 },
      { name: "African American", value: 1285737 },
      { name: "Latino", value: 201970 },
      { name: "Asian", value: 1302295 },
    ],
    cases: [
      { name: "White", value: 2075 },
      { name: "African American", value: 1674 },
      { name: "Latino", value: 141 },
      { name: "Asian", value: 44 },
    ],
    deaths: [
      { name: "White", value: 44 },
      { name: "African American", value: 49 },
      { name: "Latino", value: 3 },
      { name: "Asian", value: 3 },
    ],
  },
  {
    name: "Alaska",
    populations: [
      { name: "White", value: 448081 },
      { name: "African American", value: 22817 },
      { name: "Latino", value: 51712 },
      { name: "Asian", value: 21192 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Arizona",
    populations: [
      { name: "White", value: 3836639 },
      { name: "African American", value: 286614 },
      { name: "Latino", value: 2202173 },
      { name: "Asian", value: 290379 },
    ],
    cases: [
      { name: "White", value: 900 },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: 435 },
      { name: "Asian", value: 76 },
    ],
    deaths: [
      { name: "White", value: 69 },
      { name: "African American", value: 5 },
      { name: "Latino", value: 17 },
      { name: "Asian", value: 3 },
    ],
  },
  {
    name: "Arkansas",
    populations: [
      { name: "White", value: 2173307 },
      { name: "African American", value: 458538 },
      { name: "Latino", value: 223764 },
      { name: "Asian", value: 455500 },
    ],
    cases: [
      { name: "White", value: 1026 },
      { name: "African American", value: 491 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: 22 },
    ],
    deaths: [
      { name: "White", value: 22 },
      { name: "African American", value: 14 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "California",
    populations: [
      { name: "White", value: 14616636 },
      { name: "African American", value: 2164519 },
      { name: "Latino", value: 15477306 },
      { name: "Asian", value: 2164239 },
    ],
    cases: [
      { name: "White", value: 8258 },
      { name: "African American", value: 1927 },
      { name: "Latino", value: 10736 },
      { name: "Asian", value: 3579 },
    ],
    deaths: [
      { name: "White", value: 364 },
      { name: "African American", value: 118 },
      { name: "Latino", value: 296 },
      { name: "Asian", value: 158 },
    ],
  },
  {
    name: "Colorado",
    populations: [
      { name: "White", value: 3822055 },
      { name: "African American", value: 216732 },
      { name: "Latino", value: 1206724 },
      { name: "Asian", value: 219500 },
    ],
    cases: [
      { name: "White", value: 5073 },
      { name: "African American", value: 649 },
      { name: "Latino", value: 2758 },
      { name: "Asian", value: 237 },
    ],
    deaths: [
      { name: "White", value: 273 },
      { name: "African American", value: 29 },
      { name: "Latino", value: 67 },
      { name: "Asian", value: 258 },
    ],
  },
  {
    name: "Connecticut",
    populations: [
      { name: "White", value: 2393694 },
      { name: "African American", value: 315817 },
      { name: "Latino", value: 578833 },
      { name: "Asian", value: 354320 },
    ],
    cases: [
      { name: "White", value: 4516 },
      { name: "African American", value: 1654 },
      { name: "Latino", value: 2137 },
      { name: "Asian", value: 204 },
    ],
    deaths: [
      { name: "White", value: 696 },
      { name: "African American", value: 156 },
      { name: "Latino", value: 89 },
      { name: "Asian", value: 14 },
    ],
  },
  {
    name: "Delaware",
    populations: [
      { name: "White", value: 597917 },
      { name: "African American", value: 204665 },
      { name: "Latino", value: 89540 },
      { name: "Asian", value: 206690 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "District of Columbia",
    populations: [
      { name: "White", value: 253416 },
      { name: "African American", value: 315281 },
      { name: "Latino", value: 76526 },
      { name: "Asian", value: 314705 },
    ],
    cases: [
      { name: "White", value: 461 },
      { name: "African American", value: 1171 },
      { name: "Latino", value: 403 },
      { name: "Asian", value: 36 },
    ],
    deaths: [
      { name: "White", value: 10 },
      { name: "African American", value: 66 },
      { name: "Latino", value: 8 },
      { name: "Asian", value: 2 },
    ],
  },
  {
    name: "Florida",
    populations: [
      { name: "White", value: 11288419 },
      { name: "African American", value: 3167011 },
      { name: "Latino", value: 5370860 },
      { name: "Asian", value: 3224452 },
    ],
    cases: [
      { name: "White", value: 6483 },
      { name: "African American", value: 3441 },
      { name: "Latino", value: 6684 },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: 366 },
      { name: "African American", value: 136 },
      { name: "Latino", value: 150 },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Georgia",
    populations: [
      { name: "White", value: 5487048 },
      { name: "African American", value: 3195363 },
      { name: "Latino", value: 1001472 },
      { name: "Asian", value: 3245371 },
    ],
    cases: [
      { name: "White", value: 3147 },
      { name: "African American", value: 8363 },
      { name: "Latino", value: 828 },
      { name: "Asian", value: 169 },
    ],
    deaths: [
      { name: "White", value: 242 },
      { name: "African American", value: 347 },
      { name: "Latino", value: 22 },
      { name: "Asian", value: 8 },
    ],
  },
  {
    name: "Hawaii",
    populations: [
      { name: "White", value: 310584 },
      { name: "African American", value: 24472 },
      { name: "Latino", value: 150125 },
      { name: "Asian", value: 22629 },
    ],
    cases: [
      { name: "White", value: 135 },
      { name: "African American", value: 5 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: 140 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Idaho",
    populations: [
      { name: "White", value: 1407302 },
      { name: "African American", value: 10739 },
      { name: "Latino", value: 213619 },
      { name: "Asian", value: 10947 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: 41 },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Illinois",
    populations: [
      { name: "White", value: 7834272 },
      { name: "African American", value: 213619 },
      { name: "Latino", value: 2206927 },
      { name: "Asian", value: 1790512 },
    ],
    cases: [
      { name: "White", value: 6939 },
      { name: "African American", value: 6982 },
      { name: "Latino", value: 4179 },
      { name: "Asian", value: 978 },
    ],
    deaths: [
      { name: "White", value: 444 },
      { name: "African American", value: 456 },
      { name: "Latino", value: 109 },
      { name: "Asian", value: 42 },
    ],
  },
  {
    name: "Indiana",
    populations: [
      { name: "White", value: 5278785 },
      { name: "African American", value: 610343 },
      { name: "Latino", value: 461618 },
      { name: "Asian", value: 613080 },
    ],
    cases: [
      { name: "White", value: 5087 },
      { name: "African American", value: 1787 },
      { name: "Latino", value: 406 },
      { name: "Asian", value: 81 },
    ],
    deaths: [
      { name: "White", value: 345 },
      { name: "African American", value: 98 },
      { name: "Latino", value: 9 },
      { name: "Asian", value: 2 },
    ],
  },
  {
    name: "Iowa",
    populations: [
      { name: "White", value: 2701250 },
      { name: "African American", value: 107471 },
      { name: "Latino", value: 185746 },
      { name: "Asian", value: 103989 },
    ],
    cases: [
      { name: "White", value: 1698 },
      { name: "African American", value: 210 },
      { name: "Latino", value: 417 },
      { name: "Asian", value: 91 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Kansas",
    populations: [
      { name: "White", value: 2210739 },
      { name: "African American", value: 163713 },
      { name: "Latino", value: 345510 },
      { name: "Asian", value: 161148 },
    ],
    cases: [
      { name: "White", value: 997 },
      { name: "African American", value: 280 },
      { name: "Latino", value: 250 },
      { name: "Asian", value: 20 },
    ],
    deaths: [
      { name: "White", value: 47 },
      { name: "African American", value: 27 },
      { name: "Latino", value: 2 },
      { name: "Asian", value: 0 },
    ],
  },
  {
    name: "Kentucky",
    populations: [
      { name: "White", value: 3769995 },
      { name: "African American", value: 349407 },
      { name: "Latino", value: 155163 },
      { name: "Asian", value: 355829 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Louisiana",
    populations: [
      { name: "White", value: 2739086 },
      { name: "African American", value: 1492230 },
      { name: "Latino", value: 243620 },
      { name: "Asian", value: 1505991 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: 367 },
      { name: "African American", value: 719 },
      { name: "Latino", value: 13 },
      { name: "Asian", value: 10 },
    ],
  },
  {
    name: "Maine",
    populations: [
      { name: "White", value: 1247090 },
      { name: "African American", value: 16990 },
      { name: "Latino", value: 21899 },
      { name: "Asian", value: 15761 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Maryland",
    populations: [
      { name: "White", value: 3066146 },
      { name: "African American", value: 1759438 },
      { name: "Latino", value: 612709 },
      { name: "Asian", value: 1776692 },
    ],
    cases: [
      { name: "White", value: 2681 },
      { name: "African American", value: 4301 },
      { name: "Latino", value: 1357 },
      { name: "Asian", value: 252 },
    ],
    deaths: [
      { name: "White", value: 137 },
      { name: "African American", value: 166 },
      { name: "Latino", value: 17 },
      { name: "Asian", value: 13 },
    ],
  },
  {
    name: "Massachusetts",
    populations: [
      { name: "White", value: 4906564 },
      { name: "African American", value: 463796 },
      { name: "Latino", value: 811292 },
      { name: "Asian", value: 477846 },
    ],
    cases: [
      { name: "White", value: 6537 },
      { name: "African American", value: 2144 },
      { name: "Latino", value: 3185 },
      { name: "Asian", value: 485 },
    ],
    deaths: [
      { name: "White", value: 414 },
      { name: "African American", value: 59 },
      { name: "Latino", value: 58 },
      { name: "Asian", value: 13 },
    ],
  },
  {
    name: "Michigan",
    populations: [
      { name: "White", value: 7476534 },
      { name: "African American", value: 1360345 },
      { name: "Latino", value: 504398 },
      { name: "Asian", value: 1359264 },
    ],
    cases: [
      { name: "White", value: 8707 },
      { name: "African American", value: 9908 },
      { name: "Latino", value: 600 },
      { name: "Asian", value: 600 },
    ],
    deaths: [
      { name: "White", value: 913 },
      { name: "African American", value: 891 },
      { name: "Latino", value: 22 },
      { name: "Asian", value: 22 },
    ],
  },
  {
    name: "Minnesota",
    populations: [
      { name: "White", value: 4455056 },
      { name: "African American", value: 336505 },
      { name: "Latino", value: 296666 },
      { name: "Asian", value: 356949 },
    ],
    cases: [
      { name: "White", value: 1325 },
      { name: "African American", value: 228 },
      { name: "Latino", value: 124 },
      { name: "Asian", value: 104 },
    ],
    deaths: [
      { name: "White", value: 82 },
      { name: "African American", value: 62 },
      { name: "Latino", value: 3 },
      { name: "Asian", value: 1 },
    ],
  },
  {
    name: "Mississippi",
    populations: [
      { name: "White", value: 1688447 },
      { name: "African American", value: 1121752 },
      { name: "Latino", value: 86035 },
      { name: "Asian", value: 1130323 },
    ],
    cases: [
      { name: "White", value: 1365 },
      { name: "African American", value: 2124 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: 48 },
      { name: "African American", value: 92 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Missouri",
    populations: [
      { name: "White", value: 4854821 },
      { name: "African American", value: 699730 },
      { name: "Latino", value: 255803 },
      { name: "Asian", value: 694270 },
    ],
    cases: [
      { name: "White", value: 2008 },
      { name: "African American", value: 1479 },
      { name: "Latino", value: 211 },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: 69 },
      { name: "African American", value: 54 },
      { name: "Latino", value: 7 },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Montana",
    populations: [
      { name: "White", value: 906221 },
      { name: "African American", value: 4348 },
      { name: "Latino", value: 38933 },
      { name: "Asian", value: 4380 },
    ],
    cases: [
      { name: "White", value: 330 },
      { name: "African American", value: 1 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: 1 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Nebraska",
    populations: [
      { name: "White", value: 1517634 },
      { name: "African American", value: 88442 },
      { name: "Latino", value: 209917 },
      { name: "Asian", value: 87147 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Nevada",
    populations: [
      { name: "White", value: 1462301 },
      { name: "African American", value: 249967 },
      { name: "Latino", value: 864663 },
      { name: "Asian", value: 265472 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "New Hampshire",
    populations: [
      { name: "White", value: 1212790 },
      { name: "African American", value: 17622 },
      { name: "Latino", value: 50393 },
      { name: "Asian", value: 18023 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "New Jersey",
    populations: [
      { name: "White", value: 4939479 },
      { name: "African American", value: 1129257 },
      { name: "Latino", value: 1840433 },
      { name: "Asian", value: 1148321 },
    ],
    cases: [
      { name: "White", value: 8431 },
      { name: "African American", value: 5160 },
      { name: "Latino", value: 6921 },
      { name: "Asian", value: 1107 },
    ],
    deaths: [
      { name: "White", value: 1367 },
      { name: "African American", value: 606 },
      { name: "Latino", value: 451 },
      { name: "Asian", value: 147 },
    ],
  },
  {
    name: "New Mexico",
    populations: [
      { name: "White", value: 780688 },
      { name: "African American", value: 38016 },
      { name: "Latino", value: 1018344 },
      { name: "Asian", value: 38022 },
    ],
    cases: [
      { name: "White", value: 364 },
      { name: "African American", value: 47 },
      { name: "Latino", value: 413 },
      { name: "Asian", value: 29 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "New York",
    populations: [
      { name: "White", value: 10936578 },
      { name: "African American", value: 2808679 },
      { name: "Latino", value: 3811654 },
      { name: "Asian", value: 2846481 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: 2799 },
      { name: "African American", value: 1825 },
      { name: "Latino", value: 1866 },
      { name: "Asian", value: 414 },
    ],
  },
  {
    name: "North Carolina",
    populations: [
      { name: "White", value: 6472902 },
      { name: "African American", value: 2146254 },
      { name: "Latino", value: 962466 },
      { name: "Asian", value: 2175617 },
    ],
    cases: [
      { name: "White", value: 2480 },
      { name: "African American", value: 1769 },
      { name: "Latino", value: 362 },
      { name: "Asian", value: 80 },
    ],
    deaths: [
      { name: "White", value: 87 },
      { name: "African American", value: 52 },
      { name: "Latino", value: 5 },
      { name: "Asian", value: 1 },
    ],
  },
  {
    name: "North Dakota",
    populations: [
      { name: "White", value: 637291 },
      { name: "African American", value: 20113 },
      { name: "Latino", value: 26479 },
      { name: "Asian", value: 22830 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Ohio",
    populations: [
      { name: "White", value: 9204374 },
      { name: "African American", value: 1418048 },
      { name: "Latino", value: 436762 },
      { name: "Asian", value: 1421030 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Oklahoma",
    populations: [
      { name: "White", value: 2576937 },
      { name: "African American", value: 282622 },
      { name: "Latino", value: 417708 },
      { name: "Asian", value: 283068 },
    ],
    cases: [
      { name: "White", value: 1742 },
      { name: "African American", value: 129 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: 48 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Oregon",
    populations: [
      { name: "White", value: 3132752 },
      { name: "African American", value: 74356 },
      { name: "Latino", value: 540924 },
      { name: "Asian", value: 74345 },
    ],
    cases: [
      { name: "White", value: 766 },
      { name: "African American", value: 31 },
      { name: "Latino", value: 340 },
      { name: "Asian", value: 48 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Pennsylvania",
    populations: [
      { name: "White", value: 9780941 },
      { name: "African American", value: 1360576 },
      { name: "Latino", value: 938428 },
      { name: "Asian", value: 1367815 },
    ],
    cases: [
      { name: "White", value: 4876 },
      { name: "African American", value: 2497 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: 253 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Rhode Island",
    populations: [
      { name: "White", value: 763670 },
      { name: "African American", value: 59001 },
      { name: "Latino", value: 163346 },
      { name: "Asian", value: 57196 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "South Carolina",
    populations: [
      { name: "White", value: 3197812 },
      { name: "African American", value: 1328352 },
      { name: "Latino", value: 285990 },
      { name: "Asian", value: 1344741 },
    ],
    cases: [
      { name: "White", value: 2206 },
      { name: "African American", value: 1553 },
      { name: "Latino", value: 168 },
      { name: "Asian", value: 82 },
    ],
    deaths: [
      { name: "White", value: 45 },
      { name: "African American", value: 60 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "South Dakota",
    populations: [
      { name: "White", value: 715927 },
      { name: "African American", value: 15840 },
      { name: "Latino", value: 31278 },
      { name: "Asian", value: 16345 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Tennessee",
    populations: [
      { name: "White", value: 4962226 },
      { name: "African American", value: 1107218 },
      { name: "Latino", value: 361203 },
      { name: "Asian", value: 1115187 },
    ],
    cases: [
      { name: "White", value: 3195 },
      { name: "African American", value: 1383 },
      { name: "Latino", value: 400 },
      { name: "Asian", value: 114 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Texas",
    populations: [
      { name: "White", value: 11855092 },
      { name: "African American", value: 3269253 },
      { name: "Latino", value: 11158751 },
      { name: "Asian", value: 3330204 },
    ],
    cases: [
      { name: "White", value: 883 },
      { name: "African American", value: 267 },
      { name: "Latino", value: 590 },
      { name: "Asian", value: 103 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Utah",
    populations: [
      { name: "White", value: 2428495 },
      { name: "African American", value: 33713 },
      { name: "Latino", value: 434290 },
      { name: "Asian", value: 35689 },
    ],
    cases: [
      { name: "White", value: 1475 },
      { name: "African American", value: 51 },
      { name: "Latino", value: 815 },
      { name: "Asian", value: 85 },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Vermont",
    populations: [
      { name: "White", value: 578706 },
      { name: "African American", value: 7602 },
      { name: "Latino", value: 11932 },
      { name: "Asian", value: 7731 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Virginia",
    populations: [
      { name: "White", value: 5226540 },
      { name: "African American", value: 1582421 },
      { name: "Latino", value: 790662 },
      { name: "Asian", value: 1595039 },
    ],
    cases: [
      { name: "White", value: 2460 },
      { name: "African American", value: 1401 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Washington",
    populations: [
      { name: "White", value: 5077103 },
      { name: "African American", value: 259482 },
      { name: "Latino", value: 940792 },
      { name: "Asian", value: 262211 },
    ],
    cases: [
      { name: "White", value: 3619 },
      { name: "African American", value: 436 },
      { name: "Latino", value: 1689 },
      { name: "Asian", value: 653 },
    ],
    deaths: [
      { name: "White", value: 397 },
      { name: "African American", value: 16 },
      { name: "Latino", value: 38 },
      { name: "Asian", value: 57 },
    ],
  },
  {
    name: "West Virginia",
    populations: [
      { name: "White", value: 1670509 },
      { name: "African American", value: 65597 },
      { name: "Latino", value: 22807 },
      { name: "Asian", value: 71358 },
    ],
    cases: [
      { name: "White", value: 587 },
      { name: "African American", value: 78 },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
  {
    name: "Wisconsin",
    populations: [
      { name: "White", value: 4706315 },
      { name: "African American", value: 361909 },
      { name: "Latino", value: 397847 },
      { name: "Asian", value: 362314 },
    ],
    cases: [
      { name: "White", value: 2081 },
      { name: "African American", value: 984 },
      { name: "Latino", value: 556 },
      { name: "Asian", value: 108 },
    ],
    deaths: [
      { name: "White", value: 118 },
      { name: "African American", value: 77 },
      { name: "Latino", value: 11 },
      { name: "Asian", value: 5 },
    ],
  },
  {
    name: "Wyoming",
    populations: [
      { name: "White", value: 486586 },
      { name: "African American", value: 5149 },
      { name: "Latino", value: 58122 },
      { name: "Asian", value: 5154 },
    ],
    cases: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
    deaths: [
      { name: "White", value: "No Confirmed Data in Category" },
      { name: "African American", value: "No Confirmed Data in Category" },
      { name: "Latino", value: "No Confirmed Data in Category" },
      { name: "Asian", value: "No Confirmed Data in Category" },
    ],
  },
];

/**
 * If above $50 --> #B03A2E
 * If above $20 --> #F2333B
 * If above $10 --> #FFDD3E
 * If above $5 --> #56ABEC
 * If above $0 --> #2874A6
 */

const insulin_legend = [
  { name: "$50 - $100", color: "#B03A2E" },
  { name: "$20 - $50", color: "#F2333B" },
  { name: "$10 - $20", color: "#FFDD3E" },
  { name: "$5 - $10", color: "#56ABEC" },
  { name: "$0 - $5", color: "#2874A6" },
];

const insulin_data = [
  { name: "United States", USD: 98.7 },
  { name: "Chile", USD: 21.48 },
  { name: "Mexico", USD: 16.48 },
  { name: "Japan", USD: 14.4 },
  { name: "Switzerland", USD: 12.36 },
  { name: "Canada", USD: 12.0 },
  { name: "Germany", USD: 11.0 },
  { name: "Luxembourg", USD: 10.15 },
  { name: "Italy", USD: 10.03 },
  { name: "Netherlands", USD: 9.98 },
  { name: "Ireland", USD: 9.85 },
  { name: "Estonia", USD: 9.61 },
  { name: "France", USD: 9.08 },
  { name: "Spain", USD: 9.04 },
  { name: "Finland", USD: 8.94 },
  { name: "New Zealand", USD: 8.89 },
  { name: "Greece", USD: 8.65 },
  { name: "Latvia", USD: 8.39 },
  { name: "Belgium", USD: 8.3 },
  { name: "Czech Republic", USD: 8.18 },
  { name: "Portugal", USD: 8.03 },
  { name: "Austria", USD: 7.92 },
  { name: "Lithuania", USD: 7.89 },
  { name: "Norway", USD: 7.79 },
  { name: "Sweden", USD: 7.71 },
  { name: "United Kingdom", USD: 7.52 },
  { name: "Slovenia", USD: 7.43 },
  { name: "Australia", USD: 6.94 },
  { name: "Slovakia", USD: 6.91 },
  { name: "Hungary", USD: 6.14 },
  { name: "Poland", USD: 5.28 },
  { name: "Turkey", USD: 2.64 },
];

export function getData() {
  return {
    billionaire_country_wealth,
    insulin_legend,
    state_covid_deaths_by_race,
  };
}
