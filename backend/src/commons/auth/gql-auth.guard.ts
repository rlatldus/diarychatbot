// Auth guard for graphql
// 1. GqlAuthAccessGuard
// 2. GqlAuthRefreshGuard
// authguard는 rest api에서는 req를 받아서 처리하지만, graphql에서는 context를 받아서 처리한다.
// 그래서 context를 받아서 처리하는 GqlAuthAccessGuard를 만들어준다.

import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthAccessGuard extends AuthGuard('myGuard') {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
export class GqlAuthRefreshGuard extends AuthGuard('refresh') {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
