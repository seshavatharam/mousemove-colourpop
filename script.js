const container=document.getElementById("container")
const colours=['#e74c3c','#8e44ad','#3498db','#e67e22']
const squares=1500
for(let i=0;i<squares;i++)
{
    const square=document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>setColour(square))
square.addEventListener('mouseout',()=>remColour(square))

    container.appendChild(square)

}

function setColour(ele)
{
    const color=getRandomColor()
    ele.style.background=color
    ele.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`

}
function remColour(ele)
{
    ele.style.background='#1d1d1d'
    ele.style.boxShadow=`0 0 2px #000`
}
function getRandomColor()
{
    return colours[Math.floor(Math.random()*colours.length)]
}