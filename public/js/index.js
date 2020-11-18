const socket = io.connect()

function setup(){
    createCanvas(600, 400)
}

let positions = []

function draw() {
    background(0)


    noStroke()
    for (let pos of positions) {

        ellipse(pos.x, pos.y, 20, 20)
    }
}

function mouseDragged() {
    socket.emit('click', {x: mouseX, y: mouseY})
    positions.push({x: mouseX, y: mouseY})
}

socket.on('click', (data)=>{
    positions.push(data)
})