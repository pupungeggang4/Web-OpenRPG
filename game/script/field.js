class PlayerField {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
        this.speed = 320
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        this.ctx.lineWidth = 2
    }

    handleTick(game) {
        this.move(game)
        this.adventureHandle(game)
    }

    move(game, field) {
        if (game.keyPressed['left'] === true) {
            this.rect.position.x -= this.speed * game.delta / 1000
        }
        if (game.keyPressed['right'] === true) {
            this.rect.position.x += this.speed * game.delta / 1000
        }
        if (game.keyPressed['up'] === true) {
            this.rect.position.y -= this.speed * game.delta / 1000
        }
        if (game.keyPressed['down'] === true) {
            this.rect.position.y += this.speed * game.delta / 1000
        }

        for (let i = 0; i < field.wallList.length; i++) {
            
        }
    }

    adventureHandle(game) {
        let v = false
        let va = game.field.villageArea

        for (let i = 0; i < va.length; i++) {
            if (this.rect.position.insideArea(va[i])) {
                v = true
                break
            }
        }

        if (v === false && game.player.adventureMode === false) {
            game.player.adventureStart(game)
        } else if (v === true && game.player.adventureMode === true) {
            game.player.adventureEnd(game)
        }
    }

    render(ctx, camera) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.strokeRect(1, 1, 78, 78)
        Render.renderImageRect(ctx, this.canvas, this.rect, camera)
    }
}

class Field {
    constructor() {
        this.villageArea = JSON.parse(JSON.stringify(dataWorld.village))
        this.monsterSpawn = JSON.parse(JSON.stringify(dataWorld.monsterSpawn))
        this.wall = JSON.parse(JSON.stringify(dataWorld.wall))
        this.player = new PlayerField()
        this.wallList = []
        this.thingList = []
        this.monsterList = []
        this.camera = new Rect2(0, 0, 1280, 720)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 1280
        this.canvas.height = 720
        this.ctx = this.canvas.getContext('2d')

        for (let i = 0; i < dataWorld.wall.length; i++) {
            let w = dataWorld.wall[i]
            let wall = new FieldWall(w[0], w[1], w[2], w[3])
            this.wallList.push(wall)
        }
    }

    spawnMonster() {
        this.monsterList = []
        for (let i = 0; i < this.monsterSpawn.length; i++) {
            let m = new FieldMonster()
            m.rect.position.x = this.monsterSpawn[i][0]
            m.rect.position.y = this.monsterSpawn[i][1]
            this.monsterList.push(m)
        }
    }

    handleTick(game) {
        this.player.handleTick(game, this)
        this.camera.position.x = this.player.rect.position.x
        this.camera.position.y = this.player.rect.position.y
    }

    render(ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (let i = 0; i < this.thingList.length; i++) {
            if (this.thingList[i].rect.position.insideRect(this.camera)) {
                this.thingList[i].render(this.ctx, this.camera)
            }
        }
        for (let i = 0; i < this.monsterList.length; i++) {
            if (this.monsterList[i].rect.position.insideRect(this.camera)) {
                this.monsterList[i].render(this.ctx, this.camera)
            }
        }
        for (let i = 0; i < this.wallList.length; i++) {
            if (this.wallList[i].rect.position.insideRect(this.camera)) {
                this.wallList[i].render(this.ctx, this.camera)
            }
        }
        this.player.render(this.ctx, this.camera)
        ctx.drawImage(this.canvas, 0, 0)
    }

    readSave(save) {
        this.player.rect.position = new Vector2(save.position[0], save.position[1])
    }

    writeSave(save) {
        save.position = [this.player.rect.position.x, this.player.rect.position.y]
    }
}

class FieldThing {
    constructor() {
        this.canvas = document.createElement('canvas')
        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        this.ctx.lineWidth = 2
    }
}

class FieldWall extends FieldThing {
    constructor(x, y, w, h) {
        super()
        this.rect.position.x = x
        this.rect.position.y = y
        this.rect.size.x = w
        this.rect.size.y = h
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx.lineWidth = 2
    }

    render(ctx, camera) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.strokeRect(1, 1, this.rect.size.x - 2, this.rect.size.y - 2)
        Render.renderImageRect(ctx, this.canvas, this.rect, camera)
    }
}

class FieldMonster extends FieldThing {
    constructor() {
        super()
        this.type = 'monster'
    }

    render(ctx, camera) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(img.field.monster, 0, 0)
        Render.renderImageRect(ctx, this.canvas, this.rect, camera)
    }
}

class FieldResource extends FieldThing {
    constructor() {
        super()
        this.tupe = 'resource'
    }

    render(ctx, camera) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.strokeRect(1, 1, 78, 78)
        Render.renderImageRect(ctx, this.canvas, this.rect, camera)
    }
}
