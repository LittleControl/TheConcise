let go_to_top = document.querySelector('.go-to-top')
go_to_top.onclick = function () {
    let win = document.defaultView
    win.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

