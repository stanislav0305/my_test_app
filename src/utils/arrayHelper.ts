class ArrayHelper {
    static randomSortArray<T>(arr: T[]): T[] {
        let shuffled = [...arr]
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        return shuffled
    }
}

export default ArrayHelper