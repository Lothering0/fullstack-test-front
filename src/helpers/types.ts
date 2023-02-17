export type id<T extends number | string = number> = T;

export interface Entity {
  readonly id: id;
}
