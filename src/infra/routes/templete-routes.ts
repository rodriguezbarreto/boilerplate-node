import { Router } from 'express'
import { TempleteController } from '@/presentation/controllers/templete-controller'
import { expressAdapter } from '../adapters/express-adapter'

export default (router: Router): void => {
  router.get('/', expressAdapter(new TempleteController()))
}
