export function newestUpSorter(posts: {createdAt: string}[]) {
    return posts.sort((a, b) => {
        const split = (date: string) => date.split("-").map((x) => parseInt(x));
        const factory = (date: string) => {
            const [day, month, year] = split(date);
            return new Date(year, month, day).getTime();
        }
        return factory(b.createdAt) - factory(a.createdAt);
    });
}
