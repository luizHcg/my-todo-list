class MakeUrlUtil {
  makeUrl(list: Array<unknown>): string {
    return list.join('/')
  }
}

export default new MakeUrlUtil()
