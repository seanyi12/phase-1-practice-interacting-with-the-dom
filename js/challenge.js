const counters = document.querySelector('#counter')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
let count = 0

let intervalId = setInterval(increaseCount, 1000)

function increaseCount(){
  count++
  counter.innerText = count
}

minus.addEventListener('click',()=>{
  count -= 1 
  counters.innerText = count
})

plus.addEventListener('click', () => {
  count += 1
  counters.innerText = count
})

heart.addEventListener('click', () => {
  let found = document.getElementById(count)
  
 if(found){
   console.log('found', found)
   found.dataset.like_count++
   found.innerText = found.dataset.like_count
 } else {
   let li = document.createElement('li')
   let listOfLikes = document.querySelector('.likes')
   li.innerText = `Liked at ${count}!`
   li.id = count
   li.dataset.like_count = 1 

   listOfLikes.appendChild(li)

 }
})

 pause.addEventListener('click',()=>{
  let clear = clearInterval(intervalId)
  if(clear){
    setInterval(increaseCount, 1000)
  }else{
    clearInterval(intervalId)
  }
 })
