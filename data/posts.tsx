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

export const latestReading = PythonPosts[0];

export const latestBackendReading = PythonPosts[0];

export const latestFrontendReading = JavascriptPosts[0];

export const latestCloudReading = GCPPosts[0];


export const latestThreeReadings = [
    latestBackendReading,
    latestFrontendReading,
    latestCloudReading
];
