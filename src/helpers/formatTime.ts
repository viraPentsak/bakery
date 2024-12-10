const formatTime = (ms: number
): number => {
    return parseFloat((ms / 60 / 1000).toFixed(0));
}

export default formatTime;