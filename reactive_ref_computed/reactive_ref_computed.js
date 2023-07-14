//响应式处理函数
function reactive(obj) {
    //用于存储依赖关系的映射表
    const depsMap = new Map()
    //创建一个Proxy代理对象
    return new Proxy(obj, {
        get(target, prop) {
            //进行依赖收集
            track(target, prop)
            //返回属性值
            return target[prop]
        },
        set(target, prop, value) {
            //更新属性值
            target[prop] = value
            //触发依赖更新
            trigger(target, prop)
            //返回是否设置成功
            return true
        }
    })
    //依赖收集函数
    function track(target, prop) {
        //获取当前的依赖关系
        let dep = depsMap.get(target)
        //如果没有依赖关系，则创建一个新的Set
        if (!dep) {
            dep = new Set()
            depsMap.set(target, dep)
        }
        //将当前的属性添加到依赖关系中
        dep.add(prop)
    }
    //依赖触发函数
    function trigger(target, prop) {
        //获取当前的依赖关系
        const dep = depsMap.get(target)
        //如果存在依赖关系，则触发更新
        if (dep) {
            dep.forEach(depProp => {
                console.log(`属性 ${depProp} 需要更新`)
            })
        }
    }
}
//转换基本类型值为响应式对象
function ref(value) {
    //创建一个包含value的对象
    const obj = { value }
    return reactive(obj)
}
//创建计算属性
function computed(getter) {
    //响应式对象用于存储计算属性的值
    const result = ref()
    //定义依赖追踪函数
    const track = () => {
        result.value = getter() //更新计算属性的值
    }
    track()
    //返回一个只读的响应式对象
    return {
        get value() {
            track() //在每次获取计算属性值时触发依赖追踪
            return result.value
        }
    }
}
//测试示例
const obj1 = reactive({ count: 0 })
const obj2 = reactive({ name: 'zqx' })
const num = ref(10)
const sum = computed(() => obj1.count + num.value)

console.log(sum.value) //输出：10

obj1.count = 5 //设置属性 count 为 5
num.value = 20 //设置 num 的值为 20

console.log(sum.value) //输出：25

obj2.name = 'xqz' //设置属性 name 为 'Bob'
console.log(obj2.name);