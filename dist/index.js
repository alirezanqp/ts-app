"use strict";
class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private id: string;
        //public name: string;
        this.members = [];
    }
    describe() {
        console.log(`team name : ${this.name} , id: ${this.id}`);
    }
    addMember(member) {
        this.members.push(member);
    }
    membersInfo() {
        console.log(this.members);
    }
}
class DevTeam extends Team {
    constructor(id, developers) {
        super(id, 'dev team');
        this.developers = developers;
    }
    addDeveloper(member) {
        this.developers.push(member);
    }
}
const newTeam = new DevTeam(12, []);
newTeam.addDeveloper('hossein');
newTeam.membersInfo();
newTeam.describe();
