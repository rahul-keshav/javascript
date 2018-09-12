const days=['sun','mon','tue','wed','thur','fri','sat']

days.forEach(function(day,index){
    console.log(`${index+1} day of week is ${day}.`)
})

const myToDo=[]
myToDo.push('brush')
myToDo.push('bath')
myToDo.push('have lunch')
myToDo.push('go to the library')

myToDo.forEach(function(task,index){
    console.log(`Your ${index+1} is ${task}`)
})

const myToDo=[]
myToDo.unshift('go to the library')
myToDo.unshift('have lunch')
myToDo.unshift('bath')
myToDo.unshift('brush')

for (let i = 0; i < myToDo.length; i++) {
    console.log(`my task no. ${i+1} is ${myToDo[i]}`)
    
}
