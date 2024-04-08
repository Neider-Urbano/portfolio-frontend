import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Blog } from "../../models/blogs.model";
import React from "react";
import { useTranslation } from "react-i18next";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { t } = useTranslation();

  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 lg:h-[200px]  sm:col-span-5"
      shadow="sm"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-[#111] uppercase font-bold">
          {blog.date.toLocaleDateString()}
        </p>
        <h4 className="text-black font-medium text-lg md:text-xl lg:text-2xl">
          {blog.title}
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={blog.img}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10  flex flex-col gap-2 md:flex-row md:gap-0 md:justify-between">
        <div className="pr-10">
          <p className="text-black text-sm">{blog.description}</p>
        </div>
        <Button
          className="bg-[#fff]  text-sm  dark:bg-[#111] dark:text-[#eee]"
          radius="full"
          size="sm"
        >
          <a rel="noreferrer" href={blog.link} target="_blank" className="px-5">
            {t("Details")}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
