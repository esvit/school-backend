import Test from '../models/test';
import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';

@controller('/test')
export default class TestCtrl extends BaseCtrl {
    @get('')
    async getList(ctx) {
        try {
            const items = await Test.find().lean();

            ctx.ok(items);
        } catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }

    @post('')
    async createItem(ctx) {
        // empty
    }

    @get('/:_id')
    async getItemById(ctx) {
        // empty
    }

    @put('/:_id')
    async updateItem(ctx) {
        // empty
    }

    @del('/:_id')
    async deleteItem(ctx) {
        // empty
    }
}
