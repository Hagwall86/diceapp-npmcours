const path = require('path');

module.exports = {
  entry: './script.js', // Din huvudfil som inkluderar alla dina moduler
  output: {
    path: path.resolve(__dirname, 'dist'), // Utmatningsmappen för bundlade filer
    filename: 'bundle.js' // Namnet på den slutliga bundlade filen
  },
  // mode: 'development' // Anpassa efter dina behov, t.ex. 'development' eller 'production'
};
