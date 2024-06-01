function Particle()
{
    this.x = posPointX
    this.y = posPointY
    this.vx = Math.random() *  10 - 5
    this.vy = Math.random() *  10 - 5
    this.radius = Math.random() * 4
    particleIndex++
    particles[particleIndex] = this
    this.id = particleIndex
    this.life = 0
    this.maxLife = Math.random() * 30 + 10 
    this.transparent = Math.random()

    this.sizeW = Math.random() * 3
    this.sizeH = Math.random() * 4

    this.wind = 0.0010
    this.gravity = -0.3
}

Particle.prototype.draw = function()
{
    this.x += this.vx
    this.y += this.vy

    this.vy += -this.gravity
    this.vx += -this.wind



    this.life++
    if (this.life >= this.maxLife){
        delete particles[this.id]
    }

    c.beginPath()
    c.fillStyle = "rgba(255,115,0,"+ this.transparent +")"
    this.transparent -= (1/20)
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2)
    c.fill()
    //c.fillRect(this.x,this.y,this.sizeW,this.sizeH)
    c.shadowBlur = 10
    c.shadowColor = "rgb(255,115,0)"
}