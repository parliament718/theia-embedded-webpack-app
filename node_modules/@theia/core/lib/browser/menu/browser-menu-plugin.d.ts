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
import { MenuBar, Menu as MenuWidget, Widget } from '@phosphor/widgets';
import { CommandRegistry as PhosphorCommandRegistry } from '@phosphor/commands';
import { CommandRegistry, ActionMenuNode, CompositeMenuNode, MenuModelRegistry, MenuPath, DisposableCollection, Disposable } from '../../common';
import { KeybindingRegistry } from '../keybinding';
import { FrontendApplicationContribution, FrontendApplication } from '../frontend-application';
import { ContextKeyService } from '../context-key-service';
import { ContextMenuContext } from './context-menu-context';
import { ApplicationShell } from '../shell';
export declare abstract class MenuBarWidget extends MenuBar {
    abstract activateMenu(label: string, ...labels: string[]): Promise<MenuWidget>;
    abstract triggerMenuItem(label: string, ...labels: string[]): Promise<MenuWidget.IItem>;
}
export declare class BrowserMainMenuFactory {
    protected readonly contextKeyService: ContextKeyService;
    protected readonly context: ContextMenuContext;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly keybindingRegistry: KeybindingRegistry;
    protected readonly menuProvider: MenuModelRegistry;
    createMenuBar(): MenuBarWidget;
    protected fillMenuBar(menuBar: MenuBarWidget): void;
    createContextMenu(path: MenuPath, args?: any[]): MenuWidget;
    protected createMenuCommandRegistry(menu: CompositeMenuNode, args?: any[]): MenuCommandRegistry;
    protected registerMenu(menuCommandRegistry: MenuCommandRegistry, menu: CompositeMenuNode, args: any[]): void;
    private get services();
}
declare class MenuServices {
    readonly commandRegistry: CommandRegistry;
    readonly keybindingRegistry: KeybindingRegistry;
    readonly contextKeyService: ContextKeyService;
    readonly context: ContextMenuContext;
}
export declare class BrowserMenuBarContribution implements FrontendApplicationContribution {
    protected readonly factory: BrowserMainMenuFactory;
    protected readonly shell: ApplicationShell;
    constructor(factory: BrowserMainMenuFactory);
    onStart(app: FrontendApplication): void;
    get menuBar(): MenuBarWidget | undefined;
    protected createLogo(): Widget;
}
/**
 * Stores Theia-specific action menu nodes instead of PhosphorJS commands with their handlers.
 */
declare class MenuCommandRegistry extends PhosphorCommandRegistry {
    protected services: MenuServices;
    protected actions: Map<string, [ActionMenuNode, any[]]>;
    protected toDispose: DisposableCollection;
    constructor(services: MenuServices);
    registerActionMenu(menu: ActionMenuNode, args: any[]): void;
    snapshot(): this;
    protected registerCommand(menu: ActionMenuNode, args: any[]): Disposable;
}
export {};
//# sourceMappingURL=browser-menu-plugin.d.ts.map