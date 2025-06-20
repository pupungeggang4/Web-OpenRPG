class PlayerField {
    constructor() {
        this.rect = new Rect2(0, 0, 80, 80)
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
        if (game.keyPressed['up'] === true) {

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
        this.camera = new Rect2(0, 0, 1280, 720)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 1280
        this.canvas.height = 720
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(game) {
        this.player.handleTick(game)
    }

    render(ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.player.render(this.ctx, this.camera)
        ctx.drawImage(this.canvas, 0, 0)
    }
}
