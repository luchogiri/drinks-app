// @flow

export default class Config {

  static Retrieve() {

    console.log('service config/retrieve @ example async config');
    let now = +new Date;

    const config = { version: 0.1 };

    return new Promise(async(resolve) => {
      setTimeout(() => {
        console.log(`service config/retrieve @ finished example async config (in ${+new Date - now} ms)`);
        resolve(config);
      }, 1000);
    });
  }

}