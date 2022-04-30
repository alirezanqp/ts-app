class Team {
    //private id: string;
    //public name: string;
    private members: string[] = [];
    

    constructor(private readonly id:number, public name: string) {
        
    }

    describe(this: Team) {
        console.log(`team name : ${this.name} , id: ${this.id}`)
    }

    addMember(member: string) {
        this.members.push(member)
    }

    membersInfo() {
        console.log(this.members)
    }
}

class DevTeam extends Team {
    private developers : string[]

    constructor(id: number, developers : string[]) {
        super(id, 'dev team')
        this.developers = developers
    }

    addDeveloper(member: string): void {
        this.developers.push(member)
    }

    
}

const newTeam = new DevTeam(12, [])

newTeam.addDeveloper('hossein')

newTeam.membersInfo()
newTeam.describe()


