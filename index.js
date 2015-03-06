var marked = require('marked');
var options = {
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
};
marked.setOptions(options);


var text = 'I am using __markdown__.\n\n# heading1\n\n## heading2\n\n - item1\n\n1. item1';
console.log(text);


//simply usage
var html = marked(text);
console.log(html);


// step by step usage
var lexer = new marked.Lexer(options);
var tokens = lexer.lex(text);
console.log(tokens);
html = marked.parser(tokens)
console.log(html);


// rules
console.log(lexer.rules);
