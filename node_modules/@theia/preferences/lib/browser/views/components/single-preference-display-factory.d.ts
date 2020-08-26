/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
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
import * as React from 'react';
import { PreferenceService, ContextMenuRenderer } from '@theia/core/lib/browser';
import { CommandService } from '@theia/core';
import { Preference } from '../../util/preference-types';
import { PreferencesEventService } from '../../util/preference-event-service';
import { PreferenceScopeCommandManager } from '../../util/preference-scope-command-manager';
export declare class SinglePreferenceDisplayFactory {
    protected currentScope: Preference.SelectedScopeDetails;
    protected readonly preferencesEventService: PreferencesEventService;
    protected readonly preferenceValueRetrievalService: PreferenceService;
    protected readonly preferencesMenuFactory: PreferenceScopeCommandManager;
    protected readonly commandService: CommandService;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    init(): void;
    protected openJSON: (preferenceNode: Preference.NodeWithValueInAllScopes) => void;
    render(preferenceNode: Preference.NodeWithValueInAllScopes): React.ReactElement;
}
//# sourceMappingURL=single-preference-display-factory.d.ts.map