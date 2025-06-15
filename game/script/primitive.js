class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    clone() {
        return new Vector2(this.x, this.y)
    }
}

class Rect2 {
    constructor(x, y, w, h) {
        this.position = new Vector2(x, y)
        this.size = new Vector2(w, h)
    }

    clone() {
        return new Rect2(this.position.x, this.position.y, this.size.x, this.size.y)
    }
}
