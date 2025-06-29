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

class InventoryItem {
    constructor() {
        this.ID = 0
    }
}

class Weapon extends InventoryThing {
    constructor() {
        super()
    }

    setData(ID) {
        this.ID = ID
        if (ID != 0) {
            let data = JSON.parse(JSON.stringify(dataWeapon[ID]))
            let dataD = JSON.parse(JSON.stringify(dataWeaponD[ID]))
            this.energy = data['energy']
            super.setData(data, dataD)
        }
    }

    render(ctx, pos) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(img.weapon[this.ID], 0, 0)
        ctx.drawImage(this.canvas, pos[0], pos[1])
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

    render(ctx, pos) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(img.equipment[this.ID], 0, 0)
        ctx.drawImage(this.canvas, pos[0], pos[1])
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

    render(ctx, pos) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(img.item[this.ID], 0, 0)
        ctx.drawImage(this.canvas, pos[0], pos[1])
    }
}
