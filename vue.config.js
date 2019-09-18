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
            title: '首页'
        },
        multipage_test: {
            entry: 'src/pages/multipage_test/main.js',
            template: 'public/index.html',
            filename: 'multipage_test.html',
            title: '多页面测试'
        },
        video: {
            entry: 'src/pages/video/main.js',
            template: 'public/index.html',
            filename: 'video.html',
            title: '视频监控'
        }
    }
}