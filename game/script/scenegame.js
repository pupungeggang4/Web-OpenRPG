class SceneGame {
    static loop(game) {
        SceneGame.render(game)

        if (game.menu === false) {
            if (game.state === '') {
                game.field.handleTick(game)
            }
        }
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.game.buttonMenu)

        game.field.render(game.ctx)

        if (game.menu === true) {
            Render.renderMenu(game.ctx, game)
        }
    }
    
    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (pointInsideRectUI(pos, UI.game.buttonMenu)) {
                    game.menu = true
                }
            } else if (game.menu === true) {
                if (pointInsideRectUI(pos, UI.game.buttonMenu)) {
                    game.menu = false
                } else if (pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.menu = false
                    game.scene = 'title'
                    game.state = ''
                }
            }
        }
    }
}
