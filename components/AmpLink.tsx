import { ampPublicUrl } from "@/lib/amp";

export function AmpLink({ path }: { path: string }) {
  return <link rel="amphtml" href={ampPublicUrl(path)} />;
}
