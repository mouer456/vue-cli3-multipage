module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // outputDir: '../h5service',
    productionSourceMap: false,

    // chunk 分包 todo
    pages: {
        index: {
            entry: 'src/pages/index/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
        multipage_test: {
            entry: 'src/pages/multipage_test/main.js',
            template: 'public/index.html'
        },
        video: {
            entry: 'src/pages/video/main.js',
            template: 'public/index.html'
        }
    }
}