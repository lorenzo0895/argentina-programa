import { Column } from "./Column";

export interface Dialog {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  // info?: any;
  columns?: Column[];
  item?: any;
}

export var editData: Dialog = {
  title: 'Editar',
  cancelText: 'Cancelar',
  confirmText: 'Confirmar',
};
export var createData: Dialog = {
  title: 'Crear',
  cancelText: 'Cancelar',
  confirmText: 'Confirmar',
};
export var deleteData: Dialog = {
  title: 'Eliminar',
  message: 'Esta opción no podrá volverse atrás',
  cancelText: 'Cancelar',
  confirmText: 'Confirmar',
};
