//two strings, min edit operations that needs to be performed on first string to get two strings. INsert char, delete, char, sub char
//Ex. abc, yabd => 2 (insert y, sub)
//Ex. abba, baab => 4
//Ex. yam, ayom => 2
//n*m time
//Ex. ack, ska => 3

//Find similarities
//Conditions to change the differences
//Change accordingly

function tacoCat (string1, string2) {
  let matrix = []
  for (let j = 0; j < string2.length+1; j++){
      let row = []
      for (let i = 0; i < string1.length+1; i ++){
        row.push[j]
        row.push[string1[i+1]]
      }
      matrix.push(row)
    }
    return matrix
}

console.log(tacoCat("ack", "ska"))
