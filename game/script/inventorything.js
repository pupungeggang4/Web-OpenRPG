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

    setData(ID) {

    }
}

class Weapon extends InventoryThing {
    constructor() {
        super()
    }
}

class Equipment extends InventoryThing {
    constructor() {
        super()
    }
}

class Item extends InventoryThing {
    constructor() {
        super()
    }
}
