import { ITestOptionsModel, modelDefault } from '@models/ITestOptionsModel'
import { ITestOptionsViewModel, viewModelDefault } from '@viewModels/ITestOptionsViewModel'


export class Mapper {
    static toModel(vm: ITestOptionsViewModel): ITestOptionsModel {
        if (!vm) {
            return { ...modelDefault }
        }

        const { totalQuestionCount, ...m } = vm
        return m as ITestOptionsModel
    }

    static toViewModel(m: ITestOptionsModel): ITestOptionsViewModel {
        let vm = (!m)
            ? { ...modelDefault, totalQuestionCount: 0 } as ITestOptionsViewModel
            : { ...viewModelDefault }

        return vm as ITestOptionsViewModel
    }
}