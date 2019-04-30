var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        msg: '页面加载于 ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'learn JavaScript' },
            { text: 'learn Vue' },
            { text: 'this project is working' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Inputed Hello Vue!'
    }
});

// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义特性。
    // 这个 prop 名为 todo。
    props: ['myitem'],
    template: '<li>{{ myitem.text }}</li>'
});
var appComponent = new Vue({
    el: '#app-component',
    data: {
        todos: [
            { id: 0, text: 'learn JavaScript1' },
            { id: 1, text: 'learn Vue1' },
            { id: 2, text: 'this project is working1' }
        ]
    }
});

//使用 Object.freeze()会导致响应系统无法再追踪变化
var obj = {
    foo: 'bar'
};
Object.freeze(obj);
var appReact = new Vue({
    el: '#app-react',
    data: obj
});

new Vue({
    data: { a: 1 },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    }
});



