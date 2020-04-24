/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface AppStartbildschirm {
        "test": string;
    }
    interface MenueFooter {
    }
    interface StartDesign {
        "benennung": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppStartbildschirmElement extends Components.AppStartbildschirm, HTMLStencilElement {
    }
    var HTMLAppStartbildschirmElement: {
        prototype: HTMLAppStartbildschirmElement;
        new (): HTMLAppStartbildschirmElement;
    };
    interface HTMLMenueFooterElement extends Components.MenueFooter, HTMLStencilElement {
    }
    var HTMLMenueFooterElement: {
        prototype: HTMLMenueFooterElement;
        new (): HTMLMenueFooterElement;
    };
    interface HTMLStartDesignElement extends Components.StartDesign, HTMLStencilElement {
    }
    var HTMLStartDesignElement: {
        prototype: HTMLStartDesignElement;
        new (): HTMLStartDesignElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-startbildschirm": HTMLAppStartbildschirmElement;
        "menue-footer": HTMLMenueFooterElement;
        "start-design": HTMLStartDesignElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface AppStartbildschirm {
        "test"?: string;
    }
    interface MenueFooter {
    }
    interface StartDesign {
        "benennung"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-startbildschirm": AppStartbildschirm;
        "menue-footer": MenueFooter;
        "start-design": StartDesign;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-startbildschirm": LocalJSX.AppStartbildschirm & JSXBase.HTMLAttributes<HTMLAppStartbildschirmElement>;
            "menue-footer": LocalJSX.MenueFooter & JSXBase.HTMLAttributes<HTMLMenueFooterElement>;
            "start-design": LocalJSX.StartDesign & JSXBase.HTMLAttributes<HTMLStartDesignElement>;
        }
    }
}
