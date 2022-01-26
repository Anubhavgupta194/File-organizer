let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
      "docx",
      "doc",
      "pdf",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "txt",
      "ps",
      "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
  };


const p= require('path')

const file= require('fs')

function organize(dirpath){
    console.log("here")
  if(dirpath==undefined){
      console.log("enter valid path");
      return;
  }
  let destpath=p.join(dirpath , 'organized_folder');
      if(file.existsSync(dirpath)){
         
           if(file.existsSync(destpath)==false)
           {
               file.mkdirSync(destpath);
              
           }
           else{

               console.log("already exits");
           }
      }
      else{
          console.log("enter diffrent path");
          return;
      }
       organizeHelper(dirpath,destpath);
  }


  function organizeHelper (src, dest) {

    let childNames = file.readdirSync(src);
    //console.log(childNames)
  
    for (let i = 0; i < childNames.length; i++) {
      let childAddress = p.join(src, childNames[i]);
      let isFile = file.lstatSync(childAddress).isFile();
  
      if (isFile == true) {
        let fileCategory = getCategory(childNames[i]);
        sendFiles(childAddress , dest , fileCategory)
      }
    }
  }
  
  function getCategory(FileName) {
    let ext = p.extname(FileName).slice(1);
    // we extraxcted extension names of the target Files
  
    //console.log(ext)
  
    for (let key in types) {
      let cTypeArr = types[key];
      // we took out all the Category type Arrays here
      //console.log(cTypeArr)
  
      for (let i = 0; i < cTypeArr.length; i++) {
        if (ext == cTypeArr[i]) {
          return key;
        }
      }
    }
  
    return "others";
  }
  
  
  function sendFiles(srcFilePath , dest , fileCategory){
     // we will create path for each category type encountered to create folders of their names
        let catPath = p.join(dest , fileCategory)
  
         //D:\FJP4\test folder\organized_files\media
         //D:\FJP4 \test folder\organized_files\documents
  
  
        if(file.existsSync(catPath)==false){
          file.mkdirSync(catPath)
        }
  
  
        let fileName = p.basename(srcFilePath)
  
        // we took out the basename of all the files
  
        let destFilePath = p.join(catPath , fileName)
  
  
        file.copyFileSync(srcFilePath , destFilePath)
  
        file.unlinkSync(srcFilePath)
  
  
        console.log('Files Organized')
  
  
   
    
  }
  module.exports={
      organizekey:organize,
  }