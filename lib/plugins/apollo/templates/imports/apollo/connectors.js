class SampleConnector {
  constructor(){
    this.store = new Map()
  }

  get(key){
    return this.store.get(key);
  }

  set(key, value){
    return this.store.set(key, value);
  }
}

const connectors = {
  sample: SampleConnector
};

export default connectors;
