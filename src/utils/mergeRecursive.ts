/**
 * Merge 2 objects recursively
 * @param obj1
 * @param obj2
 */
const mergeRecursive = function (obj1:any, obj2:any) {
    for (const p in obj2) {
        try {
            if (obj2[p].constructor == Object) {
                obj1[p] = mergeRecursive(obj1[p], obj2[p]);
            }
            else {
                obj1[p] = obj2[p];
            }
        }
        catch (e) {
            obj1[p] = obj2[p];
        }
    }
    return obj1;
};

export default mergeRecursive;