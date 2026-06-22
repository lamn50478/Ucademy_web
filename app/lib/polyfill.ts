import { TextEncoder, TextDecoder } from 'util';

// Polyfill TextEncoder / TextDecoder if they are missing
if (typeof globalThis !== 'undefined') {
  if (typeof globalThis.TextEncoder === 'undefined') {
    globalThis.TextEncoder = TextEncoder;
  }
  if (typeof (globalThis as any).TextDecoder === 'undefined') {
    (globalThis as any).TextDecoder = TextDecoder as any;
  }
}

// Polyfill process.getBuiltinModule for older Node.js versions (< 20.16.0)
if (typeof process !== 'undefined' && typeof process.getBuiltinModule !== 'function') {
  if (typeof window === 'undefined') {
    try {
      const requireFunc = eval('require');
      const { createRequire } = requireFunc('module');
      const contextUrl = typeof __filename !== 'undefined' ? __filename : (import.meta as any)?.url;
      const req = createRequire(contextUrl);
      process.getBuiltinModule = (id: string) => {
        return req(id);
      };
    } catch (e) {
      process.getBuiltinModule = (id: string) => {
        return eval('require')(id);
      };
    }
  }
}
