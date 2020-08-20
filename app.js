const fs = require('fs');
const pathh = require('path');

let initialPath = pathh.join(process.cwd(), 'nativeDir');
recursion = function (path) {
    fs.readdir(path, (err, files) => {
        for (let i in files) {
            let pathToFile = path + '/' + files[i];
            fs.lstat(pathToFile, (err1, simpleFile) => {
                if (err1) return console.log (err1);
             if (simpleFile.isDirectory()) {
                 recursion(pathToFile);
             } else {
                 console.log (pathToFile);
                 fs.rename(pathToFile, pathh.join(process.cwd(), 'fillMe', files[i]), (err) => {
                     if (err) console.log (err);
                 })
             }
            })
        }
    })
}
recursion(initialPath);
