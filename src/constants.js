export const XP_THRESH = [-1, -1, 2, 6, 10, 20, 32, 50, 66]
export const REROLL_ODDS = {
  2: [100, 0, 0, 0, 0],
  3: [70, 30, 0, 0, 0],
  4: [55, 30, 15, 0, 0],
  5: [45, 33, 20, 2, 0],
  6: [25, 40, 30, 5, 0],
  7: [19, 30, 35, 15, 1],
  8: [15, 20, 35, 25, 5],
  9: [5, 10, 20, 40, 25]
}
export const SELL_RATE = {
  1: [1, 3, 5],
  2: [2, 4, 6],
  3: [3, 5, 7],
  4: [4, 6, 8],
  5: [5, 7, 9]
}
export const CHAMPION_TOTAL_AMOUNT = {
  1: 29,
  2: 22,
  3: 18,
  4: 12,
  5: 10
}
export const ROUND_GOLD = {
  1: 2,
  2: 3,
  3: 3,
  3: 4,
  4: 5
}
export var KEYBINDS = [[70, "Buy XP"], [68, "Reroll"], [69, "Sell Champion"]];

export const SET = 10
export default SET;

export const BENCH_SIZE = 36;

const ChampionData = require("./json/set10champions.json");
export var championPool = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: []
};
ChampionData.forEach((champion) => {
  let cost = champion.cost;
  for(let i = 0; i < CHAMPION_TOTAL_AMOUNT[cost]; i++) {
    championPool[cost].push(champion);
  }
})
