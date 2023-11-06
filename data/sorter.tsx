export function newestUpSorter(posts: {createdAt: string}[]) {
    return posts.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }).reverse();
}
