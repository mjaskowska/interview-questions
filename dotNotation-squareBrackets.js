let sam = {
    castiel: 'mary'
}
let dean = {
    john: 'honey',
    mary: 'chuck'
} 

console.log(dean[sam.castiel])  
// output: chuck

console.log(dean.sam.castiel)
// fails

console.log(dean[sam['castiel']])
// chuck

console.log(dean[sam[castiel]])
// fails