// Class to store Champion info

class Champion {
    constructor(name, cost, level, traits = [], isHeadliner=false) {
        this.name = name;
        this.cost = cost;
        this.level = level;
        this.traits = traits;
        this.isHeadliner = isHeadliner;
    }
}