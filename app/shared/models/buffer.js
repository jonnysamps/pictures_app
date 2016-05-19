"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Buffer = (function (_super) {
    __extends(Buffer, _super);
    function Buffer(size) {
        _super.call(this);
        this.size = size;
    }
    Buffer.prototype.append = function (item) {
        this.push(item);
        // if (this.length > this.size)
        //   this.shift();
    };
    Buffer.prototype.prepend = function (item) {
        this.unshift(item);
        // if (this.length > this.size)
        //   this.pop();
    };
    Buffer.prototype.center = function (index) {
        var min = this.centerMin(index);
        var max = this.centerMax(min);
        this.splice(0, min); // Chop the front off
        this.splice(max + 1); // Chop the end off
    };
    Buffer.prototype.centerMin = function (index) {
        var result = Math.ceil(index - (this.size / 2.0));
        return result < 0 ? 0 : result;
    };
    Buffer.prototype.centerMax = function (min) {
        var result = min + this.size - 1;
        return result > this.length - 1 ? this.length : result;
    };
    return Buffer;
}(Array));
exports.Buffer = Buffer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVmZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBQStCLDBCQUFLO0lBQ2xDLGdCQUFvQixJQUFZO1FBQzlCLGlCQUFPLENBQUM7UUFEVSxTQUFJLEdBQUosSUFBSSxDQUFRO0lBRWhDLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQU8sSUFBTztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsK0JBQStCO1FBQy9CLGtCQUFrQjtJQUNwQixDQUFDO0lBRUQsd0JBQU8sR0FBUCxVQUFRLElBQU87UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLCtCQUErQjtRQUMvQixnQkFBZ0I7SUFDbEIsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxLQUFhO1FBQ2xCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLG1CQUFtQjtJQUMxQyxDQUFDO0lBRUQsMEJBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRUQsMEJBQVMsR0FBVCxVQUFVLEdBQVc7UUFDbkIsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekQsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBakNELENBQStCLEtBQUssR0FpQ25DO0FBakNZLGNBQU0sU0FpQ2xCLENBQUEifQ==