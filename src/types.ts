export interface Idigy {
    pattern: string;
    range(min: number, max?: number): number;
    uuid(): string;
    normal(length?: number): string;
}
