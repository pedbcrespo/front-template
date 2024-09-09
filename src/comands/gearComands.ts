import { position } from "./types";

export default class GearComand {
    private position: position;
    constructor(initialPosition: position | undefined) {
        const defaultPosition = {
            up: 0,
            down: 0,
            left: 0,
            right: 0
        };

        this.position = initialPosition || defaultPosition;
    }

    public setUp(value: number): void {
        this.setValue(value, 'up');
    }

    public setDown(value: number): void {
        this.setValue(value, 'down');
    }

    public setLeft(value: number): void {
        this.setValue(value, 'left');
    }
    public setRight(value: number): void {
        this.setValue(value, 'right');
    }

    public setPosition(newPosition: position) {
        this.position = newPosition;
    }

    private setValue(value: number, key: string): void {
        const foundKey = Object.keys(this.position).find(positionKey => positionKey === key) as keyof typeof this.position;
        if (!foundKey) return;
        this.position[foundKey] += value;
    }
    
}