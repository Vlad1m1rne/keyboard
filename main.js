const screen = document.querySelector('.screen')
const keyboard = document.querySelector('.keyboard')



keyboard.addEventListener('click',(e)=>{
  let target = e.target
  
  if(target.matches('.keys')){
    if(target.matches('.f,.shift,.fn,.ctrl,.alt')) return
    if(target.matches('.esc')){
      screen.innerHTML = ''
      return
    }
 
    if(target.matches('.enter')){
      screen.innerHTML += '<br>' 
      return 
    }
    if(target.matches('.space')){
      screen.innerHTML += ' '
      return 
    }
    
    let text = Array.from(screen.textContent)
    if(target.matches('.back')){
           text.pop()
      screen.innerHTML = text.join('')
      return
    }
  
    let symbol = target.textContent
    screen.innerHTML += symbol

   }
  else return
})

