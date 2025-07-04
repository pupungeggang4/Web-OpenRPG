class Game {
    constructor() {
        imageLoad()
        this.save = {}
        this.loadSaveData()

        this.keyBinding = {
            'left': 'a', 'right': 'd', 'up': 'w', 'down': 's'
        }
        this.keyPressed = {
            'left': false, 'right': false, 'up': false, 'down': false
        }
        this.gamepadIndex = null

        this.field = new Field()
        this.battle = new Battle()
        this.event = new Event()
        this.shop = new Shop()
        this.player = new Player()

        this.scene = 'title'
        this.state = ''
        this.info = false
        this.stateBattle = ''
        this.menu = false
        this.infoTabPlayer = 'profile'
        this.infoProfileIndex = -1
        this.infoInventoryPage = 0
        this.infoCardPage = 0
        this.selectedDeck = 0

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.ctx.imageSmoothingEnabled = false
        window.addEventListener('gamepadconnected', (event) => this.gamepadConnect(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.weapon = new Weapon()
        this.weapon.setData(1)

        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()
        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loadSaveData() {
        let save = localStorage.getItem('pupungeggang4:OpenRPG')
        if (save === null) {
            localStorage.setItem('pupungeggang4:OpenRPG', JSON.stringify(emptySave))
        }
        this.save = JSON.parse(localStorage.getItem('pupungeggang4:OpenRPG'))
    }

    saveSaveData() {
        localStorage.setItem('pupungeggang4:OpenRPG', JSON.stringify(this.save))
    }

    eraseSaveData() {
        localStorage.setItem('pupungeggang4:OpenRPG', JSON.stringify(emptySave))
        this.save = JSON.parse(localStorage.getItem('pupungeggang4:OpenRPG'))
    }

    saveAndExit() {
        this.scene = 'title'
        this.state = ''
        this.player.writeSave(game.save)
        this.field.writeSave(game.save)
        this.saveSaveData()
    }

    loop() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious

        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'game') {
            SceneGame.loop(this)
        } else if (this.scene === 'battle') {
            SceneBattle.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    gamepadConnect(event) {
        console.log(
            "Gamepad connected at index %d: %s. %d buttons, %d axes.",
            event.gamepad.index,
            event.gamepad.id,
            event.gamepad.buttons.length,
            event.gamepad.axes.length,
        )
        this.gamepadIndex = event.gamepad.index
    }

    keyDown(event) {
        let key = event.key
        for (let k in this.keyPressed) {
            if (key === this.keyBinding[k]) {
                this.keyPressed[k] = true
            }
        }
        if (this.scene === 'title') {
            SceneTitle.keyDown(game, key)
        } else if (this.scene === 'game') {
            SceneGame.keyDown(game, key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyDown(game, key)
        }
    }

    keyUp(event) {
        let key = event.key
        for (let k in this.keyPressed) {
            if (key === this.keyBinding[k]) {
                this.keyPressed[k] = false
            }
        }
        if (this.scene === 'title') {
            SceneTitle.keyUp(game, key)
        } else if (this.scene === 'game') {
            SceneGame.keyUp(game, key)
        } else if (this.scene === 'battle') {
            SceneBattle.keyUp(game, key)
        }
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        if (this.scene === 'title') {
            SceneTitle.mouseUp(game, pos, button)
        } else if (this.scene === 'game') {
            SceneGame.mouseUp(game, pos, button)
        } else if (this.scene === 'battle') {
            SceneBattle.mouseUp(game, pos, butto)
        }
    }
}
