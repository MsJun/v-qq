// 定义一个类
 class Song{
    constructor({id, mid, singer, name, album, duration, image, url}){
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
    }
}
// 实例化
export function createSong(musicData){
    return new Song({
        id:musicData.songid,
        mid:musicData.songmid,
        singer:filterSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
    })
}
//歌手不止一个，我们想得到一个字符串，并用/拼接
function filterSinger(singers){
    let arr = [];
    if(!singers){
        return ''
    }
    singers.forEach(item=>{
        arr.push(item.name)
    })
    return arr.join('/')
}