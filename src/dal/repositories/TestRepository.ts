import { TestList, testsJson } from '@dal/entities/TestList'

class TestRepository {
    constructor() {
    }

    getTests() {
        const tests: TestList = JSON.parse(JSON.stringify(testsJson))//JSON.parse(testsJson)
        return tests
    }
}

export default new TestRepository()