const dataCard = {
    1: {'ID': 1, 'name': 'attack', 'element': 'normal', 'rarity': 'basic', 'type': 'attack', 'energy': 1, 'effect': []},
    2: {'ID': 2, 'name': 'guard', 'element': 'normal', 'rarity': 'basic', 'type': 'util', 'energy': 1, 'effect': []},
    3: {'ID': 3, 'name': 'attack', 'element': 'normal', 'rarity': 'basic', 'type': 'attack', 'energy': 1, 'effect': []},
    4: {'ID': 4, 'name': 'attack', 'element': 'normal', 'rarity': 'basic', 'type': 'attack', 'energy': 1, 'effect': []},
    101: {'ID': 101, 'name': 'charge', 'element': 'fire', 'rarity': 'basic', 'type': 'util', 'energy': 0, 'effect': []}
}

const dataDeck = {
    1: {'ID': 1, 'name': 'normal deck', 'deck': [1, 1, 1, 1, 2, 2, 2, 2], 'weapon': 1, 'equipment': 1},
    2: {'ID': 2, 'name': 'fire deck', 'deck': [1, 1, 1, 1, 2, 2, 2, 2], 'weapon': 1, 'equipment': 1},
    3: {'ID': 3, 'name': 'water deck', 'deck': [1, 1, 1, 1, 2, 2, 2, 2], 'weapon': 1, 'equipment': 1},
    4: {'ID': 4, 'name': 'wind deck', 'deck': [1, 1, 1, 1, 2, 2, 2, 2], 'weapon': 1, 'equipment': 1},
    5: {'ID': 5, 'name': 'earth deck', 'deck': [1, 1, 1, 1, 2, 2, 2, 2], 'weapon': 1, 'equipment': 1},
    6: {'ID': 6, 'name': 'light deck', 'deck': [1, 1, 1, 1, 2, 2, 2, 2], 'weapon': 1, 'equipment': 1},
    7: {'ID': 7, 'name': 'dark deck', 'deck': [1, 1, 1, 1, 2, 2, 2, 2], 'weapon': 1, 'equipment': 1},
    8: {'ID': 8, 'name': 'special deck', 'deck': [1, 1, 1, 1, 2, 2, 2, 2], 'weapon': 1, 'equipment': 1},
}

const dataWeapon = {
    1: {'ID': 1, 'name': 'sword', 'element': 'normal', 'rarity': 'basic', 'energy': 0, 'effect': []}
}

const dataEquipment = {
    1: {'ID': 1, 'name': 'small shield', 'element': 'normal', 'rarity': 'basic', 'effect': []}
}

const dataItem = {
    1: {'ID': 1, 'name': 'heal potion', 'element': 'normal', 'rarity': 'basic', 'effect': []}
}

const dataWorld = {
    village: [[-320, -320, 640, 640]],
    monsterSpawn: [[160, -640]],
    wall: [[-200, -280, 240, 80], [200, -280, 240, 80], [-280, -200, 80, 240], [-280, 200, 80, 240], [-200, 280, 240, 80], [200, 280, 240, 80], [280, -200, 80, 240], [280, 200, 80, 240]],
    thing: [],
}
