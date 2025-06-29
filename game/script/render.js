class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'white'
        ctx.clearRect(0, 0, 1280, 720)
        ctx.fillRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    static renderInfo(ctx, game, player) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.info.rect)
        Render.strokeRectUI(ctx, UI.info.rect)
        ctx.fillStyle = 'black'

        Render.strokeRectUI(ctx, UI.info.tabProfile)
        Render.drawImageUI(ctx, img.icon.profile, UI.info.iconProfile)
        Render.strokeRectUI(ctx, UI.info.tabInventory)
        Render.drawImageUI(ctx, img.icon.inventory, UI.info.iconInventory)
        Render.strokeRectUI(ctx, UI.info.tabDeck)
        Render.drawImageUI(ctx, img.icon.card, UI.info.iconDeck)
        Render.strokeRectUI(ctx, UI.info.tabMap)
        Render.drawImageUI(ctx, img.icon.map, UI.info.iconMap)
        Render.drawImageUI(ctx, img.button.close, UI.info.buttonClose)

        if (game.infoTabPlayer === 'profile') {
            Render.strokeRectUI(ctx, UI.info.portrait)
            Render.fillTextUI(ctx, `Lv.${player.playerLevel}`, UI.info.textLevel)
            Render.fillTextUI(ctx, `Exp.${player.playerExp}/${player.playerExpMax}`, UI.info.textExp)
            Render.fillTextUI(ctx, `Lv.${player.playerLevel}`, UI.info.textLevel)
            Render.fillTextUI(ctx, `Gold ${player.gold}`, UI.info.textGold)

            Render.strokeRectUI(ctx, UI.info.descriptionRect)
            Render.fillTextUI(ctx, 'Weapon', UI.info.textWeapon)
            if (player.weapon.ID != 0) {
                player.weapon.render(ctx, UI.info.weapon)
            }
            Render.strokeRectUI(ctx, UI.info.weapon)
            Render.fillTextUI(ctx, 'Equipment', UI.info.textEquipment)
            for (let i = 0; i < 8; i++) {
                let rect = [UI.info.equipmentStart[0] + UI.info.equipmentRect[2] * i, UI.info.equipmentStart[1], UI.info.equipmentRect[0], UI.info.equipmentRect[1]]
                if (i < player.equipment.length) {
                    player.equipment[i].render(ctx, rect)
                }
                Render.strokeRectUI(ctx, rect)
            }
            Render.fillTextUI(ctx, 'Item', UI.info.textItem)
            for (let i = 0; i < 8; i++) {
                let rect = [UI.info.itemStart[0] + UI.info.itemRect[2] * i, UI.info.itemStart[1], UI.info.itemRect[0], UI.info.itemRect[1]]
                if (i < player.item.length) {
                    player.item[i].render(ctx, rect)
                }
                Render.strokeRectUI(ctx, rect)
            }
        } else if (game.infoTabPlayer === 'inventory') {
            Render.fillTextUI(ctx, 'Inventory', UI.info.textInventory)
            Render.strokeRectUI(ctx, UI.info.iDescriptionRect)
            for (let i = 0; i < 50; i++) {
                let row = Math.floor(i / 10)
                let col = i - row * 10
                let rect = [UI.info.inventoryStart[0] + UI.info.inventoryRect[2] * col, UI.info.inventoryStart[1] + UI.info.inventoryRect[3] * row, UI.info.inventoryRect[0], UI.info.inventoryRect[1]]
                Render.strokeRectUI(ctx, rect)
            }
            Render.drawImageUI(ctx, img.button.prev, UI.info.buttonPrev)
            Render.drawImageUI(ctx, img.button.next, UI.info.buttonNext)
        } else if (game.infoTabPlayer === 'deck') {
            Render.fillTextUI(ctx, 'Deck', UI.info.textDeck)
            for (let i = 0; i < 8; i++) {
                let row = Math.floor(i / 4)
                let col = i - row * 4
                let rect = [UI.info.deckStart[0] + UI.info.deckRect[0] * col, UI.info.deckStart[1] + UI.info.deckRect[1] * row, UI.info.deckRect[2], UI.info.deckRect[3]]
                Render.strokeRectUI(ctx, rect)
            }
            Render.drawImageUI(ctx, img.button.prev, UI.info.buttonPrev)
            Render.drawImageUI(ctx, img.button.next, UI.info.buttonNext)

            if (player.adventureMode === false) {
                ctx.font = '20px neodgm'
                for (let i = 0; i < 8; i++) {
                    let row = Math.floor(i / 4)
                    let col = i - row * 4
                    let posImage = [UI.info.deckImageStart[0] + UI.info.deckRect[0] * col, UI.info.deckImageStart[1] + UI.info.deckRect[1] * row]
                    Render.drawImageUI(ctx, img.deck[i], posImage)
                    let posText = [UI.info.deckDescriptionStart[0] + UI.info.deckRect[0] * col, UI.info.deckDescriptionStart[1] + UI.info.deckRect[1] * row]
                    Render.renderTextbox(ctx, dataDeckD[i + 1]['description'], posText, UI.info.deckDescriptionInterval)
                }
                ctx.font = '32px neodgm'
            } else {
                ctx.font = '20px neodgm'
                for (let i = 0; i < 8; i++) {
                    let row = Math.floor(i / 4)
                    let col = i - row * 4
                    let pos = [UI.info.deckStart[0] + UI.info.deckRect[0] * col, UI.info.deckStart[1] + UI.info.deckRect[1] * row]
                    let index = game.infoCardPage * 8 + i
                    if (index < player.deck.length) {
                        player.deck[index].render(ctx, pos)
                    }
                }
                ctx.font = '32px neodgm'
            }
        } else if (game.infoTabPlayer === 'map') {
            Render.drawImageUI(ctx, img.map, UI.info.map)
            let pos = [game.field.player.rect.position.x / 80, game.field.player.rect.position.y / 80]
            ctx.fillRect(640 + pos[0] - 10, 360 + pos[1] - 10, 20, 20)
        }
    }

    static renderMenu(ctx, game) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Paused', UI.menu.textPaused)
        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.fillTextUI(ctx, 'Resume [R]', UI.menu.textResume)
        Render.strokeRectUI(ctx, UI.menu.buttonSurrender)
        if (game.state != 'battle') {
            ctx.fillStyle = 'gray'
            Render.fillTextUI(ctx, 'Surrender [S]', UI.menu.textSurrender)
            ctx.fillStyle = 'black'
        } else {
            Render.fillTextUI(ctx, 'Surrender [S]', UI.menu.textSurrender)
        }
        Render.strokeRectUI(ctx, UI.menu.buttonExit)
        Render.fillTextUI(ctx, 'Exit [E]', UI.menu.textExit)
    }

    static renderTextbox(ctx, textList, start, interval) {
        for (let i = 0; i < textList.length; i++) {
            let pos = [start[0] + interval[0] * i, start[1] + interval[1] * i]
            Render.fillTextUI(ctx, textList[i], pos)
        }
    }

    static renderImageRect(ctx, image, rect, camera) {
        ctx.drawImage(image, rect.position.x - rect.size.x / 2 - camera.position.x + camera.size.x / 2, rect.position.y - rect.size.y / 2 - camera.position.y + camera.size.y / 2)
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static drawImageUI(ctx, image, pos) {
        ctx.drawImage(image, pos[0], pos[1])
    }
}
