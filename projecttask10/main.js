const getuserchoice = userchoice1 => {
    userchoice1=userchoice1.toLowerCase();
    if(userchoice1==='rock' || userchoice1==='scissor' ||userchoice1==='paper' )
    {
        return userchoice1;
    }
    else 
    {
        console.log('Error !');
    }

}


function getcompchoice()
{
    let compchoice1=Math.floor(Math.random() * 3);
    switch(compchoice1)
    {
        case 0: return 'rock';
        case 1: return 'scissor';
        case 2: return 'paper';
    }
}

function determinewinner(userchoice,compchoice)
{
    if(compchoice === userchoice)
    {
        return 'it was a tie....!!!!!!!!!';
    }
    if(userchoice === 'rock')
    {
        if(compchoice === 'paper')
        {
            return 'computer';
        }
        else
        {
           return 'You';     
        }
    }

    
    if(userchoice === 'paper')
    {
        if(compchoice === 'scissor')
        {
            return 'computer';
        }
        else
        {
           return 'You';     
        }
    }



    
    if(userchoice === 'scissor')
    {
        if(compchoice === 'rock')
        {
            return 'computer';
        }
        else
        {
           return 'You';     
        }
    }

}

function playgame()
{
    let userchoice = getuserchoice('rock');
    const compchoice = getcompchoice();
    console.log('your choice :' + userchoice);
    console.log('comp choice : ' + compchoice);
    console.log('the winnerr is :'+ determinewinner(userchoice,compchoice))
}

playgame();