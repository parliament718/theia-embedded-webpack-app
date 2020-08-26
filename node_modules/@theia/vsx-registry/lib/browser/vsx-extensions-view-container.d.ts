/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
 *******************************************************************************‚*/
import { ViewContainer, PanelLayout, ViewContainerPart, Message } from '@theia/core/lib/browser';
import { VSXExtensionsSearchBar } from './vsx-extensions-search-bar';
import { VSXExtensionsModel } from './vsx-extensions-model';
export declare class VSXExtensionsViewContainer extends ViewContainer {
    static ID: string;
    static LABEL: string;
    protected readonly searchBar: VSXExtensionsSearchBar;
    protected readonly model: VSXExtensionsModel;
    protected init(): void;
    protected onActivateRequest(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
    protected configureLayout(layout: PanelLayout): void;
    protected currentMode: VSXExtensionsViewContainer.Mode;
    protected readonly lastModeState: Map<VSXExtensionsViewContainer.Mode, ViewContainer.State>;
    protected updateMode(): void;
    protected registerPart(part: ViewContainerPart): void;
    protected applyModeToPart(part: ViewContainerPart): void;
    protected doStoreState(): any;
    protected doRestoreState(state: any): void;
}
export declare namespace VSXExtensionsViewContainer {
    const InitialMode = 0;
    const DefaultMode = 1;
    const SearchResultMode = 2;
    type Mode = typeof InitialMode | typeof DefaultMode | typeof SearchResultMode;
    interface State {
        query: string;
        modes: {
            [mode: number]: ViewContainer.State | undefined;
        };
    }
}
//# sourceMappingURL=vsx-extensions-view-container.d.ts.map