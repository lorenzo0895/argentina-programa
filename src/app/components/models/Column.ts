export interface Column {
  key: string;
  shownName?: string;
  type?: 'text' | 'date';
  isVisible: boolean,
  isTitle?: boolean
}