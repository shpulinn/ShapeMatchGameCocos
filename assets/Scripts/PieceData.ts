import { _decorator, Component } from 'cc';
import { ShapeData } from './ShapeData';
import { AnimalData } from './AnimalData';
import { ColorData } from './ColorData';
const { ccclass, property } = _decorator;

@ccclass('PieceData')
export class PieceData extends Component {
    public shape: ShapeData = null!;
    public animal: AnimalData = null!;
    public color: ColorData = null!;
    
    constructor(shape: ShapeData, animal: AnimalData, color: ColorData) {
        super();
        this.shape = shape;
        this.animal = animal;
        this.color = color;
    }
}