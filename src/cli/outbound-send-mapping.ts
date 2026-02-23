// All built-in channel dependencies have been removed.
// Channels are now handled through the plugin system.

// Stub types for removed deliver.js
export type OutboundSendDeps = Record<string, unknown>;

export type CliOutboundSendSource = {
  sendMessageWhatsApp?: unknown;
  sendMessageTelegram?: unknown;
  sendMessageDiscord?: unknown;
  sendMessageSlack?: unknown;
  sendMessageSignal?: unknown;
  sendMessageIMessage?: unknown;
};

// Provider docking: extend this mapping when adding new outbound send deps.
export function createOutboundSendDepsFromCliSource(_deps: CliOutboundSendSource): OutboundSendDeps {
  return {};
}
