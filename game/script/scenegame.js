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

        if (game.info === true) {
            Render.renderInfo(game.ctx, game, game.player)
        }

        if (game.menu === true) {
            Render.renderMenu(game.ctx, game)
        }
    }
    
    static keyDown(game, key) {
        
    }

    static keyUp(game, key) {
        if (game.menu === false) {
            if (key === 'Escape' || key === 'q') {
                game.menu = true
            }

            if (game.info === false) {
                if (key === 'r' || key === 'q' || key === 'Escape') {
                    game.info = true
                }
            } else if (game.info === true) {
                if (key === 'r') {
                    game.info = false
                }
            }
        } else if (game.menu === true) {
            if (key === 'Escape' || key === 'r') {
                game.menu = false
            } else if (key === 'e') {
                game.menu = false
                game.saveAndExit()
            }
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (pointInsideRectUI(pos, UI.game.buttonMenu)) {
                    game.menu = true
                }

                if (game.info === false) {
                    if (pointInsideRectUI(pos, UI.game.buttonInfo)) {
                        game.info = true
                        game.infoProfileIndex = -1
                        game.infoCardPage = 0
                    }

                    if (game.state === '') {
                    }
                } else if (game.info === true){
                    if (pointInsideRectUI(pos, UI.game.buttonInfo) || pointInsideRectUI(pos, UI.info.buttonClose)) {
                        game.info = false
                    }

                    if (pointInsideRectUI(pos, UI.info.tabProfile)) {
                        game.infoTabPlayer = 'profile'
                        game.infoProfileIndex = -1
                    } else if (pointInsideRectUI(pos, UI.info.tabInventory)) {
                        game.infoTabPlayer = 'inventory'
                    } else if (pointInsideRectUI(pos, UI.info.tabDeck)) {
                        game.infoTabPlayer = 'deck'
                        game.infoCardPage = -1
                    } else if (pointInsideRectUI(pos, UI.info.tabMap)) {
                        game.infoTabPlayer = 'map'
                    }
                }
            } else if (game.menu === true) {
                if (pointInsideRectUI(pos, UI.game.buttonMenu)) {
                    game.menu = false
                } else if (pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (pointInsideRectUI(pos, UI.menu.buttonExit)) {
                    game.menu = false
                    game.saveAndExit()
                }
            }
        }
    }

    static handleClickShop(game, pos) {

    }
}
