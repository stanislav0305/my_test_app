import React from 'react';
import { decrement, incrementByAmount, incrementWithLog } from '@dal/state/counter/counter.slice'
import ScreenWrapper from '@ui/components/ScreenWrapper'
import { Pressable, Text, View } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import { AppDispatch, RootState } from '@dal/state/store'


class Counter extends React.Component<CounterProps, {}> {
    constructor(props: CounterProps) {
        super(props)
    }

    render() {
        const { count, dispatch } = this.props

        return (

            < ScreenWrapper title={'Counter'} >
                <View>
                    <Pressable onPress={() => dispatch(incrementWithLog())}>
                        <Text>Increment</Text>
                    </Pressable>
                    <Text>{count}</Text>
                    <Pressable onPress={() => dispatch(decrement())}>
                        <Text>Decrement</Text>
                    </Pressable>
                    <Pressable onPress={() => dispatch(incrementByAmount(5))}>
                        <Text>Increment by 5</Text>
                    </Pressable>
                </View>
            </ScreenWrapper >
        )
    }
}

function mapStateToProps(state: RootState) {
    return { count: state.counter.value }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return { dispatch }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type CounterProps = ConnectedProps<typeof connector>

export default connect(mapStateToProps, mapDispatchToProps)(Counter)