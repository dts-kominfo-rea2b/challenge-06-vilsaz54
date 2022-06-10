// TODO: import module bila dibutuhkan di sini
const fs = require('fs');
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const filedata =[file1, file2, file3];
  const result= [];

  filedata.forEach(item =>{
    fs.readFile(item, (err,data) =>{
      if(err){
        return console.log(err);
      }else{
        const teks = JSON.parse(data);

        if(teks?.message !== undefined) result.push(teks.message.split(" ")[1]);
        
        if(teks?.length){
          teks.forEach((i) => {
            if(i?.message !== undefined){
              result.push(i.message.split(" ")[1]);
            }else if(i?.data?.message !== undefined){
              result.push(i.data.message.split(" ")[1]);
              fnCallback(null, result);
            }
          });

        }


      }
    })
  });



};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
