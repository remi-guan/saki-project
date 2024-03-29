/**
 * 开关组件
 * 用于绑定玩家开关的一种复选框组件，当玩家开关开启时，该组件处于选中状态，反之则处于未选中状态
 * 相关事件：
 *  EventObject.LOADED 加载完成时候事件
 * [变量系统]在显示时会同步显示开关变量
 *
 * 使用方法：
 * var a = new UISwitch();
 * a.image1 = "asset/image/picture/control/check_unselected.png";
 * a.image2 = "asset/image/picture/control/check_selected.png";
 * a.width = 100;
 * a.height = 100;
 * a.switchID = "5"; // 绑定5号玩家开关
 * stage.addChild(a);
 *
 * // 事件监听示例
 * a.on(EventObject.LOADED,this,this.onLoaded);
 *
 * Created by 黑暗之神KDS on 2019-04-14 22:31:21.
 */
declare class UISwitch extends UIBase {
    /**
     * 指定绑定的玩家开关ID
     */
    switchID: number;
    /**
     * 未选中效果图片
     */
    image1: string;
    /**
     * 选中时效果图片
     */
    image2: string;
    /**
     * 未选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）
     * 让素材不再简单拉伸，而是根据九宫格方式进行拉伸
     */
    grid9img1: string;
    /**
     * 选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）
     * 让素材不再简单拉伸，而是根据九宫格方式进行拉伸
     */
    grid9img2: string;
    /**
     * 片段事件内容：当选中状态被更改时触发
     * 主动调用方式：CommandPage.startTriggerFragmentEvent
     */
    onChangeFragEvent: string;
}
