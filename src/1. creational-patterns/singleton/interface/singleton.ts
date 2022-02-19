export default interface singleton {
  readonly instance: singleton
  getInstance: () => singleton
}
