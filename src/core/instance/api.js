//添加
export function add(name,value=null){
    this.cacheData[name] = value;
}
//设置
export function set(name,value=null){
    this.cacheData[name] = value;
}
//获取
export function get(name){
    let data = this.cacheData[name];
    if(!this.cacheData.hasOwnProperty(name)){
        throw new Error("not have attribute:"+name)
    }
    return data;
}
//删除指定属性
export function remove(name){
    delete this.cacheData[name];
}
//重置所有属性
export function reset(){
    Object.keys(this.cacheData).forEach(key=>{
        delete this.cacheData[key];
    })
}


export function initApi(TCache){
    let api  = {
        add,
        set,
        get,
        remove,
        reset,
    }
    Object.keys(api).forEach(key=>{
        TCache.prototype[key] = api[key];
    })
};