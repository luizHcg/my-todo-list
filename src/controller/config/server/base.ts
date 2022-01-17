import { Vue } from 'nuxt-property-decorator'
import { AxiosError } from 'axios'
import { IbaseModel } from '~/model/import/ibase-model'
import MAKE_URL_UTIL from '~/controller/util/makeUrl.util'

class BaseServer<T extends IbaseModel> extends Vue {
  private readonly URL!: string

  constructor(URL: string) {
    super()
    this.URL = URL
  }

  async getAll(): Promise<Array<T>> {
    return await this.$axios
      .get(this.URL)
      .then((r) => r.data as Array<T>)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  async getByID({ id }: T): Promise<T> {
    return await this.$axios
      .get(MAKE_URL_UTIL.makeUrl([this.URL, id]))
      .then((r) => r.data as T)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  async save(data: T): Promise<T> {
    return await this.$axios
      .post(this.URL, data)
      .then((r) => r.data as T)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  async update(data: T): Promise<T> {
    return await this.$axios
      .post(MAKE_URL_UTIL.makeUrl([this.URL, data.id]), data)
      .then((r) => r.data as T)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  async remove({ id }: T): Promise<boolean> {
    return await this.$axios
      .delete(MAKE_URL_UTIL.makeUrl([this.URL, id]))
      .then((r) => r.data as boolean)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  async enableOrDisable({ id }: T): Promise<boolean> {
    return await this.$axios
      .patch(MAKE_URL_UTIL.makeUrl([this.URL, id]))
      .then((r) => r.data as boolean)
      .catch((error: AxiosError) => {
        throw error
      })
  }
}

export default BaseServer
