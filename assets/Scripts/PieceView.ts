import { _decorator, Component, Sprite, Color, Vec3, tween } from 'cc';
import { PieceData } from './PieceData';
const { ccclass, property } = _decorator;

@ccclass('PieceView')
export class PieceView extends Component {
    @property(Sprite)
    private shapeImage: Sprite = null!;
    
    @property(Sprite)
    private animalImage: Sprite = null!;
    
    @property(Sprite)
    private frame: Sprite = null!;
    
    public apply(data: PieceData): void {
        this.setVisualData(data);
    }
    
    public setData(data: PieceData): void {
        this.setVisualData(data);
        this.node.active = true;
    }
    
    private setVisualData(data: PieceData): void {
        if (this.shapeImage && data.shape?.shapeSprite) {
            this.shapeImage.spriteFrame = data.shape.shapeSprite;
        }
        
        if (this.animalImage && data.animal?.sprite) {
            this.animalImage.spriteFrame = data.animal.sprite;
        }
        
        if (this.frame && data.shape?.borderSprite) {
            this.frame.spriteFrame = data.shape.borderSprite;
        }
        
        if (this.frame && data.color) {
            const color = new Color(
                data.color.color[0],
                data.color.color[1], 
                data.color.color[2],
                data.color.color[3]
            );
            this.frame.color = color;
        }
        
        this.node.setScale(new Vec3(0.5, 0.5, 0.5));
        tween(this.node)
            .to(0.2, { scale: new Vec3(1, 1, 1) })
            .start();
    }
    
    public clear(): void {
        tween(this.node)
            .to(0.2, { scale: new Vec3(0, 0, 0) })
            .call(() => {
                // Очистка спрайтов
                if (this.shapeImage) this.shapeImage.spriteFrame = null;
                if (this.frame) this.frame.spriteFrame = null;
                if (this.animalImage) this.animalImage.spriteFrame = null;
                
                this.node.active = false;
            })
            .start();
    }
}