/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { MenuPath } from '../common/menu';
import { Disposable, DisposableCollection } from '../common/disposable';
export declare type Anchor = MouseEvent | {
    x: number;
    y: number;
};
export declare function toAnchor(anchor: HTMLElement | {
    x: number;
    y: number;
}): Anchor;
export declare abstract class ContextMenuAccess implements Disposable {
    protected readonly toDispose: DisposableCollection;
    readonly onDispose: import("../common").Event<void>;
    constructor(toClose: Disposable);
    get disposed(): boolean;
    dispose(): void;
}
export declare abstract class ContextMenuRenderer {
    protected _current: ContextMenuAccess | undefined;
    protected readonly toDisposeOnSetCurrent: DisposableCollection;
    /**
     * Currently opened context menu.
     * Rendering a new context menu will close the current.
     */
    get current(): ContextMenuAccess | undefined;
    protected setCurrent(current: ContextMenuAccess | undefined): void;
    render(options: RenderContextMenuOptions): ContextMenuAccess;
    /** @deprecated since 0.7.2 pass `RenderContextMenuOptions` instead */
    render(menuPath: MenuPath, anchor: Anchor, onHide?: () => void): ContextMenuAccess;
    protected abstract doRender(options: RenderContextMenuOptions): ContextMenuAccess;
}
export interface RenderContextMenuOptions {
    menuPath: MenuPath;
    anchor: Anchor;
    args?: any[];
    onHide?: () => void;
}
export declare namespace RenderContextMenuOptions {
    function resolve(menuPathOrOptions: MenuPath | RenderContextMenuOptions, anchor?: Anchor, onHide?: () => void): RenderContextMenuOptions;
}
//# sourceMappingURL=context-menu-renderer.d.ts.map