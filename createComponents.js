const fs = require('fs');


const componentName = process.argv[2];

const componentTemplate = `import React from 'react';
import s from './${componentName}.module.scss';
                            
const ${componentName} = () => {
    return (
        <div className={s.root}>
                            
        </div>
                               );
};
                            
export default ${componentName};`;

const indexTemplate =` import ${componentName} from './Input'

export default ${componentName};`

const createComponents = new Promise((resolve, reject) => {
    const path = `./src/components/${componentName}`;
    if (fs.existsSync(path)) {
        reject('Component is exist')
    }
    fs.mkdir( path, {recursive: true}, (err) => {
        if (err !== null) {
            reject(err);
        } else {
            resolve(path);
        }
    });
})

console.log(`>>>>: Start creating Components ${componentName}`)

createComponents.then( async (dirPath) => {
    await fs.writeFile(`${dirPath}/${componentName}.js`, componentTemplate, (err) => {
        if (err !== null) {
            Promise.reject(err)
        }
    });

    return dirPath
}).then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/${componentName}.module.scss`, ".root{\n\n}", (err) => {
        if (err !== null) {
            Promise.reject(err)
        }
    });
    return dirPath
}).then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/index.js`, indexTemplate, (err) => {
        if (err !== null) {
            Promise.reject(err)
        }
    });
}).catch( err => {
    console.log('####: THIS IS ERROR - ', err);
})

console.log(`>>>>: Finish creating Components`)






