import { NativeFunction, ArgType } from '@tryforge/forgescript';
import { textBaseline } from '../..';
declare const _default: NativeFunction<[{
    name: string;
    description: string;
    type: ArgType.String;
    required: false;
    rest: false;
}, {
    name: string;
    description: string;
    type: ArgType.Enum;
    enum: typeof textBaseline;
    required: false;
    rest: false;
}], true>;
export default _default;
//# sourceMappingURL=textBaseline.d.ts.map