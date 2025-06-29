class Card {
    constructor() {
        this.ID = 0
        this.element = ''
        this.name = ''
        this.rarity = ''
        this.type = ''
        this.energy = 0
        this.effect = []
        this.description = []

        this.canvas = document.createElement('canvas')
        this.canvas.width = 200
        this.canvas.height = 240
        this.ctx = this.canvas.getContext('2d')
        this.ctx.textBaseline = 'top'
        this.ctx.lineWidth = 2
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        let dataD = JSON.parse(JSON.stringify(dataCardD[ID]))

        this.ID = ID
        this.element = data['element']
        this.name = data['name']
        this.rarity = data['rarity']
        this.type = data['type']
        this.energy = data['energy']
        this.effect = data['effect']
        this.description = dataD['description']
    }

    render(ctx, pos) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'black'
        this.ctx.strokeRect(1, 1, 198, 238)
        Render.drawImageUI(this.ctx, img.card[this.ID], UI.card.image)
        Render.strokeRectUI(this.ctx, UI.card.image)
        this.ctx.font = '32px neodgm'
        Render.fillTextUI(this.ctx, `${this.energy}`, UI.card.textEnergy)
        this.ctx.font = '16px neodgm'
        Render.fillTextUI(this.ctx, `${this.name}`, UI.card.textName)
        Render.renderTextbox(this.ctx, this.description, UI.card.textDescriptionStart, UI.card.textDescriptionInterval)
        ctx.drawImage(this.canvas, pos[0], pos[1])
    }
}
