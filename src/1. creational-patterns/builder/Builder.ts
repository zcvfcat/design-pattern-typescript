import builder from './interface/builder'

export default class Builder {
  // constructor(arg: any) {
  //   console.log(arg)
  //   return arg
  // }
  private num: number
  private str: string
  private obj: object

  public setNum(num: number) {
    this.num = num
    return this
  }

  public setStr(str: string) {
    this.str = str
    return this
  }

  public setObj(obj: object) {
    this.obj = obj
    return this
  }

  public getNum(): number {
    return this.num
  }

  public getStr(): string {
    return this.str
  }

  public getObj(): object {
    return this.obj
  }

  build() {
    return new Builder(this)
  }
}
