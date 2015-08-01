var path = require('path');

function resolveCwd(value){
  return path.resolve(process.env.PWD || process.cwd(), value);
}

module.exports = function(command){
  return command
    .args(function(filename){
      this.setOption('file', filename);
    })
    .option('-b, --base <path>',
      'Base input path for path resolving (current path by default)',
      resolveCwd
    )
    .option('-f, --file <filename>',
      'File name of file to extract, resolve from base path (index.html by default)',
      resolveCwd
    )
    .option('-o, --output <path>',
      'Path for output, resolve from file path (current folder by default)',
      resolveCwd,
      '.'
    )
    .option('--js-cut-dev', 'Remove code marked as debug from javascript source (cut off lines after ;;; and /** @cut .. */)');
};