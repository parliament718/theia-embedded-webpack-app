/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { LocationProgress, ProgressLocationService } from './progress-location-service';
import { DisposableCollection, Disposable } from '../common';
import { ProgressBarOptions } from './progress-bar-factory';
export declare class ProgressBar implements Disposable {
    protected readonly progressLocationService: ProgressLocationService;
    protected readonly options: ProgressBarOptions;
    protected readonly toDispose: DisposableCollection;
    dispose(): void;
    protected progressBar: HTMLDivElement;
    protected progressBarContainer: HTMLDivElement;
    constructor();
    protected init(): void;
    protected onProgress(event: LocationProgress): void;
    protected setVisible(visible: boolean): void;
}
//# sourceMappingURL=progress-bar.d.ts.map