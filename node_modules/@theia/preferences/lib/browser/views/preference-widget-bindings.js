"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindPreferencesWidgets = void 0;
var browser_1 = require("@theia/core/lib/browser");
var single_preference_display_factory_1 = require("./components/single-preference-display-factory");
var single_preference_wrapper_1 = require("./components/single-preference-wrapper");
var preference_widget_1 = require("./preference-widget");
var preference_tree_widget_1 = require("./preference-tree-widget");
var preference_editor_widget_1 = require("./preference-editor-widget");
var preference_searchbar_widget_1 = require("./preference-searchbar-widget");
var preference_scope_tabbar_widget_1 = require("./preference-scope-tabbar-widget");
var preferences_decorator_1 = require("../preferences-decorator");
var preferences_decorator_service_1 = require("../preferences-decorator-service");
function bindPreferencesWidgets(bind) {
    bind(preference_widget_1.PreferencesWidget).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: preference_widget_1.PreferencesWidget.ID,
            createWidget: function () { return container.get(preference_widget_1.PreferencesWidget); }
        });
    }).inSingletonScope();
    bind(single_preference_wrapper_1.SinglePreferenceWrapper).toSelf();
    bind(preference_tree_widget_1.PreferencesTreeWidget).toDynamicValue(function (ctx) {
        return createPreferencesTree(ctx.container);
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: preference_tree_widget_1.PreferencesTreeWidget.ID,
        createWidget: function () { return context.container.get(preference_tree_widget_1.PreferencesTreeWidget); },
    }); }).inSingletonScope();
    bind(preference_editor_widget_1.PreferencesEditorWidget).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: preference_editor_widget_1.PreferencesEditorWidget.ID,
        createWidget: function () { return context.container.get(preference_editor_widget_1.PreferencesEditorWidget); },
    }); }).inSingletonScope();
    bind(preference_searchbar_widget_1.PreferencesSearchbarWidget).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: preference_searchbar_widget_1.PreferencesSearchbarWidget.ID,
        createWidget: function () { return context.container.get(preference_searchbar_widget_1.PreferencesSearchbarWidget); },
    }); }).inSingletonScope();
    bind(preference_scope_tabbar_widget_1.PreferencesScopeTabBar).toSelf().inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (context) { return ({
        id: preference_scope_tabbar_widget_1.PreferencesScopeTabBar.ID,
        createWidget: function () { return context.container.get(preference_scope_tabbar_widget_1.PreferencesScopeTabBar); },
    }); }).inSingletonScope();
    bind(single_preference_display_factory_1.SinglePreferenceDisplayFactory).toSelf().inSingletonScope();
}
exports.bindPreferencesWidgets = bindPreferencesWidgets;
function createPreferencesTree(parent) {
    var child = browser_1.createTreeContainer(parent);
    child.unbind(browser_1.TreeWidget);
    child.bind(preference_tree_widget_1.PreferencesTreeWidget).toSelf();
    child.rebind(browser_1.TreeProps).toConstantValue(__assign(__assign({}, browser_1.defaultTreeProps), { search: false }));
    bindPreferencesDecorator(child);
    return child.get(preference_tree_widget_1.PreferencesTreeWidget);
}
function bindPreferencesDecorator(parent) {
    parent.bind(preferences_decorator_1.PreferencesDecorator).toSelf().inSingletonScope();
    parent.bind(preferences_decorator_service_1.PreferencesDecoratorService).toSelf().inSingletonScope();
    parent.rebind(browser_1.TreeDecoratorService).toService(preferences_decorator_service_1.PreferencesDecoratorService);
}
//# sourceMappingURL=preference-widget-bindings.js.map