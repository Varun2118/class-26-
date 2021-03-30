class Chain{
    constructor(bodyA,bodyB){
var option={
    bodyA:bodyA,
    bodyB:bodyB,
    lenght:56,
    stiffness:0.3,
} 



this.chain=Constraint.create(option)
World.add(world,this.chain)
    }
    display(){
var pointA=this.chain.bodyA.position
var pointB=this.chain.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}