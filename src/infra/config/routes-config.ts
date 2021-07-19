import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/v1', router)
  fg.sync('**/src/infra/routes/**routes.ts')
    .map(async file => (await import(`../../../${file}`)).default(router))
}
