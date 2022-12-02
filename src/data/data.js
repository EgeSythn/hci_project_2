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

export function getData() {
  return { billionaire_country_wealth };
}
