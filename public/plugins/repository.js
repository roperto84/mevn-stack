import userApi from '@/api/shared';
import commentApi from '@/api/comments';

export default (ctx, inject) => {

    // inject the repository in the context (ctx.app.$repository)
    // And in the Vue instances (this.$repository in your components)
    const userRepository = userApi(ctx.$axios)
    const commentRepository = commentApi(ctx.$axios)

    inject('userRepository', userRepository('/admin'))
    inject('commentRepository', commentRepository('/comments'))
}