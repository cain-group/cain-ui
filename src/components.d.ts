/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CaAside {
        "width": string;
    }
    interface CaButton {
        "autofocus": boolean;
        "circle": boolean;
        "disabled": boolean;
        "loading": boolean;
        "nativeType": string;
        "plain": boolean;
        "round": boolean;
        "size": string;
        "type": string;
    }
    interface CaButtonGroup {
        "size": string;
        "type": string;
    }
    interface CaContainer {
        "direction": string;
    }
    interface CaFooter {
        "height": string;
    }
    interface CaHeader {
        "height": string;
    }
    interface CaIcon {
    }
    interface CaMain {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCaAsideElement extends Components.CaAside, HTMLStencilElement {
    }
    var HTMLCaAsideElement: {
        prototype: HTMLCaAsideElement;
        new (): HTMLCaAsideElement;
    };
    interface HTMLCaButtonElement extends Components.CaButton, HTMLStencilElement {
    }
    var HTMLCaButtonElement: {
        prototype: HTMLCaButtonElement;
        new (): HTMLCaButtonElement;
    };
    interface HTMLCaButtonGroupElement extends Components.CaButtonGroup, HTMLStencilElement {
    }
    var HTMLCaButtonGroupElement: {
        prototype: HTMLCaButtonGroupElement;
        new (): HTMLCaButtonGroupElement;
    };
    interface HTMLCaContainerElement extends Components.CaContainer, HTMLStencilElement {
    }
    var HTMLCaContainerElement: {
        prototype: HTMLCaContainerElement;
        new (): HTMLCaContainerElement;
    };
    interface HTMLCaFooterElement extends Components.CaFooter, HTMLStencilElement {
    }
    var HTMLCaFooterElement: {
        prototype: HTMLCaFooterElement;
        new (): HTMLCaFooterElement;
    };
    interface HTMLCaHeaderElement extends Components.CaHeader, HTMLStencilElement {
    }
    var HTMLCaHeaderElement: {
        prototype: HTMLCaHeaderElement;
        new (): HTMLCaHeaderElement;
    };
    interface HTMLCaIconElement extends Components.CaIcon, HTMLStencilElement {
    }
    var HTMLCaIconElement: {
        prototype: HTMLCaIconElement;
        new (): HTMLCaIconElement;
    };
    interface HTMLCaMainElement extends Components.CaMain, HTMLStencilElement {
    }
    var HTMLCaMainElement: {
        prototype: HTMLCaMainElement;
        new (): HTMLCaMainElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "ca-aside": HTMLCaAsideElement;
        "ca-button": HTMLCaButtonElement;
        "ca-button-group": HTMLCaButtonGroupElement;
        "ca-container": HTMLCaContainerElement;
        "ca-footer": HTMLCaFooterElement;
        "ca-header": HTMLCaHeaderElement;
        "ca-icon": HTMLCaIconElement;
        "ca-main": HTMLCaMainElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CaAside {
        "width"?: string;
    }
    interface CaButton {
        "autofocus"?: boolean;
        "circle"?: boolean;
        "disabled"?: boolean;
        "loading"?: boolean;
        "nativeType"?: string;
        "plain"?: boolean;
        "round"?: boolean;
        "size"?: string;
        "type"?: string;
    }
    interface CaButtonGroup {
        "size"?: string;
        "type"?: string;
    }
    interface CaContainer {
        "direction"?: string;
    }
    interface CaFooter {
        "height"?: string;
    }
    interface CaHeader {
        "height"?: string;
    }
    interface CaIcon {
    }
    interface CaMain {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "ca-aside": CaAside;
        "ca-button": CaButton;
        "ca-button-group": CaButtonGroup;
        "ca-container": CaContainer;
        "ca-footer": CaFooter;
        "ca-header": CaHeader;
        "ca-icon": CaIcon;
        "ca-main": CaMain;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ca-aside": LocalJSX.CaAside & JSXBase.HTMLAttributes<HTMLCaAsideElement>;
            "ca-button": LocalJSX.CaButton & JSXBase.HTMLAttributes<HTMLCaButtonElement>;
            "ca-button-group": LocalJSX.CaButtonGroup & JSXBase.HTMLAttributes<HTMLCaButtonGroupElement>;
            "ca-container": LocalJSX.CaContainer & JSXBase.HTMLAttributes<HTMLCaContainerElement>;
            "ca-footer": LocalJSX.CaFooter & JSXBase.HTMLAttributes<HTMLCaFooterElement>;
            "ca-header": LocalJSX.CaHeader & JSXBase.HTMLAttributes<HTMLCaHeaderElement>;
            "ca-icon": LocalJSX.CaIcon & JSXBase.HTMLAttributes<HTMLCaIconElement>;
            "ca-main": LocalJSX.CaMain & JSXBase.HTMLAttributes<HTMLCaMainElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
