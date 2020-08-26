import "reflect-metadata";
import {FrontendApplication}  from "@theia/core/lib/browser";
import { FrontendApplicationConfigProvider } from "@theia/core/lib/browser/frontend-application-config-provider";
import { frontendApplicationModule } from "@theia/core/lib/browser/frontend-application-module";
import { loggerFrontendModule } from "@theia/core/lib/browser/logger-frontend-module";
import browserMenuModule from "@theia/core/lib/browser/menu/browser-menu-module";
import { messagingFrontendModule } from "@theia/core/lib/browser/messaging/messaging-frontend-module";
import { ThemeService } from "@theia/core/lib/browser/theming";
import { Container, ContainerModule } from "inversify";

import "./index.css";

const getFrontendModule = (host: HTMLElement) => new ContainerModule((_bind, _unbind, _isBound, rebind) => {
  class MyFrontendApplication extends FrontendApplication {
    protected getHost(): Promise<HTMLElement> {
      return Promise.resolve(host);
    }
  }

  rebind(FrontendApplication).to(MyFrontendApplication).inSingletonScope();
});

export const runApplicationNew = (appElement: HTMLElement) => {
  FrontendApplicationConfigProvider.set({
    defaultTheme: "light",
    defaultIconTheme: "none",
    applicationName: "Theia Browser Example",
    preferences: {
      "files.enableTrash": false,
    },
  });

  const container = new Container();
  container.load(frontendApplicationModule);
  container.load(messagingFrontendModule);
  container.load(loggerFrontendModule);
  container.load(getFrontendModule(appElement));

  function load(raw: { default: any; }) {
    return Promise.resolve(raw.default).then((module) =>
        container.load(module),
    );
  }

  function start() {
    const themeService = ThemeService.get();
    themeService.loadUserTheme();

    const application = container.get(FrontendApplication);
    application.start();
  }
};
