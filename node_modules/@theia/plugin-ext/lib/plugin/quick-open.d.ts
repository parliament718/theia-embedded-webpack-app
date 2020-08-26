/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { QuickOpenExt, QuickOpenMain, TransferInputBox, Plugin, TransferQuickPick, QuickInputTitleButtonHandle } from '../common/plugin-api-rpc';
import * as theia from '@theia/plugin';
import { QuickPickOptions, QuickPickItem, InputBoxOptions, InputBox, QuickPick, QuickInput } from '@theia/plugin';
import { RPCProtocol } from '../common/rpc-protocol';
import { Event } from '@theia/core/lib/common/event';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { QuickInputButton, ThemeIcon } from './types-impl';
import { URI } from 'vscode-uri';
export declare type Item = string | QuickPickItem;
export declare class QuickOpenExtImpl implements QuickOpenExt {
    private proxy;
    private selectItemHandler;
    private validateInputHandler;
    private _sessions;
    private currentQuickInputs;
    constructor(rpc: RPCProtocol);
    $onItemSelected(handle: number): void;
    $validateInput(input: string): PromiseLike<string | undefined> | undefined;
    showQuickPick(promiseOrItems: QuickPickItem[] | PromiseLike<QuickPickItem[]>, options?: QuickPickOptions, token?: theia.CancellationToken): PromiseLike<QuickPickItem | undefined>;
    showQuickPick(promiseOrItems: QuickPickItem[] | PromiseLike<QuickPickItem[]>, options?: QuickPickOptions & {
        canSelectMany: true;
    }, token?: theia.CancellationToken): PromiseLike<QuickPickItem[] | undefined>;
    showQuickPick(promiseOrItems: string[] | PromiseLike<string[]>, options?: QuickPickOptions, token?: theia.CancellationToken): PromiseLike<string | undefined>;
    showCustomQuickPick<T extends QuickPickItem>(options: TransferQuickPick<T>): void;
    createQuickPick<T extends QuickPickItem>(plugin: Plugin): QuickPick<T>;
    showInput(options?: InputBoxOptions, token?: theia.CancellationToken): PromiseLike<string | undefined>;
    hide(): void;
    showInputBox(options: TransferInputBox): void;
    createInputBox(plugin: Plugin): InputBox;
    $acceptOnDidAccept(sessionId: number): Promise<void>;
    $acceptDidChangeValue(sessionId: number, changedValue: string): Promise<void>;
    $acceptOnDidHide(sessionId: number): Promise<void>;
    $acceptOnDidTriggerButton(sessionId: number, btn: QuickInputTitleButtonHandle): Promise<void>;
    $onDidChangeActive(sessionId: number, handles: number[]): void;
    $onDidChangeSelection(sessionId: number, handles: number[]): void;
}
export declare class QuickInputExt implements QuickInput {
    readonly quickOpen: QuickOpenExtImpl;
    readonly quickOpenMain: QuickOpenMain;
    readonly plugin: Plugin;
    private _busy;
    private _enabled;
    private _ignoreFocusOut;
    private _step;
    private _title;
    private _totalSteps;
    private _value;
    protected visible: boolean;
    protected disposableCollection: DisposableCollection;
    private onDidAcceptEmitter;
    /**
     * it has to be named `_onDidChangeValueEmitter`, since Gitlens extension relies on it
     * https://github.com/eamodio/vscode-gitlens/blob/f22a9cd4199ac498c217643282a6a412e1fc01ae/src/commands/gitCommands.ts#L242-L243
     */
    private _onDidChangeValueEmitter;
    private onDidHideEmitter;
    private onDidTriggerButtonEmitter;
    constructor(quickOpen: QuickOpenExtImpl, quickOpenMain: QuickOpenMain, plugin: Plugin);
    get title(): string | undefined;
    set title(title: string | undefined);
    get step(): number | undefined;
    set step(step: number | undefined);
    get totalSteps(): number | undefined;
    set totalSteps(totalSteps: number | undefined);
    get enabled(): boolean;
    set enabled(enabled: boolean);
    get busy(): boolean;
    set busy(busy: boolean);
    get ignoreFocusOut(): boolean;
    set ignoreFocusOut(ignoreFocusOut: boolean);
    get value(): string;
    set value(value: string);
    show(): void;
    dispose(): void;
    protected update(changed: object): void;
    hide(): void;
    protected convertURL(iconPath: URI | {
        light: string | URI;
        dark: string | URI;
    } | ThemeIcon): URI | {
        light: string | URI;
        dark: string | URI;
    } | ThemeIcon;
    _fireAccept(): void;
    _fireChangedValue(changedValue: string): void;
    _fireHide(): void;
    _fireButtonTrigger(btn: QuickInputButton): void;
    get onDidHide(): Event<void>;
    get onDidAccept(): Event<void>;
    get onDidChangeValue(): Event<string>;
    get onDidTriggerButton(): Event<QuickInputButton>;
}
/**
 * Base implementation of {@link InputBox} that uses {@link QuickOpenExt}.
 * Missing functionality is going to be implemented in the scope of https://github.com/eclipse-theia/theia/issues/5109
 */
