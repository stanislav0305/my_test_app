import { Action, createSlice, PayloadAction, ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { AppDispatch, AppExtraThunkArguments, RootState } from '@dal/state/store';


interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};


export const incrementWithLog = (): ThunkAction<void, RootState, AppExtraThunkArguments, UnknownAction> =>
    (dispatch, rooState, appExtraThunkArguments) => {
        //appExtraThunkArguments.soundService2
        console.log('start incrementWithLog !!!')
        dispatch(increment())
        console.log('end incrementWithLog !!!')
    }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },/*
    extraReducers: (builder) => {
        builder.addCase(incrementWithLog.fulfilled, (state, action) => {
            //state.isLoading = false
            //state.contents = action.payload
        })

    },*/
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;