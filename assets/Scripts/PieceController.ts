import { _decorator, Component, Node } from 'cc';
import { PieceView } from './PieceView';
import { ShapeData } from './ShapeData';
import { PieceData } from './PieceData';
import { AnimalData } from './AnimalData';
import { ColorData } from './ColorData';
import { DataManager } from './DataManager';
const { ccclass, property } = _decorator;

@ccclass('PieceController')
export class PieceController extends Component {
    @property(PieceView)
    private pieceView: PieceView = null!;
    
    private pieceData: PieceData = null!;
    
    onLoad() {
    }
    
    public createPiece(shapeId: string, animalId: string, colorId: string): void {
        const dataManager = DataManager.instance;
        
        const shape = dataManager.getShapeById(shapeId);
        const animal = dataManager.getAnimalById(animalId);
        const color = dataManager.getColorById(colorId);
        
        if (shape && animal && color) {
            this.pieceData = new PieceData(shape, animal, color);
            this.pieceView.setData(this.pieceData);
        } else {
            console.error('Не удалось найти данные для создания фигуры');
        }
    }
    
    public updatePiece(newData: PieceData): void {
        this.pieceData = newData;
        this.pieceView.apply(this.pieceData);
    }

    public clearPiece(): void {
        this.pieceView.clear();
        this.pieceData = null!;
    }
    
    public getPieceData(): PieceData {
        return this.pieceData;
    }
    
    public changeShape(shapeId: string): void {
        if (!this.pieceData) return;
        
        const shape = DataManager.instance.getShapeById(shapeId);
        if (shape) {
            this.pieceData.shape = shape;
            this.pieceView.apply(this.pieceData);
        }
    }
    
    public changeAnimal(animalId: string): void {
        if (!this.pieceData) return;
        
        const animal = DataManager.instance.getAnimalById(animalId);
        if (animal) {
            this.pieceData.animal = animal;
            this.pieceView.apply(this.pieceData);
        }
    }
    
    public changeColor(colorId: string): void {
        if (!this.pieceData) return;
        
        const color = DataManager.instance.getColorById(colorId);
        if (color) {
            this.pieceData.color = color;
            this.pieceView.apply(this.pieceData);
        }
    }
}