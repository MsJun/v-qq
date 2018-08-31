
//export const singer = state=>state.singer
const getters = {
    singer(state){
        return state.singer
    },
    playing(state){
        return state.playing
    },
    fullScreen(state){
        return state.fullScreen
    },
    playlist(state){
        return state.playlist
    },
    setquenceList(state){
        return state.sequenceList
    },
    mode(state){
        return state.mode
    },
    currentIndex(state){
        return state.currentIndex
    },
    currentSong(state){
        return state.playlist[state.currentIndex] || {}
    }
}
export default getters