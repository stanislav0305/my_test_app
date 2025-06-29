import React, { Component } from 'react'
import NavButton from '@navigation/NavButton'
import Spacer from '@ui/components/Spacer'
import ViewCardMTA from '@ui/components/themedComponents/ViewCardMTA'
import { connect, ConnectedProps } from 'react-redux'
import { AppDispatch, RootState } from '@dal/state/store'
import { getTestHeaders } from '@dal/state/tests/testList.slice'
import { FlatList, View } from 'react-native'


class TestList extends Component<TestListProps, {}> {
    render() {
        const { testHeaders } = this.props
        return (
            <ViewCardMTA>
                <FlatList data={testHeaders}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={(item, index) => `${index}-${item.id}-flat-list-item`}
                    renderItem={({ item }) => {
                        return (
                            <View key={`${item.id}-view`}>
                                <NavButton key={`${item.id}-nav-button`} title={item.name} screenName='TestOptions' />
                                <Spacer key={`${item.id}-spacer`} size={10} />
                            </View>
                        )
                    }}
                />
            </ViewCardMTA>
        )
    }
}
function mapStateToProps(state: RootState) {
    return { testHeaders: getTestHeaders(state) }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return { dispatch }
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type TestListProps = ConnectedProps<typeof connector>

export default connect(mapStateToProps, mapDispatchToProps)(TestList)