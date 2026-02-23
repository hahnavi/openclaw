import type { OpenClawConfig } from "../../config/types.js";
import type { ChannelDirectoryEntry } from "./types.js";

export type DirectoryConfigParams = {
  cfg: OpenClawConfig;
  accountId?: string | null;
  query?: string | null;
  limit?: number | null;
};

function resolveDirectoryQuery(query?: string | null): string {
  return query?.trim().toLowerCase() || "";
}

function resolveDirectoryLimit(limit?: number | null): number | undefined {
  return typeof limit === "number" && limit > 0 ? limit : undefined;
}

function applyDirectoryQueryAndLimit(ids: string[], params: DirectoryConfigParams): string[] {
  const q = resolveDirectoryQuery(params.query);
  const limit = resolveDirectoryLimit(params.limit);
  const filtered = ids.filter((id) => (q ? id.toLowerCase().includes(q) : true));
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

function toDirectoryEntries(kind: "user" | "group", ids: string[]): ChannelDirectoryEntry[] {
  return ids.map((id) => ({ kind, id }) as const);
}

// All built-in channel directory functions have been removed.
// Directory queries for specific channels should be implemented by their respective plugins.
// These functions return empty arrays as placeholders.

export async function listSlackDirectoryPeersFromConfig(
  _params: DirectoryConfigParams,
): Promise<ChannelDirectoryEntry[]> {
  return [];
}

export async function listSlackDirectoryGroupsFromConfig(
  _params: DirectoryConfigParams,
): Promise<ChannelDirectoryEntry[]> {
  return [];
}

export async function listDiscordDirectoryPeersFromConfig(
  _params: DirectoryConfigParams,
): Promise<ChannelDirectoryEntry[]> {
  return [];
}

export async function listDiscordDirectoryGroupsFromConfig(
  _params: DirectoryConfigParams,
): Promise<ChannelDirectoryEntry[]> {
  return [];
}

export async function listTelegramDirectoryPeersFromConfig(
  _params: DirectoryConfigParams,
): Promise<ChannelDirectoryEntry[]> {
  return [];
}

export async function listTelegramDirectoryGroupsFromConfig(
  _params: DirectoryConfigParams,
): Promise<ChannelDirectoryEntry[]> {
  return [];
}

export async function listWhatsAppDirectoryPeersFromConfig(
  _params: DirectoryConfigParams,
): Promise<ChannelDirectoryEntry[]> {
  return [];
}

export async function listWhatsAppDirectoryGroupsFromConfig(
  _params: DirectoryConfigParams,
): Promise<ChannelDirectoryEntry[]> {
  return [];
}
