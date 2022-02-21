import singleton from './interface/singleton'

export default class Singleton implements singleton {
  private static instance: singleton = new Singleton()
  public static getInstance() {
    if (!Singleton.instance) Singleton.instance = new Singleton()
    console.log('test')
    return Singleton.instance
  }
}
// export default class Singleton {
//   // private static instance: singleton = new Singleton()
//   getInstance() {
//     // if (!Singleton.instance) Singleton.instance = new Singleton()
//     // console.log('test')
//     // return Singleton.instance
//   }
// }
