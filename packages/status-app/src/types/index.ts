export type MonitorTuples = [string, string][]

export declare type MonitorPeriodStats = {
  p95: number
  p50: number
  avg: string
  numItems: number
  numErrors: number
}

export declare type Monitor = {
  monitorId: string
  monitorName: string
  status: string
  week: MonitorPeriodStats
  day: MonitorPeriodStats
  uptime24?: number
  uptime7d?: number
  lastResults: [
    {
      id: string
      err: string
      location: string
      totalTime: number
    }
  ]
}

export type TextVariants =
  | 'header'
  | 'title'
  | 'text-field'
  | 'paragraph'
  | 'emphasis'
  | 'details'
  | 'small'

export type MonitorBasicAuth = {
  username: string
  password: string
}

export type MonitorBearerAuth = {
  token: string
}

export type MonitorAuth = {
  type?: 'basic' | 'bearer' | 'none'
  basic?: MonitorBasicAuth
  bearer?: MonitorBearerAuth
}

export type MonitorAssertion = {
  type: 'code' | 'totalTime' | 'certExpiryDays' | 'header' | 'body' | 'jsonBody'
  name?: string // contextual name: header name or jsonpath
  op: '=' | '!=' | '<' | '>' | 'contains' | 'matches'
  value: string
}

export type MonitorNotifications = {
  useGlobal: boolean
  failCount?: number
  failTimeMinutes?: number
  channels: string[]
}

export type StatusData = {
  id?: string
  createdAt?: string | Date
  accountId: string
  name: string
  url: string
  logoUrl: string
  monitors: Monitor[]
}
