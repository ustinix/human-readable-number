module.exports = function toReadable (number) {
    const
    z = "zero",
    n = "ten",
    h = "hundred",
    t = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    o = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    p = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let str = number.toString();

    if(str == 0) return z;
    if(str.length == 1) return o[number-1];
    if(str == 10) return n;
    if(str.length == 2){
        if(str[0] == 1) return p[parseInt(str[1])-1];
        else return t[parseInt(str[0])-2] + ((str[1]!='0')?(' ' + o[parseInt(str[1])-1]):'');
    }
    if(str.length == 3){
    if(str[1] == 0 && str[2] == 0) return o[parseInt(str[0])-1] + ' ' + h;
    if(str[1] == 1 && str[2] == 0) return o[parseInt(str[0])-1] + ' ' + h + ' ' + n;
    if(str[1] == 0 && str[2] >= 1) return o[parseInt(str[0])-1] + ' ' + h + ' ' + o[parseInt(str[2])-1];
    if(str[1] == 1 && str[2] >= 1) return o[parseInt(str[0])-1] + ' ' + h + ' ' + p[parseInt(str[2])-1];
    if(str[1] >= 2 && str[2] == 0) return o[parseInt(str[0])-1] + ' ' + h + ' ' + t[parseInt(str[1])-2];
    if(str[1] >= 2 && str[2] >= 1) return o[parseInt(str[0])-1] + ' ' + h + ' ' + t[parseInt(str[1])-2] + ' ' + o[parseInt(str[2])-1];
    }
}
