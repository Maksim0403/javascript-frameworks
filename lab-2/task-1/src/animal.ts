export interface Animal {
    name: string;
    speed?: number | undefined;
    kind?: string | undefined;
    move(): void;
}