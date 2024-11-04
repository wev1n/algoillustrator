import Image from "next/image";
import { cn } from "~/lib/utils";
import { Card, CardContent } from "./ui/card";
import { type Testimonial } from "~/types";

const TestimonialCard = ({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) => {
  return (
    <Card className={cn("", className)}>
      <CardContent className="flex flex-col space-y-4 p-6">
        <div className="flex items-center space-x-4">
          <Image
            alt={`${testimonial.name}'s profile picture`}
            className="rounded-full border-2 border-primary"
            src={testimonial.image}
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            height={40}
            width={40}
          />
          <div className="space-y-1">
            <h3 className="font-semibold leading-none">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.role}
            </p>
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          {testimonial.content}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
