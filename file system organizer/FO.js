let input=process.argv.slice(2);
let command=input[0]
const file = require('fs');

const p = require('path');
const helpmodule= require('../command/help')
const treemodule= require('../command/tree');
const organizemodule=require('../command/organize');

switch(command)
{
    case 'tree':
       
        treemodule.treefnkey(input[1])
        break;
    case 'organize' :
      
        
        organizemodule.organizekey(input[1]);
        break;
    case 'help':
      helpmodule.helpfnkey();
        
        break;
       default :
            console.log("giva a valid input");

    }

   
    
  
    

