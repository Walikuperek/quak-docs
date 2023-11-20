import {PythonPosts} from "./tag-posts/python";
import {JavascriptPosts} from "./tag-posts/javascript";
import {BunPosts} from "./tag-posts/bun";
import {GCPPosts} from "./tag-posts/gcp";
import {AngularPosts} from "./tag-posts/angular";
import {ArchitecturePosts} from "./tag-posts/architecture";
import {ExpressJSPosts} from "./tag-posts/expressjs";
import {NestJSPosts} from "./tag-posts/nestjs";
import {NextjsPosts} from "./tag-posts/nextjs";
import {NodePosts} from "./tag-posts/node";
import {ReactPosts} from "./tag-posts/react";
import {TypescriptPosts} from "./tag-posts/typescript";
import {newestUpSorter} from "./sorter";
import { BackendPosts } from "./backend-posts";
import { FrontendPosts } from "./frontend-posts";
import { CloudPosts } from "./cloud-posts";

export const AllPosts = [
    ...AngularPosts,
    ...ArchitecturePosts,
    ...BunPosts,
    ...ExpressJSPosts,
    ...GCPPosts,
    ...JavascriptPosts,
    ...NestJSPosts,
    ...NextjsPosts,
    ...NodePosts,
    ...PythonPosts,
    ...ReactPosts,
    ...TypescriptPosts
];
newestUpSorter(AllPosts);

export const latestReading = AllPosts[0];

export const latestBackendReading = AllPosts.find(post => post.category === "backend");

export const latestFrontendReading = AllPosts.find(post => post.category === "frontend");

export const latestCloudReading = AllPosts.find(post => post.category === "cloud");

export const latestThreeReadings = [
    AllPosts[0],
    AllPosts[1],
    AllPosts[2]
];
