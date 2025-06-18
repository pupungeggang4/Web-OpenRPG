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

    static renderImageUI(ctx, image, pos) {
        ctx.drawImage(image, pos[0], pos[1])
    }
}
