class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    insideArea(rect) {
        return this.x > rect[0] && this.x < rect[0] + rect[2] && this.y > rect[1] && this.y < rect[1] + rect[3]
    }

    insideRect(rect) {
        return this.x > rect.position.x - rect.size.x / 2 && this.x < rect.position.x + rect.size.x / 2 && this.y > rect.position.y - rect.size.y / 2 && this.y < rect.position.y + rect.size.y / 2
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

    findOverlapH(rect) {
        if (this.position.y > rect.position.y - this.size.y / 2 - rect.size.y / 2 && this.position.y < rect.position.y + this.size.y / 2 + rect.size.y / 2) {
            if (this.position.x > rect.position.x + rect.size.x / 2 - this.size.x / 2 && this.position.x < rect.position.x + rect.size.x / 2 + this.size.x / 2) {
                return this.position.x - rect.position.x - (this.size.x / 2 + rect.size.x / 2)
            } else if (this.position.x > rect.position.x - rect.size.x / 2 - this.size.x / 2 && this.position.x < rect.position.x - rect.size.x / 2 + this.size.x / 2) {
                return this.size.x / 2 + rect.size.x / 2 - (rect.position.x - this.position.x)
            }
        }
        return 0
    }

    findOverlapV(rect) {
        if (this.position.x > rect.position.x - this.size.x / 2 - rect.size.x / 2 && this.position.x < rect.position.x + this.size.x / 2 + rect.size.x / 2) {
            if (this.position.y > rect.position.y + rect.size.y / 2 - this.size.y / 2 && this.position.y < rect.position.y + rect.size.y / 2 + this.size.y / 2) {
                return this.position.y - rect.position.y - (this.size.y / 2 + rect.size.y / 2)
            } else if (this.position.y > rect.position.y - rect.size.y / 2 - this.size.y / 2 && this.position.y < rect.position.y - rect.size.y / 2 + this.size.y / 2) {
                return this.size.y / 2 + rect.size.y / 2 - (rect.position.y - this.position.y)
            }
        }
        return 0
    }

    clone() {
        return new Rect2(this.position.x, this.position.y, this.size.x, this.size.y)
    }
}
