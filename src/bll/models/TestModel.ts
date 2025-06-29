export type FileNameModel = string

export interface AudioColorAnswerModel {
    color: string
    value: FileNameModel,
    isCorrect: boolean
}

export interface QuestionModel {
    question: FileNameModel
    answers: AudioColorAnswerModel[]
}

export interface AdditionalOptionsModel {
    correctPhrases: FileNameModel[],
    incorrectPhrases: FileNameModel[]
}

export interface TestModel {
    id: string
    name: string
    additional: AdditionalOptionsModel
    questions: QuestionModel[]
}