import {GCPPosts} from "./tag-posts/gcp";
import {ArchitecturePosts} from "./tag-posts/architecture";
import {newestUpSorter} from "./sorter";

export const CloudPosts = [
    ...ArchitecturePosts,
    ...GCPPosts
];
newestUpSorter(CloudPosts);
