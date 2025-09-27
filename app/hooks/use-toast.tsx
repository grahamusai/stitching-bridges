import { useState, useCallback } from 'react';

interface ToastOptions {
  type?: 'default' | 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose?: () => void;
}

interface Toast {
  id: string;
  message: string;
  type: 'default' | 'success' | 'error' | 'info' | 'warning';
  duration: number;
  onClose?: () => void;
  createdAt: number;
}

interface UseToastOptions {
  duration?: number;
  maxToasts?: number;
}

interface UseToastReturn {
  toast: (message: string, options?: ToastOptions) => string;
  success: (message: string, options?: ToastOptions) => string;
  error: (message: string, options?: ToastOptions) => string;
  info: (message: string, options?: ToastOptions) => string;
  warning: (message: string, options?: ToastOptions) => string;
  dismiss: (id: string) => void;
  clearAll: () => void;
  toasts: Toast[];
}

/**
 * Custom hook for managing toast notifications
 * @param {Object} options - Configuration options for the toast system
 * @param {number} options.duration - Default duration in ms for toasts to remain visible (default: 3000ms)
 * @param {number} options.maxToasts - Maximum number of toasts to show at once (default: 5)
 * @returns {Object} Toast management methods and state
 */
const useToast = ({ duration = 3000, maxToasts = 5 }: UseToastOptions = {}): UseToastReturn => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Generate a unique ID for each toast
  const generateId = useCallback((): string => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }, []);

  // Add a new toast to the stack
  const toast = useCallback((message: string, options: ToastOptions = {}): string => {
    const id = generateId();
    const newToast: Toast = {
      id,
      message,
      type: options.type || 'default',
      duration: options.duration || duration,
      onClose: options.onClose,
      createdAt: Date.now(),
    };

    setToasts(prevToasts => {
      // Remove oldest toasts if we're at max capacity
      if (prevToasts.length >= maxToasts) {
        return [...prevToasts.slice(1, maxToasts), newToast];
      }
      return [...prevToasts, newToast];
    });

    // Auto-dismiss toast after duration
    if (newToast.duration > 0) {
      setTimeout(() => {
        dismiss(id);
      }, newToast.duration);
    }

    return id;
  }, [duration, maxToasts, generateId]);

  // Convenience methods for different toast types
  const success = useCallback((message: string, options: ToastOptions = {}): string => {
    return toast(message, { ...options, type: 'success' });
  }, [toast]);

  const error = useCallback((message: string, options: ToastOptions = {}): string => {
    return toast(message, { ...options, type: 'error' });
  }, [toast]);

  const info = useCallback((message: string, options: ToastOptions = {}): string => {
    return toast(message, { ...options, type: 'info' });
  }, [toast]);

  const warning = useCallback((message: string, options: ToastOptions = {}): string => {
    return toast(message, { ...options, type: 'warning' });
  }, [toast]);

  // Remove a specific toast by ID
  const dismiss = useCallback((id: string): void => {
    setToasts(prevToasts => {
      const toast = prevToasts.find(t => t.id === id);
      if (toast && toast.onClose) {
        toast.onClose();
      }
      return prevToasts.filter(t => t.id !== id);
    });
  }, []);

  // Clear all toasts
  const clearAll = useCallback((): void => {
    setToasts([]);
  }, []);

  return {
    toast,
    success,
    error,
    info,
    warning,
    dismiss,
    clearAll,
    toasts
  };
};

export default useToast;