class AdvantureModul {
    constructor(name, systemId, keyWords = [], color = undefined, iconPath = undefined) {
        this.name = name;
        this.keyWords = keyWords;
        this.color = color;
        this.iconPath = iconPath;
        this.systemId = systemId;
        this.system = undefined;
    }
}

class GameSystem {
    constructor(name, id, keyWords = [], color = None, iconPath = None) {
        this.name = name;
        this.keyWords = keyWords;
        this.color = color;
        this.iconPath = iconPath;
        this.id = id;
    }
}


export function allModusls() {
    const ret = [
        new AdvantureModul(
            '__default',
            1),
        new AdvantureModul(
            'Из Бездны',
            1,
            ['Бездна', 'Бездны', 'Из Бездны', 'Out of the Abyss', 'Abyss'],
            '#8e24aa',
            'content/img/icons/abyss.png'),
        new AdvantureModul(
            'Нисхождение в Авернус',
            1,
            ['Нисхождение в Авернус', 'Авернус', 'Avernus', 'Descent into Avernus'],
            '#f45329',
            'content/img/icons/avernus.png'),
        new AdvantureModul(
            'Оракул Войны',
            1,
            ['Оракул Войны', 'Трофеи Последней Войны', 'Эберрон', 'Eberron', 'Эбберон'],
            '#f45329',
            'content/img/icons/eberron.png'),
        new AdvantureModul(
            'Элементальное зло',
            1,
            ['Элементальное зло', 'Elemental Evil', 'Мулмастер', 'Mulmaster'],
            '#2e45ff',
            'content/img/icons/elementalEvil.png'),
        new AdvantureModul(
            'Гильдия Героев',
            1,
            ['Гильдия Героев', 'Гильдия'],
            '#9c9c9c',
            'content/img/icons/guildOfHeroes.png'),
        new AdvantureModul(
            'Клад Королевы Драконов',
            1,
            ['Клад Королевы Драконов', 'Hoard of the Dragon Queen'],
            '#c30000',
            'content/img/icons/hoardOfTheDragonQueen.png'),
        new AdvantureModul(
            'Масти Туманов',
            1,
            ['Масти Туманов'],
            '#0e4901'),
        new AdvantureModul(
            'Туманы Рейвенлофта',
            1,
            ['Туманы Рейвенлофта'],
            '#0e4901'),
    ]
    return ret;
}

export function allSystems() {
    const ret = [
        new GameSystem(
            'Dungeons and Dragons e5',
            1, // id = 1 должен быть только у ДнД
            ['Dungeons and Dragons', 'DnD', 'Подземелья и драконы', 'D&D', 'ДнД'],
            '#f45329',
            'content/img/icons/dnd.png'
            ),
        new GameSystem(
            'Чужой',
            2,
            ['Alien', 'Чужой'],
            '#8e24aa',
            'content/img/icons/alien.png'),
        new GameSystem(
            'Зов Ктулху',
            3,
            ['Зов Ктулху', 'Ктулху', 'Call of Cthulhu', 'Cthulhu'],
            '#0e4901',
            'content/img/icons/cthulhu.png'),
        new GameSystem(
            'Дюна: Приключения в Империи',
            4,
            ['Дюна', 'Dune'],
            '#f45329',
            'content/img/icons/dune.png'),
        new GameSystem(
            'Starfinder',
            5,
            ['Starfinder', 'Старфайндер'],
            '#10b4e9',
            'content/img/icons/starfinder.png'),
        new GameSystem(
            'Warhammer',
            6,
            ['Warhammer', 'Молот войны', 'Вархаммер'],
            '#0e4901',
            'content/img/icons/warhammer.png'),
        new GameSystem(
            'Delta Green',
            7,
            ['Delta Green', 'Delta', 'Дельта Грин'],
            '#0e4901',
            'content/img/icons/cthulhu.png'),
        new GameSystem(
            'Cyberpunk',
            8,
            ['Cyberpunk', 'Киберпанк'],
            '#fdf000',
            'content/img/icons/cyberpunk.png'),
        new GameSystem(
            'Шиноби',
            9,
            ['Шиноби', 'Shinobi'],
            '#ffffff',
            'content/img/icons/feather.png'),
    ]
    return ret;
}

