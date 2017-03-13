/**
 * Created by dexter on 3/12/17.
 */

var triptych_layout = (function () {

    var niceCx2Lg = function () {
        // private
    };

    var initLgPos = function () {
        // public
    };

    var layoutStep = function (lg) {
        // public
    };

    var layoutLg = function (lg, nSteps) {
        initLgPos(lg);
        for (var n = i + 1; n<nSteps; n++){
            layoutStep(lg)
        }
    };

    var layoutAspectFromLg = function(lg){

    };

    var layoutNiceCx = function (niceCx, nSteps) {
        lg = niceCx2Lg(niceCx);
        layoutLg(lg);
        cxLayout = layoutAspectFromLg(lg);
        niceCx["layout"] = cxLayout;
    };

    return {
        niceCx2Lg: niceCx2Lg,
        initLgPos: initLgPos,
        layoutStep: layoutStep,
        layoutLg: layoutLg,
        layoutNiceCx: layoutNiceCx
    };

})();