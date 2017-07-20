// @flow

export default class Config {

  static Retrieve() {

    console.log('[service:config] Example async config');
    let now = +new Date;

    const config = { version: 0.1 };

    return new Promise(async(resolve, reject) => {
      setTimeout(() => {
        console.log('[service:config] Finished exaple async config');
        resolve(config);
      }, 1000);
    });
  }

}