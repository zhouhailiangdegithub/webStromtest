var dirty=false;
module.exports={
    moveSpeed:10,
    version:"0.15",
    showTutarial:true,

    load:function () {
        console.log("这是compA的load方法");
    },
    bar:function () {
        cc.log("bar");
    },
    isDirty:function () {
        return dirty;
    },
    setDirty:function () {
        dirty=true;
    }
};





