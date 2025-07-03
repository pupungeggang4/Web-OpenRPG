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
                        game.infoCardPage = 0
                    } else if (pointInsideRectUI(pos, UI.info.tabMap)) {
                        game.infoTabPlayer = 'map'
                    }
                    if (game.infoTabPlayer === 'profile') {
                        SceneGame.handleClickInfoProfile(game, pos)
                    } else if (game.infoTabPlayer === 'deck') {
                        SceneGame.handleClickInfoDeck(game, pos)
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

    static handleClickInfoProfile(game, pos) {
        let player = game.player

        if (pointInsideRectUI(pos, UI.info.weapon)) {
            game.infoProfileIndex = -1
        }

        for (let i = 0; i < 8; i++) {
            let rect = [UI.info.equipmentStart[0] + UI.info.equipmentRect[0] * i, UI.info.equipmentStart[1] + UI.info.equipmentRect[1] * i, UI.info.equipmentRect[2], UI.info.equipmentRect[3]]
            if (pointInsideRectUI(pos, rect)) {
                game.infoProfileIndex = i
                break
            }
            rect = [UI.info.itemStart[0] + UI.info.itemRect[0] * i, UI.info.itemStart[1] + UI.info.itemRect[1] * i, UI.info.itemRect[2], UI.info.itemRect[3]]
            if (pointInsideRectUI(pos, rect)) {
                game.infoProfileIndex = i + 8
                break
            }
        }

        for (let i = 0; i < 8; i++) {

        }
    }

    static handleClickInfoDeck(game, pos) {
        let player = game.player
        if (player.adventureMode === false) {
            for (let i = 0; i < 8; i++) {
                let row = Math.floor(i / 4)
                let col = i - row * 4
                let rect = [UI.info.deckStart[0] + UI.info.deckRect[0] * col, UI.info.deckStart[1] + UI.info.deckRect[1] * row, UI.info.deckRect[2], UI.info.deckRect[3]]
                if (pointInsideRectUI(pos, rect)) {
                    player.selectedDeck = i
                }
            }
        }
    }

    static handleClickShop(game, pos) {

    }
}
