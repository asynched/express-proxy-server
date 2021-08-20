import axios from 'axios'
import { deleteRequestHeadersHost, getRequestUrl } from '../helpers/request'

class CORSController {
  static DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  async get(request, response) {
    try {
      const url = getRequestUrl(request)
      deleteRequestHeadersHost(request.headers)

      const { data, status, headers } = await axios.get(url, {
        headers: {
          ...CORSController.DEFAULT_HEADERS,
          ...request.headers,
        },
      })

      return response.json(data).status(status)
    } catch (e) {
      return response
        .json({
          error: 'Something went wrong. :(',
        })
        .status(500)
    }
  }

  async post(request, response) {
    try {
      const url = getRequestUrl(url)
      deleteRequestHeadersHost(request.headers)

      const { data, status } = await axios.post(
        url,
        {
          ...request.body,
        },
        {
          headers: {
            ...CORSController.DEFAULT_HEADERS,
            ...request.headers,
          },
        }
      )

      return response.json(data).status(status)
    } catch (error) {
      console.log('[ERROR]')
      return response.json({ error: 'Something went wrong. :(' }).status(500)
    }
  }
}

export default new CORSController()
