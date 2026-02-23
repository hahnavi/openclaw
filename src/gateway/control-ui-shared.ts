/**
 * Stub for removed Control UI functionality.
 * This file provides minimal stubs for Control UI related functions
 * that are still referenced by other parts of the codebase.
 */

/**
 * Normalize a Control UI base path.
 * Stub returns empty string since Control UI is removed.
 */
export function normalizeControlUiBasePath(basePath: string | undefined): string {
  if (typeof basePath !== "string" || basePath.trim().length === 0) {
    return "";
  }
  const trimmed = basePath.trim();
  if (trimmed === "/") {
    return "";
  }
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}
