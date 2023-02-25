type Draggable = {
    picId : number, 
    drag : () => void
}
type Resizable = {
    picId : number,
    resize : () => void
}
const pic : Draggable & Resizable ={
    picId : 1,
    drag : () => console.log("Hello"),
    resize : () => console.log("Hello")
}