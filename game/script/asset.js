let img = {
    button: {
        back: new Image(),
        info: new Image(),
        menu: new Image(),
        close: new Image(),
        prev: new Image(),
        next: new Image(),
    },

    icon: {
        profile: new Image(),
        card: new Image(),
        inventory: new Image(),
        map: new Image()
    },

    map: new Image(),
}

function imageLoad() {
    img.button.back.src = 'image/button/ButtonBack.png'
    img.button.info.src = 'image/button/ButtonInfo.png'
    img.button.menu.src = 'image/button/ButtonMenu.png'
    img.button.close.src = 'image/button/ButtonClose.png'
    img.button.prev.src = 'image/button/ButtonPrev.png'
    img.button.next.src = 'image/button/ButtonNext.png'

    img.icon.profile.src = 'image/icon/IconProfile.png'
    img.icon.card.src = 'image/icon/IconCard.png'
    img.icon.inventory.src = 'image/icon/IconItem.png'
    img.icon.map.src = 'image/icon/IconMap.png'

    img.map.src = 'image/Map.png'
}
