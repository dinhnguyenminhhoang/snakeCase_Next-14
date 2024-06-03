import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";

interface PageProps {
    searchParasm: {
        [key: string]: string | string[] | undefined;
    };
}
const Page = async ({ searchParasm }: PageProps) => {
    const { id } = searchParasm;
    if (!id || typeof id !== "string") {
        return notFound();
    }
    const configuration = await db.configuration.findUnique({
        where: { id },
    });
    if (!configuration) return notFound();
    return <DesignPreview configuration={configuration} />;
};
export default Page;
