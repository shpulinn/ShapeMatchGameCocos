import { _decorator, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ColorData')
export class ColorData extends Component {
    @property(String)
    public id: string = '';
    
    @property({ type: [Number] })
    public color: number[] = [255, 255, 255, 255];
}