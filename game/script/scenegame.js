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
        let player = game.field.player
        Render.init(game.ctx)
        Render.drawImageUI(game.ctx, img.button.menu, UI.game.buttonMenu)
        Render.drawImageUI(game.ctx, img.button.info, UI.game.buttonInfo)
        Render.fillTextUI(game.ctx, `${Math.floor(player.rect.position.x)},${Math.floor(player.rect.position.y)}`, [24, 24])

        game.field.render(game.ctx)

        if (game.state === 'info') {
            Render.renderInfo(game.ctx, game, game.player)
        }

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

                if (game.state === '') {
                    if (pointInsideRectUI(pos, UI.game.buttonInfo)) {
                        game.state = 'info'
                        game.tabProfileIndex = -1
                        game.tabCardPage = 0
                    }

                    if (game.stateField === 'shop') {
                        SceneGame.handleClickShop(game, pos)
                    }
                } else if (game.state === 'info') {
                    if (pointInsideRectUI(pos, UI.game.buttonInfo) || pointInsideRectUI(pos, UI.info.buttonClose)) {
                        game.state = ''
                    }

                    if (pointInsideRectUI(pos, UI.info.tabProfile)) {
                        game.tabInfoPlayer = 'profile'
                        game.tabProfileIndex = -1
                    } else if (pointInsideRectUI(pos, UI.info.tabInventory)) {
                        game.tabInfoPlayer = 'inventory'
                    } else if (pointInsideRectUI(pos, UI.info.tabDeck)) {
                        game.tabInfoPlayer = 'deck'
                        game.tabCardPage = -1
                    } else if (pointInsideRectUI(pos, UI.info.tabMap)) {
                        game.tabInfoPlayer = 'map'
                    }
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
                    game.player.writeSave(game.save)
                    game.field.writeSave(game.save)
                    game.saveSaveData()
                }
            }
        }
    }

    static handleClickShop(game, pos) {

    }
}
