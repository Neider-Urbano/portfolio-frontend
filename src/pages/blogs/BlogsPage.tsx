import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import FooterMain from "../../components/footers/FooterMain";
import BlogsList from "../../components/lists/BlogsList";

const BlogsPage: React.FC = () => {
  return (
    <div>
      <HeaderTitle
        title="Blog"
        description="Ideas, thoughts and development news"
      />
      <BlogsList />
      <FooterMain />
    </div>
  );
};

export default BlogsPage;
