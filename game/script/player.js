class Player {
    constructor() {
        this.playerLevel = 1
        this.playerExp = 0
        this.playerExpMax = 0
    }

    readSave(save) {
        this.playerLevel = save.player.level
        this.playerExp = save.player.exp
        this.playerExpMax = save.player.expMax
    }

    writeSave(save) {
        save.player.level = this.playerLevel
        save.player.exp = this.playerExp
        save.player.expMax = this.playerExpMax
    }
}
