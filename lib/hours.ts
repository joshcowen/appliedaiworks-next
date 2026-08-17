// Shared by the proposal page (a server component) and HoursTable (a client
// component). These have to live outside the "use client" module: exports from
// a client module reach the server as reference stubs, not callable functions.

export type Row = {
  task: string;
  low: number;
  high: number;
  /** Shown in the tooltip when the row is hovered or tapped. */
  detail: string;
};

export const RATE = 300;

export const sumRows = (rows: Row[]) =>
  rows.reduce((a, r) => ({ low: a.low + r.low, high: a.high + r.high }), { low: 0, high: 0 });

export const money = (hours: number) => `$${(hours * RATE).toLocaleString()}`;
