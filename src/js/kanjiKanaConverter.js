function convertToOldVariants(){var n,a,r,e=document.getElementsByClassName("wrapped-japanese");if(e)for(var O in e)void 0!==e[O].innerHTML&&(n=e[O].innerHTML,e[O].innerHTML="","kanji"!==OLD_CONVERSION_TYPE&&([n,a,r]=replaceInBrackets(n)),"kana"===OLD_CONVERSION_TYPE?n=replaceStrings(kanaArray,0,n):"kanji"===OLD_CONVERSION_TYPE?n=replaceStrings(kanjiArray,0,n):"both"===OLD_CONVERSION_TYPE&&(n=replaceStrings2(kanaArray,kanjiArray,0,n)),"kanji"!==OLD_CONVERSION_TYPE&&(n=returnBrackets(n,a,OLD_CONVERSION_TYPE,r,OLD_CONVERSION_TYPE)),console.log(n),ALSO_TO_KATA?e[O].innerHTML=convertToKata(n):e[O].innerHTML=n)}convertToOldVariants();