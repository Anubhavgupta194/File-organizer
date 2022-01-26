function help(){
    console.log(` list of all commands
                     1. tree- node FO.js tree <dir path>
                     2. organize- node FO.js organize <dir path >  
                     3. help- node FO.js help `)  // we used backtick(`) in this console.log this allows us to print multiple line strings
}

module.exports={
    helpfnkey:help
}