import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        {/* text */}
        <div className="lg:w-3/5 flex flex-col gap-8 ">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio
            debitis esse culpa eveniet!{" "}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem autem labore eaque quidem. Excepturi, eaque
            asperiores minus odit distinctio, fugiat itaque quod dicta
            reprehenderit tenetur aliquam quos ipsam! Perferendis, odio. Iste,
            natus aut explicabo optio quaerat iusto ipsum amet, esse a hic
            perspiciatis
          </p>
        </div>
        {/* image */}
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit ipsa repudiandae quo. Alias perferendis tempore cum hic
            consequuntur totam, distinctio magni sunt labore aperiam recusandae
            dolorem ullam consequatur neque? Explicabo eligendi molestias fugit
            sed voluptatibus quae accusantium optio, iste modi blanditiis!
            Facere ab voluptatem similique, porro optio beatae voluptatum, quasi
            ipsum soluta quo perspiciatis? Est corrupti minima ullam vitae.
            Numquam consequuntur repellat commodi facilis ad quis obcaecati
            dolores iusto dolore laudantium? At quae amet voluptatem ea illo
            obcaecati. Consequuntur labore quae ipsum eaque, iure officia cum
            saepe nisi earum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit ipsa repudiandae quo. Alias perferendis tempore cum hic
            consequuntur totam, distinctio magni sunt labore aperiam recusandae
            dolorem ullam consequatur neque? Explicabo eligendi molestias fugit
            sed voluptatibus quae accusantium optio, iste modi blanditiis!
            Facere ab voluptatem similique, porro optio beatae voluptatum, quasi
            ipsum soluta quo perspiciatis? Est corrupti minima ullam vitae.
            Numquam consequuntur repellat commodi facilis ad quis obcaecati
            dolores iusto dolore laudantium? At quae amet voluptatem ea illo
            obcaecati. Consequuntur labore quae ipsum eaque, iure officia cum
            saepe nisi earum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit ipsa repudiandae quo. Alias perferendis tempore cum hic
            consequuntur totam, distinctio magni sunt labore aperiam recusandae
            dolorem ullam consequatur neque? Explicabo eligendi molestias fugit
            sed voluptatibus quae accusantium optio, iste modi blanditiis!
            Facere ab voluptatem similique, porro optio beatae voluptatum, quasi
            ipsum soluta quo perspiciatis? Est corrupti minima ullam vitae.
            Numquam consequuntur repellat commodi facilis ad quis obcaecati
            dolores iusto dolore laudantium? At quae amet voluptatem ea illo
            obcaecati. Consequuntur labore quae ipsum eaque, iure officia cum
            saepe nisi earum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit ipsa repudiandae quo. Alias perferendis tempore cum hic
            consequuntur totam, distinctio magni sunt labore aperiam recusandae
            dolorem ullam consequatur neque? Explicabo eligendi molestias fugit
            sed voluptatibus quae accusantium optio, iste modi blanditiis!
            Facere ab voluptatem similique, porro optio beatae voluptatum, quasi
            ipsum soluta quo perspiciatis? Est corrupti minima ullam vitae.
            Numquam consequuntur repellat commodi facilis ad quis obcaecati
            dolores iusto dolore laudantium? At quae amet voluptatem ea illo
            obcaecati. Consequuntur labore quae ipsum eaque, iure officia cum
            saepe nisi earum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit ipsa repudiandae quo. Alias perferendis tempore cum hic
            consequuntur totam, distinctio magni sunt labore aperiam recusandae
            dolorem ullam consequatur neque? Explicabo eligendi molestias fugit
            sed voluptatibus quae accusantium optio, iste modi blanditiis!
            Facere ab voluptatem similique, porro optio beatae voluptatum, quasi
            ipsum soluta quo perspiciatis? Est corrupti minima ullam vitae.
            Numquam consequuntur repellat commodi facilis ad quis obcaecati
            dolores iusto dolore laudantium? At quae amet voluptatem ea illo
            obcaecati. Consequuntur labore quae ipsum eaque, iure officia cum
            saepe nisi earum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            suscipit ipsa repudiandae quo. Alias perferendis tempore cum hic
            consequuntur totam, distinctio magni sunt labore aperiam recusandae
            dolorem ullam consequatur neque? Explicabo eligendi molestias fugit
            sed voluptatibus quae accusantium optio, iste modi blanditiis!
            Facere ab voluptatem similique, porro optio beatae voluptatum, quasi
            ipsum soluta quo perspiciatis? Est corrupti minima ullam vitae.
            Numquam consequuntur repellat commodi facilis ad quis obcaecati
            dolores iusto dolore laudantium? At quae amet voluptatem ea illo
            obcaecati. Consequuntur labore quae ipsum eaque, iure officia cum
            saepe nisi earum?
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-bold">Auther</h1>
            <div className="flex items-center">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 object-cover rounded-full"
                w="48"
                h="48"
              />
              <Link className="ms-4 text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-4 mb-4 text-sm font-bold">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-4 mb-4 text-sm font-bold">Search</h1>
          <Search/>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
