import { Store } from "vuex";

const _window: any = (window as any);

export default class AppStore {
    static dispatch(action: string, value: any): void {
        if (action && _window) {
            _window.$store?.dispatch(action, value);
        }
    }

    static setLoader(value: boolean): void {
        AppStore.dispatch('loading_action', value);
    }

    static init(store: Store<any>): void {
        if (_window) {
            _window.$store = store;
        }
    }
}