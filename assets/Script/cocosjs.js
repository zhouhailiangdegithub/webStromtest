
cc.Class({
    extends: cc.Component,
    properties:{
        ip:{
            default:DEFAULT_IP
        }
    },

    export function Class(
        options?:
        {name?: string; extends?: Function; ctor?: Function; __ctor__?: Function; properties?: any; statics?: any; mixins?: Function[]; editor?: {executeInEditMode?: boolean; requireComponent?: Function; menu?: string; executionOrder?: number; disallowMultiple?: boolean; playOnFocus?: boolean; inspector?: string; icon?: string; help?: string; };
        update?: Function; lateUpdate?: Function; onLoad?: Function; start?: Function; onEnable?: Function; onDisable?: Function; onDestroy?: Function; onFocusInEditor?: Function; onLostFocusInEditor?: Function; resetInEditor?: Function; onRestore?: Function; _getLocalBounds?: Function; }): Function


});
