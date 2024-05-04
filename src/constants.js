import { Champion } from "./components/Champion.js"

export const XP_THRESH = [-1, -1, 2, 6, 10, 20, 36, 48, 76, 80]
export const REROLL_ODDS = {
  2: [100, 0, 0, 0, 0],
  3: [70, 30, 0, 0, 0],
  4: [55, 30, 15, 0, 0],
  5: [45, 33, 20, 2, 0],
  6: [30, 40, 25, 5, 0],
  7: [19, 35, 35, 10, 1],
  8: [18, 25, 36, 18, 3],
  9: [10, 20, 25, 35, 10],
  10: [5, 10, 20, 40, 25]
}
export const HEADLINER_ODDS = {
  2: [100, 0, 0, 0, 0],
  3: [100, 0, 0, 0, 0],
  4: [80, 20, 0, 0, 0],
  5: [30, 70, 0, 0, 0],
  6: [0, 75, 25, 0, 0],
  7: [0, 40, 60, 0, 0],
  8: [0, 0, 70, 30, 0],
  9: [0, 0, 0, 90, 10],
  10: [0, 0, 0, 30, 70]
}

export const SELL_RATE = {
  1: [1, 3, 5],
  2: [2, 4, 6],
  3: [3, 5, 7],
  4: [4, 6, 8],
  5: [5, 7, 9]
}
export const CHAMPION_TOTAL_AMOUNT = {
  1: 20,
  2: 18,
  3: 16,
  4: 10,
  5: 9
}
export const ROUND_GOLD = {
  1: 2,
  2: 3,
  3: 3,
  4: 4,
  5: 5
}
export var KEYBINDS = [[70, "Buy XP"], [68, "Reroll"], [69, "Sell Champion"]];

export const SET = 11;
export default SET;

export const BENCH_SIZE = 36;

const ChampionData = require("./json/set11champions.json");
export var championPool = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: []
};

// we want this to be a counter
// championPool[cost] is a dictionary: str->int
// champions is a dict str -> int which will be copied from

ChampionData.forEach((champion) => {
  let cost = champion.cost;
  for(let i = 0; i < CHAMPION_TOTAL_AMOUNT[cost]; i++) {
    let champ = new Champion(champion.name, champion.cost, champion.level, champion.traits, false)
    championPool[cost].push(champ);
  }
})
