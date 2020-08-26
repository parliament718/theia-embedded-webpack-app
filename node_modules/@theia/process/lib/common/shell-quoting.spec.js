"use strict";
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var shell_quoting_1 = require("./shell-quoting");
describe('Shell arguments escaping:', function () {
    var _a, _b, _c, e_1, _d;
    // Procedurally execute tests from this list of data.
    var testData = {
        bash: {
            // https://www.gnu.org/software/bash/manual/html_node/Quoting.html
            quotingFunctions: shell_quoting_1.BashQuotingFunctions,
            data: (_a = {},
                _a["escape" /* Escape */] = [
                    { input: 'abc', expected: 'abc' },
                    { input: 'ab c', expected: 'ab\\ c' },
                    { input: 'ab"c', expected: 'ab\\"c' },
                    { input: 'ab\'c', expected: 'ab\\\'c' },
                    { input: 'ab\\ c\\', expected: 'ab\\\\\\ c\\\\' },
                    {
                        input: 'setTimeout(() => { console.log(1, "2\'3"); }, 100)',
                        expected: 'setTimeout\\(\\(\\)\\ =\\>\\ \\{\\ console.log\\(1,\\ \\"2\\\'3\\"\\)\\;\\ \\},\\ 100\\)',
                    },
                ],
                _a["strong" /* Strong */] = [
                    { input: 'abc', expected: '\'abc\'' },
                    { input: 'ab c', expected: '\'ab c\'' },
                    { input: 'ab"c', expected: '\'ab"c\'' },
                    { input: 'ab\'c', expected: '\'ab\'"\'"\'c\'' },
                    { input: 'ab\\ c\\', expected: '\'ab\\ c\\\'' },
                    {
                        input: 'setTimeout(() => { console.log(1, "2\'3"); }, 100)',
                        expected: '\'setTimeout(() => { console.log(1, "2\'"\'"\'3"); }, 100)\'',
                    },
                ],
                _a["weak" /* Weak */] = [
                    { input: 'abc', expected: '"abc"' },
                    { input: 'ab c', expected: '"ab c"' },
                    { input: 'ab"c', expected: '"ab\\"c"' },
                    { input: 'ab\'c', expected: '"ab\'c"' },
                    { input: 'ab\\ c\\', expected: '"ab\\ c\\\\"' },
                    {
                        input: 'setTimeout(() => { console.log(1, "2\'3"); }, 100)',
                        expected: '"setTimeout(() => { console.log(1, \\"2\'3\\"); }, 100)"',
                    },
                ],
                _a),
        },
        cmd: {
            // https://ss64.com/nt/syntax-esc.html
            quotingFunctions: shell_quoting_1.CmdQuotingFunctions,
            data: (_b = {},
                _b["escape" /* Escape */] = [
                    { input: 'abc', expected: 'abc' },
                    { input: 'ab c', expected: 'ab" "c' },
                    { input: 'ab"c', expected: 'ab\\"c' },
                    { input: 'ab\'c', expected: 'ab\'c' },
                    { input: 'ab^ c^', expected: 'ab^^" "c^^' },
                    {
                        input: 'setTimeout(() => { console.log(1, "2\'3"); }, 100)',
                        expected: 'setTimeout^(^(^)" "=^>" "{" "console.log^(1," "\\"2\'3\\"^);" "}," "100^)',
                    },
                    {
                        input: 'console.log("%PATH%")',
                        expected: 'console.log^(\\"^%PATH^%\\"^)',
                    },
                ],
                _b["strong" /* Strong */] = [
                    { input: 'abc', expected: '"abc"' },
                    { input: 'ab c', expected: '"ab c"' },
                    { input: 'ab"c', expected: '"ab\\"c"' },
                    { input: 'ab\'c', expected: '"ab\'c"' },
                    { input: 'ab^ c^', expected: '"ab^^ c^^"' },
                    {
                        input: 'setTimeout(() => { console.log(1, "2\'3"); }, 100)',
                        expected: '"setTimeout^(^(^) =^> { console.log^(1, \\"2\'3\\"^); }, 100^)"',
                    },
                    {
                        input: 'console.log("%PATH%")',
                        expected: '"console.log^(\\""%"PATH"%"\\"^)"',
                    },
                ],
                _b["weak" /* Weak */] = [
                    { input: 'abc', expected: '"abc"' },
                    { input: 'ab c', expected: '"ab c"' },
                    { input: 'ab"c', expected: '"ab\\"c"' },
                    { input: 'ab\'c', expected: '"ab\'c"' },
                    { input: 'ab^ c^', expected: '"ab^^ c^^"' },
                    {
                        input: 'setTimeout(() => { console.log(1, "2\'3"); }, 100)',
                        expected: '"setTimeout^(^(^) =^> { console.log^(1, \\"2\'3\\"^); }, 100^)"',
                    },
                    {
                        input: 'console.log("%PATH%")',
                        expected: '"console.log^(\\"%PATH%\\"^)"',
                    },
                ],
                _b),
        },
        powershell: {
            // https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_quoting_rules?view=powershell-6
            quotingFunctions: shell_quoting_1.PowershellQuotingFunctions,
            data: (_c = {},
                _c["escape" /* Escape */] = [
                    { input: 'abc', expected: 'abc' },
                    { input: 'ab c', expected: 'ab` c' },
                    { input: 'ab"c', expected: 'ab`"c' },
                    { input: 'ab\'c', expected: 'ab`\'c' },
                    { input: 'ab` c`', expected: 'ab``` c``' },
                    {
                        input: 'setTimeout(() => { console.log(1, "2\'3"); }, 100)',
                        expected: 'setTimeout`(`(`)` =`>` `{` console.log`(1,` `"2`\'3`"`)`;` `},` 100`)',
                    },
                ],
                _c["strong" /* Strong */] = [
                    { input: 'abc', expected: '\'abc\'' },
                    { input: 'ab c', expected: '\'ab c\'' },
                    { input: 'ab"c', expected: '\'ab"c\'' },
                    { input: 'ab\'c', expected: '\'ab\'\'c\'' },
                    { input: 'ab` c`', expected: '\'ab` c`\'' },
                    {
                        input: 'setTimeout(() => { console.log(1, "2\'3"); }, 100)',
                        expected: '\'setTimeout(() => { console.log(1, "2\'\'3"); }, 100)\'',
                    },
                ],
                _c["weak" /* Weak */] = [
                    { input: 'abc', expected: '"abc"' },
                    { input: 'ab c', expected: '"ab c"' },
                    { input: 'ab"c', expected: '"ab`"c"' },
                    { input: 'ab\'c', expected: '"ab\'c"' },
                    { input: 'ab` c`', expected: '"ab` c``"' },
                    {
                        input: 'setTimeout(() => { console.log(1, "2\'3"); }, 100)',
                        expected: '"setTimeout(() => { console.log(1, `"2\'3`"); }, 100)"',
                    },
                ],
                _c),
        }
    };
    var _loop_1 = function (runtime) {
        var e_2, _a;
        var testInfo = testData[runtime];
        var _loop_2 = function (quotingType) {
            var testInput = testInfo.data[quotingType];
            // Run the test for each input:
            it(runtime + "/" + quotingType, function () {
                var e_3, _a;
                try {
                    for (var testInput_1 = (e_3 = void 0, __values(testInput)), testInput_1_1 = testInput_1.next(); !testInput_1_1.done; testInput_1_1 = testInput_1.next()) {
                        var test_1 = testInput_1_1.value;
                        chai_1.expect(shell_quoting_1.escapeForShell({
                            quoting: quotingType,
                            value: test_1.input,
                        }, testInfo.quotingFunctions)).equal(test_1.expected);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (testInput_1_1 && !testInput_1_1.done && (_a = testInput_1.return)) _a.call(testInput_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            });
        };
        try {
            // Get all quoting types (escape/strong/weak):
            for (var _b = (e_2 = void 0, __values(Object.keys(testInfo.data))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var quotingType = _c.value;
                _loop_2(quotingType);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    try {
        // Iter through each runtime (bash/cmd/powershell):
        for (var _e = __values(Object.keys(testData)), _f = _e.next(); !_f.done; _f = _e.next()) {
            var runtime = _f.value;
            _loop_1(runtime);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
        }
        finally { if (e_1) throw e_1.error; }
    }
});
//# sourceMappingURL=shell-quoting.spec.js.map