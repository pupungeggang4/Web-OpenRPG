window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {

}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {

    }
}

function rightClick() {
    return false
}
