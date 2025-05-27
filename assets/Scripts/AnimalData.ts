import { _decorator, Component, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AnimalData')
export class AnimalData extends Component {
    @property(String)
    public id: string = '';
    
    @property(SpriteFrame)
    public sprite: SpriteFrame = null!;
}