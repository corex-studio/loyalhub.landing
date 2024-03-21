import { AxiosResponse, Method } from 'axios'
import { api } from 'boot/axios'
import { BaseModel } from './baseModel'
import {
  PaginationRaw,
  BasePagination,
  emptyPagination,
} from './basePagination'

export type SendConfig = {
  action?: string
  id?: string | number
  method: Method
  params?: Record<string, any>
  data?: Record<string, any>
  headers?: Record<string, any>
  url?: string
}

export abstract class BaseModelApi<T extends BaseModel> {
  abstract routeName: string
  abstract fromJson(json: any): T

  rootList = false

  async list(
    config = {}
  ): Promise<{ pagination: BasePagination; items: Array<T> }> {
    if (this.rootList) {
      const response: AxiosResponse<Array<any>> = await api.get(
        `/${this.routeName}/`,
        config
      )
      const items: Array<T> = response.data.map((e) => this.fromJson(e))
      return { pagination: new BasePagination(emptyPagination), items }
    } else {
      const response: AxiosResponse<PaginationRaw> = await api.get(
        `/${this.routeName}/`,
        config
      )

      const { results, ...data } = { ...response.data }
      const items: Array<T> = results
        ? results.map((val) => this.fromJson(val))
        : []
      return { pagination: new BasePagination(data), items }
    }
  }

  async create(data: any): Promise<T> {
    const response: AxiosResponse = await api.post(`/${this.routeName}/`, data)
    return this.fromJson(response.data)
  }

  async retrieve(id: number | string, params = {}): Promise<T> {
    const response: AxiosResponse = await api.get(`/${this.routeName}/${id}/`, {
      params,
    })
    return this.fromJson(response.data)
  }

  async update(id: number | string, data: any): Promise<T> {
    const response: AxiosResponse = await api.put(
      `/${this.routeName}/${id}/`,
      data
    )
    return this.fromJson(response.data)
  }

  async delete(id: string | number): Promise<void> {
    await api.delete(`/${this.routeName}/${id}/`)
  }

  async send<K>(config: SendConfig): Promise<K> {
    const result: AxiosResponse<K> = await api.request({
      data: config.data,
      params: config.params,
      headers: config.headers,
      method: config.method,
      url:
        config.url ||
        this.getActionUrl({ id: config.id, action: config.action }),
    })
    return result.data
  }

  getActionUrl(params?: { id?: string | number; action?: string }): string {
    const values: string[] = [this.routeName]
    if (params?.id !== undefined) values.push(String(params.id))
    if (params?.action) values.push(params.action)
    return `/${values.join('/')}/`
  }
}
