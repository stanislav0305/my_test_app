import { AudioColorAnswer, FileName, Question, Test } from '@entities/TestList'
import { ITestOptionsModel } from '@models/ITestOptionsModel'
import { AdditionalOptionsModel, AudioColorAnswerModel, QuestionModel, TestModel } from '@models/TestModel'
import { TestService } from '@services/TestService'
import ArrayHelper from '@utils/arrayHelper'


export class Mapper {
    static toEntity(entity: Test, opt: ITestOptionsModel): Test {
        let m: Test = {
            ...entity,
            questions:
                opt.testPassMode === 'full'
                    ? entity.questions
                    : opt.testPassMode === 'byParts'
                        ? entity.questions.slice(0, opt.questionCountInOnePass)
                        : [],
        }

        return m
    }

    static toModel(entity: Test, opt: ITestOptionsModel,
        testService: TestService): TestModel {
        const ent: Test = Object.assign<Test, Test>({} as Test, entity)

        const fullTestCorrectAnswersModels: AudioColorAnswerModel[] = testService.getAllCorrectAnswers(entity)

        let questionModels: QuestionModel[] =
            ent.questions.map((question: Question) => {
                let answersModels: AudioColorAnswerModel[] = Object.assign<AudioColorAnswerModel[], AudioColorAnswer[]>
                    ([] as AudioColorAnswerModel[], question.answers)

                let result: AudioColorAnswerModel[] = []
                const correctAnswers = testService.GetCorrectAnswer(answersModels)
                result = correctAnswers ? result.concat(correctAnswers) : result

                const inCorrectAnswers = testService.GetIncorrectAnswer(fullTestCorrectAnswersModels, correctAnswers)
                result = correctAnswers ? result.concat(inCorrectAnswers) : result

                result = ArrayHelper.randomSortArray<AudioColorAnswerModel>(result)

                return {
                    question: question.question,
                    answers: result,
                } as QuestionModel
            })


        if (opt.testPassMode === 'byParts') {
            let newArr: QuestionModel[] = [] as QuestionModel[]
            for (let i = 0; i < opt.passCount; i++) {
                const arr = Object.assign<QuestionModel[], QuestionModel[]>([] as QuestionModel[], questionModels)
                newArr.push(...arr)
            }

            questionModels = newArr
        }

        questionModels = opt.questionOrder === 'random'
            ? ArrayHelper.randomSortArray<QuestionModel>(questionModels)
            : questionModels

        let model = Object.assign<TestModel, Test>({} as TestModel, ent)
        model = {
            ...model,
            additional: {
                correctPhrases: [...ent.additional.correctPhrases] as FileName[],
                incorrectPhrases: [...ent.additional.incorrectPhrases] as FileName[],
            } as AdditionalOptionsModel,
            questions: questionModels,
        } as TestModel

        return model
    }

    static toFileNames(test: Test): FileName[] {
        const fileNames: FileName[] = []

        test.additional.correctPhrases.forEach((phrase: FileName) => {
            fileNames.push(phrase)
        })

        test.additional.incorrectPhrases.forEach((phrase: FileName) => {
            fileNames.push(phrase)
        })

        test.questions.forEach((question: Question) => {
            fileNames.push(question.question)

            question.answers.forEach((answer: AudioColorAnswer) => {
                fileNames.push(answer.value)
            })
        })

        return fileNames
    }
}