import { _decorator, Component, SpriteFrame, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ShapeData')
export class ShapeData extends Component {
    @property(String)
    public id: string = '';
    
    @property(SpriteFrame)
    public shapeSprite: SpriteFrame = null!;
    
    @property(SpriteFrame)
    public borderSprite: SpriteFrame = null!;
    
    @property(Prefab)
    public colliderPrefab: Prefab = null!;
}