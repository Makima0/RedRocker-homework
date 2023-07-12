const sayHello = () => {
    console.log('Hello from module1!')
  }
  
  // 导出模块的内容
  window.module = { exports: { sayHello } }
  