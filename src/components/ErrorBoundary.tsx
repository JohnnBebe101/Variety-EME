import React from 'react';

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    (this as any).state = { hasError: false };
  }

  static getDerivedStateFromError(_: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if ((this as any).state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 text-center">
          <div className="max-w-md">
            <h1 className="text-h2 font-semibold tracking-tight text-brand-charcoal mb-4">Something went wrong.</h1>
            <p className="text-slate-500 font-medium mb-8">We apologize for the inconvenience. Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold tracking-wide uppercase hover:scale-105 transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
