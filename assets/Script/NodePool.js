
cc.Class({
    extends: cc.Component,
   properties:{
        target:{
            default:[],
            type:[cc.Prefab],
        },
   },
    onLoad:function () {
        this.enemyPool=new cc.NodePool();
        console.log(this.target.length);
        for(var i=0;i<this.target.length;++i){
            var label=cc.instantiate(this.target[i]);
            this.enemyPool.put(label);
        }
        // console.log(this.enemyPool._pool[2]);
        for(var i=0;i<this.target.length;++i){
            if (this.enemyPool.size()>0){
                var enemy=this.enemyPool.get();
                this.node.addChild(enemy);
                enemy.setPosition(50+i*20,50+i*30);
                console.log("对象池元素个数"+this.enemyPool.size());
            }

        }
        console.log(this.node);
        this.enemyPool.put(this.node._children[4]);
        console.log(this.node);
        console.log("对象池元素个数"+this.enemyPool.size());

        // this.createEnemy(this.node);
        // console.log(this.node.getChildrenCount());


    },
    createEnemy:function (parentNode) {
        var enemy=null;
        for (var i=0;i<3;++i){
            if (this.enemyPool.size()>0){
                enemy=this.enemyPool.get();
                parentNode.addChild(enemy);
                enemy.setPosition(2+(i+3)*10,2+(i+3)*20);
            }else {
                enemy=cc.instantiate(this.target);
            }
        }

    },
    onEnemyKilled:function (enemy) {
        for (var i=0;i<3;++i){
            this.enemyPool.put(enemy);
        }

    },

    start:function () {


    }

});
