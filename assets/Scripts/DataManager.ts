import { _decorator, Component /*, Node, JsonAsset, resources*/ } from 'cc';
import { ShapeData } from './ShapeData';
import { ColorData } from './ColorData';
import { AnimalData } from './AnimalData';
const { ccclass, property } = _decorator;

@ccclass('DataManager')
export class DataManager extends Component {
    private static _instance: DataManager = null!;
    
    @property([ShapeData])
    public shapes: ShapeData[] = [];
    
    @property([ColorData])
    public colors: ColorData[] = [];
    
    @property([AnimalData])
    public animals: AnimalData[] = [];
    
    public static get instance(): DataManager {
        return this._instance;
    }
    
    onLoad() {
        DataManager._instance = this;
    }
    
    public getShapeById(id: string): ShapeData | null {
        return this.shapes.find(shape => shape.id === id) || null;
    }
    
    public getColorById(id: string): ColorData | null {
        return this.colors.find(color => color.id === id) || null;
    }
    
    public getAnimalById(id: string): AnimalData | null {
        return this.animals.find(animal => animal.id === id) || null;
    }
    
    // public loadDataFromJson() {
    //     resources.load('data/shapes', JsonAsset, (err, asset) => {
    //         if (!err && asset) {
    //             const data = asset.json;
    //             console.log('Shapes data loaded:', data);
    //         }
    //     });
    // }
}