import { createSlice, PayloadAction, ThunkAction, UnknownAction } from '@reduxjs/toolkit'
import { AppExtraThunkArguments, RootState } from '@dal/state/store'
import { MapperUI } from '@ui/MapperUI'
import { MapperBLL } from '@bll/MapperBLL'
import { ITestOptionsViewModel } from '@ui/viewModels/ITestOptionsViewModel'
import { ITestOptionsModel } from '@bll/models/ITestOptionsModel'
import { AudioColorAnswerModel, TestModel } from '@bll/models/TestModel'


interface TestResults {
  questionCount: number,
  rightAnswerCount: number,
}

export interface CurrentTest {
  questionNum: number,
  questionCount: number,
  questionReplay: boolean,
  answersDisabled: boolean,
  test: TestModel,
  testResults: TestResults
}

export const loadTestThunkAction = (testOptionsVM: ITestOptionsViewModel)
  : ThunkAction<void, RootState, AppExtraThunkArguments, UnknownAction> =>
  (dispatch, rooState, thunkArgs) => {

    console.log('start loadTestThunkAction !!!')
    const testOptionM: ITestOptionsModel = MapperUI.toModel(testOptionsVM)
    const testModel = thunkArgs.testService.getTest(testOptionM)

    const fileNames = MapperBLL.toFileNames(testModel)
    const { soundService } = thunkArgs
    soundService.loadAllSounds(fileNames)

    console.log('testModel for load:', testModel)
    dispatch(loadTest(testModel))

    console.log('end loadTestThunkAction !!!')
  }

export const startTestThunkAction = ()
  : ThunkAction<void, RootState, AppExtraThunkArguments, UnknownAction> =>
  (dispatch, rooState, thunkArgs) => {
    console.log('start startTestThunkAction !!!')

    dispatch(goToNextQuestion())
    dispatch(playQuestionThunkAction())

    console.log('end startTestThunkAction !!!')
  }

export const playQuestionThunkAction = ()
  : ThunkAction<void, RootState, AppExtraThunkArguments, UnknownAction> =>
  (dispatch, rooState, thunkArgs) => {
    console.log('start playQuestionThunkAction !!!')

    const { test, questionNum, questionCount } = rooState().currentTest

    if (questionNum >= questionCount) {
      console.log('playQuestionThunkAction stopped (questionNum >= questionCount)')
      return
    }

    const q = test.questions[questionNum].question
    const { soundService } = thunkArgs
    soundService.playSound(q, () => dispatch(resetQuestionState()))

    console.log('end playQuestionThunkAction !!!')
  }

export const selectAnswerThunkAction = (answer: AudioColorAnswerModel)
  : ThunkAction<void, RootState, AppExtraThunkArguments, UnknownAction> =>
  (dispatch, rooState, thunkArgs) => {
    console.log('start selectAnswerThunkAction !!!')

    dispatch(selectAnswer(answer))

    const { soundService } = thunkArgs
    const { test } = rooState().currentTest

    soundService.playSound(answer.value, () => {
      if (answer.isCorrect) {
        soundService.playRandomSound(test.additional.correctPhrases, () => {
          dispatch(goToNextQuestion())
          dispatch(playQuestionThunkAction())
        })
      } else {
        soundService.playRandomSound(test.additional.incorrectPhrases, () => {
          dispatch(playQuestionThunkAction())
        })
      }
    })

    console.log('end selectAnswerThunkAction !!!')
  }



export const currentTestSlice = createSlice({
  name: 'currentTest',
  initialState: {
    questionNum: -1,
    questionCount: 0,
    questionReplay: false,
    answersDisabled: false,
    test: {} as TestModel,
    testResults: {} as TestResults
  } as CurrentTest,
  reducers: {
    loadTest: (state, action: PayloadAction<TestModel>) => {
      const ap = action.payload

      state.questionNum = -1
      state.questionCount = ap.questions.length
      state.questionReplay = false
      state.test = ap
      state.answersDisabled = true
      state.testResults = {
        questionCount: ap.questions.length,
        rightAnswerCount: 0,
      }
    },
    resetQuestionState: state => {
      state.answersDisabled = false
    },
    goToNextQuestion: state => {
      state.questionNum++
      state.questionReplay = false
      state.answersDisabled = true
    },
    selectAnswer: (state, action: PayloadAction<AudioColorAnswerModel>) => {
      const answer = action.payload

      if (answer.isCorrect && !state.questionReplay)
        state.testResults.rightAnswerCount++

      state.questionReplay = state.questionReplay ? true : !answer.isCorrect
      state.answersDisabled = true
    }
  },
})

export const { loadTest, resetQuestionState, goToNextQuestion, selectAnswer } = currentTestSlice.actions
export const selectCurrentTest = (state: RootState) => state.currentTest
export default currentTestSlice.reducer