// 引入播放方式（单曲循环，顺序播放,随机播放）
import {playMode} from '../common/js/config'
const state = {
    singer:{},
    // 播放数据
    //是否播放 
    playing:false,
    // 是否全屏
    fullScreen:false,
    // 播放列表
    playlist:[],
    // 随机播放列表
    sequenceList:[],
    // 播放方式
    mode:playMode.sequence,
    //   当前播放歌曲的索引
    currentIndex:-1



}
export default state