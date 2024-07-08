export class StorageMock {
    get() {
      return Promise.resolve(null);
    }
    set() {
      return Promise.resolve();
    }
    remove() {
      return Promise.resolve();
    }
  }
  
  export class SQLiteMock {
    create(config: any): Promise<any> {
      return Promise.resolve({
        open: () => Promise.resolve(),
        close: () => Promise.resolve(),
        executeSql: () => Promise.resolve()
      });
    }
  }
  
  