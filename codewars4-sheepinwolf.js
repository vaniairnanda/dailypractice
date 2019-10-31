function warnTheSheep(queue) {
    var sheepPosition = '';
    for (var i = queue.length-1; i >= 0; i--) {
      if (queue [queue.length-1] === "wolf") {
      return "Pls go away and stop eating my sheep"
      } else if (queue [i] === "wolf") {
      sheepPosition = ((queue.length-1) - i)
      return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;}
     }
    }


console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]))  // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep", "sheep", "wolf"])) // "Pls go away and stop eating my sheep"