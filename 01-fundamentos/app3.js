const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ').length;
const wordCountReact = content.match(/react/gi ?? []).length;

console.log('Palabras:', wordCount);
console.log('Palabras React:', wordCountReact);
