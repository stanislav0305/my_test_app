import { Action, configureStore, Middleware, UnknownAction } from '@reduxjs/toolkit'
import { thunk, ThunkAction } from 'redux-thunk'
import counterReducer from '@dal/state/counter/counter.slice'
import currentTestReducer from '@dal/state/tests/currentTest.slice'
import testListReducer from '@dal/state/tests/testList.slice'
import { SoundService2, soundService2 } from '@bll/services/SoundService'
import testService, { TestService } from '@services/TestService'

export interface AppExtraThunkArguments {
    soundService: SoundService2,
    testService: TestService,
}

const loggerMiddleware: Middleware
    = (store) => (next) => (action: AppThunk | Action | unknown) => {
        // Вывод информации о действии в консоль
        console.log('Dispatching action:', action)

        // If the action is a ThunkAction (a function), you can log its name or a description
        if (typeof action === 'function') {
            console.log('  ThunkAction:', (action as AppThunk).name || 'Anonymous Thunk');
        }

        // Передача действия дальше по цепочке middleware
        const result = next(action);
        console.log('Next state:', store.getState());
        return result;
    }

export const store = configureStore({
    devTools: true,
    reducer: {
        counter: counterReducer,
        currentTest: currentTestReducer,
        testList: testListReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    soundService: soundService2,
                    testService
                } as AppExtraThunkArguments
            }
        })
            .concat(thunk)
            .concat(loggerMiddleware),
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    UnknownAction
>