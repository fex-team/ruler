/**
 * @fileOverview
 *
 * 支持热点
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */

Ruler.prototype.enableHover = function(changeCallback) {

    var ruler = this;
    var canvas = this.canvas;

    var lastHot = null;

    canvas.addEventListener('mousemove', function(e) {
        if (ruler.isDragging) return;

        var p = ruler.getDrawingPosition(e.clientX, e.clientY);
        var hot = ruler.hot(p.x, p.y);
        if (hot != lastHot) {
            if (ruler.dragEnabled && hot && hot.name == 'define_point') {
                canvas.style.cursor = 'move';
            } else {
                canvas.style.cursor = 'default';
            }
            ruler.render();
            if (changeCallback) {
                changeCallback(hot, lastHot);
            }
            lastHot = hot;
        }
    });
};
