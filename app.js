const fs = require('fs');
const pathh = require('path');

// директорія в яку будуть збиратися всі файли
let pathTo = 'fillMe';

// початкова директорія для пошуку
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
                    // процес переходу в іншу директорію файлів
                 fs.rename(pathToFile, pathh.join(process.cwd(), pathTo, files[i]), (err) => {
                     if (err) console.log (err);
                 })
             }
            })
        }
    })
}
recursion(initialPath);
