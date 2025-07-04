class Player {
    constructor() {
        this.playerLevel = 1
        this.playerExp = 0
        this.playerExpMax = 0
        this.gold = 0

        this.selectedDeck = 0
        this.adventureMode = false

        this.inventory = []
        this.weapon = new Weapon()
        this.deck = []
        this.equipment = []
        this.item = []
    }

    adventureStart(game) {
        this.adventureMode = true
        let deckID = this.selectedDeck + 1
        let dataDeckCopy = JSON.parse(JSON.stringify(dataDeck[deckID]))
        this.deck = []
        for (let i = 0; i < dataDeckCopy['deck'].length; i++) {
            let card = new Card()
            card.setData(dataDeckCopy['deck'][i])
            this.deck.push(card)
        }
        this.weapon.setData(dataDeckCopy['weapon'])
        this.equipment = []
        let equipment = new Equipment()
        equipment.setData(dataDeckCopy['equipment'])
        this.equipment.push(equipment)
        let item = new Item()
        item.setData(1)
        this.item.push(item)

        game.field.spawnMonster()
    }

    adventureEnd(game) {
        this.adventureMode = false
        this.weapon = new Weapon()
        this.deck = []
        this.equipment = []
        this.item = []
    }

    readSave(save) {
        let s = JSON.parse(JSON.stringify(save))
        this.playerLevel = s.player.level
        this.playerExp = s.player.exp
        this.playerExpMax = s.player.expMax
        this.gold = s.player.gold
        this.adventureMode = s.player.adventureMode
        this.weapon.setData(s.player.weapon)
        this.inventory = []
        for (let i = 0; i < s.player.inventory.length; i++) {
            let inventoryItem = new InventoryItem()
            this.inventory.push(inventoryItem)
        }
        this.deck = []
        for (let i = 0; i < s.player.deck.length; i++) {
            let card = new Card()
            card.setData(s.player.deck[i])
            this.deck.push(card)
        }
        this.equipment = []
        for (let i = 0; i < s.player.equipment.length; i++) {
            let equipment = new Equipement()
            equipment.setData(s.player.equipment)
            this.equipment.push(equipment)
        }
        this.item = []
        for (let i = 0; i < s.player.item.length; i++) {
            let item = new Item()
            item.setData(s.player.item)
            this.item.push(item)
        }
    }

    writeSave(save) {
        save.player.level = this.playerLevel
        save.player.exp = this.playerExp
        save.player.expMax = this.playerExpMax
        save.player.gold = this.gold
        save.player.adventureMode = this.adventureMode
        save.player.inventory = []
        for (let i = 0; i < this.inventory.length; i++) {
            save.player.inventory.push(this.inventory[i].ID)
        }
        save.player.deck = []
        for (let i = 0; i < this.deck.length; i++) {
            save.player.deck.push(this.deck[i].ID)
        }
        save.player.weapon = this.weapon.ID
        save.player.equipment = []
        for (let i = 0; i < this.equipment.length; i++) {
            save.player.equipment.push(this.equipment[i].ID)
        }
        save.player.item = []
        for (let i = 0; i < this.item.length; i++) {
            save.player.item.push(this.item[i].ID)
        }
    }
}
