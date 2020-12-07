export const isArabic=(text:string) =>{
    var pattern = /[\u0600-\u06FF \u0750-\u077F]/;
    return pattern.test(text);
  }
  function isNumeric(str:any) {
    return !isNaN(str) }
  const RtlAll = (arr:string[]) => {
    let str = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (isArabic(arr[i])) {
            let str2 = arr[i];
            i++;
            while (isArabic(arr[i])) {
                str2 = str2 + " " + arr[i];
                i++;
            }
            str = str2 + " " + str;
            if (i < arr.length)
                str = arr[i] + " " + str;
        }
        else {
            str = arr[i] + " " + str;
        }
    }
    return (str);
  };
  
  const figmaBidi = (arr:string[]) => {
    let str =  "";
    for (let i = 0; i < arr.length; i++) {
  
            let str2:string="";
            let space:string="";
            let same:boolean =isArabic(arr[i]);
            while (isArabic(arr[i])==same&&i < arr.length) {
              if(isArabic(arr[i])) {
                str2 = arr[i] + space + str2;
  
              }else
                str2 = str2 + space + arr[i];
                space=" ";
                i++;
            }
            i--;
            str = str2 + " " + str;
                }
    return (str)
  }
  const jsBidi = (arr:string[]) => {
    let str =  "";
    for (let i = 0; i < arr.length; i++) {
  
            let str2:string="";
            let space:string="";
            let same:boolean =isArabic(arr[i]);
            while (isArabic(arr[i])==same&&i < arr.length) {
                str2 = str2 + space + arr[i];
                space=" ";
                i++;
            }
            i--;
            str = str2 + " " + str;
                }
    return (str)
  }
  
const reverse =(str: string):string=> (isArabic(str)&&!isNumeric(str)) ? str.split("").reverse().join(""):str;

  const reverseArabicPhrases=(str: string)=>
      str.split(" ").map(n=>(n.split("\n").length>1)?n.split("\n").map(n=>reverse(n)).join("\n"):reverse(n)).join(" ");
  
  const textFix = (Str:string,option="SMART") => {
    if(option==="SMART")
    return (jsBidi(Str.split(" ")));
    else if (option==="NAIVE_RTL")
    return (RtlAll(Str.split(" ")));
    else if (option==="SMART_FIGMA")
    return (figmaBidi(Str.split(" ")));
  
  };

  export default (str:string, option:string)=>{
    console.log(str.split("\n"));
    

    return textFix(reverseArabicPhrases(str),option);
    };
    