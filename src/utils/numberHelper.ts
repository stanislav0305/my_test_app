class NumberHelper {
    static getRandom(min: number, max: number): number {
        const minCeiled = Math.ceil(min)
        const maxFloored = Math.floor(max)
        // The maximum is inclusive and the minimum is inclusive
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    }
}

export default NumberHelper