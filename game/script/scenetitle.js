class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Card RPG', UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, 'Start Game', UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonInfo)
        Render.fillTextUI(game.ctx, 'Info', UI.title.textInfo)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, 'Erase Data', UI.title.textErase)
    }
    
    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }

    static mouseUp(game, pos, button) {
        if (pointInsideRectUI(pos, UI.title.buttonStart)) {
            game.scene = 'game'
            game.state = ''
        } else if (pointInsideRectUI(pos, UI.title.buttonErase)) {
            game.eraseSaveData()
        }
    }
}
