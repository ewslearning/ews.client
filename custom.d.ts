export {};

declare global {
  interface Window {
    gtag_report_conversion: (url: string) => void;
  }
}