import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosError } from 'axios'
import BaseServer from '~/controller/config/server/base'
import Auth from '~/model/dto/auth'
import ENUM_AUTH_ROUTER from '~/controller/routes'

class AuthServer extends BaseServer<Auth> {
  constructor(axios: NuxtAxiosInstance) {
    super(ENUM_AUTH_ROUTER.AUTH, axios)
  }

  public async signIn(obj: Auth): Promise<Auth> {
    return await this.AXIOS.post(ENUM_AUTH_ROUTER.AUTH, obj)
      .then((r) => r.data)
      .catch((error: AxiosError) => {
        throw error
      })
  }
}

export default AuthServer
