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

    deck: [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()],

    map: new Image(),
    selectFrame: new Image(),
}

function imageLoad() {
    img.button.back.src = 'image/button/buttonback.png'
    img.button.info.src = 'image/button/buttoninfo.png'
    img.button.menu.src = 'image/button/buttonmenu.png'
    img.button.close.src = 'image/button/buttonclose.png'
    img.button.prev.src = 'image/button/buttonprev.png'
    img.button.next.src = 'image/button/buttonnext.png'

    img.icon.profile.src = 'image/icon/iconprofile.png'
    img.icon.card.src = 'image/icon/iconcard.png'
    img.icon.inventory.src = 'image/icon/iconitem.png'
    img.icon.map.src = 'image/icon/iconmap.png'

    img.deck[0].src = 'image/deck/decknormal.png'
    img.deck[1].src = 'image/deck/deckfire.png'
    img.deck[2].src = 'image/deck/deckwater.png'
    img.deck[3].src = 'image/deck/deckwind.png'
    img.deck[4].src = 'image/deck/deckearth.png'
    img.deck[5].src = 'image/deck/decklight.png'
    img.deck[6].src = 'image/deck/deckdark.png'
    img.deck[7].src = 'image/deck/deckspecial.png'

    img.map.src = 'image/map.png'
    img.selectFrame.src = 'image/selectframe80.png'
}
