import {PythonPosts} from "./tag-posts/python";
import {JavascriptPosts} from "./tag-posts/javascript";
import {BunPosts} from "./tag-posts/bun";
import {GCPPosts} from "./tag-posts/gcp";
import {ArchitecturePosts} from "./tag-posts/architecture";
import {ExpressJSPosts} from "./tag-posts/expressjs";
import {NestJSPosts} from "./tag-posts/nestjs";
import {NextjsPosts} from "./tag-posts/nextjs";
import {NodePosts} from "./tag-posts/node";
import {TypescriptPosts} from "./tag-posts/typescript";
import {newestUpSorter} from "./sorter";

export const BackendPosts = [
    ...ArchitecturePosts,
    ...BunPosts,
    ...ExpressJSPosts,
    ...GCPPosts,
    ...JavascriptPosts,
    ...NestJSPosts,
    ...NextjsPosts,
    ...NodePosts,
    ...PythonPosts,
    ...TypescriptPosts
];
newestUpSorter(BackendPosts);
