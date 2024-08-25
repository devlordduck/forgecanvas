import { NativeFunction, ArgType } from '@tryforge/forgescript';
import { Context } from '../../';

export default new NativeFunction({
    name: '$lineWidth',
    description: 'Sets or returns the line width in a canvas.',
    version: '1.0.0',
    brackets: false,
    unwrap: true,
    args: [
        {
            name: 'canvas',
            description: 'Name of the canvas.',
            type: ArgType.String,
            required: false,
            rest: false
        },
        {
            name: 'width',
            description: 'The new line width.',
            type: ArgType.Number,
            required: false,
            rest: false
        }
    ],
    async execute (ctx: Context, [name, width]) {
        const canvas = name
            ? ctx.canvasManager?.get(name)
                : !name && ctx.canvasManager?.current?.length !== 0 
                    ? ctx.canvasManager?.current?.[ctx.canvasManager?.current?.length - 1] : null;
        
        if (!canvas)
            return this.customError('No canvas');

        if (!width)
            return this.success(canvas.ctx.lineWidth);

        canvas.ctx.lineWidth = width;
        return this.success();
    }
});