import { cn } from "@/lib/utils";

export function Button({ className, ...props }) {
    return (
        <button
            className={cn(
                "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition",
                className
            )}
            {...props}
        />
    );
}