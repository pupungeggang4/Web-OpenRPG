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
    }

    move(game) {
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
    }

    render(ctx, camera) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.strokeRect(1, 1, 78, 78)
        Render.renderImageRect(ctx, this.canvas, this.rect, camera)
    }
}

class Field {
    constructor() {
        this.player = new PlayerField()
        this.thingList = [new FieldEnemy()]
        this.camera = new Rect2(0, 0, 1280, 720)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 1280
        this.canvas.height = 720
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {
        this.player.handleTick(game)
        this.camera.position.x = this.player.rect.position.x
        this.camera.position.y = this.player.rect.position.y
    }

    render(ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (let i = 0; i < this.thingList.length; i++) {
            if (this.thingList[i].rect.overlap(this.camera)) {
                this.thingList[i].render(this.ctx, this.camera)
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

    }
}

class FieldEnemy extends FieldThing {
    constructor() {
        super()
        this.type = 'enemy'
        this.rect = new Rect2(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        this.ctx.lineWidth = 2
    }

    render(ctx, camera) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.strokeRect(1, 1, 78, 78)
        Render.renderImageRect(ctx, this.canvas, this.rect, camera)
    }
}
