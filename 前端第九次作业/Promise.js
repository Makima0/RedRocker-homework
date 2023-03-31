function Promis(executer)
{
    this.PromiseState='pending'
    this.PromiseResult=null
    this.callback=[]
    let _this=this
    function resolve(data){
        if(_this.PromiseState !=='pending'){
            return
        }
        _this.PromiseState='fulfilled'
        _this.PromiseResult=data
        _this.callback.forEach(item=>{
            item.onResolved(data)
        })
            // _this.callback.onRejected(data)
        
    }
    function reject(data){
        if(_this.PromiseState !=='pending'){
            return
        }
        _this.PromiseState='rejected'
        _this.PromiseResult=data
        _this.callback.forEach(item=>{
            item.onRejected(data)
        })
            // _this.callback.onRejected(data)
    }
    try{
        executer(resolve,reject)
    }
    catch(e){
        reject(e)
    }
}
Promis.prototype.then=function(onResolved,onRejected){
    let _self=this
    return new Promis((resolve,reject)=>{
        try{
            if(this.PromiseState==="fulfilled"){
                let result= onResolved(this.PromiseResult)
                if (result instanceof Promis){
                    result.then(v=>{
                        resolve(v)
                    },r=>{
                        reject(r)
                })
                }else{
                    resolve(result)
                }
            }
            if(this.PromiseState==="rejected"){
                onRejected(this.PromiseResult)
            }
            if(this.PromiseState==="pending"){
                this.callback.push({
                    onResolved:function(){
                        try{
                            let result=onResolved(_self.PromiseResult)
                            if(result instanceof Promis){
                                result.then(v=>{
                                    resolve(v)
                                },r=>{
                                    reject(r)
                                })
                            }else{
                                resolve(result)
                            }
                        }catch(e){
                            reject(e)
                        }
                    },
                    onRejected:function(){
                        try{
                            let result=onRejected(_self.PromiseResult)
                            if(result instanceof Promis){
                                result.then(v=>{
                                    resolve(v)
                                },r=>{
                                    reject(r)
                                })
                            }else{
                                resolve(result)
                            }
                        }catch(e){
                            reject(e)
                        }
                    },
                })
            }
        }catch(e){
            reject(e)
        }
    })
}
let p=new Promis((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ok')
    },1000)
    // reject('error')
})
let res=p.then(value=>{
    throw 'error'
},reson=>{
    console.warn(reson);
})

// p.then(value=>{
//     alert(value);
// },reson=>{
//     alert(reson);
// })
console.log(res);