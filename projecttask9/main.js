let resear = true;
let  runage = 17;
let raceNumber = Math.floor(Math.random() * 1000);
if(runage>18 && resear)
{
    raceNumber += 1000;
    console.log('you are registered early so you will run at 9 : 30 am');
    console.log(`you rnumber is ${raceNumber}.`)

}
else if(runage>18 && !resear)
{
    console.log('you are registered early so you will run at 11 : 00 am');
    console.log(`you rnumber is ${raceNumber}.`)
}

else if(runage<18)
{
    console.log('you are registered early so you will run at 12 : 30 pm');
    console.log(`you rnumber is ${raceNumber}.`)
}

else 
{
    console.log('go to regestration desk.');
}