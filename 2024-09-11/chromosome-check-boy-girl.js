// PREP
// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
}

hint: back ticks


// P: the parameter is a sperm that either ahs XX or XY chromosomes
// R: we want to return a message if its a boy or girl
// E: n/a
// P: we will call it using back ticks


// my solution

function chromosomeCheck(sperm) {
   return `Congratulations! You're going to have a ${son ? XY : XX}.`
}


// right solution

function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}