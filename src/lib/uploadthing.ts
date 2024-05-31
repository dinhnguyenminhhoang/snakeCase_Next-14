import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";

export const { getRouteConfig, useUploadThing, uploadFiles } =
    generateReactHelpers<OurFileRouter>();
