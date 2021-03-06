/*!
 * TCache.js v1.0.0
 * (c) 2020-2020 Challenger
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.TCache = factory());
}(this, (function () { 'use strict';

    var cache = Object.create(null);
    window.ttt = cache;
    function getCacheData(moduleName){
        if(!cache[moduleName]){
            cache[moduleName] = {};
        }
        return cache[moduleName]
    }

    function initMixin(TCache){
        TCache.prototype._init=function(moduleName){
            //设置模块名
            this._moduleName = moduleName;
            TCache._moduleNames.push(moduleName);

            //获取模块对应缓存对象
            this.cacheData = getCacheData(moduleName);
        };
    }

    //添加
    function add(name,value){
        if ( value === void 0 ) value=null;

        this.cacheData[name] = value;
    }
    //设置
    function set(name,value){
        if ( value === void 0 ) value=null;

        this.cacheData[name] = value;
    }
    //获取
    function get(name){
        var data = this.cacheData[name];
        if(!this.cacheData.hasOwnProperty(name)){
            throw new Error("not have attribute:"+name)
        }
        return data;
    }
    //删除指定属性
    function remove(name){
        delete this.cacheData[name];
    }
    //重置所有属性
    function reset(){
        var this$1 = this;

        Object.keys(this.cacheData).forEach(function (key){
            delete this$1.cacheData[key];
        });
    }


    function initApi(TCache){
        var api  = {
            add: add,
            set: set,
            get: get,
            remove: remove,
            reset: reset,
        };
        Object.keys(api).forEach(function (key){
            TCache.prototype[key] = api[key];
        });
    }

    var MODULE_NAME = "defaultCache";

    function TCache(moduleName) {
        if ( moduleName === void 0 ) moduleName=MODULE_NAME;

        this._init(moduleName);
    }

    initMixin(TCache);
    initApi(TCache);

    TCache._index = 0;
    TCache._moduleNames =[];

    // Window.TCache = TCache;
    TCache.version = '1.0.0';

    return TCache;

})));
