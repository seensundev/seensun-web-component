import PropTypes from '../_util/vue-types';
import classNames from 'classnames';
import omit from 'omit.js';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale-provider/default';
import Base from '../base';

const Iframe = {
    name:'Iframe',
    render(){
        return (
            <iframe class={'ant-iframe'}></iframe>
        );
    },
};

Iframe.install = function(Vue){
    Vue.use(Base);
    Vue.component(Iframe.name,Iframe);
};

export default Iframe;