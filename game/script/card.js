class Card {
    constructor() {
        this.ID = 0
        this.element = ''
        this.name = ''
        this.rarity = ''
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
        Render.strokeRectUI(this.ctx, UI.card.image)
        this.ctx.font = '32px neodgm'
        Render.fillTextUI(this.ctx, `${this.energy}`, UI.card.textEnergy)
        this.ctx.font = '16px neodgm'
        Render.fillTextUI(this.ctx, `${this.name}`, UI.card.textName)
        for (let i = 0; i < this.description.length; i++) {
            Render.fillTextUI(this.ctx, `${this.description[i]}`, UI.card.textDescription[i])
        }
        ctx.drawImage(this.canvas, pos[0], pos[1])
    }
}
