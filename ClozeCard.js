// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
// The constructor should accept two arguments: `text` and `cloze`.
// The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.
// The constructed object should have a `fullText` property that contains _only_ the full text.
// The constructed object should have a `partial` property that contains _only_ the partial text.
// The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.
  
var clozeDeletion  = function(cloze,partial) {
    this.cloze = cloze; 
    //this.containOnly = containOnly;
    this.fullText = cloze + partial;
    this.partial = partial;
     
    };
  
  module.exports = clozeDeletion; 