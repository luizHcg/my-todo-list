import {AxiosError} from 'axios'
import {NuxtAxiosInstance} from "@nuxtjs/axios";
import { IbaseModel } from '~/model/import/ibase-model'
import MAKE_URL_UTIL from '~/controller/util/makeUrl.util'

abstract class BaseServer<T extends IbaseModel> {
  private readonly URL!: string
  private readonly axios!: NuxtAxiosInstance

  protected constructor(URL: string, axios: NuxtAxiosInstance) {
    this.URL = URL
    this.axios = axios
  }

  protected get AXIOS(): NuxtAxiosInstance {
    return this.axios;
  }

  public async getAll(): Promise<Array<T>> {
    return await this.axios
      .get(this.URL)
      .then(r => r.data as Array<T>)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  public async getByID({ id }: T): Promise<T> {
    return await this.axios
      .get(MAKE_URL_UTIL.makeUrl([this.URL, id]))
      .then(r => r.data as T)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  public async save(data: T): Promise<T> {
    return await this.axios
      .post(this.URL, data)
      .then(r => r.data as T)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  public async update(data: T): Promise<T> {
    return await this.axios
      .post(MAKE_URL_UTIL.makeUrl([this.URL, data.id]), data)
      .then(r => r.data as T)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  public async remove({ id }: T): Promise<boolean> {
    return await this.axios
      .delete(MAKE_URL_UTIL.makeUrl([this.URL, id]))
      .then(r => r.data as boolean)
      .catch((error: AxiosError) => {
        throw error
      })
  }

  public async enableOrDisable({ id }: T): Promise<boolean> {
    return await this.axios
      .patch(MAKE_URL_UTIL.makeUrl([this.URL, id]))
      .then(r => r.data as boolean)
      .catch((error: AxiosError) => {
        throw error
      })
  }
}

export default BaseServer
