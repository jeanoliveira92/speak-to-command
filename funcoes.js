const open = (item) => {
    alert(`OPENING: ${item.join(" ")}`);
}

const close = (item) => {
    alert(`CLOSING: ${item.join(" ")}`);
}

var funcs = {
    open,
    close
}