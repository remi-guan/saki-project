/**
 * 行走图组件
 * 封装了行走图的界面组件
 *
 * 相关事件
 *  EventObject.LOADED 资源加载完成时候事件
 *  Avatar.ACTION_PLAY_COMPLETED
 *  Avatar.RENDER 当确实到达了新的一帧后派发，本体如果没有实际的帧则不派发
 *
 * 使用方法：
 * var a = new UIAnimation();
 * a.animationID =5;
 * stage.addChild(a);
 *
 * // 事件监听示例
 * a.on(EventObject.LOADED,this,this.onLoaded);
 * a.on(Avatar.ACTION_PLAY_COMPLETED,this,this.onActionPlayComplete);
 * a.on(Avatar.RENDER,this,this.onRender);
 *
 * Created by 黑暗之神KDS on 2018-12-11 17:44:18.
 */
declare class UIAvatar extends UIBase {
    /**
     * AVATAR-ID
     */
    avatarID: number;
    /**
     * 行走图对象
     */
    get avatar(): Avatar;
    /**
     * 是否播放
     */
    isPlay: boolean;
    /**
     * 仅播放一次
     */
    playOnce: boolean;
    /**
     * 水平缩放 1表示100%
     */
    scaleNumberX: number;
    /**
     * 垂直缩放 1表示100%
     */
    scaleNumberY: number;
    /**
     * 起始播放的帧
     */
    avatarFrame: number;
    /**
     * 帧率
     */
    avatarFPS: number;
    /**
     * 动作表情
     */
    actionID: number;
}
