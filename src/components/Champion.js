// Class to store Champion info

export class Champion {
    name = "";
    cost = 0;
    level = 0;
    traits = [];
    isHeadliner = false;
    constructor(name, cost, level, traits, isHeadliner) {
        this.name = name;
        this.cost = cost;
        this.level = level;
        this.traits = traits;
        this.isHeadliner = isHeadliner;
    }

    setEmpty(){
        this.name = "";
        this.cost = 0;
        this.level = 0;
        this.isHeadliner = false;
    }

    setHeadliner(){
        this.isHeadliner = true;
    }

    copy(){ // there is never any need to copy headliner status
        return new Champion(this.name, this.cost, this.level, this.traits, false)
        // this.name = champion.name;
        // this.cost = champion.cost;
        // this.level = champion.level;
        // this.traits = champion.traits;
        // this.isHeadliner = false;
    }
}