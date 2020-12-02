function extend( parant,child ){
    child.prototype=Object.create(parant.prototype)
    child.prototype.constructor= child
}

extend( Shape, Square)

function Shape(color){
    this.color=color
}
Shape.prototype={
    commom: function(){
        console.log('I am draw')
    }
}

function Square(width, color){
    this.w=width
    Shape.call(this,color)
}

Square.prototype.draw=function(){
        console.log('I am draw')
    }
Square.prototype.extra=  function(){
        console.log('I am draw')
    }
var sqr = new Square(45,'green')
/* var shape= new Shape () */

function Circle(radious){
    this.radious=radious
    console.log('the area of circle is '+ 2*3.1416*radious)
}
var c= new Circle(5)

