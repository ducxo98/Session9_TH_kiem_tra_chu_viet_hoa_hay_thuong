function isFirstLetterUpperCase(str) {
    regexp =/^[A-Z]/
    if (regexp.test(str)){
        document.write("string's first charater is uppercase")

    }else {
        document.write("string's first charater is not uppercase")
    }
    
} isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');