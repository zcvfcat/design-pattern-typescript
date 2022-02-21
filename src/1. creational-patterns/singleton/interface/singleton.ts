export default interface singleton {
  instance?: singleton // static 키워드 안됨 난감;;
  getInstance?: () => singleton
}
