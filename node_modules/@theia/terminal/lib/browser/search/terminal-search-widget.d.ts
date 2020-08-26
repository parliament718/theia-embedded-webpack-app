/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import * as React from 'react';
import '../../../src/browser/style/terminal-search.css';
import { Terminal } from 'xterm';
export declare const TERMINAL_SEARCH_WIDGET_FACTORY_ID = "terminal-search";
export declare const TerminalSearchWidgetFactory: unique symbol;
export declare type TerminalSearchWidgetFactory = (terminal: Terminal) => TerminalSearchWidget;
export declare class TerminalSearchWidget extends ReactWidget {
    private searchInput;
    private searchBox;
    private searchOptions;
    private searchAddon;
    protected terminal: Terminal;
    protected init(): void;
    protected render(): React.ReactNode;
    onSearchInputFocus: () => void;
    onSearchInputBlur: () => void;
    private handleHide;
    private handleCaseSensitiveOptionClicked;
    private handleWholeWordOptionClicked;
    private handleRegexOptionClicked;
    private updateSearchInputBox;
    private onInputChanged;
    search(incremental: boolean, searchDirection: 'next' | 'previous'): void;
    private handleNextButtonClicked;
    private handlePreviousButtonClicked;
    onAfterHide(): void;
    onAfterShow(): void;
}
//# sourceMappingURL=terminal-search-widget.d.ts.map