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
/// <reference types="@theia/monaco-editor-core/monaco" />
import { CommandRegistry } from '@theia/core/lib/common/command';
import { Emitter } from '@theia/core/lib/common/event';
import { Disposable, DisposableCollection } from '@theia/core/lib/common/disposable';
import ICommandEvent = monaco.commands.ICommandEvent;
import ICommandService = monaco.commands.ICommandService;
export declare const MonacoCommandServiceFactory: unique symbol;
export interface MonacoCommandServiceFactory {
    (): MonacoCommandService;
}
export declare class MonacoCommandService implements ICommandService, Disposable {
    protected readonly commandRegistry: CommandRegistry;
    protected readonly onWillExecuteCommandEmitter: Emitter<ICommandEvent>;
    protected readonly onDidExecuteCommandEmitter: Emitter<ICommandEvent>;
    protected readonly toDispose: DisposableCollection;
    protected delegate: monaco.services.StandaloneCommandService | undefined;
    protected readonly delegateListeners: DisposableCollection;
    constructor(commandRegistry: CommandRegistry);
    dispose(): void;
    get onWillExecuteCommand(): monaco.IEvent<ICommandEvent>;
    get onDidExecuteCommand(): monaco.IEvent<ICommandEvent>;
    setDelegate(delegate: monaco.services.StandaloneCommandService | undefined): void;
    executeCommand(commandId: any, ...args: any[]): Promise<any>;
    executeMonacoCommand(commandId: any, ...args: any[]): Promise<any>;
}
//# sourceMappingURL=monaco-command-service.d.ts.map