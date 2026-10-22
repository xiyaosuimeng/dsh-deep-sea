/**
 * dsh-blob-pop — host half（服务端半身）
 *
 * 全部逻辑在浏览器半边（lib/client.js），宿主这边只提供存活探针，方便排查挂载。
 *   GET /dsh-deep-sea/health
 *
 * 软依赖 webServer：拿不到就静默降级。
 */
export const name = 'dsh-deep-sea'

export const inject = ['webServer']   // 2026-10-17 修：新版 cordis 不认 {optional:[...]} 写法，改成显式依赖

const ROUTE_PREFIX = '/dsh-deep-sea'

export function apply(ctx) {
  const webServer = ctx.get ? ctx.get('webServer') : undefined
  if (!webServer || typeof webServer.register !== 'function') return

  const handler = (req, res) => {
    try {
      if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.writeHead(405, { 'content-type': 'application/json; charset=utf-8' })
        res.end(JSON.stringify({ ok: false, error: '只支持 GET' }))
        return
      }
      const body = Buffer.from(JSON.stringify({
        ok: true, plugin: name, game: '守护光源 · 深海', where: 'client',
      }), 'utf8')
      res.writeHead(200, {
        'content-type': 'application/json; charset=utf-8',
        'content-length': body.length,
        'cache-control': 'no-store',
      })
      res.end(body)
    } catch {
      /* 响应头已发出则忽略 */
    }
  }

  return webServer.register({ kind: 'prefix', path: ROUTE_PREFIX, handler })
}
