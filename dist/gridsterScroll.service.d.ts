import { GridsterItemComponent } from './gridsterItem.component';
import { GridsterResizeEventType } from './gridsterResizeEventType.interface';
export declare function scroll(elemPosition: Array<number>, gridsterItem: GridsterItemComponent, e: MouseEvent, lastMouse: any, calculateItemPosition: Function, resize?: boolean, resizeEventScrollType?: GridsterResizeEventType): void;
export declare function cancelScroll(): void;
