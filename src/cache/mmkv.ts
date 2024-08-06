import {MMKV} from 'react-native-mmkv';

class MMKVCache {
  private mmkv: MMKV;
  constructor() {
    this.mmkv = new MMKV();
  }
  set(key: string, value: any) {
    this.mmkv.set(key, JSON.stringify(value));
  }

  get(key: string): any | null {
    const value = this.mmkv.getString(key);
    return value ? JSON.parse(value) : null;
  }

  remove(key: string) {
    this.mmkv.delete(key);
  }

  clear() {
    this.mmkv.clearAll();
  }
}
const mmkv = new MMKVCache();
export default mmkv;
