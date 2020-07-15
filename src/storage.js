export default {
    getBestScore: () => parseInt(localStorage.bestScore) || 0,
    setBetScore: (bestScore) => localStorage.setItem('bestScore', bestScore)
}