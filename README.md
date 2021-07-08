# MVVM_frame
实现一个简单的MVVM框架


分析
MVVM最大的特点： 双向绑定了，modal的变化能更新到view视图上，同时view视图的变化也能更新到modal数据中。

实现这样的双向绑定？  订阅与分发机制，将Model和View关联起来，不管是Model还是View有变化，都可通过事件通知到对方了
