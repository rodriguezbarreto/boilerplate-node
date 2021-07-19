import { HttpResponse, HttpRequest, Controller } from '@/presentation/protocols'
import { sendResponse } from '@/presentation/utils-presentation/index'

export class TempleteController implements Controller {
  async service (request: HttpRequest): Promise<HttpResponse> {
    try {
      return sendResponse(200, 'Hello World!')
    } catch (err) {
      return sendResponse(500, err.message)
    }
  }
}
