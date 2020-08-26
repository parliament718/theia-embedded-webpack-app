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
import { Emitter } from '@theia/core/lib/common/event';
import { EditorPreferences } from '@theia/editor/lib/browser/editor-preferences';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
import { ColorApplicationContribution } from '@theia/core/lib/browser/color-application-contribution';
export declare type WebviewThemeType = 'vscode-light' | 'vscode-dark' | 'vscode-high-contrast';
export interface WebviewThemeData {
    readonly activeTheme: WebviewThemeType;
    readonly styles: {
        readonly [key: string]: string | number;
    };
}
export declare class WebviewThemeDataProvider {
    protected readonly onDidChangeThemeDataEmitter: Emitter<void>;
    readonly onDidChangeThemeData: import("@theia/core/lib/common/event").Event<void>;
    protected readonly editorPreferences: EditorPreferences;
    protected readonly colors: ColorRegistry;
    protected readonly colorContribution: ColorApplicationContribution;
    protected themeData: WebviewThemeData | undefined;
    protected readonly editorStyles: Map<"editor.tabSize" | "editor.insertSpaces" | "editor.detectIndentation" | "editor.trimAutoWhitespace" | "editor.largeFileOptimizations" | "editor.wordBasedSuggestions" | "editor.stablePeek" | "editor.maxTokenizationLineLength" | "diffEditor.maxComputationTime" | "diffEditor.renderSideBySide" | "diffEditor.ignoreTrimWhitespace" | "diffEditor.renderIndicators" | "editor.acceptSuggestionOnCommitCharacter" | "editor.acceptSuggestionOnEnter" | "editor.accessibilitySupport" | "editor.accessibilityPageSize" | "editor.autoClosingBrackets" | "editor.autoClosingOvertype" | "editor.autoClosingQuotes" | "editor.autoIndent" | "editor.autoSurround" | "editor.codeLens" | "editor.colorDecorators" | "editor.copyWithSyntaxHighlighting" | "editor.cursorBlinking" | "editor.cursorSmoothCaretAnimation" | "editor.cursorStyle" | "editor.cursorSurroundingLines" | "editor.cursorSurroundingLinesStyle" | "editor.cursorWidth" | "editor.dragAndDrop" | "editor.emptySelectionClipboard" | "editor.fastScrollSensitivity" | "editor.find.seedSearchStringFromSelection" | "editor.find.autoFindInSelection" | "editor.find.globalFindClipboard" | "editor.find.addExtraSpaceOnTop" | "editor.folding" | "editor.foldingStrategy" | "editor.fontFamily" | "editor.fontLigatures" | "editor.fontSize" | "editor.fontWeight" | "editor.formatOnPaste" | "editor.formatOnType" | "editor.glyphMargin" | "editor.gotoLocation.multiple" | "editor.gotoLocation.multipleDefinitions" | "editor.gotoLocation.multipleTypeDefinitions" | "editor.gotoLocation.multipleDeclarations" | "editor.gotoLocation.multipleImplementations" | "editor.gotoLocation.multipleReferences" | "editor.gotoLocation.alternativeDefinitionCommand" | "editor.gotoLocation.alternativeTypeDefinitionCommand" | "editor.gotoLocation.alternativeDeclarationCommand" | "editor.gotoLocation.alternativeImplementationCommand" | "editor.gotoLocation.alternativeReferenceCommand" | "editor.hideCursorInOverviewRuler" | "editor.highlightActiveIndentGuide" | "editor.hover.enabled" | "editor.hover.delay" | "editor.hover.sticky" | "editor.letterSpacing" | "editor.lightbulb.enabled" | "editor.lineHeight" | "editor.lineNumbers" | "editor.links" | "editor.matchBrackets" | "editor.minimap.enabled" | "editor.minimap.side" | "editor.minimap.showSlider" | "editor.minimap.scale" | "editor.minimap.renderCharacters" | "editor.minimap.maxColumn" | "editor.mouseWheelScrollSensitivity" | "editor.mouseWheelZoom" | "editor.multiCursorMergeOverlapping" | "editor.multiCursorModifier" | "editor.multiCursorPaste" | "editor.occurrencesHighlight" | "editor.overviewRulerBorder" | "editor.parameterHints.enabled" | "editor.parameterHints.cycle" | "editor.quickSuggestions" | "editor.quickSuggestionsDelay" | "editor.renderControlCharacters" | "editor.renderIndentGuides" | "editor.renderFinalNewline" | "editor.renderLineHighlight" | "editor.renderWhitespace" | "editor.roundedSelection" | "editor.rulers" | "editor.scrollBeyondLastColumn" | "editor.scrollBeyondLastLine" | "editor.selectionClipboard" | "editor.selectionHighlight" | "editor.showFoldingControls" | "editor.showUnused" | "editor.snippetSuggestions" | "editor.smoothScrolling" | "editor.suggest.insertMode" | "editor.suggest.insertHighlight" | "editor.suggest.filterGraceful" | "editor.suggest.localityBonus" | "editor.suggest.shareSuggestSelections" | "editor.suggest.snippetsPreventQuickSuggestions" | "editor.suggest.showIcons" | "editor.suggest.maxVisibleSuggestions" | "editor.suggest.filteredTypes" | "editor.suggest.showMethods" | "editor.suggest.showFunctions" | "editor.suggest.showConstructors" | "editor.suggest.showFields" | "editor.suggest.showVariables" | "editor.suggest.showClasses" | "editor.suggest.showStructs" | "editor.suggest.showInterfaces" | "editor.suggest.showModules" | "editor.suggest.showProperties" | "editor.suggest.showEvents" | "editor.suggest.showOperators" | "editor.suggest.showUnits" | "editor.suggest.showValues" | "editor.suggest.showConstants" | "editor.suggest.showEnums" | "editor.suggest.showEnumMembers" | "editor.suggest.showKeywords" | "editor.suggest.showWords" | "editor.suggest.showColors" | "editor.suggest.showFiles" | "editor.suggest.showReferences" | "editor.suggest.showCustomcolors" | "editor.suggest.showFolders" | "editor.suggest.showTypeParameters" | "editor.suggest.showSnippets" | "editor.suggestFontSize" | "editor.suggestLineHeight" | "editor.suggestOnTriggerCharacters" | "editor.suggestSelection" | "editor.tabCompletion" | "editor.useTabStops" | "editor.wordSeparators" | "editor.wordWrap" | "editor.wordWrapColumn" | "editor.wrappingIndent" | "editor.autoSave" | "editor.autoSaveDelay" | "editor.formatOnSave" | "editor.formatOnSaveTimeout" | "files.eol" | "files.encoding", string>;
    protected init(): void;
    protected reset(): void;
    getThemeData(): WebviewThemeData;
    protected computeThemeData(): WebviewThemeData;
    protected getActiveTheme(): WebviewThemeType;
}
//# sourceMappingURL=webview-theme-data-provider.d.ts.map