export declare class InputBoxExt extends QuickInputExt implements InputBox {
    readonly quickOpen: QuickOpenExtImpl;
    readonly quickOpenMain: QuickOpenMain;
    readonly plugin: Plugin;
    readonly quickInputIndex: number;
    /**
     * Input Box API Start
     */
    private _placeholder;
    private _password;
    private _buttons;
    private _prompt;
    private _validationMessage;
    /**
     * Input Box API End
     */
    constructor(quickOpen: QuickOpenExtImpl, quickOpenMain: QuickOpenMain, plugin: Plugin, quickInputIndex: number);
    get buttons(): ReadonlyArray<QuickInputButton>;
    set buttons(buttons: ReadonlyArray<QuickInputButton>);
    get password(): boolean;
    set password(password: boolean);
    get placeholder(): string | undefined;
    set placeholder(placeholder: string | undefined);
    get prompt(): string | undefined;
    set prompt(prompt: string | undefined);
    get validationMessage(): string | undefined;
    set validationMessage(validationMessage: string | undefined);
    show(): void;
}
/**
 * Base implementation of {@link QuickPick} that uses {@link QuickOpenExt}.
 * Missing functionality is going to be implemented in the scope of https://github.com/eclipse-theia/theia/issues/5059
 */
export declare class QuickPickExt<T extends QuickPickItem> extends QuickInputExt implements QuickPick<T> {
    readonly quickOpen: QuickOpenExtImpl;
    readonly quickOpenMain: QuickOpenMain;
    readonly plugin: Plugin;
    readonly quickInputIndex: number;
    buttons: ReadonlyArray<QuickInputButton>;
    private _placeholder;
    private _items;
    private _handlesToItems;
    private _itemsToHandles;
    private _canSelectMany;
    private _matchOnDescription;
    private _matchOnDetail;
    private _activeItems;
    private readonly _onDidChangeActiveEmitter;
    private _selectedItems;
    private readonly _onDidChangeSelectionEmitter;
    constructor(quickOpen: QuickOpenExtImpl, quickOpenMain: QuickOpenMain, plugin: Plugin, quickInputIndex: number);
    get placeholder(): string | undefined;
    set placeholder(placeholder: string | undefined);
    get items(): T[];
    set items(items: T[]);
    get canSelectMany(): boolean;
    set canSelectMany(canSelectMany: boolean);
    get matchOnDescription(): boolean;
    set matchOnDescription(matchOnDescription: boolean);
    get matchOnDetail(): boolean;
    set matchOnDetail(matchOnDetail: boolean);
    get activeItems(): T[];
    set activeItems(activeItems: T[]);
    onDidChangeActive: Event<T[]>;
    get selectedItems(): T[];
    set selectedItems(selectedItems: T[]);
    onDidChangeSelection: Event<T[]>;
    _fireDidChangeActive(handles: number[]): void;
    _fireDidChangeSelection(handles: number[]): void;
    show(): void;
}
//# sourceMappingURL=quick-open.d.ts.map