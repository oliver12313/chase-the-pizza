sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    if (info.score() >= 10) {
        info.startCountdown(5)
    } else {
        info.startCountdown(10)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    apple.setPosition(randint(0, 160), randint(0, 120))
})
let apple: Sprite = null
info.startCountdown(10)
scene.setBackgroundColor(7)
let cat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . e e e e e e e e e . . . . . 
    . . e . 1 . . 1 . e e . . . . . 
    . . e . . . . . . . e . . . . . 
    . . e e e . . . . e . . . . . . 
    . . . . e . . e e e . . . . . . 
    . . . . e e e e . . e e . . . . 
    . . . e . . . . . . e e e e e . 
    e e e e . . . . . . . e . . . . 
    . . . e . . . . . . . e . . . . 
    . . . e . . . . . . e e . . . . 
    . . . e e e e e e e e . . . . . 
    . . . . e . . . . e . . . . . . 
    . . . . e . . . . e . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(cat)
let pizza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . 2 5 5 5 5 5 5 5 2 . . . . . 
    . 2 2 5 5 2 5 5 5 2 2 . . . . . 
    . . 2 2 5 5 5 2 2 . . . . . . . 
    . . . 2 5 5 2 2 . . . . . . . . 
    . . . 2 2 2 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
pizza.setPosition(randint(0, 160), randint(0, 120))
apple = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
apple.setPosition(randint(0, 160), randint(0, 120))
