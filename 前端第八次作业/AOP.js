let func=function(){
        console.log(2);
    }
Function.prototype.before=function(fn)
{
    let _self = this;
    return function () {
        fn();
        _self();
    };
}
Function.prototype.after=function(fn)
{
    let _self = this;
    return function () {
        _self();
        fn();
    };
}
func = func.before((a=1)=>{
    console.log(a)
}).after((b=3) => {
    console.log(b);
})

func()