const mutations = {
    setSinger(state,singer){
        state.singer = singer
    },
    setPlaying(state, flag) {
        state.playing = flag
    },
    setFullScreen(state, flag) {
        state.fullScreen = flag
    },
    setPlaylist(state, list) {
        state.playlist = list
    },
    setSequenceList(state, list) {
        state.sequenceList = list
    },
    setMode(state, mode) {
        state.mode = mode
    },
    currentIndex(state, index) {
        state.currentIndex = index
    },
    setPlayingstate(state){
        
    }
}
export default mutations