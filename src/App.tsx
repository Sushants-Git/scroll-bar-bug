import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="mt-16">
                <ScrollAreaDemo />
            </div>
        </ThemeProvider>
    );
}

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

export function ScrollAreaDemo() {
    return (
        <ScrollArea className="h-72 w-48 rounded-md border m-auto pr-10">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                    <>
                        <div key={tag} className="text-sm">
                            {tag}
                        </div>
                        <Separator className="my-2" />
                    </>
                ))}
            </div>
        </ScrollArea>
    );
}

export default App;
