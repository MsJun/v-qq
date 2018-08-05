// 兼容浏览器
var elementStyle = document.createElement('div').style;
let vendor = (()=>{
    let transformName = {
        webkit:'webkitTransform',
        Moz:'MozTransform',
        O:'OTransform',
        ms:'msTransform',
        standard:'transform'
    } 
    for(var k in transformName){
        if(elementStyle[transformName[k]]!=undefined){
            return k
        }
    }
    return false
})()
export let prefixStyle = (style=>{
    if(vendor==false){
        return false
    }else if(vendor==standard){
        return style
    }
    return k+style.charAt(0).toUpperCase()+style.substr(1)
})