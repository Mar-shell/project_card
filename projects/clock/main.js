var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")
var radius = 200,
    fontSize = 45,
    posPointX = 0,
    posPointY = 0,
    particleNum = 4,
    particleIndex = 0,
    particles = {},
    isClick = false

function resizeCanvas()
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    if (window.innerWidth < 600)
    {
        radius = 150
        fontSize = 35
    }
    else
    {
        radius = 200
        fontSize = 45
    }

}
resizeCanvas()

addEventListener("resize", resizeCanvas)
addEventListener("mousemove", function(e)
{
    posPointX = e.clientX
    posPointY = e.clientY
})
addEventListener("mousedown", function()
{
    isClick = true
})
addEventListener("mouseup", function()
{
    isClick = false
})

addEventListener("touchmove",function(e)
{
    posPointX = e.changedTouches[0].clientX
    posPointY = e.changedTouches[0].clientY
})

addEventListener("touchstart", function()
{
    isClick = true
})

addEventListener("touchend", function()
{
    isClick = false
})

function scene()
{
    var clock = new Clock(c,canvas.width/2,canvas.height/2,radius,fontSize)
    c.shadowBlur = 0
    c.shadowColor = "rgb(255,115,0)"
    c.fillStyle = "#333333"
    c.fillRect(0,0,canvas.width,canvas.height)
    clock.x -= posPointX/30
    clock.y -= posPointY/50
    clock.create()
    if (isClick)
    {
        for (var i = 0; i < particleNum; i++)
        {
            new Particle()
        }
    }
    for (var i in particles)
    {
        particles[i].draw()
    }
    c.shadowBlur = 10
    c.beginPath()
    c.fillStyle = "rgb(255,115,0)"
    c.arc(posPointX,posPointY,5,0,Math.PI*2)
    c.fill()
}
setInterval(scene,30)