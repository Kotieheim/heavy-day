import { Subject, of } from "rxjs";
import { filter } from "rxjs/operators";

const alertSubject = new Subject();
const defaultId = "default-alert";

export const alertSchema = {
  Success: "Success",
  Error: "Error",
  Info: "Info",
  Warning: "Warning",
};

const success = (
  message: string,
  options: { keepAfterRouteChange: boolean }
) => {
  alert({ ...options, type: alertSchema.Success, message });
};

const error = (message: string, options: { keepAfterRouteChange: boolean }) => {
  alert({ ...options, type: alertSchema.Error, message });
};

const info = (message: string, options: { keepAfterRouteChange: boolean }) => {
  alert({ ...options, type: alertSchema.Info, message });
};

const warn = (message: string, options: { keepAfterRouteChange: boolean }) => {
  alert({ ...options, type: alertSchema.Warning, message });
};

const onAlert = (id = defaultId) => {
  return alertSubject
    .asObservable()
    .pipe
    // (x) => of(x && x.id === id)
    ();
};

const clear = (id = defaultId) => {
  alertSubject.next({ id });
};

export const alertService = {
  onAlert,
  success,
  error,
  info,
  warn,
  alert,
  clear,
};
