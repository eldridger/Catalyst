import HomeContainer from './HomeContainer';

export default {
    path: '/',
    getComponents(cb) {
        cb(null, HomeContainer);
    }
}