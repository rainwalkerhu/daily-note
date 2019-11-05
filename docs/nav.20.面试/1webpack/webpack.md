## 1.loader和plugin的区别

* loader 用于对模块的源代码进行转换。loader 可以使你在 import 或"加载"模块时预处理文件。因此，loader 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。loader 可以将文件从不同的语言（如 TypeScript）转换为 JavaScript，或将内联图像转换为 data URL。loader 甚至允许你直接在 JavaScript 模块中 import CSS文件！ 因为 webpack 本身只能处理 JavaScript，如果要处理其他类型的文件，就需要使用 loader 进行转换，loader 本身就是一个函数，接受源文件为参数，返回转换的结果。
* Plugin 是用来扩展 Webpack 功能的，通过在构建流程里注入钩子实现，它给 Webpack 带来了很大的灵活性。 通过plugin（插件）webpack可以实 loader 所不能完成的复杂功能，使用 plugin 丰富的自定义 API 以及生命周期事件，可以控制 webpack 打包流程的每个环节，实现对 webpack 的自定义功能扩展。简单来说：plugin可以在任何阶段调用,能够跨Loader进一步加工Loader的输出,执行预先注册的回调,使用compilation对象做一些更底层的事情。
## 2.loader的运行机制

> loader是用来加载处理各种形式的资源,本质上是一个函数, 接受文件作为参数,返回转化后的结构

详细的loader机制，已经有大牛总结了，[点击查看](https://github.com/youngwind/blog/issues/101)