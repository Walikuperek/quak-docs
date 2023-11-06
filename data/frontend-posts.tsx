import {JavascriptPosts} from "./tag-posts/javascript";
import {GCPPosts} from "./tag-posts/gcp";
import {AngularPosts} from "./tag-posts/angular";
import {ArchitecturePosts} from "./tag-posts/architecture";
import {NextjsPosts} from "./tag-posts/nextjs";
import {ReactPosts} from "./tag-posts/react";
import {TypescriptPosts} from "./tag-posts/typescript";
import {newestUpSorter} from "./sorter";

export const FrontendPosts = [
    ...AngularPosts,
    ...ArchitecturePosts,
    ...GCPPosts,
    ...JavascriptPosts,
    ...NextjsPosts,
    ...ReactPosts,
    ...TypescriptPosts
];
newestUpSorter(FrontendPosts);
