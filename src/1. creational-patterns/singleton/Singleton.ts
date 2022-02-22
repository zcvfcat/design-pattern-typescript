import type singleton from './interface/singleton'

export default class Singleton implements singleton {
  private static instance: singleton = new Singleton()
  public static getInstance() {
    if (!Singleton.instance) Singleton.instance = new Singleton()
    return Singleton.instance
  }
}
