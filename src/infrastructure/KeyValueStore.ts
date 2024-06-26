import { inject, injectable, interfaces } from 'inversify';
import { LocalStorage } from 'node-localstorage';

@injectable()
export class KeyValueStore {
  private storage: LocalStorage;

  constructor(
    @inject('Newable<LocalStorage>')
    Storage: interfaces.Newable<LocalStorage>,
  ) {
    this.storage = new Storage('./scratch');
  }

  set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  get(key: string): string | null {
    return this.storage.getItem(key);
  }
}
