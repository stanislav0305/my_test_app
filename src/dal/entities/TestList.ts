export type FileName = string

export interface AudioColorAnswer {
    color: string
    value: FileName
    isCorrect: boolean
}

export interface Question {
    question: FileName
    answers: AudioColorAnswer[]
}

export interface AdditionalOptions {
    correctPhrases: FileName[],
    incorrectPhrases: FileName[]
}


export type QuestionOrderType = 'series' | 'random'
export type TestPassModeType = 'full' | 'byParts'

export interface TestOptions {
    passMode: TestPassModeType
    partsOptions: PartsOptions | null
}

export interface PartsOptions {
    count: number //part count in test
    size: number //question count in one part
    order: QuestionOrderType //questions order in one part
}

export interface Test {
    id: string
    name: string
    options: TestOptions
    additional: AdditionalOptions
    questions: Question[]
}

export interface TestList {
    tests: Test[]
}

export const testsJson = {
    "tests": [
        {
            "id": 1,
            "name": "Тест цветов",
            "additional": {
                "correctPhrases": [
                    "good_job_correct.mp3",
                    "prefect_correct.mp3",
                    "yes_correct.mp3"
                ],
                "incorrectPhrases": [
                    "no_incorrect.mp3"
                ]
            },
            "questions": [
                {
                    "question": "q_green.mp3",
                    "answers": [{
                        "color": "#008000",
                        "value": "a_green.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_yellow.mp3",
                    "answers": [{
                        "color": "#ffff00",
                        "value": "a_yellow.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_red.mp3",
                    "answers": [{
                        "color": "#ff0000",
                        "value": "a_red.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_black.mp3",
                    "answers": [{
                        "color": "#000000",
                        "value": "a_black.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_white.mp3",
                    "answers": [{
                        "color": "#FFFFFF",
                        "value": "a_white.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_blue.mp3",
                    "answers": [{
                        "color": "#0000FF",
                        "value": "a_blue.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_light_blue.mp3",
                    "answers": [{
                        "color": "#81d4fa",
                        "value": "a_light_blue.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_brown.mp3",
                    "answers": [{
                        "color": "#482218",
                        "value": "a_brown.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_gray.mp3",
                    "answers": [{
                        "color": "#808080",
                        "value": "a_gray.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_orange.mp3",
                    "answers": [{
                        "color": "#FFA500",
                        "value": "a_orange.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_pink.mp3",
                    "answers": [{
                        "color": "#FFC0CB",
                        "value": "a_pink.mp3",
                        "isCorrect": true
                    }]
                },
                {
                    "question": "q_violet.mp3",
                    "answers": [{
                        "color": "#7F00FF",
                        "value": "a_violet.mp3",
                        "isCorrect": true
                    }]
                },
            ],
        }
    ]
}