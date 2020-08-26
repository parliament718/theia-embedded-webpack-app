"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runApplication = void 0;
// this needs to come first
require("reflect-metadata");
// so lets stick it up here
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("inversify");
const frontend_application_config_provider_1 = require("@theia/core/lib/browser/frontend-application-config-provider");
const frontend_application_module_1 = require("@theia/core/lib/browser/frontend-application-module");
const messaging_frontend_module_1 = require("@theia/core/lib/browser/messaging/messaging-frontend-module");
const logger_frontend_module_1 = require("@theia/core/lib/browser/logger-frontend-module");
const browser_menu_module_1 = __importDefault(require("@theia/core/lib/browser/menu/browser-menu-module"));
const theming_1 = require("@theia/core/lib/browser/theming");
require("./index.css");
const getFrontendModule = (host) => new inversify_1.ContainerModule((_bind, _unbind, _isBound, rebind) => {
    class MyFrontendApplication extends browser_1.FrontendApplication {
        getHost() {
            return Promise.resolve(host);
        }
    }
    rebind(browser_1.FrontendApplication).to(MyFrontendApplication).inSingletonScope();
});
exports.runApplication = (appElement) => {
    frontend_application_config_provider_1.FrontendApplicationConfigProvider.set({
        applicationName: "Theia"
    });
    const container = new inversify_1.Container();
    container.load(browser_menu_module_1.default);
    container.load(frontend_application_module_1.frontendApplicationModule);
    container.load(messaging_frontend_module_1.messagingFrontendModule);
    container.load(logger_frontend_module_1.loggerFrontendModule);
    container.load(getFrontendModule(appElement));
    try {
        const themeService = theming_1.ThemeService.get();
        themeService.loadUserTheme();
        const application = container.get(browser_1.FrontendApplication);
        application.start();
    }
    catch (error) {
        console.error('Failed to start the frontend application.');
        if (error) {
            console.error(error);
        }
    }
};
