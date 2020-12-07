/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />
import convert,{isArabic} from './rtlConverter';
//import { resolve , reorder  } from "./unicode.bidirectional.min";
figma.showUI(__html__);
figma.ui.resize(500,100);
function* walkTree(node: { children: any; }):any {
  yield node;
  let children = node.children;
  if (children) {
    for (let child of children) {
      yield* walkTree(child)
    }
  }

}
let changeSizeConfirm :number=0;

const insert = function ( arr,index, item ) {
  console.log(arr);
    arr.splice( index, 0, item );
    return arr;
};
function reversing(str: string){
  let arr=str.split("");
  return insert(arr,0,arr.pop()).join("");
  }

const stringToUnicode=(str:string)=>{
  return str.split("").map(n=>n.charCodeAt(0))
  }
  const unicodeToString=(arr:number[])=>{
    return String.fromCharCode(...arr);
    }

    figma.ui.onmessage = (msg) => {
      const node = figma.currentPage.selection[0];
      if(node.type == 'TEXT'){
      if (msg.type === "typing") {

       
        const font=JSON.parse(JSON.stringify(node.fontName));
        figma.loadFontAsync(font).then(()=>{
        node.characters=convert(msg.value,"SMART_FIGMA");
        if(isArabic(node.characters)&&!node.characters.includes(" ")&&isArabic(node.characters.charAt(0)))
        node.characters=  node.characters.split("\n").reverse().join();
});

      }

}


};

//const engine = new textEngine();
// console.log(engine.bidiTransform(node.characters,"IDYNN","VRNNN"));
//console.log(node.characters.split("").reverse().join(""));
// node.characters =bidiUnicode(node.characters);
//console.log(node.characters = rtlConverter(node.characters,"SMART_FIGMA"))
/*
  const bidiUnicode=function (str:string):string{
      let codepoints = stringToUnicode(str);
      let levels = resolve(codepoints, 1);  
     return unicodeToString(reorder(codepoints, levels))
    }*/