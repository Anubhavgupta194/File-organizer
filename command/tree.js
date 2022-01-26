

const p= require('path')

const file= require('fs')




function treeFn(dirPath){
    if(dirPath==undefined){
      console.log('Please Enter a Valid Path')
      return;
    }

    else{
      let doesExist = file.existsSync(dirPath)
      if(doesExist == true){
        treeHelper(dirPath , ' ')
      }
    }
}


function treeHelper(targetPath , indent){
     let isFile = file.lstatSync(targetPath).isFile()



     if(isFile==true){
         let fileName = p.basename(targetPath)
         console.log(indent + "├── " + fileName)
     }

     else{
            let dirName = p.basename(targetPath)
            console.log(indent + "└──" + dirName)

            let children = file.readdirSync(targetPath)

            for(let i=0 ; i<children.length ; i++){
              let childpath = p.join(targetPath , children[i])
              treeHelper(childpath , indent + '\t')
            }
                

     }
}
  module.exports={
      treefnkey:treeFn,
  }