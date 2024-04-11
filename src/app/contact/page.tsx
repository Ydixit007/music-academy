import ContactForm from "@/components/ContactForm";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function page() {
    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Get in touch</h2>
            <ContactForm />
            <BackgroundBeams />
        </div>
    );
}
