export type TSelectOption = {
  value: string
  label: string
}

export type ApiResponse<T> = {
  data: T
  ok: boolean
}

export type ApiWsResponse<T> = {
  type: string
  data: T
}
