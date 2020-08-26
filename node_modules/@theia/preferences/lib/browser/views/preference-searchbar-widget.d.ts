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
/// <reference types="lodash" />
import { ReactWidget } from '@theia/core/lib/browser';
import * as React from 'react';
import { PreferencesEventService } from '../util/preference-event-service';
export declare class PreferencesSearchbarWidget extends ReactWidget {
    static readonly ID = "settings.header";
    static readonly LABEL = "Settings Header";
    protected searchbarRef: React.RefObject<HTMLInputElement>;
    protected readonly preferencesEventService: PreferencesEventService;
    protected init(): void;
    protected handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    protected search: ((value: string) => void) & import("lodash").Cancelable;
    focus(): void;
    render(): React.ReactNode;
}
//# sourceMappingURL=preference-searchbar-widget.d.ts.map