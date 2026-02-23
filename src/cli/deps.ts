// All built-in channel dependencies have been removed.
// Channels are now handled through the plugin system.

// Stub for removed deliver.js
export type OutboundSendDeps = Record<string, unknown>;

export type CliDeps = {
  // Placeholder for future plugin-based deps
};

export function createDefaultDeps(): CliDeps {
  return {};
}

export function createOutboundSendDeps(_deps: CliDeps): OutboundSendDeps {
  return {};
}
