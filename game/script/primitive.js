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

    overlap(rect) {
        return !(this.position.x < rect.position.x - rect.size.x / 2 - this.size.x / 2 || this.position.x > rect.position.x + rect.size.x / 2 + this.size.x / 2 || this.position.y < rect.position.y - rect.size.y / 2 - this.size.y / 2 || this.position.y > rect.position.y + rect.size.y / 2 + this.size.y / 2)
    }

    clone() {
        return new Rect2(this.position.x, this.position.y, this.size.x, this.size.y)
    }
}
