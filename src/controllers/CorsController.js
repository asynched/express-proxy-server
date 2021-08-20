import axios from 'axios'
import { deleteRequestHeadersHost, getRequestUrl } from '../helpers/request'

class CorsController {
  static DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  async get(req, res) {
    try {
      const url = getRequestUrl(req)
      deleteRequestHeadersHost(req.headers)

      const { data, status, headers } = await axios.get(url, {
        headers: {
          ...CorsController.DEFAULT_HEADERS,
          ...req.headers,
        },
      })

      return res.json(data).status(status)
    } catch (e) {
      return res
        .json({
          error: 'Something went wrong. :(',
        })
        .status(500)
    }
  }

  async post(req, res) {
    try {
      const url = getRequestUrl(url)
      deleteRequestHeadersHost(req.headers)

      const { data, status } = await axios.post(
        url,
        {
          ...req.body,
        },
        {
          headers: {
            ...CorsController.DEFAULT_HEADERS,
            ...req.headers,
          },
        }
      )

      return res.json(data).status(status)
    } catch (error) {
      console.log('[ERROR]')
      return res.json({ error: 'Something went wrong. :(' }).status(500)
    }
  }
}

export default new CorsController()
