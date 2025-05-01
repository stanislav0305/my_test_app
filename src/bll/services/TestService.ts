import { TestList, Test, Question, AudioColorAnswer } from '@entities/TestList'
import { TestModel, AudioColorAnswerModel } from '@models/TestModel'
import testRepository from '@repositories/TestRepository'
import SoundService from '@services/SoundService'
import { ITestOptionsModel } from '@models/ITestOptionsModel'
import { Mapper } from '@bll/Mapper'


type IncorrectAnswersGenType = 'fromRandomOtherQuestionsCorrectAnswers' | undefined

class QuestionOptions {
    static correctAnswersCount: number = 1
    static answerCount: number = 3
    static genIncorrectAnswers: IncorrectAnswersGenType = 'fromRandomOtherQuestionsCorrectAnswers'
}


export class TestService {
    constructor() {
    }

    getTestQuestionCount(): number {
        const testList: TestList = testRepository.getTests()
        return testList.tests[0].questions.length
    }

    getTest(opt: ITestOptionsModel): TestModel {
        const testList: TestList = testRepository.getTests()
        let test: Test = Mapper.toEntity(testList.tests[0], opt)

        const fileNames = Mapper.toFileNames(test)
        SoundService.loadAllSounds(fileNames)

        const testModel = Mapper.toModel(test, opt, this)
        console.log('testModel', testModel)

        return testModel
    }

    GetCorrectAnswer(answers: AudioColorAnswerModel[]) {
        let result: AudioColorAnswerModel[] = []

        if (QuestionOptions.correctAnswersCount === 1) {
            answers.find((a: AudioColorAnswerModel) => { return a.isCorrect })
            result.push(answers[0])
        } else {
            result = answers.filter((a: AudioColorAnswerModel) => { return a.isCorrect })
        }

        return result
    }

    GetIncorrectAnswer(fullTestCorrectAnswers: AudioColorAnswerModel[], correctAnswersModels: AudioColorAnswerModel[]) {
        let result: AudioColorAnswerModel[] = []

        const correctValues = correctAnswersModels.map((a: AudioColorAnswerModel) => { return a.value })

        result = fullTestCorrectAnswers
            .filter((a: AudioColorAnswerModel) => { return !correctValues.includes(a.value) })
            .slice(0, QuestionOptions.answerCount - QuestionOptions.correctAnswersCount)
            .map((a: AudioColorAnswerModel) => {
                return { ...a, isCorrect: false }
            })

        return result
    }

    getAllCorrectAnswers(test: Test): AudioColorAnswerModel[] {
        const answers: AudioColorAnswerModel[] = []

        test.questions.forEach((question: Question) => {
            const a = question.answers.find((a: AudioColorAnswer) => { return !!a.isCorrect })
            !!a && answers.push(a)
        })

        return answers
    }
}

export default new TestService()