import originJsonp from 'jsonp'
export let jsonp = ((url,data,option)=>{
    url+=(url.indexOf('?')<0?'?':'&')+param(data)
    return new Promise((resolve,reject)=>{
        originJsonp(url,option,(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
})
let param = (data=>{
    let url = ''
    for(var k in data){
        let value = data[k]==undefined?'':data[k]
        url+='&'+k+'='+decodeURIComponent(data[k])
    }
    return url ? url.substring(1):''
})
