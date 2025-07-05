import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";


const Hero = () => {
    return (
        <div className="items-center justify-between">
            <div className="flex mt-6 justify-between">
                <div className="z-10 text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold !leading-[1.2] tracking-tight">
                        <div>
                            <span className="font-bold">Hi there,</span><br />
                            I'm Farhan 👋
                        </div>
                    </h1>

                </div>
                <img src="/14.39.50_eba40870.jpg" alt="image" className="aspect-square size-20 sm:size-32 md:size-30 object-cover rounded-full" />
            </div>
            <p className="text-[17px] md:text-lg">
                Fullstack developer. I love to build and learn new things
            </p>
        </div>
    );
};

export default Hero;
