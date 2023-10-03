// Liste 5 objetos nativos
Object;
String;
Array;
Function;
Number;
Math;

// Liste 5 objetos do browser
Window;
Window.history;
Document;
HTMLCollection;
NodeList;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitHidden !== undefined) {
  console.log("Exist");
} else {
  console.log("Não existe");
}

if (typeof document.webkitVisibilityState !== undefined) {
  console.log("Exist");
} else {
  console.log("Não existe");
}
