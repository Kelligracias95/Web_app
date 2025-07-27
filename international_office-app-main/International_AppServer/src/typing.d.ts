// typings.d.ts
declare module 'strapi' {
    interface MiddlewareConfig {
      name: string;
      config?: Record<string, any>;
    }
  
    interface DefaultConfig {
      middleware: (string | MiddlewareConfig)[];
    }
  }
  