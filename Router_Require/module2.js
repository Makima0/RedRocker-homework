// 定义一个模块，输出一个函数
const sayHi = () => {
    console.log('Hi from module2!')
  }
  
  // 导出模块的内容
  window.module = { exports: { sayHi } }
  