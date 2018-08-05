import * as types from './mution-types'
let actions = {
    selectplay({commit,state},{list,index}){
        // 直接调用mutation中的方法,并传入参数
        commit('setPlaylist',list)
        commit('setSequenceList',list)
        commit('currentIndex',index)
        commit('setFullScreen',true)
        commit('setPlayingstate',true)

    }
}
export default actions