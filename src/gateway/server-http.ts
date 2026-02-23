/**
 * Stub for removed server-http.js functionality.
 * This file provides minimal stubs for HTTP server testing
 * that was removed during Control UI cleanup.
 */

import type { IncomingMessage, ServerResponse } from "node:http";
import http from "node:http";
import type { AuthRateLimiter } from "./auth-rate-limit.js";
import type { ResolvedGatewayAuth } from "./auth.js";
import type { GatewayWsClient } from "./server/ws-types.js";

export type GatewayHttpServerOptions = {
  clients: Set<GatewayWsClient>;
  openAiChatCompletionsEnabled: boolean;
  openResponsesEnabled: boolean;
  handleHooksRequest: (req: IncomingMessage, res: ServerResponse) => Promise<boolean>;
  resolvedAuth: ResolvedGatewayAuth;
  rateLimiter?: AuthRateLimiter;
  handlePluginRequest?: (req: IncomingMessage, res: ServerResponse) => Promise<boolean>;
  // Legacy: kept for test compatibility but ignored
  controlUiEnabled?: boolean;
  controlUiBasePath?: string;
};

/**
 * Create a test HTTP server for gateway testing.
 * Stub implementation - the full server-http.js was removed.
 */
export function createGatewayHttpServer(opts: GatewayHttpServerOptions): http.Server {
  const server = http.createServer((req, res) => {
    // Call plugin request handler if provided
    if (opts.handlePluginRequest) {
      opts.handlePluginRequest(req, res).catch(() => {
        if (!res.headersSent) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "text/plain");
          res.end("Internal Server Error");
        }
      });
      return;
    }
    // Stub: just respond with 404
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  });
  return server;
}

/**
 * Attach gateway WebSocket upgrade handler.
 * Stub implementation.
 */
export function attachGatewayUpgradeHandler(): void {
  // Stub: nothing to attach
}
