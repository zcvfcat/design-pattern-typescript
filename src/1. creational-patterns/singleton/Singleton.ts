import singleton from './interface/singleton'

export default class Singleton implements singleton {
  public readonly instance: singleton
  getInstance() {
    return this.instance
  }
}
