import Data from '~/views/data/index'
import AuthServer from "~/controller/config/server/auth.server";
import Auth from "~/model/dto/auth";

abstract class AuthData extends Data {
  private server = new AuthServer(this.$axios)

  protected AUTH_MODEL = new Auth();

  protected async signIn(): Promise<void> {
    await this.server.signIn(this.AUTH_MODEL).then(r => {
      console.log(r)
    }).catch(error => {
      console.log(error)
    })
  }
}

export default AuthData
