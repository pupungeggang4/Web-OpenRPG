class Player {
    constructor() {
        this.playerLevel = 1
        this.playerExp = 0
        this.playerExpMax = 0
        this.gold = 0

        this.selectedDeck = 0
        this.adventureMode = false

        this.inventory = []
        this.deck = []
        this.equipment = []
        this.item = []
    }

    adventureStart() {
        this.adventureMode = true
    }

    adventureEnd() {
        this.adventureMode = false
    }

    readSave(save) {
        this.playerLevel = save.player.level
        this.playerExp = save.player.exp
        this.playerExpMax = save.player.expMax
        this.gold = save.player.gold
    }

    writeSave(save) {
        save.player.level = this.playerLevel
        save.player.exp = this.playerExp
        save.player.expMax = this.playerExpMax
        save.player.gold = this.gold
    }
}
