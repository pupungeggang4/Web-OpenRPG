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

        if (game.tabInfoPlayer === 'profile') {
            Render.strokeRectUI(ctx, UI.info.portrait)
            Render.fillTextUI(ctx, `Lv.${player.playerLevel}`, UI.info.textLevel)
            Render.fillTextUI(ctx, `Exp.${player.playerExp}/${player.playerExpMax}`, UI.info.textExp)
            Render.fillTextUI(ctx, `Lv.${player.playerLevel}`, UI.info.textLevel)

            Render.strokeRectUI(ctx, UI.info.descriptionRect)
            Render.fillTextUI(ctx, 'Weapon', UI.info.textWeapon)
            Render.strokeRectUI(ctx, UI.info.weapon)
            Render.fillTextUI(ctx, 'Equipment', UI.info.textEquipment)
            for (let i = 0; i < 8; i++) {
                let rect = [UI.info.equipmentStart[0] + UI.info.equipmentRect[2] * i, UI.info.equipmentStart[1], UI.info.equipmentRect[0], UI.info.equipmentRect[1]]
                Render.strokeRectUI(ctx, rect)
            }
            Render.fillTextUI(ctx, 'Item', UI.info.textItem)
            for (let i = 0; i < 8; i++) {
                let rect = [UI.info.itemStart[0] + UI.info.itemRect[2] * i, UI.info.itemStart[1], UI.info.itemRect[0], UI.info.itemRect[1]]
                Render.strokeRectUI(ctx, rect)
            }
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
