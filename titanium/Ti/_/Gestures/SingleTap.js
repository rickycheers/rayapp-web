define(["Ti/_/declare","Ti/_/lang","Ti/_/Gestures/GestureRecognizer"],function(e,g,f){return e("Ti._.Gestures.SingleTap",f,{name:"singletap",constructor:function(a){this._type=a},withinThreshold:function(a,c){var b=this._touchStartLocation;return b&&25>Math.abs(b.x-a)&&25>Math.abs(b.y-c)},processTouchStartEvent:function(a){var c=a.changedTouches;1==a.touches.length&&1==c.length&&(this._touchStartLocation={x:c[0].clientX,y:c[0].clientY},this._driftedOutsideThreshold=!1)},processTouchEndEvent:function(a,
c){var b=a.changedTouches,d;0==a.touches.length&&1==b.length&&(d=b[0].clientX,b=b[0].clientY,this.withinThreshold(d,b)&&!this._driftedOutsideThreshold&&(this._touchStartLocation=null,c._isGestureBlocked(this.name)||c._handleTouchEvent(this._type,{x:d,y:b,source:this.getSourceNode(a,c)})))},processTouchMoveEvent:function(a){a=a.changedTouches;this._driftedOutsideThreshold=1==a.length&&!this.withinThreshold(a[0].clientX,a[0].clientY)},processTouchCancelEvent:function(){this._touchStartLocation=null}})});