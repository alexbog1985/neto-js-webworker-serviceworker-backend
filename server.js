const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');

const data = require('./demo_data.json');;

const app = new Koa();
const router = new Router();

app.use(cors());

app.use(serve(path.join(__dirname, 'public')));

router.get('/', (ctx) => {
  ctx.body = {
    message: 'Данные получены',
    timestamp: new Date().toISOString(),
    data: {
      items: data, 
    }
  };
});

app.use(router.routes())

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});