class InventoryThing {
    constructor() {
        this.ID = 0
        this.name = ''
        this.element = ''
        this.rarity = ''
        this.effect = []
        this.description = ''

        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 80
        this.ctx = this.canvas.getContext('2d')
    }

    setData(data, dataD) {
        this.name = data['name']
        this.element = data['element']
        this.rarity = data['rarity']
        this.effect = data['effect']
        this.description = dataD['description']
    }
}

class Weapon extends InventoryThing {
    constructor() {
        super()
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataWeapon[ID]))
        let dataD = JSON.parse(JSON.stringify(dataWeaponD[ID]))
        this.ID = ID
        this.energy = data['energy']
        super.setData(data, dataD)
    }
}

class Equipment extends InventoryThing {
    constructor() {
        super()
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataEquipment[ID]))
        let dataD = JSON.parse(JSON.stringify(dataEquipmentD[ID]))
        this.ID = ID
        super.setData(data, dataD)
    }
}

class Item extends InventoryThing {
    constructor() {
        super()
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataItem[ID]))
        let dataD = JSON.parse(JSON.stringify(dataItemD[ID]))
        this.ID = ID
        super.setData(data, dataD)
    }
}
