import Vue from 'vue'
import Component from './component.vue'

let notify,
    emptyMessage = 'Message is empty!',
    infoColor = 'rgb(91, 192, 222)',
    successColor = 'rgb(67, 172, 106)',
    warningColor = 'rgb(233, 144, 2)',
    errorColor = 'rgb(240, 65, 36)';

export default {
    show(params = {}) {
        if (typeof notify === "undefined") {
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
                backgroundColor:
                    params.type == 'success' ? successColor :
                    params.type == 'warning' ? warningColor :
                    params.type == 'error' ? errorColor :
                    infoColor
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
    }
}
