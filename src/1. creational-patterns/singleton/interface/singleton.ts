export default interface Singleton {
  instance?: Singleton // static 키워드 안됨 난감;;
  getInstance?: () => Singleton
}
