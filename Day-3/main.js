// ex-1
const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  
  const pushPull = function(func) {
      func()
  }

  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"

// ex-2
const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  
  const getTime = function(func){
      const time = new Date()
      func(time)
  }
  getTime(returnTime)

// Ex-3
const logData = function(data){
    console.log(data)
}

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
displayData(alert, logData, "I like to party")

// Ex-4
const returnSum = (n1, n2, n3) => n1 + n2 + n3

console.log(returnSum(1,2,3))

Ex-5
const capitalize = name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA") )// returns Felishia

// Ex-6
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
  
  const commentOnWeather = temp => `It's ${determineWeather(temp)}`

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"

// Ex-7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")