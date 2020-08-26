import { AbstractViewContribution, FrontendApplicationContribution, LabelProvider, QuickOpenService, StatusBar, StatusBarEntry, KeybindingRegistry, ViewContainerTitleOptions } from '@theia/core/lib/browser';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { CommandRegistry, DisposableCollection, CommandService } from '@theia/core/lib/common';
import { ContextKeyService, ContextKey } from '@theia/core/lib/browser/context-key-service';
import { ScmService } from './scm-service';
import { ScmWidget } from '../browser/scm-widget';
import { ScmQuickOpenService } from './scm-quick-open-service';
import { ScmRepository } from './scm-repository';
import { ColorContribution } from '@theia/core/lib/browser/color-application-contribution';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
export declare const SCM_WIDGET_FACTORY_ID: string;
export declare const SCM_VIEW_CONTAINER_ID = "scm-view-container";
export declare const SCM_VIEW_CONTAINER_TITLE_OPTIONS: ViewContainerTitleOptions;
export declare namespace SCM_COMMANDS {
    const CHANGE_REPOSITORY: {
        id: string;
        category: string;
        label: string;
    };
    const ACCEPT_INPUT: {
        id: string;
    };
    const TREE_VIEW_MODE: {
        id: string;
        tooltip: string;
        iconClass: string;
        label: string;
    };
    const LIST_VIEW_MODE: {
        id: string;
        tooltip: string;
        iconClass: string;
        label: string;
    };
}
export declare namespace ScmColors {
    const editorGutterModifiedBackground = "editorGutter.modifiedBackground";
    const editorGutterAddedBackground = "editorGutter.addedBackground";
    const editorGutterDeletedBackground = "editorGutter.deletedBackground";
}
export declare class ScmContribution extends AbstractViewContribution<ScmWidget> implements FrontendApplicationContribution, TabBarToolbarContribution, ColorContribution {
    protected readonly statusBar: StatusBar;
    protected readonly scmService: ScmService;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly scmQuickOpenService: ScmQuickOpenService;
    protected readonly labelProvider: LabelProvider;
    protected readonly commands: CommandService;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly contextKeys: ContextKeyService;
    protected scmFocus: ContextKey<boolean>;
    constructor();
    protected init(): void;
    initializeLayout(): Promise<void>;
    onStart(): void;
    protected updateContextKeys(): void;
    registerCommands(commandRegistry: CommandRegistry): void;
    registerToolbarItems(registry: TabBarToolbarRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    protected acceptInput(): Promise<void>;
    protected acceptInputCommand(): {
        command: string;
        repository: ScmRepository;
    } | undefined;
    protected readonly statusBarDisposable: DisposableCollection;
    protected updateStatusBar(): void;
    protected setStatusBarEntry(id: string, entry: StatusBarEntry): void;
    /**
     * It should be aligned with https://github.com/microsoft/vscode/blob/0dfa355b3ad185a6289ba28a99c141ab9e72d2be/src/vs/workbench/contrib/scm/browser/dirtydiffDecorator.ts#L808
     */
    registerColors(colors: ColorRegistry): void;
}
//# sourceMappingURL=scm-contribution.d.ts.map