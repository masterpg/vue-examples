import * as V from "./vue";
import * as Options from "./options";
import * as Plugin from "./plugin";
import * as VNode from "./vnode";

// `Vue` in `export = Vue` must be a namespace
// All available types are exported via this namespace
declare namespace Vue {
  export type CreateElement = V.CreateElement;

  export type Component = Options.Component;
  export type AsyncComponent = Options.AsyncComponent;
  export type ComponentOptions<V extends Vue> = Options.ComponentOptions<V>;
  export type FunctionalComponentOptions = Options.FunctionalComponentOptions;
  export type RenderContext = Options.RenderContext;
  export type PropOptions = Options.PropOptions;
  export type ComputedOptions<V extends Vue> = Options.ComputedOptions<V>;
  export type WatchHandler<V extends Vue> = Options.WatchHandler<V, any>;
  export type WatchOptions = Options.WatchOptions;
  export type DirectiveFunction = Options.DirectiveFunction;
  export type DirectiveOptions = Options.DirectiveOptions;

  export type PluginFunction<T> = Plugin.PluginFunction<T>;
  export type PluginObject<T> = Plugin.PluginObject<T>;

  export type VNodeChildren = VNode.VNodeChildren;
  export type VNodeChildrenArrayContents = VNode.VNodeChildrenArrayContents;
  export type VNode = VNode.VNode;
  export type VNodeComponentOptions = VNode.VNodeComponentOptions;
  export type VNodeData = VNode.VNodeData;
  export type VNodeDirective = VNode.VNodeDirective;
}

// TS cannot merge imported class with namespace, declare a subclass to bypass
declare class Vue extends V.Vue {

  constructor(options?: Options.ComponentOptions<Vue>);

  $data: Object;
  readonly $el: HTMLElement;
  readonly $options: Options.ComponentOptions<this>;
  readonly $parent: Vue;
  readonly $root: Vue;
  readonly $children: Vue[];
  readonly $refs: { [key: string]: Vue | Element | Vue[] | Element[]};
  readonly $slots: { [key: string]: VNode.VNode[] };
  readonly $scopedSlots: { [key: string]: VNode.ScopedSlot };
  readonly $isServer: boolean;
  readonly $props: any;

  $mount(elementOrSelector?: Element | String, hydrating?: boolean): this;
  $forceUpdate(): void;
  $destroy(): void;
  $set: typeof Vue.set;
  $delete: typeof Vue.delete;
  $watch(
    expOrFn: string,
    callback: Options.WatchHandler<this, any>,
    options?: Options.WatchOptions
  ): (() => void);
  $watch<T>(
    expOrFn: (this: this) => T,
    callback: Options.WatchHandler<this, T>,
    options?: Options.WatchOptions
  ): (() => void);
  $on(event: string | string[], callback: Function): this;
  $once(event: string, callback: Function): this;
  $off(event?: string | string[], callback?: Function): this;
  $emit(event: string, ...args: any[]): this;
  $nextTick(callback: (this: this) => void): void;
  $nextTick(): Promise<void>;
  $createElement: V.CreateElement;

  static config: {
    silent: boolean;
    optionMergeStrategies: any;
    devtools: boolean;
    productionTip: boolean;
    performance: boolean;
    errorHandler(err: Error, vm: Vue, info: string): void;
    ignoredElements: string[];
    keyCodes: { [key: string]: number };
  }

  static extend(options: Options.ComponentOptions<Vue> | Options.FunctionalComponentOptions): typeof Vue;
  static nextTick(callback: () => void, context?: any[]): void;
  static nextTick(): Promise<void>
  static set<T>(object: Object, key: string, value: T): T;
  static set<T>(array: T[], key: number, value: T): T;
  static delete(object: Object, key: string): void;
  static delete<T>(array: T[], key: number): void;

  static directive(
    id: string,
    definition?: Options.DirectiveOptions | Options.DirectiveFunction
  ): Options.DirectiveOptions;
  static filter(id: string, definition?: Function): Function;
  static component(id: string, definition?: Options.Component | Options.AsyncComponent): typeof Vue;

  static use<T>(plugin: Plugin.PluginObject<T> | Plugin.PluginFunction<T>, options?: T): void;
  static mixin(mixin: typeof Vue | Options.ComponentOptions<Vue>): void;
  static compile(template: string): {
    render(createElement: typeof Vue.prototype.$createElement): VNode.VNode;
    staticRenderFns: (() => VNode.VNode)[];
  };
}

export = Vue;
