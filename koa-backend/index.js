const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const math = require('mathjs');

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(cors()); // CORS ミドルウェアを追加

router.post('/calculate', async ctx => {
    const { expression } = ctx.request.body;
    try {
        const result = math.evaluate(expression); // mathjs を使用して計算
        ctx.body = { result };
    } catch (error) {
        ctx.status = 400;
        ctx.body = { error: 'Invalid expression' };
    }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
