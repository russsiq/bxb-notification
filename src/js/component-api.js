import Vue from 'vue'
import Component from './component.vue'

let notify,
    emptyMessage = 'Message is empty!'
    
const TYPE_MAP = {
    info: 'rgb(91, 192, 222)',
    success: 'rgb(67, 172, 106)',
    warning: 'rgb(233, 144, 2)',
    error: 'rgb(240, 65, 36)',
}

export default {
    show(params = {}) {
        if ('undefined' === typeof notify) {
            let Notification = Vue.extend(Component),
                element = document.createElement('div');
                
            notify = new Notification({
                el: element,
                data: {
                    items: [],
                    item: {
                        title: '',
                        message: '',
                        style: {}
                    }
                }
            });
        }
        
        notify.$data.items.push({
            title: params.title || false,
            message: params.message || emptyMessage,
            style: {
                backgroundColor: TYPE_MAP[params.type || info]
            }
        });
        
        setTimeout(() => {
            notify.$data.items.shift()
        }, 8000);
    },
    
    info(params) {
        this.show(Object.assign(params, {
            type: 'info'
        }));
    },

    success(params) {
        this.show(Object.assign(params, {
            type: 'success'
        }));
    },
    
    warning(params) {
        this.show(Object.assign(params, {
            type: 'warning'
        }));
    },

    error(params) {
        this.show(Object.assign(params, {
            type: 'error'
        }));
    },

    dismiss(index) {
        notify.$data.items.splice(index, 1);
    },
}
