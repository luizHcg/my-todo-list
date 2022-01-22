import Data from '~/views/data/index'
import AuthServer from '~/controller/config/server/auth.server'
import Auth from '~/model/dto/auth'

abstract class AuthData extends Data {
  private server = new AuthServer(this.$axios)

  protected AUTH_MODEL = new Auth()

  // eslint-disable-next-line require-await
  protected async signIn(formValidate: boolean): Promise<void> {
    if (formValidate)
      await this.server
        .signIn(this.AUTH_MODEL)
        .then((r) => {
          console.log(r)
        })
        .catch((error) => {
          console.log(error)
        })
  }
}

export default AuthData
