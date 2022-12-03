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

const low_income_vaccine_doses = [
  { name: "Low Income Countries", "Doses Per 100": 13300 },
  { name: "Low Income Countries", "Doses Per 100": 13300 },
  { name: "Low Income Countries", "Doses Per 100": 13300 },
  { name: "Low Income Countries", "Doses Per 100": 13300 },
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
  return { billionaire_country_wealth, insulin_legend };
}
